import { createContext, useContext } from 'react';
import type { Project } from '@/data/mock';

export interface ProjectContextValue {
  projects: Project[];
  currentProject: Project | null;
  setCurrentProject: (project: Project) => void;
  createProject: (name: string, description: string) => Project;
}

export const ProjectContext = createContext<ProjectContextValue | null>(null);

export function useProject() {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error('useProject must be used within ProjectProvider');
  return ctx;
}
