
export enum UserRole {
  PARENT = 'Parent',
  TEACHER = 'Teacher',
  STUDENT = 'Student',
  PRINCIPAL = 'Principal'
}

export enum ResourceType {
  LINK = 'Video/Web Link',
  FILE = 'Document/Media'
}

export interface School {
  id: string;
  name: string;
  logoUrl: string;
  level?: 'Primary' | 'Secondary';
}

export interface User {
  id: string;
  name: string;
  surname?: string; 
  role: UserRole;
  relationship?: string; 
  grade: string; 
  classLetter?: string; 
  avatar: string;
  coverImage?: string; 
  email?: string;
  password?: string; 
  allowedGrades?: string[]; 
  selectedSubjects?: string[]; 
  school?: string;
  schoolId?: string;
  schoolLogo?: string;
  funFact?: string; 
  parentId?: string;
  idNumber?: string;
  allergens?: string;
  dob?: string;
  contactNumber?: string;
  siblingsInfo?: string;
  isPaid?: boolean;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  schoolId: string;
  authorName: string;
  timestamp: number;
}

export interface Comment {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  timestamp: number;
}

export interface StudentCompletion {
  studentDone: boolean;
  parentSigned: boolean;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  dueTime?: string;
  subject: string;
  grade: string;
  isCompleted: boolean;
  parentConfirmation: boolean;
  completions?: Record<string, StudentCompletion>;
  teacherKey?: string;
  comments: Comment[];
  attachments: { url: string; name: string; type: string }[];
  thumbnailUrl?: string; // New: For the card preview
  metadata?: string;    // New: e.g. "Worksheet included"
  schoolId: string;
  timestamp: number;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  role: UserRole;
  content: string;
  timestamp: number;
  grade: string;
  schoolId: string;
}

export interface Conversation {
  id: string;
  participants: string[];
  participantNames: Record<string, string>;
  participantAvatars: Record<string, string>;
  lastMessage: string;
  lastTimestamp: number;
  schoolId: string;
}

export interface DirectMessage {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: number;
  participants: string[];
}

export interface Resource {
  id: string;
  title: string;
  subject: string;
  type: ResourceType;
  description: string;
  url?: string;
  thumbnailUrl?: string; 
  metadata?: string;    
  fileName?: string;
  authorName: string;
  grade: string;
  schoolId: string;
  timestamp: number;
}

export interface YearbookImage {
  url: string;
  caption: string;
}

export interface YearbookEntry {
  id: string;
  type: 'single' | 'album';
  title?: string;
  description?: string;
  images: YearbookImage[];
  authorId: string;
  authorName: string;
  timestamp: number;
  grade: string;
  likes: string[];
  schoolId: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  authorName: string;
  date: string;
  priority: 'Normal' | 'High';
  schoolId: string; 
}

export interface YearbookConfig {
  coverImage: string | null;
  principalMessage: string;
  principalPhoto: string | null;
  customPages?: string[]; 
  manualSections?: Record<string, string>; 
}

export type AlertType = 'Absent' | 'Sick' | 'Late';

export interface Alert {
  id: string;
  studentId: string;
  studentName: string;
  teacherId: string; 
  teacherName: string; 
  type: AlertType;
  date: string; 
  timestamp: number;
  grade: string;
  comments: Comment[];
  acknowledged: boolean; 
  resolved?: boolean; 
  schoolId: string;
}
