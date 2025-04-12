import React from 'react';
import { getLessonById } from '@/lib/courses';
import { getAdjacentLessons } from '@/lib/generated/course-structure';
import { notFound } from 'next/navigation';
import LessonClientPage from './LessonClientPage'; // Import the client component (removed extension)
import { serialize } from 'next-mdx-remote/serialize'; // Import serialize

// Define the expected params shape for the Server Component
type LessonPageProps = {
  params: {
    courseId: string;
    lessonId: string;
  };
};

// This is the Server Component page
const LessonPage = async ({ params }: LessonPageProps) => {
  const { courseId, lessonId } = params;

  // Fetch lesson data on the server
  const lessonData = getLessonById(courseId, lessonId);

  // Handle case where lesson *metadata* is not found
  if (!lessonData) {
    notFound();
  }
  
  // Serialize the MDX content ONLY if it exists
  let mdxSource = null;
  if (lessonData.content) {
    try {
      mdxSource = await serialize(lessonData.content);
    } catch (error) {
      console.error("Error serializing MDX:", error);
      // Keep mdxSource as null if serialization fails
    }
  }
  // If lessonData.content was null initially, mdxSource remains null

  // Get adjacent lesson data
  const adjacentLessons = getAdjacentLessons(courseId, lessonId);

  // Pass the potentially null mdxSource
  return (
    <LessonClientPage 
      courseId={courseId} 
      lessonId={lessonId} 
      lessonMetadata={{ id: lessonData.id, title: lessonData.title }}
      mdxSource={mdxSource} // Pass potentially null MDX source
      adjacentLessons={adjacentLessons} 
    />
  );
};

export default LessonPage; 