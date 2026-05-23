import { useCallback, useState, type ReactNode } from 'react';
import { MOCK_PROJECTS, type Project } from '@/data/mock';
import { ProjectContext } from '@/hooks/use-project';

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [currentProject, setCurrentProject] = useState<Project | null>(MOCK_PROJECTS[0] ?? null);

  const createProject = useCallback(
    (data: Omit<Project, 'id' | 'riskClassification'>) => {
      const project: Project = {
        id: String(projects.length + 1),
        riskClassification: 'minimal',
        ...data,
      };
      setProjects((prev) => [...prev, project]);
      setCurrentProject(project);
      return project;
    },
    [projects.length],
  );

  return (
    <ProjectContext value={{ projects, currentProject, setCurrentProject, createProject }}>
      {children}
    </ProjectContext>
  );
}
