export interface Lesson {
  id: string;
  title: string;
  // content?: string; // Removed content field
  // Add other properties like videoUrl, resources, etc. later
}

export interface Week {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Module {
  id: string;
  title: string;
  weeks: Week[];
}

export interface Phase {
  id: string;
  title: string;
  modules: Module[];
}

export interface Course {
  id: string;
  title: string;
  overview: string;
  learningPath: Phase[];
} 