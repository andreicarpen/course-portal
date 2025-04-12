import React from 'react';
import Link from 'next/link';
import { getCourseById } from '@/lib/generated/course-structure';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';

// Define the expected params shape
// type CoursePageParams = { // Commenting out the type alias
//   params: {
//     courseId: string;
//   };
// };

const CoursePage = async ({ params: paramsPromise }: { params: { courseId: string } }) => { // Using inline types
  const params = await paramsPromise; // Await the params
  const { courseId } = params;
  const course = getCourseById(courseId);

  // Handle case where course is not found
  if (!course) {
    notFound(); // Use Next.js notFound function
  }

  // Safely find the first lesson ID
  const firstLessonId = 
    course.learningPath?.[0]?.modules?.[0]?.weeks?.[0]?.lessons?.[0]?.id;

  return (
    <div>
      {/* This page now just shows the overview content */}
      {/* The layout provides the sidebar navigation */}
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Ready to bridge the gap between coding fundamentals and building intelligent, real-world applications? This comprehensive journey takes you step-by-step from the basics of programming to deploying sophisticated AI-powered full stack projects.
      </p>
      
      {/* Start Course Button */}
      <div className="mt-8"> 
        {firstLessonId ? (
          <Link href={`/courses/${courseId}/lessons/${firstLessonId}`} passHref>
            <Button size="lg">Start Learning Now</Button> 
          </Link>
        ) : (
          // Fallback if first lesson isn't found (structure might be empty)
          <Button size="lg" disabled>Course Not Ready</Button>
        )}
      </div>
    </div>
  );
};

export default CoursePage; 