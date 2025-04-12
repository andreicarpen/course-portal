'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useLessonCompletion } from '@/hooks/useLessonCompletion';

interface LessonCompletionContextType {
  completedLessons: Set<string>;
  isLessonComplete: (lessonId: string) => boolean;
  toggleLessonComplete: (lessonId: string) => void;
}

const LessonCompletionContext = createContext<LessonCompletionContextType | undefined>(undefined);

interface LessonCompletionProviderProps {
  children: ReactNode;
  courseId: string;
}

export const LessonCompletionProvider = ({ children, courseId }: LessonCompletionProviderProps) => {
  const completionState = useLessonCompletion(courseId);

  return (
    <LessonCompletionContext.Provider value={completionState}>
      {children}
    </LessonCompletionContext.Provider>
  );
};

export const useSharedLessonCompletion = () => {
  const context = useContext(LessonCompletionContext);
  if (context === undefined) {
    throw new Error('useSharedLessonCompletion must be used within a LessonCompletionProvider');
  }
  return context;
}; 