'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY_PREFIX = 'lessonCompletion_';

function getStorageKey(courseId: string): string {
  return `${STORAGE_KEY_PREFIX}${courseId}`;
}

// Type for the stored data: Set of completed lesson IDs
type CompletedLessons = Set<string>;

export function useLessonCompletion(courseId: string) {
  const [completedLessons, setCompletedLessons] = useState<CompletedLessons>(new Set());
  const storageKey = getStorageKey(courseId);

  // Load initial state from localStorage
  useEffect(() => {
    try {
      const storedData = localStorage.getItem(storageKey);
      if (storedData) {
        setCompletedLessons(new Set(JSON.parse(storedData)));
      } else {
        setCompletedLessons(new Set());
      }
    } catch (error) {
      console.error('Error reading lesson completion from localStorage:', error);
      setCompletedLessons(new Set()); // Reset on error
    }
  }, [storageKey]);

  // Function to check if a lesson is complete
  const isLessonComplete = useCallback((lessonId: string): boolean => {
    return completedLessons.has(lessonId);
  }, [completedLessons]);

  // Function to toggle lesson completion status
  const toggleLessonComplete = useCallback((lessonId: string) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(lessonId)) {
        newSet.delete(lessonId);
      } else {
        newSet.add(lessonId);
      }
      // Save updated state to localStorage
      try {
        localStorage.setItem(storageKey, JSON.stringify(Array.from(newSet)));
      } catch (error) {
        console.error('Error saving lesson completion to localStorage:', error);
      }
      return newSet;
    });
  }, [storageKey]);

  return { completedLessons, isLessonComplete, toggleLessonComplete };
} 