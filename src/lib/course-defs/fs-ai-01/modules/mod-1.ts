import type { Module } from '@/lib/types';

// Note: Module definitions contain the nested week/lesson structure,
// as these are less likely to be reused independently.
export const moduleData: Module = {
  id: 'mod-1',
  title: 'Module 1: Fundamentals for Beginners',
  weeks: [
    // Week 1
    {
      id: 'p1-m1-w1',
      title: 'Week 1: Introduction to Programming',
      lessons: [
        {
          id: 'p1-m1-w1-l1',
          title: 'Lesson 1: Understanding Computer Programming'
        },
        {
          id: 'p1-m1-w1-l2',
          title: 'Lesson 2: Problem-solving approach to programming'
        },
        { 
          id: 'p1-m1-w1-pe', 
          title: 'Practical Exercise: Create your first program' 
        }
      ]
    },
    // Week 2
    {
      id: 'p1-m1-w2',
      title: 'Week 2: Working with Variables and Operators',
      lessons: [
        {
          id: 'p1-m1-w2-l1',
          title: 'Lesson 1: Variables and Data Types'
        },
        {
          id: 'p1-m1-w2-l2',
          title: 'Lesson 2: Operators'
        },
        { id: 'p1-m1-w2-pe', title: 'Practical Exercise: Build a simple calculator' }
      ]
    },
     // Week 3
    {
      id: 'p1-m1-w3',
      title: 'Week 3: Working with Control Flows',
      lessons: [
        {
          id: 'p1-m1-w3-l1',
          title: 'Lesson 1: Conditional Statements'
        },
        {
          id: 'p1-m1-w3-l2',
          title: 'Lesson 2: Loops'
        },
        { id: 'p1-m1-w3-pe', title: 'Practical Exercise: Create a number guessing game' }
      ]
    },
    // Week 4
    {
      id: 'p1-m1-w4',
      title: 'Week 4: Working with Functions',
      lessons: [
        {
          id: 'p1-m1-w4-l1',
          title: 'Lesson 1: Function Basics'
        },
        {
          id: 'p1-m1-w4-l2',
          title: 'Lesson 2: Advanced Function Concepts'
        },
        { id: 'p1-m1-w4-pe', title: 'Practical Exercise: Build a function library' }
      ]
    },
    // Week 5
    {
      id: 'p1-m1-w5',
      title: 'Week 5: Overview of Web Development Technologies',
      lessons: [
        {
          id: 'p1-m1-w5-l1',
          title: 'Lesson 1: The Internet and the Web'
        },
        {
          id: 'p1-m1-w5-l2',
          title: 'Lesson 2: Core Web Technologies'
        },
        { id: 'p1-m1-w5-pe', title: "Practical Exercise: Analyze a website's architecture" }
      ]
    },
    // Week 6
    {
      id: 'p1-m1-w6',
      title: 'Week 6: Introduction to Full Stack Development',
      lessons: [
        {
          id: 'p1-m1-w6-l1',
          title: 'Lesson 1: The Full Stack'
        },
        {
          id: 'p1-m1-w6-l2',
          title: 'Lesson 2: Developer Tools and Workflows'
        },
        { id: 'p1-m1-w6-pe', title: 'Practical Exercise: Set up a development environment for full stack development' }
      ]
    }
    // Add other weeks for this module here
  ]
}; 