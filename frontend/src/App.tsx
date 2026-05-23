import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AppLayout } from '@/components/app-layout';
import { ProjectProvider } from '@/components/project-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { ChatPage } from '@/pages/chat';
import { DescriptionPage } from '@/pages/description';
import { DocumentsPage } from '@/pages/documents';
import { FrameworksPage } from '@/pages/frameworks';
import { IntegrationsPage } from '@/pages/integrations';
import { ReportingPage } from '@/pages/reporting';
import { SettingsPage } from '@/pages/settings';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ProjectProvider>
          <TooltipProvider>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate to="/chat" replace />} />
                <Route path="chat" element={<ChatPage />} />
                <Route path="description" element={<DescriptionPage />} />
                <Route path="documents" element={<DocumentsPage />} />
                <Route path="reporting" element={<ReportingPage />} />
                <Route path="integrations" element={<IntegrationsPage />} />
                <Route path="frameworks" element={<FrameworksPage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
            </Routes>
          </TooltipProvider>
        </ProjectProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
