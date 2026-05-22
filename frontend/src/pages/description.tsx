import { useState } from 'react';
import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { PageHeader } from '@/components/page-header';
import { useProject } from '@/hooks/use-project';

export function DescriptionPage() {
  const { currentProject } = useProject();
  const [saved, setSaved] = useState(false);

  if (!currentProject) {
    return (
      <div className="flex h-svh flex-col">
        <PageHeader title="Description" />
        <div className="flex flex-1 items-center justify-center">
          <p className="text-muted-foreground">Select or create a project to get started.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-svh flex-col">
      <PageHeader title="Description">
        <Button
          size="sm"
          onClick={() => {
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
          }}
        >
          <Save className="mr-1 size-4" />
          {saved ? 'Saved' : 'Save'}
        </Button>
      </PageHeader>

      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-2xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Summary</CardTitle>
              <CardDescription>Basic information about the AI system.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue={currentProject.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" defaultValue={currentProject.description} rows={3} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="risk">Risk Classification</Label>
                <Select defaultValue={currentProject.riskClassification}>
                  <SelectTrigger id="risk">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unacceptable">Unacceptable</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="limited">Limited</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Motivation</CardTitle>
              <CardDescription>Why is this AI system being developed?</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                defaultValue={currentProject.motivation}
                rows={4}
                placeholder="Describe the motivation..."
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scope</CardTitle>
              <CardDescription>What does this system cover?</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                defaultValue={currentProject.scope}
                rows={4}
                placeholder="Define the scope..."
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vision</CardTitle>
              <CardDescription>What is the target outcome?</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                defaultValue={currentProject.vision}
                rows={4}
                placeholder="Describe the vision..."
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
