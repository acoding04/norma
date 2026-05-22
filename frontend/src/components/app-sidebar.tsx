import { useLocation, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  ChevronsUpDown,
  FileText,
  LayoutGrid,
  LogOut,
  MessageSquare,
  Plus,
  Plug,
  ScrollText,
  Settings,
  Shield,
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useProject } from '@/hooks/use-project';

const RISK_LABELS: Record<string, string> = {
  unacceptable: 'Unacceptable Risk',
  high: 'High Risk',
  limited: 'Limited Risk',
  minimal: 'Minimal Risk',
};

const NAV_GENERAL = [{ title: 'Chat', icon: MessageSquare, path: '/chat' }];

const NAV_PROJECT = [
  { title: 'Description', icon: BookOpen, path: '/description' },
  { title: 'Documents', icon: FileText, path: '/documents' },
  { title: 'Reporting', icon: ScrollText, path: '/reporting' },
];

const NAV_CONFIG = [
  { title: 'Integrations', icon: Plug, path: '/integrations' },
  { title: 'Frameworks', icon: Shield, path: '/frameworks' },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { projects, currentProject, setCurrentProject } = useProject();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="pointer-events-none justify-center overflow-visible">
              <span className="border-primary border-b-2 pb-1 text-2xl font-semibold group-data-[collapsible=icon]:hidden">Norma</span>
              <span className="border-primary hidden border-b-2 pb-1 text-2xl font-semibold group-data-[collapsible=icon]:block">N</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    className="data-[popup-open]:bg-sidebar-accent mt-1 h-14 border border-sidebar-border"
                  />
                }
              >
                <div className="bg-muted flex aspect-square size-8 items-center justify-center rounded-lg">
                  <LayoutGrid className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {currentProject?.name ?? 'No project'}
                  </span>
                  <span className="text-sidebar-foreground truncate text-xs">
                    {currentProject?.riskClassification
                      ? RISK_LABELS[currentProject.riskClassification]
                      : 'Select a project'}
                  </span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-56" align="start" side="bottom" sideOffset={4}>
                {projects.map((project) => (
                  <DropdownMenuItem key={project.id} onClick={() => setCurrentProject(project)}>
                    {project.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/new-project')}>
                  <Plus className="mr-2 size-4" />
                  New Project
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_GENERAL.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    isActive={location.pathname === item.path}
                    onClick={() => navigate(item.path)}
                    tooltip={item.title}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Project</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_PROJECT.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    isActive={location.pathname === item.path}
                    onClick={() => navigate(item.path)}
                    tooltip={item.title}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Configuration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_CONFIG.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    isActive={location.pathname === item.path}
                    onClick={() => navigate(item.path)}
                    tooltip={item.title}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <Separator className="bg-sidebar-border mx-0" />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger render={<SidebarMenuButton size="lg" />}>
                <Avatar className="size-8">
                  <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground text-xs">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Jane Doe</span>
                  <span className="text-sidebar-foreground truncate text-xs">
                    jane.doe@company.com
                  </span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-56" align="end" side="top" sideOffset={4}>
                <DropdownMenuItem onClick={() => navigate('/settings')}>
                  <Settings className="mr-2 size-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 size-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
