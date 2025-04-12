import fs from 'fs';
import path from 'path';
import type { Lesson } from './types'; 
// Import getCourseById from the GENERATED structure file
import { getCourseById } from '@/lib/generated/course-structure'; 

// Define the return type for the enriched lesson data
export type LessonWithContent = Lesson & { content: string | null };

// This function remains here as it deals with file system access (content)
export function getLessonById(courseId: string, lessonId: string): LessonWithContent | undefined {
  const course = getCourseById(courseId); // Use imported function from generated file
  if (!course) return undefined;

  let lessonMetadata: Lesson | undefined;

  // Find the lesson metadata within the nested structure 
  for (const phase of course.learningPath) {
    for (const module of phase.modules) {
      for (const week of module.weeks) {
        lessonMetadata = week.lessons.find(l => l.id === lessonId);
        if (lessonMetadata) {
          break; 
        }
      }
      if (lessonMetadata) break;
    }
    if (lessonMetadata) break;
  }

  if (!lessonMetadata) {
    return undefined; 
  }

  // Construct the path to the content file
  const filePath = path.join(process.cwd(), 'src', 'content', 'courses', courseId, `${lessonId}.mdx`);

  let content: string | null = null;
  try {
    // Read the file content
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    // Optional: Log error or handle gracefully
    // console.error(`Error reading content for lesson ${lessonId}:`, error);
  }

  // Return the combined lesson metadata and content
  return {
    ...lessonMetadata,
    content,
  };
}

// --- The large 'courses' array and the old 'getCourseById' / 'findModuleIdForLesson' should be DELETED from this file --- 