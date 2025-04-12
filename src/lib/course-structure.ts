import type { Course, Lesson } from './types';

// Moved from courses.ts
export const courses: Course[] = [
  {
    id: 'fs-ai-01',
    title: 'Full Stack AI Development: From Fundamentals to Production',
    overview: "This comprehensive course takes you from programming fundamentals to building sophisticated AI-powered full stack applications. You'll learn web development fundamentals, frontend and backend development, database management, and how to integrate AI capabilities into production-ready applications.",
    learningPath: [
      // ... (Keep the entire learningPath structure here) ...
    ]
  }
  // Add more courses here if needed
];

// Moved from courses.ts
export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

// Moved from courses.ts
// Helper function to find the module ID for a given lesson ID
export function findModuleIdForLesson(course: Course, lessonId: string): string | undefined {
  for (const phase of course.learningPath) {
    for (const module of phase.modules) {
      for (const week of module.weeks) {
        if (week.lessons.some(l => l.id === lessonId)) {
          return module.id; // Found the lesson, return the module ID
        }
      }
    }
  }
  return undefined; // Lesson not found in any module
} 