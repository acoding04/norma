import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import type { QuestionnaireSection } from '@/data/questionnaire';

interface SectionPanelProps {
  section: QuestionnaireSection;
  answers: Record<string, string | string[]>;
  onAnswerChange: (questionId: string, value: string | string[]) => void;
}

export function SectionPanel({ section, answers, onAnswerChange }: SectionPanelProps) {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground text-sm">{section.description}</p>

      {section.questions.map((question) => (
        <Card key={question.id}>
          <CardHeader>
            <CardTitle className="text-base font-medium">{question.text}</CardTitle>
            {question.helperText && <CardDescription>{question.helperText}</CardDescription>}
          </CardHeader>
          <CardContent>
            {question.inputType === 'radio' ? (
              <RadioGroup
                value={(answers[question.id] as string) ?? null}
                onValueChange={(value) => onAnswerChange(question.id, value as string)}
              >
                {question.options.map((option) => (
                  <RadioGroupItem key={option.value} value={option.value}>
                    {option.label}
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            ) : (
              <div className="flex flex-col gap-3">
                {question.options.map((option) => {
                  const selected = (answers[question.id] as string[]) ?? [];
                  return (
                    <Checkbox
                      key={option.value}
                      checked={selected.includes(option.value)}
                      onCheckedChange={(checked) => {
                        const next = checked
                          ? [...selected, option.value]
                          : selected.filter((v) => v !== option.value);
                        onAnswerChange(question.id, next);
                      }}
                    >
                      {option.label}
                    </Checkbox>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
