import { useState } from 'react';
import { FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PageHeader } from '@/components/page-header';
import { MOCK_FRAMEWORKS, type Framework } from '@/data/mock';

const STATUS_VARIANT: Record<string, 'default' | 'secondary' | 'outline'> = {
  active: 'default',
  draft: 'secondary',
  inactive: 'outline',
};

export function FrameworksPage() {
  const [selected, setSelected] = useState<Framework | null>(null);

  return (
    <div className="flex h-svh flex-col">
      <PageHeader title="Frameworks" />

      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_FRAMEWORKS.map((fw) => (
            <Card
              key={fw.id}
              className="cursor-pointer transition-shadow hover:shadow-md"
              onClick={() => setSelected(fw)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">{fw.name}</CardTitle>
                  <Badge variant={STATUS_VARIANT[fw.status] ?? 'outline'}>{fw.status}</Badge>
                </div>
                <CardDescription className="text-xs">{fw.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground flex items-center gap-1 text-sm">
                  <FileText className="size-4" />
                  {fw.documentCount} document{fw.documentCount !== 1 && 's'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <DialogTitle>{selected.name}</DialogTitle>
                  <Badge variant={STATUS_VARIANT[selected.status] ?? 'outline'}>
                    {selected.status}
                  </Badge>
                </div>
                <DialogDescription>{selected.category}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed">{selected.description}</p>
                <div className="text-muted-foreground flex items-center gap-1 text-sm">
                  <FileText className="size-4" />
                  {selected.documentCount} associated document
                  {selected.documentCount !== 1 && 's'}
                </div>
                <div className="flex justify-end">
                  <Button variant="outline" onClick={() => setSelected(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
