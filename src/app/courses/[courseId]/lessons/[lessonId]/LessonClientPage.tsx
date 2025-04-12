'use client'; // Make this a client component to use hooks

import React from 'react';
import { Button } from '@/components/ui/button'; // Import Button
import { useSharedLessonCompletion } from '@/context/LessonCompletionContext'; // Import shared hook
import { CheckCircle, Circle, ArrowLeft, ArrowRight } from 'lucide-react'; // Icons for button and navigation
import ReactMarkdown from 'react-markdown'; // Import react-markdown
import type { Lesson } from '@/lib/types'; // Import Lesson type for adjacency
import Link from 'next/link'; // Ensure Link is imported
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'; // Import MDXRemote

// Define the props the client component expects
interface LessonClientPageProps {
  courseId: string; // Keep courseId if needed for context or future features
  lessonId: string;
  lessonMetadata: { id: string; title: string }; // Basic metadata
  mdxSource: MDXRemoteSerializeResult | null; // Serialized MDX
  adjacentLessons: { 
    prev: Lesson | null;
    next: Lesson | null;
  };
}

const LessonClientPage = ({ 
  courseId, 
  lessonId, 
  lessonMetadata, // Use new prop
  mdxSource, // Use new prop
  adjacentLessons 
}: LessonClientPageProps) => {
  // Hooks are allowed here because it's a client component
  const { isLessonComplete, toggleLessonComplete } = useSharedLessonCompletion();

  // Get title from metadata
  const { title } = lessonMetadata;
  
  // Determine completion status based on passed lessonId
  const isComplete = isLessonComplete(lessonId);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {title.replace(/^Lesson \d+: /, '')} 
      </h1>

      <div className="prose dark:prose-invert max-w-none mb-8">
        {/* Conditionally render based on mdxSource */}
        {mdxSource ? (
          <MDXRemote {...mdxSource} /> 
        ) : (
          <p className="italic text-muted-foreground">
            Content for this lesson is not available yet or could not be loaded.
          </p>
        )}
      </div>

      {/* Actions Row: Previous, Complete, Next */}
      <div className="flex justify-between items-center mt-12 pt-6 border-t">
        {/* Previous Lesson Button */}
        {adjacentLessons.prev ? (
          <Link href={`/courses/${courseId}/lessons/${adjacentLessons.prev.id}`} passHref>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous Lesson
            </Button>
          </Link>
        ) : (
          <div className="w-1/3" /> // Placeholder to maintain spacing
        )}

        {/* Mark as Complete Button */}
        <div className="flex justify-center"> {/* Center the complete button */}
          <Button 
            variant={isComplete ? "secondary" : "default"}
            size="lg"
            onClick={() => toggleLessonComplete(lessonId)}
            className="min-w-[200px]"
          >
            {isComplete ? (
              <CheckCircle className="mr-2 h-4 w-4" />
            ) : (
              <Circle className="mr-2 h-4 w-4" />
            )}
            {isComplete ? 'Lesson Complete' : 'Mark as Complete'}
          </Button>
        </div>

        {/* Next Lesson Button */}
        {adjacentLessons.next ? (
          <Link href={`/courses/${courseId}/lessons/${adjacentLessons.next.id}`} passHref>
            <Button variant="outline">
              Next Lesson
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <div className="w-1/3" /> // Placeholder to maintain spacing
        )}
      </div>
    </div>
  );
};

export default LessonClientPage; 