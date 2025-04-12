import React from 'react';
import { getLessonById } from '@/lib/courses';
import { notFound } from 'next/navigation';
import LessonClientPage from './LessonClientPage'; // Import the client component (removed extension)

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

  // Fetch lesson data (including content read from file) on the server
  const lessonData = getLessonById(courseId, lessonId);

  // Handle case where lesson data is not found
  if (!lessonData) {
    notFound();
  }

  // Render the Client Component, passing fetched data and IDs as props
  return (
    <LessonClientPage 
      courseId={courseId} 
      lessonId={lessonId} 
      lessonData={lessonData} 
    />
  );
};

export default LessonPage; 