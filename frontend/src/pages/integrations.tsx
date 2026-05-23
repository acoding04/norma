import { useState } from 'react';
import { BookOpen, GitBranch, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/page-header';
import { MOCK_INTEGRATIONS, type Integration } from '@/data/mock';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GitBranch,
  ticket: Ticket,
  'book-open': BookOpen,
};

export function IntegrationsPage() {
  const [integrations, setIntegrations] = useState<Integration[]>(MOCK_INTEGRATIONS);

  const toggle = (id: string) => {
    setIntegrations((prev) =>
      prev.map((i) => (i.id === id ? { ...i, connected: !i.connected } : i)),
    );
  };

  return (
    <div className="flex h-svh flex-col">
      <PageHeader title="Integrations" />

      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-4xl space-y-4">
          {integrations.map((integration) => {
            const Icon = ICON_MAP[integration.icon];
            return (
              <Card key={integration.id}>
                <CardHeader className="flex-row items-start gap-4 space-y-0">
                  <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-lg">
                    {Icon && <Icon className="size-5" />}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">{integration.name}</CardTitle>
                    <CardDescription className="mt-1">{integration.description}</CardDescription>
                  </div>
                  <Button
                    variant={integration.connected ? 'outline' : 'default'}
                    size="sm"
                    onClick={() => toggle(integration.id)}
                  >
                    {integration.connected ? 'Disconnect' : 'Connect'}
                  </Button>
                </CardHeader>
                {integration.connected && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm">Connected and syncing.</p>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
