import { Outlet } from 'react-router-dom';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-hidden overscroll-none">
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
