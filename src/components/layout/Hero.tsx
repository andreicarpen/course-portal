import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-b">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Unlock Your Potential with Our Courses
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Explore expert-led courses designed to help you master new skills and advance your career. Easy-to-follow learning paths.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {/* Link to the first course or the courses section below */}
              <Link href="#courses">
                <Button size="lg">Explore Courses</Button>
              </Link>
            </div>
          </div>
          {/* Optional: Add an image or illustration here */}
          {/* <img src="/placeholder.svg" alt="Hero" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero; 