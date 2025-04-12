import React from 'react';
import { getCourseById } from '@/lib/generated/course-structure';
import { notFound } from 'next/navigation';
import CourseSidebar from '@/components/layout/CourseSidebar'; // We will create this next
import { LessonCompletionProvider } from '@/context/LessonCompletionContext'; // Import the provider

// Define the expected params shape
type CourseLayoutParams = {
  params: {
    courseId: string;
  };
  children: React.ReactNode;
};

// This layout applies to all pages under /courses/[courseId]/
const CourseLayout = async ({ children, params: paramsPromise }: { children: React.ReactNode; params: { courseId: string } }) => {
  const params = await paramsPromise; // Await the params
  const { courseId } = params;
  const course = getCourseById(courseId);

  if (!course) {
    notFound();
  }

  return (
    <LessonCompletionProvider courseId={courseId}>
      {/* Flex container for sidebar and main */}
      <div className="flex flex-1">
        <CourseSidebar course={course} />
        {/* Main content area: takes remaining space and scrolls internally */}
        <main className="flex-1 overflow-y-auto">
          {/* Inner div for padding, width constraint, and centering */}
          <div className="p-6 main-content-typography max-w-3xl mx-auto">
            {children} {/* This will render the specific page (course overview or lesson) */}
          </div>
        </main>
      </div>
    </LessonCompletionProvider>
  );
};

export default CourseLayout; 