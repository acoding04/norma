import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageHeader } from '@/components/page-header';
import { RiskBanner } from '@/components/risk-banner';
import { ChecklistPanel } from '@/components/reporting/checklist-panel';
import { useProject } from '@/hooks/use-project';
import { REPORTING_CHECKLIST } from '@/data/reporting-checklist';

export function ReportingPage() {
  const { currentProject } = useProject();
  const [comments, setComments] = useState<Record<string, string>>({});

  function handleCommentChange(key: string, value: string) {
    setComments((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="flex h-svh flex-col">
      <PageHeader title="Reporting" />

      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-4xl">
          {currentProject && (
            <RiskBanner
              riskClassification={currentProject.riskClassification}
              description="Complete the compliance checklist for each requirement area of the EU AI Act."
              chatMessage="What are the key reporting requirements for our project?"
            />
          )}

          <Tabs defaultValue={REPORTING_CHECKLIST[0].id}>
            <TabsList className="mb-6 w-full justify-start">
              {REPORTING_CHECKLIST.map((area) => (
                <TabsTrigger key={area.id} value={area.id}>
                  {area.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {REPORTING_CHECKLIST.map((area) => (
              <TabsContent key={area.id} value={area.id}>
                <ChecklistPanel
                  area={area}
                  comments={comments}
                  onCommentChange={handleCommentChange}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
