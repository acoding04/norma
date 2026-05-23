import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import type { ChecklistArea } from '@/data/reporting-checklist';

interface ChecklistPanelProps {
  area: ChecklistArea;
  comments: Record<string, string>;
  onCommentChange: (key: string, value: string) => void;
}

export function ChecklistPanel({ area, comments, onCommentChange }: ChecklistPanelProps) {
  return (
    <div className="space-y-6">
      {area.items.map((item) => (
        <Card key={item.code}>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              <span className="text-muted-foreground mr-2">{item.code}</span>
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {item.questions.map((question, idx) => {
              const key = `${area.id}-${item.code}-${idx}`;
              return (
                <div key={key} className="space-y-1.5">
                  <p className="text-sm">{question}</p>
                  <Textarea
                    value={comments[key] ?? ''}
                    onChange={(e) => onCommentChange(key, e.target.value)}
                    placeholder="Add a comment..."
                    rows={2}
                  />
                </div>
              );
            })}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
