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

// New type for course metadata in definition files
export interface CourseMetadata {
  id: string;
  title: string;
  overview: string;
  phaseIds: string[]; // Reference phases by ID
}

// New type for phase metadata in definition files
export interface PhaseMetadata {
  id: string;
  title: string;
  moduleIds: string[]; // Reference modules by ID
} 