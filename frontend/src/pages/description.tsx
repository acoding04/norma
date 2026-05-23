import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { PageHeader } from '@/components/page-header';
import { RiskBanner } from '@/components/risk-banner';
import { SectionPanel } from '@/components/questionnaire/section-panel';
import { useProject } from '@/hooks/use-project';
import { QUESTIONNAIRE_SECTIONS } from '@/data/questionnaire';

export function DescriptionPage() {
  const { currentProject } = useProject();
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

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

  function handleAnswerChange(questionId: string, value: string | string[]) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  return (
    <div className="flex h-svh flex-col">
      <PageHeader title="Description" />

      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-4xl">
          <RiskBanner
            riskClassification={currentProject.riskClassification}
            description="This system requires full compliance with AI Act obligations before market placement."
            chatMessage="Tell me about my project's risk classification"
          />
          <Tabs defaultValue="overview">
            <TabsList className="mb-6 w-full justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {QUESTIONNAIRE_SECTIONS.map((section) => (
                <TabsTrigger key={section.id} value={section.id}>
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="overview">
              <div className="space-y-6">
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
                      <Textarea
                        id="description"
                        defaultValue={currentProject.description}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Intended Purpose</CardTitle>
                    <CardDescription>What is the system designed to do?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      defaultValue={currentProject.intendedPurpose}
                      rows={4}
                      placeholder="Describe the intended purpose of the AI system..."
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Intended Users</CardTitle>
                    <CardDescription>Who will operate or be affected by this system?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      defaultValue={currentProject.intendedUsers}
                      rows={4}
                      placeholder="Describe the intended users and affected persons..."
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Deployment Context</CardTitle>
                    <CardDescription>Where and how will the system be deployed?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      defaultValue={currentProject.deploymentContext}
                      rows={4}
                      placeholder="Describe the deployment context, sector, and geographic scope..."
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {QUESTIONNAIRE_SECTIONS.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <SectionPanel
                  section={section}
                  answers={answers}
                  onAnswerChange={handleAnswerChange}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
