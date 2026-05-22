import { useState } from 'react';
import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { PageHeader } from '@/components/page-header';
import { MOCK_REPORTING_TAB1, type ReportingQuestion } from '@/data/mock';

function QuestionTable({ questions }: { questions: ReportingQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, string>>(() =>
    Object.fromEntries(questions.map((q) => [q.id, q.answer])),
  );

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50%]">Question</TableHead>
            <TableHead>Answer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {questions.map((q) => (
            <TableRow key={q.id}>
              <TableCell className="align-top font-medium">{q.question}</TableCell>
              <TableCell>
                <Textarea
                  value={answers[q.id] ?? ''}
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      [q.id]: e.target.value,
                    }))
                  }
                  placeholder="Enter your answer..."
                  rows={2}
                  className="min-w-[200px]"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function ReportingPage() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex h-svh flex-col">
      <PageHeader title="Reporting">
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
        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="ai-act">
            <TabsList>
              <TabsTrigger value="ai-act">EU AI Act</TabsTrigger>
            </TabsList>
            <TabsContent value="ai-act" className="mt-4">
              <QuestionTable questions={MOCK_REPORTING_TAB1} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
