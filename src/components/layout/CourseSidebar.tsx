'use client'; // Needed for hooks like useParams

import React, { useState, useEffect } from 'react'; // Import useEffect
import Link from 'next/link';
import { useParams } from 'next/navigation';
import type { Course, Module as CourseModule, Week, Lesson } from '@/lib/types';
import { cn } from "@/lib/utils"; // For conditional classes
import { useSharedLessonCompletion } from '@/context/LessonCompletionContext'; // Import shared hook
import { CheckCircle, ChevronDown } from 'lucide-react'; // Import icon
import { findModuleIdForLesson } from '@/lib/generated/course-structure'; // Updated import path

interface CourseSidebarProps {
  course: Course;
}

// ** NEW ** Helper function to calculate module progress
const calculateModuleProgress = (module: CourseModule, completedLessons: Set<string>): number => {
  let totalLessons = 0;
  let completedCount = 0;

  module.weeks.forEach((week: Week) => {
    week.lessons.forEach((lesson: Lesson) => {
      totalLessons++;
      if (completedLessons.has(lesson.id)) {
        completedCount++;
      }
    });
  });

  if (totalLessons === 0) {
    return 0; // Avoid division by zero
  }

  return (completedCount / totalLessons) * 100;
};

const CourseSidebar = ({ course }: CourseSidebarProps) => {
  const params = useParams();
  const currentLessonId = params.lessonId as string | undefined;
  const courseId = params.courseId as string;
  const { isLessonComplete, completedLessons } = useSharedLessonCompletion();
  
  // State to track open modules
  const [openModules, setOpenModules] = useState<Set<string>>(() => {
    // Initialize state based on current lesson
    if (currentLessonId) {
      const parentModuleId = findModuleIdForLesson(course, currentLessonId);
      if (parentModuleId) {
        return new Set([parentModuleId]); // Start with the current lesson's module open
      }
    }
    return new Set(); // Default to no modules open
  });

  // Function to toggle module visibility
  const toggleModule = (moduleId: string) => {
    setOpenModules(prevOpenModules => {
      const newOpenModules = new Set(prevOpenModules);
      if (newOpenModules.has(moduleId)) {
        newOpenModules.delete(moduleId);
      } else {
        newOpenModules.add(moduleId);
      }
      return newOpenModules;
    });
  };

  // Ensure the correct module stays open if the user navigates directly
  // or refreshes while on a lesson page.
  useEffect(() => {
    if (currentLessonId) {
      const parentModuleId = findModuleIdForLesson(course, currentLessonId);
      if (parentModuleId && !openModules.has(parentModuleId)) {
         // Open the module if it's not already open (e.g., on direct navigation/refresh)
        setOpenModules(prev => new Set(prev).add(parentModuleId));
      }
    } // No need for an else clause, we don't want to close modules unnecessarily
  }, [currentLessonId, course, openModules]); // Add dependencies

  return (
    <aside className="w-64 md:w-80 h-full border-r flex-shrink-0 overflow-y-auto p-4 bg-muted/40">
      <nav className="flex flex-col"> {/* Removed space-y-1, handle spacing below */}
        {course.learningPath.map((phase) => (
          <div key={phase.id} className="mb-4 border-t border-border pt-4 first:border-t-0"> {/* Reverted to border-border */}
            <h3 className="text-sm font-bold text-foreground px-2 mb-3 uppercase tracking-wider"> {/* Removed mt-4 */}
              {phase.title.replace(/^Phase \d+: /, '')} {/* Remove prefix */}
            </h3>
            {phase.modules.map((module) => {
              // Calculate progress for the current module
              const progress = calculateModuleProgress(module, completedLessons);
              const isOpen = openModules.has(module.id);
              const moduleComplete = progress === 100;

              return (
                // Module container
                <div key={module.id} className="mb-2"> 
                  {/* Clickable Module Header */}
                  <div 
                    className="flex items-center px-2 py-1.5 rounded-md hover:bg-accent cursor-pointer" // Added py, rounded, hover, cursor
                    onClick={() => toggleModule(module.id)}
                  >
                    <h4 className="text-base font-medium flex-1">
                      {module.title.replace(/^Module \d+: /, '')} {/* Remove prefix */}
                    </h4>
                    {/* Display progress % or Checkmark (now always visible) */}
                    <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">
                      {moduleComplete ? 
                        <CheckCircle className="h-4 w-4 text-green-500" /> : 
                        progress > 0 ? `${progress.toFixed(0)}%` : null 
                      }
                    </span>
                    <ChevronDown 
                      className={cn(
                        "h-4 w-4 ml-2 text-muted-foreground flex-shrink-0 transition-transform duration-200",
                        isOpen ? "rotate-180" : "rotate-0"
                      )} 
                    />
                  </div>
                  {/* Conditionally rendered weeks/lessons */}
                  {isOpen && (
                    <div className="mt-1 pl-2 border-l border-border ml-2"> {/* Indentation + border */}
                      {module.weeks.map((week) => (
                        <div key={week.id} className="mb-1 pl-2 py-1"> {/* Added padding */}
                          <h5 className="text-xs font-semibold text-muted-foreground mt-2 mb-1 italic">
                            {week.title.replace(/^Week \d+: /, '')} {/* Remove prefix */}
                          </h5>
                          <ul className="space-y-0.5">
                            {week.lessons.map((lesson) => {
                              const lessonComplete = isLessonComplete(lesson.id);
                              return (
                                <li key={lesson.id}>
                                  <Link
                                    href={`/courses/${courseId}/lessons/${lesson.id}`}
                                    className={cn(
                                      "flex items-center p-2 rounded-md text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-150", // Added transition
                                      currentLessonId === lesson.id ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground",
                                      lessonComplete && ! (currentLessonId === lesson.id) ? "text-foreground/60" : ""
                                    )}
                                  >
                                    <span className="flex-1">
                                      {lesson.title.replace(/^Lesson \d+: /, '')} {/* Remove prefix */}
                                    </span>
                                    {lessonComplete && <CheckCircle className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default CourseSidebar; 