import React from 'react';
// Hero component is not used directly here anymore
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { courses as allCoursesData } from '@/lib/courses';

export default function Home() {
  const courses = allCoursesData;

  return (
    // Use flex layout for the two main sections
    <div className="flex flex-1 h-full">
      {/* Left Section (Hero Content) */}
      <section className="w-1/2 flex flex-col justify-center p-12 md:p-16 lg:p-24 border-r overflow-y-auto">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Unlock Your Potential with Our Courses
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Explore expert-led courses designed to help you master new skills and advance your career. Easy-to-follow learning paths.
          </p>
          {/* Optional: Button could link to first course? */}
        </div>
      </section>

      {/* Right Section (Courses List) */}
      <section id="courses" className="w-1/2 p-8 md:p-12 lg:p-16 overflow-y-auto bg-muted">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Our Courses</h2>
        <div className="grid grid-cols-1 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.overview.substring(0, 100)}...</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">Phases: {course.learningPath.length}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/courses/${course.id}`} className="w-full">
                  <Button className="w-full">View Course</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
