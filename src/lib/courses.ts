import type { Course, Lesson } from './types';
import fs from 'fs';
import path from 'path';

export const courses: Course[] = [
  {
    id: 'fs-ai-01',
    title: 'Full Stack AI Development: From Fundamentals to Production',
    overview: "This comprehensive course takes you from programming fundamentals to building sophisticated AI-powered full stack applications. You'll learn web development fundamentals, frontend and backend development, database management, and how to integrate AI capabilities into production-ready applications.",
    learningPath: [
      // Phase 1
      {
        id: 'phase-1',
        title: 'Phase 1: Introduction to Programming and Web Development',
        modules: [
          // Module 1
          {
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
            ]
          }
        ]
      },
      // Phase 2
      {
        id: 'phase-2',
        title: 'Phase 2: Web Development',
        modules: [
          // Module 2
          {
            id: 'mod-2',
            title: 'Module 2: Introduction to Git',
            weeks: [
              // Week 7
              {
                id: 'p2-m2-w7',
                title: 'Week 7: Version Control Basics',
                lessons: [
                  {
                    id: 'p2-m2-w7-l1',
                    title: 'Lesson 1: Introduction to Git and GitHub'
                  },
                  {
                    id: 'p2-m2-w7-l2',
                    title: 'Lesson 2: Basic Git Commands'
                  },
                  { id: 'p2-m2-w7-pe', title: 'Practical Exercise: Create your first repository' }
                ]
              },
              // Week 8
              {
                id: 'p2-m2-w8',
                title: 'Week 8: Working with Git Repositories',
                lessons: [
                  {
                    id: 'p2-m2-w8-l1',
                    title: 'Lesson 1: Tracking Changes to a Git Repository'
                  },
                  {
                    id: 'p2-m2-w8-l2',
                    title: 'Lesson 2: Working with a Remote Repository in GitHub'
                  },
                  { id: 'p2-m2-w8-pe', title: 'Practical Exercise: Collaborate on a shared GitHub repository' }
                ]
              },
              // Week 9
              {
                id: 'p2-m2-w9',
                title: 'Week 9: Advanced Git Operations',
                lessons: [
                  {
                    id: 'p2-m2-w9-l1',
                    title: 'Lesson 1: Basic Branching and Merging Operations'
                  },
                  {
                    id: 'p2-m2-w9-l2',
                    title: 'Lesson 2: Merge Conflict Resolution'
                  },
                  { id: 'p2-m2-w9-pe', title: 'Practical Exercise: Simulate and resolve merge conflicts' }
                ]
              }
            ]
          },
          // Module 3
          {
            id: 'mod-3',
            title: 'Module 3: HTML and CSS Fundamentals',
            weeks: [
              // Week 10
              {
                id: 'p2-m3-w10',
                title: 'Week 10: HTML Basics',
                lessons: [
                  {
                    id: 'p2-m3-w10-l1',
                    title: 'Lesson 1: Structure & Syntax of HTML pages'
                  },
                  {
                    id: 'p2-m3-w10-l2',
                    title: 'Lesson 2: Common HTML tags'
                  },
                  { id: 'p2-m3-w10-pe', title: 'Practical Exercise: Create a personal profile page' }
                ]
              },
              // Week 11
              {
                id: 'p2-m3-w11',
                title: 'Week 11: HTML Advanced',
                lessons: [
                  {
                    id: 'p2-m3-w11-l1',
                    title: 'Lesson 1: Working with URLs'
                  },
                  {
                    id: 'p2-m3-w11-l2',
                    title: 'Lesson 2: Working with Form-Related Tags'
                  },
                  { id: 'p2-m3-w11-pe', title: 'Practical Exercise: Build a complete web form' }
                ]
              },
              // Week 12
              {
                id: 'p2-m3-w12',
                title: 'Week 12: CSS Fundamentals',
                lessons: [
                  {
                    id: 'p2-m3-w12-l1',
                    title: 'Lesson 1: Introduction to CSS'
                  },
                  {
                    id: 'p2-m3-w12-l2',
                    title: 'Lesson 2: Introduction to Document Object Model (DOM)'
                  },
                  { id: 'p2-m3-w12-pe', title: 'Practical Exercise: Style your HTML profile page' }
                ]
              },
              // Week 13
              {
                id: 'p2-m3-w13',
                title: 'Week 13: CSS Selectors and Properties',
                lessons: [
                  {
                    id: 'p2-m3-w13-l1',
                    title: 'Lesson 1: Basic CSS Selectors'
                  },
                  {
                    id: 'p2-m3-w13-l2',
                    title: 'Lesson 2: Common CSS Properties'
                  },
                  { id: 'p2-m3-w13-pe', title: 'Practical Exercise: Create a styled navigation menu' }
                ]
              }
            ]
          },
          // Module 4
          {
            id: 'mod-4',
            title: 'Module 4: Intermediate HTML and CSS',
            weeks: [
              // Week 14
              {
                id: 'p2-m4-w14',
                title: 'Week 14: Semantic HTML and Advanced CSS',
                lessons: [
                  {
                    id: 'p2-m4-w14-l1',
                    title: 'Lesson 1: Semantic HTML5 Elements'
                  },
                  {
                    id: 'p2-m4-w14-l2',
                    title: 'Lesson 2: Advanced CSS Selectors'
                  },
                  { id: 'p2-m4-w14-pe', title: 'Practical Exercise: Convert a non-semantic website to semantic HTML' }
                ]
              },
              // Week 15
              {
                id: 'p2-m4-w15',
                title: 'Week 15: CSS Layout Techniques',
                lessons: [
                  {
                    id: 'p2-m4-w15-l1',
                    title: 'Lesson 1: Generating Basic Layout using CSS'
                  },
                  {
                    id: 'p2-m4-w15-l2',
                    title: 'Lesson 2: CSS Flexbox'
                  },
                  { id: 'p2-m4-w15-pe', title: 'Practical Exercise: Build a flexible card layout' }
                ]
              },
              // Week 16
              {
                id: 'p2-m4-w16',
                title: 'Week 16: Advanced CSS Layout',
                lessons: [
                  {
                    id: 'p2-m4-w16-l1',
                    title: 'Lesson 1: CSS Grid'
                  },
                  {
                    id: 'p2-m4-w16-l2',
                    title: 'Lesson 2: Introduction to Responsive Design'
                  },
                  { id: 'p2-m4-w16-pe', title: 'Practical Exercise: Create a responsive grid-based layout' }
                ]
              },
              // Week 17
              {
                id: 'p2-m4-w17',
                title: 'Week 17: CSS Frameworks and Templates',
                lessons: [
                  {
                    id: 'p2-m4-w17-l1',
                    title: 'Lesson 1: Introduction to Frontend Design Frameworks'
                  },
                  {
                    id: 'p2-m4-w17-l2',
                    title: 'Lesson 2: Working with Templates'
                  },
                  { id: 'p2-m4-w17-pe', title: 'Practical Exercise: Build a responsive website using a CSS framework' }
                ]
              }
            ]
          },
          // Module 5
          {
            id: 'mod-5',
            title: 'Module 5: Introduction to JavaScript',
            weeks: [
              // Week 18
              {
                id: 'p2-m5-w18',
                title: 'Week 18: JavaScript Fundamentals',
                lessons: [
                  {
                    id: 'p2-m5-w18-l1',
                    title: 'Lesson 1: Introduction to JavaScript'
                  },
                  {
                    id: 'p2-m5-w18-l2',
                    title: 'Lesson 2: Variables, Data Types, and Operators in JavaScript'
                  },
                  { id: 'p2-m5-w18-pe', title: 'Practical Exercise: Create interactive elements with JavaScript' }
                ]
              },
              // Week 19
              {
                id: 'p2-m5-w19',
                title: 'Week 19: JavaScript Control Flow',
                lessons: [
                  {
                    id: 'p2-m5-w19-l1',
                    title: 'Lesson 1: Conditional Control Flow with JavaScript'
                  },
                  {
                    id: 'p2-m5-w19-l2',
                    title: 'Lesson 2: Iterative Control Flow with JavaScript'
                  },
                  { id: 'p2-m5-w19-pe', title: 'Practical Exercise: Build a form validator' }
                ]
              },
              // Week 20
              {
                id: 'p2-m5-w20',
                title: 'Week 20: JavaScript Functions and Objects',
                lessons: [
                  {
                    id: 'p2-m5-w20-l1',
                    title: 'Lesson 1: JavaScript Functions'
                  },
                  {
                    id: 'p2-m5-w20-l2',
                    title: 'Lesson 2: Arrays and Objects in JavaScript'
                  },
                  { id: 'p2-m5-w20-pe', title: 'Practical Exercise: Create a todo list application' }
                ]
              },
              // Week 21
              {
                id: 'p2-m5-w21',
                title: 'Week 21: DOM Manipulation',
                lessons: [
                  {
                    id: 'p2-m5-w21-l1',
                    title: 'Lesson 1: DOM Programming Interface for HTML'
                  },
                  {
                    id: 'p2-m5-w21-l2',
                    title: 'Lesson 2: Basic DOM Manipulation with JavaScript'
                  },
                  { id: 'p2-m5-w21-pe', title: 'Practical Exercise: Build an interactive image gallery' }
                ]
              }
            ]
          },
          // Module 6
          {
            id: 'mod-6',
            title: 'Module 6: Introduction to Python',
            weeks: [
              // Week 22
              {
                id: 'p2-m6-w22',
                title: 'Week 22: Python Basics',
                lessons: [
                  {
                    id: 'p2-m6-w22-l1',
                    title: 'Lesson 1: Variables, Data Types, and Operators in Python'
                  },
                  {
                    id: 'p2-m6-w22-l2',
                    title: 'Lesson 2: Basic Input and Output with Python'
                  },
                  { id: 'p2-m6-w22-pe', title: 'Practical Exercise: Create a command-line calculator' }
                ]
              },
              // Week 23
              {
                id: 'p2-m6-w23',
                title: 'Week 23: Python Control Flow',
                lessons: [
                  {
                    id: 'p2-m6-w23-l1',
                    title: 'Lesson 1: Conditional Control Flow with Python'
                  },
                  {
                    id: 'p2-m6-w23-l2',
                    title: 'Lesson 2: Iterative Control Flow with Python'
                  },
                  { id: 'p2-m6-w23-pe', title: 'Practical Exercise: Build a number guessing game in Python' }
                ]
              },
              // Week 24
              {
                id: 'p2-m6-w24',
                title: 'Week 24: Python Functions and Data Structures',
                lessons: [
                  {
                    id: 'p2-m6-w24-l1',
                    title: 'Lesson 1: Python Functions'
                  },
                  {
                    id: 'p2-m6-w24-l2',
                    title: 'Lesson 2: Basic Data Structures in Python'
                  },
                  { id: 'p2-m6-w24-pe', title: 'Practical Exercise: Create a contact management system' }
                ]
              },
              // Week 25
              {
                id: 'p2-m6-w25',
                title: 'Week 25: Advanced Python Data Handling',
                lessons: [
                  {
                    id: 'p2-m6-w25-l1',
                    title: 'Lesson 1: Limitations of Python Basic Data Structures'
                  },
                  {
                    id: 'p2-m6-w25-l2',
                    title: 'Lesson 2: Overview of Python Libraries for Data Science and AI'
                  },
                  { id: 'p2-m6-w25-pe', title: 'Practical Exercise: Solve a data analysis problem' }
                ]
              },
              // Week 26
              {
                id: 'p2-m6-w26',
                title: 'Week 26: Introduction to NumPy and Pandas',
                lessons: [
                  {
                    id: 'p2-m6-w26-l1',
                    title: 'Lesson 1: Data Processing with NumPy ndarray'
                  },
                  {
                    id: 'p2-m6-w26-l2',
                    title: 'Lesson 2: Introduction to Pandas Series'
                  },
                  { id: 'p2-m6-w26-pe', title: 'Practical Exercise: Analyze a dataset with NumPy' }
                ]
              },
              // Week 27
              {
                id: 'p2-m6-w27',
                title: 'Week 27: Working with Pandas and Data Visualization',
                lessons: [
                  {
                    id: 'p2-m6-w27-l1',
                    title: 'Lesson 1: Introduction to Pandas DataFrame'
                  },
                  {
                    id: 'p2-m6-w27-l2',
                    title: 'Lesson 2: Data Preparation with Pandas DataFrame'
                  },
                  { id: 'p2-m6-w27-pe', title: 'Practical Exercise: Clean and transform a real-world dataset' }
                ]
              },
              // Week 28
              {
                id: 'p2-m6-w28',
                title: 'Week 28: Data Visualization with Python',
                lessons: [
                  {
                    id: 'p2-m6-w28-l1',
                    title: 'Lesson 1: Data Visualization with Matplotlib'
                  },
                  {
                    id: 'p2-m6-w28-l2',
                    title: 'Lesson 2: Advanced Visualization'
                  },
                  { id: 'p2-m6-w28-pe', title: 'Practical Exercise: Create a dashboard with multiple visualizations' }
                ]
              }
            ]
          }
        ]
      },
      // Phase 3
      {
        id: 'phase-3',
        title: 'Phase 3: Frontend Development',
        modules: [
          // Module 7
          {
            id: 'mod-7',
            title: 'Module 7: Frontend Frameworks',
            weeks: [
              // Week 29
              {
                id: 'p3-m7-w29',
                title: 'Week 29: Modern Frontend Development',
                lessons: [
                  {
                    id: 'p3-m7-w29-l1',
                    title: 'Lesson 1: Introduction to Frontend Frameworks'
                  },
                  {
                    id: 'p3-m7-w29-l2',
                    title: 'Lesson 2: Traditional vs Modern Frontend Development'
                  },
                  { id: 'p3-m7-w29-pe', title: 'Practical Exercise: Compare implementations of the same UI in vanilla JS vs a framework' }
                ]
              },
              // Week 30
              {
                id: 'p3-m7-w30',
                title: 'Week 30: Component-Based Development',
                lessons: [
                  {
                    id: 'p3-m7-w30-l1',
                    title: 'Lesson 1: Declarative Approach to Development'
                  },
                  {
                    id: 'p3-m7-w30-l2',
                    title: 'Lesson 2: Component-Based Design'
                  },
                  { id: 'p3-m7-w30-pe', title: 'Practical Exercise: Design a component-based UI' }
                ]
              },
              // Week 31
              {
                id: 'p3-m7-w31',
                title: 'Week 31: Modern Web Applications',
                lessons: [
                  {
                    id: 'p3-m7-w31-l1',
                    title: 'Lesson 1: Single Page Applications'
                  },
                  {
                    id: 'p3-m7-w31-l2',
                    title: 'Lesson 2: Getting Started with Frontend Development Frameworks'
                  },
                  { id: 'p3-m7-w31-pe', title: 'Practical Exercise: Create a simple SPA' }
                ]
              }
            ]
          },
          // Module 8
          {
            id: 'mod-8',
            title: 'Module 8: Working with React',
            weeks: [
              // Week 32
              {
                id: 'p3-m8-w32',
                title: 'Week 32: React Fundamentals',
                lessons: [
                  {
                    id: 'p3-m8-w32-l1',
                    title: 'Lesson 1: Introduction to React'
                  },
                  {
                    id: 'p3-m8-w32-l2',
                    title: 'Lesson 2: Setting Up a React Webpage'
                  },
                  { id: 'p3-m8-w32-pe', title: 'Practical Exercise: Create your first React application' }
                ]
              },
              // Week 33
              {
                id: 'p3-m8-w33',
                title: 'Week 33: JSX and React Props',
                lessons: [
                  {
                    id: 'p3-m8-w33-l1',
                    title: 'Lesson 1: JSX and Transpiling'
                  },
                  {
                    id: 'p3-m8-w33-l2',
                    title: 'Lesson 2: Working with Props in React'
                  },
                  { id: 'p3-m8-w33-pe', title: 'Practical Exercise: Build a component with props' }
                ]
              },
              // Week 34
              {
                id: 'p3-m8-w34',
                title: 'Week 34: Modern JavaScript for React',
                lessons: [
                  {
                    id: 'p3-m8-w34-l1',
                    title: 'Lesson 1: JavaScript Expressions in React'
                  },
                  {
                    id: 'p3-m8-w34-l2',
                    title: 'Lesson 2: ES6 Constructs in React Applications'
                  },
                  { id: 'p3-m8-w34-pe', title: 'Practical Exercise: Refactor a React application using ES6 features' }
                ]
              },
              // Week 35
              {
                id: 'p3-m8-w35',
                title: 'Week 35: React Components and Organization',
                lessons: [
                  {
                    id: 'p3-m8-w35-l1',
                    title: 'Lesson 1: ES6 Module System and Organising React Applications'
                  },
                  {
                    id: 'p3-m8-w35-l2',
                    title: 'Lesson 2: Creating React Applications without Setup'
                  },
                  { id: 'p3-m8-w35-pe', title: 'Practical Exercise: Organize a complex React application' }
                ]
              },
              // Week 36
              {
                id: 'p3-m8-w36',
                title: 'Week 36: React Events and State',
                lessons: [
                  {
                    id: 'p3-m8-w36-l1',
                    title: 'Lesson 1: Handling HTML and React Events'
                  },
                  {
                    id: 'p3-m8-w36-l2',
                    title: 'Lesson 2: Difference Between Props and States'
                  },
                  { id: 'p3-m8-w36-pe', title: 'Practical Exercise: Build an interactive form with React state' }
                ]
              },
              // Week 37
              {
                id: 'p3-m8-w37',
                title: 'Week 37: React Hooks',
                lessons: [
                  {
                    id: 'p3-m8-w37-l1',
                    title: 'Lesson 1: React Hooks and State Variables'
                  },
                  {
                    id: 'p3-m8-w37-l2',
                    title: 'Lesson 2: Controlled vs Uncontrolled React Components'
                  },
                  { id: 'p3-m8-w37-pe', title: 'Practical Exercise: Convert a class component to a functional component with hooks' }
                ]
              },
              // Week 38
              {
                id: 'p3-m8-w38',
                title: 'Week 38: React Effects and API Calls',
                lessons: [
                  {
                    id: 'p3-m8-w38-l1',
                    title: 'Lesson 1: AJAX and the fetch() API'
                  },
                  {
                    id: 'p3-m8-w38-l2',
                    title: 'Lesson 2: Working with the useEffect Hook'
                  },
                  { id: 'p3-m8-w38-pe', title: 'Practical Exercise: Build a React app that fetches and displays data from an API' }
                ]
              },
              // Week 39
              {
                id: 'p3-m8-w39',
                title: 'Week 39: Advanced React Concepts',
                lessons: [
                  {
                    id: 'p3-m8-w39-l1',
                    title: 'Lesson 1: Working with the useRef Hook and React Hooks Rules'
                  },
                  {
                    id: 'p3-m8-w39-l2',
                    title: 'Lesson 2: Using React Router for Multiple Pages'
                  },
                  { id: 'p3-m8-w39-pe', title: 'Practical Exercise: Build a multi-page React application with routing' }
                ]
              },
              // Week 40
              {
                id: 'p3-m8-w40',
                title: 'Week 40: Creating Production-Ready React Apps',
                lessons: [
                  {
                    id: 'p3-m8-w40-l1',
                    title: 'Lesson 1: Creating and Organising React Applications with Create React App'
                  },
                  {
                    id: 'p3-m8-w40-l2',
                    title: 'Lesson 2: Advanced React Patterns'
                  },
                  { id: 'p3-m8-w40-pe', title: 'Practical Exercise: Optimize a React application for production' }
                ]
              }
            ]
          }
        ]
      },
      // Phase 4
      {
        id: 'phase-4',
        title: 'Phase 4: Backend Development and Databases',
        modules: [
          // Module 9
          {
            id: 'mod-9',
            title: 'Module 9: Relational Databases and SQL',
            weeks: [
              // Week 41
              {
                id: 'p4-m9-w41',
                title: 'Week 41: Database Fundamentals',
                lessons: [
                  {
                    id: 'p4-m9-w41-l1',
                    title: 'Lesson 1: Introduction to Database Systems'
                  },
                  {
                    id: 'p4-m9-w41-l2',
                    title: 'Lesson 2: Database Modeling and Data Models'
                  },
                  { id: 'p4-m9-w41-pe', title: 'Practical Exercise: Design a database for an e-commerce application' }
                ]
              },
              // Week 42
              {
                id: 'p4-m9-w42',
                title: 'Week 42: Relational Database Design',
                lessons: [
                  {
                    id: 'p4-m9-w42-l1',
                    title: 'Lesson 1: The Relational Database Model'
                  },
                  {
                    id: 'p4-m9-w42-l2',
                    title: 'Lesson 2: Create an Entity Relationship (ER) Diagram'
                  },
                  { id: 'p4-m9-w42-pe', title: 'Practical Exercise: Create an ER diagram for a school management system' }
                ]
              },
              // Week 43
              {
                id: 'p4-m9-w43',
                title: 'Week 43: SQL Basics',
                lessons: [
                  {
                    id: 'p4-m9-w43-l1',
                    title: 'Lesson 1: Basics of Structured Query Language (SQL)'
                  },
                  {
                    id: 'p4-m9-w43-l2',
                    title: 'Lesson 2: Write SQL Data Manipulation Language (DML)'
                  },
                  { id: 'p4-m9-w43-pe', title: 'Practical Exercise: Write SQL queries for a sample database' }
                ]
              },
              // Week 44
              {
                id: 'p4-m9-w44',
                title: 'Week 44: Advanced SQL',
                lessons: [
                  {
                    id: 'p4-m9-w44-l1',
                    title: 'Lesson 1: Write Advanced SELECT Queries'
                  },
                  {
                    id: 'p4-m9-w44-l2',
                    title: 'Lesson 2: Write SQL Joins to Combine Data from Multiple Tables'
                  },
                  { id: 'p4-m9-w44-pe', title: 'Practical Exercise: Solve complex data retrieval problems with SQL' }
                ]
              }
            ]
          },
          // Module 10
          {
            id: 'mod-10',
            title: 'Module 10: Introduction to Backend Development',
            weeks: [
              // Week 45
              {
                id: 'p4-m10-w45',
                title: 'Week 45: Backend Development Overview',
                lessons: [
                  {
                    id: 'p4-m10-w45-l1',
                    title: 'Lesson 1: Overview of Backend Software Engineering with JavaScript and Python'
                  },
                  {
                    id: 'p4-m10-w45-l2',
                    title: 'Lesson 2: Introduction to Node.js and Express.js'
                  },
                  { id: 'p4-m10-w45-pe', title: 'Practical Exercise: Set up a simple Node.js server' }
                ]
              },
              // Week 46
              {
                id: 'p4-m10-w46',
                title: 'Week 46: Express.js Development',
                lessons: [
                  {
                    id: 'p4-m10-w46-l1',
                    title: 'Lesson 1: Server-side Web Application Development with Express.js'
                  },
                  {
                    id: 'p4-m10-w46-l2',
                    title: 'Lesson 2: Using the Pug Template Engine with Express.js'
                  },
                  { id: 'p4-m10-w46-pe', title: 'Practical Exercise: Create an Express.js application with Pug templates' }
                ]
              },
              // Week 47
              {
                id: 'p4-m10-w47',
                title: 'Week 47: Database Integration with Express',
                lessons: [
                  {
                    id: 'p4-m10-w47-l1',
                    title: 'Lesson 1: Creating Database-driven Web Application with Express.js'
                  },
                  {
                    id: 'p4-m10-w47-l2',
                    title: 'Lesson 2: Introduction to Flask'
                  },
                  { id: 'p4-m10-w47-pe', title: 'Practical Exercise: Build a database-driven Express.js application' }
                ]
              },
              // Week 48
              {
                id: 'p4-m10-w48',
                title: 'Week 48: Flask Development',
                lessons: [
                  {
                    id: 'p4-m10-w48-l1',
                    title: 'Lesson 1: Server-side Web Application Development with Flask'
                  },
                  {
                    id: 'p4-m10-w48-l2',
                    title: 'Lesson 2: Using the Jinja2 Template Engine with Flask'
                  },
                  { id: 'p4-m10-w48-pe', title: 'Practical Exercise: Create a Flask application with Jinja2 templates' }
                ]
              },
              // Week 49
              {
                id: 'p4-m10-w49',
                title: 'Week 49: Database Integration with Flask',
                lessons: [
                  {
                    id: 'p4-m10-w49-l1',
                    title: 'Lesson 1: Creating Database-driven Web Application with Flask'
                  },
                  {
                    id: 'p4-m10-w49-l2',
                    title: 'Lesson 2: Flask Application Patterns'
                  },
                  { id: 'p4-m10-w49-pe', title: 'Practical Exercise: Build a complete Flask application with database integration' }
                ]
              }
            ]
          },
          // Module 11
          {
            id: 'mod-11',
            title: 'Module 11: Non-relational Databases and MongoDB',
            weeks: [
              // Week 50
              {
                id: 'p4-m11-w50',
                title: 'Week 50: NoSQL Database Concepts',
                lessons: [
                  {
                    id: 'p4-m11-w50-l1',
                    title: 'Lesson 1: Introduction to NoSQL Databases'
                  },
                  {
                    id: 'p4-m11-w50-l2',
                    title: 'Lesson 2: Basics of Document-based Databases'
                  },
                  { id: 'p4-m11-w50-pe', title: 'Practical Exercise: Compare SQL and NoSQL approaches for a specific use case' }
                ]
              },
              // Week 51
              {
                id: 'p4-m11-w51',
                title: 'Week 51: MongoDB Fundamentals',
                lessons: [
                  {
                    id: 'p4-m11-w51-l1',
                    title: 'Lesson 1: Set up MongoDB Environment for NoSQL Database'
                  },
                  {
                    id: 'p4-m11-w51-l2',
                    title: 'Lesson 2: Insert and Find Documents'
                  },
                  { id: 'p4-m11-w51-pe', title: 'Practical Exercise: Create a MongoDB database and perform basic operations' }
                ]
              },
              // Week 52
              {
                id: 'p4-m11-w52',
                title: 'Week 52: MongoDB Querying',
                lessons: [
                  {
                    id: 'p4-m11-w52-l1',
                    title: 'Lesson 1: Query Documents and Query Operators'
                  },
                  {
                    id: 'p4-m11-w52-l2',
                    title: 'Lesson 2: Query Arrays and Nested Documents'
                  },
                  { id: 'p4-m11-w52-pe', title: 'Practical Exercise: Write complex MongoDB queries' }
                ]
              },
              // Week 53
              {
                id: 'p4-m11-w53',
                title: 'Week 53: MongoDB Operations and Integration',
                lessons: [
                  {
                    id: 'p4-m11-w53-l1',
                    title: 'Lesson 1: Update and Delete Documents'
                  },
                  {
                    id: 'p4-m11-w53-l2',
                    title: 'Lesson 2: Connecting to MongoDB Driver for Applications'
                  },
                  { id: 'p4-m11-w53-pe', title: 'Practical Exercise: Integrate MongoDB with a web application' }
                ]
              }
            ]
          },
          // Module 12
          {
            id: 'mod-12',
            title: 'Module 12: RESTful API Development',
            weeks: [
              // Week 54
              {
                id: 'p4-m12-w54',
                title: 'Week 54: API Architecture',
                lessons: [
                  {
                    id: 'p4-m12-w54-l1',
                    title: 'Lesson 1: Overview of Service-Oriented Architecture (SOA) and Microservices Architecture'
                  },
                  {
                    id: 'p4-m12-w54-l2',
                    title: 'Lesson 2: Introduction to RESTful Web Services'
                  },
                  { id: 'p4-m12-w54-pe', title: 'Practical Exercise: Design a RESTful API for a business case' }
                ]
              },
              // Week 55
              {
                id: 'p4-m12-w55',
                title: 'Week 55: Working with JSON and API Design',
                lessons: [
                  {
                    id: 'p4-m12-w55-l1',
                    title: 'Lesson 1: Introduction to JSON'
                  },
                  {
                    id: 'p4-m12-w55-l2',
                    title: 'Lesson 2: Best Practices in RESTful API Design'
                  },
                  { id: 'p4-m12-w55-pe', title: 'Practical Exercise: Create a JSON Schema for an API' }
                ]
              },
              // Week 56
              {
                id: 'p4-m12-w56',
                title: 'Week 56: Building APIs with Express.js',
                lessons: [
                  {
                    id: 'p4-m12-w56-l1',
                    title: 'Lesson 1: Creating RESTful API Endpoints with Express.js'
                  },
                  {
                    id: 'p4-m12-w56-l2',
                    title: 'Lesson 2: Testing RESTful API Endpoints with Postman'
                  },
                  { id: 'p4-m12-w56-pe', title: 'Practical Exercise: Build and test a RESTful API with Express.js' }
                ]
              },
              // Week 57
              {
                id: 'p4-m12-w57',
                title: 'Week 57: Building APIs with Flask',
                lessons: [
                  {
                    id: 'p4-m12-w57-l1',
                    title: 'Lesson 1: Creating RESTful API Endpoints with Flask and Connexion'
                  },
                  {
                    id: 'p4-m12-w57-l2',
                    title: 'Lesson 2: API Documentation and Testing'
                  },
                  { id: 'p4-m12-w57-pe', title: 'Practical Exercise: Build and document a RESTful API with Flask and Connexion' }
                ]
              }
            ]
          }
        ]
      },
      // Phase 5
      {
        id: 'phase-5',
        title: 'Phase 5: AI Fundamentals',
        modules: [
          // Module 13
          {
            id: 'mod-13',
            title: 'Module 13: Introduction to Artificial Intelligence and Machine Learning',
            weeks: [
              // Week 58
              {
                id: 'p5-m13-w58',
                title: 'Week 58: AI Foundations',
                lessons: [
                  {
                    id: 'p5-m13-w58-l1',
                    title: 'Lesson 1: Overview of AI and its Subfields'
                  },
                  {
                    id: 'p5-m13-w58-l2',
                    title: 'Lesson 2: Supervised, Unsupervised, and Reinforcement Learning Revisited'
                  },
                  { id: 'p5-m13-w58-pe', title: 'Practical Exercise: Identify AI approaches for different business problems' }
                ]
              },
              // Week 59
              {
                id: 'p5-m13-w59',
                title: 'Week 59: Python for AI',
                lessons: [
                  {
                    id: 'p5-m13-w59-l1',
                    title: 'Lesson 1: Overview of Python Libraries: Sklearn, Tensorflow, PyTorch, and Keras'
                  },
                  {
                    id: 'p5-m13-w59-l2',
                    title: 'Lesson 2: Real-world Applications of AI and Machine Learning'
                  },
                  { id: 'p5-m13-w59-pe', title: 'Practical Exercise: Set up and compare different Python AI libraries' }
                ]
              }
            ]
          },
          // Module 14
          {
            id: 'mod-14',
            title: 'Module 14: Introduction to ANN',
            weeks: [
              // Week 60
              {
                id: 'p5-m14-w60',
                title: 'Week 60: Neural Network Fundamentals',
                lessons: [
                  {
                    id: 'p5-m14-w60-l1',
                    title: 'Lesson 1: Basics of Artificial Neuron and Activation Functions'
                  },
                  {
                    id: 'p5-m14-w60-l2',
                    title: 'Lesson 2: Perceptron'
                  },
                  { id: 'p5-m14-w60-pe', title: 'Practical Exercise: Implement a perceptron from scratch' }
                ]
              },
              // Week 61
              {
                id: 'p5-m14-w61',
                title: 'Week 61: Neural Network Architecture',
                lessons: [
                  {
                    id: 'p5-m14-w61-l1',
                    title: 'Lesson 1: Multi-layer Neural Networks'
                  },
                  {
                    id: 'p5-m14-w61-l2',
                    title: 'Lesson 2: Basics on Training Neural Networks with Gradient Descent'
                  },
                  { id: 'p5-m14-w61-pe', title: 'Practical Exercise: Implement and train a simple neural network with Keras' }
                ]
              }
            ]
          }
        ]
      },
      // Phase 6
      {
        id: 'phase-6',
        title: 'Phase 6: Integrating AI Into Full Stack Applications',
        modules: [
          // Module 15
          {
            id: 'mod-15',
            title: 'Module 15: Introduction to Deep Learning',
            weeks: [
              // Week 1 (Renumbered for Phase 6)
              {
                id: 'p6-m15-w1',
                title: 'Week 1: Deep Learning Fundamentals',
                lessons: [
                  {
                    id: 'p6-m15-w1-l1',
                    title: 'Lesson 1: Understanding Neural Networks'
                  },
                  {
                    id: 'p6-m15-w1-l2',
                    title: 'Lesson 2: Deep Learning Frameworks'
                  },
                  { id: 'p6-m15-w1-pe', title: 'Practical Exercise: Build your first neural network' }
                ]
              },
              // Week 2
              {
                id: 'p6-m15-w2',
                title: 'Week 2: Convolutional Neural Networks',
                lessons: [
                  {
                    id: 'p6-m15-w2-l1',
                    title: 'Lesson 1: CNN Architecture'
                  },
                  {
                    id: 'p6-m15-w2-l2',
                    title: 'Lesson 2: Image Processing with CNNs'
                  },
                  { id: 'p6-m15-w2-pe', title: 'Practical Exercise: Build an image classifier with Keras' }
                ]
              },
              // Week 3
              {
                id: 'p6-m15-w3',
                title: 'Week 3: Recurrent Neural Networks',
                lessons: [
                  {
                    id: 'p6-m15-w3-l1',
                    title: 'Lesson 1: RNN Architecture'
                  },
                  {
                    id: 'p6-m15-w3-l2',
                    title: 'Lesson 2: Text Processing with RNNs'
                  },
                  { id: 'p6-m15-w3-pe', title: 'Practical Exercise: Build a text classifier with Keras' }
                ]
              }
            ]
          },
          // Module 16
          {
            id: 'mod-16',
            title: 'Module 16: Integrating AI Models into Full Stack Applications',
            weeks: [
              // Week 4
              {
                id: 'p6-m16-w4',
                title: 'Week 4: Model Persistence',
                lessons: [
                  {
                    id: 'p6-m16-w4-l1',
                    title: 'Lesson 1: Model Lifecycle Management'
                  },
                  {
                    id: 'p6-m16-w4-l2',
                    title: 'Lesson 2: Saving and Loading Models'
                  },
                  { id: 'p6-m16-w4-pe', title: 'Practical Exercise: Create a model persistence pipeline' }
                ]
              },
              // Week 5
              {
                id: 'p6-m16-w5',
                title: 'Week 5: Building Model APIs',
                lessons: [
                  {
                    id: 'p6-m16-w5-l1',
                    title: 'Lesson 1: API Design for ML Models'
                  },
                  {
                    id: 'p6-m16-w5-l2',
                    title: 'Lesson 2: Creating APIs with Flask and Connexion'
                  },
                  { id: 'p6-m16-w5-pe', title: 'Practical Exercise: Create a prediction API for your model' }
                ]
              },
              // Week 6
              {
                id: 'p6-m16-w6',
                title: 'Week 6: Consuming Model APIs',
                lessons: [
                  {
                    id: 'p6-m16-w6-l1',
                    title: 'Lesson 1: Frontend Integration'
                  },
                  {
                    id: 'p6-m16-w6-l2',
                    title: 'Lesson 2: Backend Integration'
                  },
                  { id: 'p6-m16-w6-pe', title: 'Practical Exercise: Build a web application that uses your prediction API' }
                ]
              },
              // Week 7
              {
                id: 'p6-m16-w7',
                title: 'Week 7: Advanced Model Serving',
                lessons: [
                  {
                    id: 'p6-m16-w7-l1',
                    title: 'Lesson 1: Introduction to MLflow'
                  },
                  {
                    id: 'p6-m16-w7-l2',
                    title: 'Lesson 2: Deploying Models with MLflow'
                  },
                  { id: 'p6-m16-w7-pe', title: 'Practical Exercise: Deploy and serve a model using MLflow' }
                ]
              }
            ]
          },
          // Module 17
          {
            id: 'mod-17',
            title: 'Module 17: Introduction to AI-Driven Features',
            weeks: [
              // Week 8
              {
                id: 'p6-m17-w8',
                title: 'Week 8: Recommendation Systems Fundamentals',
                lessons: [
                  {
                    id: 'p6-m17-w8-l1',
                    title: 'Lesson 1: Introduction to Recommendation Systems'
                  },
                  {
                    id: 'p6-m17-w8-l2',
                    title: 'Lesson 2: Mathematical Foundations'
                  },
                  { id: 'p6-m17-w8-pe', title: 'Practical Exercise: Analyze user-item interaction data' }
                ]
              },
              // Week 9
              {
                id: 'p6-m17-w9',
                title: 'Week 9: Content-Based Recommendation',
                lessons: [
                  {
                    id: 'p6-m17-w9-l1',
                    title: 'Lesson 1: Content-Based Filtering Theory'
                  },
                  {
                    id: 'p6-m17-w9-l2',
                    title: 'Lesson 2: Building Content-Based Recommenders'
                  },
                  { id: 'p6-m17-w9-pe', title: 'Practical Exercise: Build a content-based movie recommender' }
                ]
              },
              // Week 10
              {
                id: 'p6-m17-w10',
                title: 'Week 10: Collaborative Filtering',
                lessons: [
                  {
                    id: 'p6-m17-w10-l1',
                    title: 'Lesson 1: Memory-Based Collaborative Filtering'
                  },
                  {
                    id: 'p6-m17-w10-l2',
                    title: 'Lesson 2: Challenges and Solutions'
                  },
                  { id: 'p6-m17-w10-pe', title: 'Practical Exercise: Implement a collaborative filtering system' }
                ]
              },
              // Week 11
              {
                id: 'p6-m17-w11',
                title: 'Week 11: Advanced Recommendation Techniques',
                lessons: [
                  {
                    id: 'p6-m17-w11-l1',
                    title: 'Lesson 1: Model-Based Collaborative Filtering'
                  },
                  {
                    id: 'p6-m17-w11-l2',
                    title: 'Lesson 2: Neural Approaches to Recommendations'
                  },
                  { id: 'p6-m17-w11-pe', title: 'Practical Exercise: Build a hybrid recommender system' }
                ]
              }
            ]
          },
          // Module 18
          {
            id: 'mod-18',
            title: 'Module 18: Performance Optimization and Scalability',
            weeks: [
              // Week 12
              {
                id: 'p6-m18-w12',
                title: 'Week 12: Performance Fundamentals',
                lessons: [
                  {
                    id: 'p6-m18-w12-l1',
                    title: 'Lesson 1: Understanding Performance Metrics'
                  },
                  {
                    id: 'p6-m18-w12-l2',
                    title: 'Lesson 2: Profiling AI Applications'
                  },
                  { id: 'p6-m18-w12-pe', title: 'Practical Exercise: Profile and analyze an ML application' }
                ]
              },
              // Week 13
              {
                id: 'p6-m18-w13',
                title: 'Week 13: Model and Data Optimization',
                lessons: [
                  {
                    id: 'p6-m18-w13-l1',
                    title: 'Lesson 1: AI Model Optimization'
                  },
                  {
                    id: 'p6-m18-w13-l2',
                    title: 'Lesson 2: Database Optimization'
                  },
                  { id: 'p6-m18-w13-pe', title: 'Practical Exercise: Optimize a model for faster inference' }
                ]
              },
              // Week 14
              {
                id: 'p6-m18-w14',
                title: 'Week 14: Infrastructure Scaling',
                lessons: [
                  {
                    id: 'p6-m18-w14-l1',
                    title: 'Lesson 1: Caching and Load Balancing'
                  },
                  {
                    id: 'p6-m18-w14-l2',
                    title: 'Lesson 2: Asynchronous Processing'
                  },
                  { id: 'p6-m18-w14-pe', title: 'Practical Exercise: Implement a caching layer for predictions' }
                ]
              },
              // Week 15
              {
                id: 'p6-m18-w15',
                title: 'Week 15: Monitoring and Testing',
                lessons: [
                  {
                    id: 'p6-m18-w15-l1',
                    title: 'Lesson 1: Monitoring ML Systems'
                  },
                  {
                    id: 'p6-m18-w15-l2',
                    title: 'Lesson 2: Load Testing'
                  },
                  { id: 'p6-m18-w15-pe', title: 'Practical Exercise: Create a monitoring dashboard for your AI service' }
                ]
              }
            ]
          },
           // Module 19
          {
            id: 'mod-19',
            title: 'Module 19: Generative AI Application',
            weeks: [
              // Week 16
              {
                id: 'p6-m19-w16',
                title: 'Week 16: Generative AI Fundamentals',
                lessons: [
                  {
                    id: 'p6-m19-w16-l1',
                    title: 'Lesson 1: Introduction to Generative AI'
                  },
                  {
                    id: 'p6-m19-w16-l2',
                    title: 'Lesson 2: Generative AI Use Cases'
                  },
                  { id: 'p6-m19-w16-pe', title: 'Practical Exercise: Explore a generative AI platform' }
                ]
              },
              // Week 17
              {
                id: 'p6-m19-w17',
                title: 'Week 17: Large Language Models',
                lessons: [
                  {
                    id: 'p6-m19-w17-l1',
                    title: 'Lesson 1: Evolution of Language Models'
                  },
                  {
                    id: 'p6-m19-w17-l2',
                    title: 'Lesson 2: Understanding Transformer Architecture'
                  },
                  { id: 'p6-m19-w17-pe', title: 'Practical Exercise: Experiment with a pre-trained language model' }
                ]
              },
              // Week 18
              {
                id: 'p6-m19-w18',
                title: 'Week 18: Optimizing and Deploying LLMs',
                lessons: [
                  {
                    id: 'p6-m19-w18-l1',
                    title: 'Lesson 1: Prompt Engineering'
                  },
                  {
                    id: 'p6-m19-w18-l2',
                    title: 'Lesson 2: LLM Selection and Fine-tuning'
                  },
                  { id: 'p6-m19-w18-pe', title: 'Practical Exercise: Optimize prompts for specific tasks' }
                ]
              },
              // Week 19
              {
                id: 'p6-m19-w19',
                title: 'Week 19: AI-Powered Development',
                lessons: [
                  {
                    id: 'p6-m19-w19-l1',
                    title: 'Lesson 1: AI in Software Development'
                  },
                  {
                    id: 'p6-m19-w19-l2',
                    title: 'Lesson 2: Building AI Agents'
                  },
                  { id: 'p6-m19-w19-pe', title: 'Practical Exercise: Create an AI coding assistant integration' }
                ]
              },
               // Week 20
              {
                id: 'p6-m19-w20',
                title: 'Week 20: Capstone Project',
                lessons: [
                  {
                    id: 'p6-m19-w20-l1',
                    title: 'Lesson 1: Project Planning'
                  },
                  {
                    id: 'p6-m19-w20-l2',
                    title: 'Lesson 2: Implementation and Deployment'
                  },
                  { id: 'p6-m19-w20-pe', title: 'Final Project: Deploy a full stack application with integrated AI features' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  // Add more courses here if needed
];

// Function to get a specific course by ID
export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

// Define the return type for the enriched lesson data
export type LessonWithContent = Lesson & { content: string | null };

// Function to get a specific lesson by course ID and lesson ID, now including content
export function getLessonById(courseId: string, lessonId: string): LessonWithContent | undefined {
  const course = getCourseById(courseId);
  if (!course) return undefined;

  let lessonMetadata: Lesson | undefined;

  // Find the lesson metadata within the nested structure
  for (const phase of course.learningPath) {
    for (const module of phase.modules) {
      for (const week of module.weeks) {
        lessonMetadata = week.lessons.find(l => l.id === lessonId);
        if (lessonMetadata) {
          break; // Found the lesson
        }
      }
      if (lessonMetadata) break;
    }
    if (lessonMetadata) break;
  }

  if (!lessonMetadata) {
    return undefined; // Lesson metadata not found
  }

  // Construct the path to the content file
  const filePath = path.join(process.cwd(), 'src', 'content', 'courses', courseId, `${lessonId}.md`);

  let content: string | null = null;
  try {
    // Read the file content
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    // If the file doesn't exist or there's a read error, content remains null
    console.error(`Error reading content for lesson ${lessonId}:`, error);
  }

  // Return the combined lesson metadata and content
  return {
    ...lessonMetadata,
    content,
  };
}

// Helper function to find the module ID for a given lesson ID
export function findModuleIdForLesson(course: Course, lessonId: string): string | undefined {
  for (const phase of course.learningPath) {
    for (const module of phase.modules) {
      for (const week of module.weeks) {
        if (week.lessons.some(l => l.id === lessonId)) {
          return module.id; // Found the lesson, return the module ID
        }
      }
    }
  }
  return undefined; // Lesson not found in any module
}