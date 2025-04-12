'use client'; // Make this a client component to use hooks

import React from 'react';
import { Button } from '@/components/ui/button'; // Import Button
import { useSharedLessonCompletion } from '@/context/LessonCompletionContext'; // Import shared hook
import { CheckCircle, Circle } from 'lucide-react'; // Icons for button
import ReactMarkdown from 'react-markdown'; // Import react-markdown
import type { LessonWithContent } from '@/lib/courses'; // Import the type

// Define the props the client component expects
interface LessonClientPageProps {
  courseId: string; // Keep courseId if needed for context or future features
  lessonId: string;
  lessonData: LessonWithContent; // Pass the whole fetched data object
}

const LessonClientPage = ({ courseId, lessonId, lessonData }: LessonClientPageProps) => {
  // Hooks are allowed here because it's a client component
  const { isLessonComplete, toggleLessonComplete } = useSharedLessonCompletion();

  // Destructure title and content from the passed props
  const { title, content } = lessonData;
  
  // Determine completion status based on passed lessonId
  const isComplete = isLessonComplete(lessonId);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {title.replace(/^Lesson \d+: /, '')} 
      </h1>

      <div className="prose dark:prose-invert max-w-none mb-8">
        {content ? (
          <ReactMarkdown>
            {content} 
          </ReactMarkdown>
        ) : (
          <p>No content available for this lesson yet.</p>
        )}
      </div>

      <div className="flex justify-center mt-8 pt-8 border-t">
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

      {/* TODO: Add next/previous lesson navigation buttons */}
    </div>
  );
};

export default LessonClientPage; 