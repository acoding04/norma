import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import { MessageSquare, Send, SquarePen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type ChatMessage, SUGGESTED_QUESTIONS } from '@/data/mock';

function TypingIndicator() {
  return (
    <div className="flex items-start gap-3">
      <div className="bg-muted flex size-8 shrink-0 items-center justify-center rounded-full">
        <MessageSquare className="text-muted-foreground size-4" />
      </div>
      <div className="py-3">
        <div className="flex gap-1">
          <span className="bg-muted-foreground/50 size-2 animate-bounce rounded-full [animation-delay:0ms]" />
          <span className="bg-muted-foreground/50 size-2 animate-bounce rounded-full [animation-delay:150ms]" />
          <span className="bg-muted-foreground/50 size-2 animate-bounce rounded-full [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}

const MOCK_RESPONSES: Record<string, string> = {
  'What risk level is our project under the EU AI Act?':
    "Based on the project description for **Finrisk**, this system would fall under **unacceptable risk** classification according to the EU AI Act.\n\nUnacceptable risk AI systems include those used for social scoring by governments, real-time biometric surveillance, and certain financial risk scoring that can discriminate against vulnerable groups. Key factors:\n\n- The system performs automated credit scoring decisions\n- It processes sensitive financial data that can affect livelihoods\n- Potential for discriminatory outcomes without adequate safeguards\n\nYou'll need to carefully evaluate whether specific use cases can be redesigned to fall under high-risk with appropriate mitigations, or whether certain applications must be prohibited.",
  'Summarize our compliance gaps':
    "Here's a summary of compliance gaps for your **Sample Project**:\n\n**Critical Gaps:**\n- **Risk Assessment** — Risk assessment for the AI system has been started but not finalized\n- **Data Quality Management** — No documented process for data quality validation in the training pipeline\n- **AI System Lifecycle** — Missing documentation on model monitoring and retraining triggers\n\n**Partial Compliance:**\n- AI Management Policy exists but needs updating for the new predictive maintenance module\n- Roles and responsibilities defined but oversight committee not yet established\n\n**Recommendations:**\n1. Complete the AI risk assessment with focus on operational impact\n2. Establish a formal AI oversight committee with defined review cadence\n3. Document data quality requirements and validation procedures for all data sources",
  'What documents are we missing for conformity assessment?':
    "For a conformity assessment under the EU AI Act, you're missing the following key documents:\n\n**Required but Missing:**\n1. **Human Oversight Plan** (Article 14) — Procedures for human intervention and monitoring of automated decisions\n2. **Conformity Assessment Report** — Formal self-assessment or third-party evaluation\n3. **Post-Market Monitoring Plan** — Ongoing surveillance of system performance\n\n**Needs Updating:**\n4. **Risk Assessment Report** — Current version doesn't cover the new fraud detection module\n5. **Technical Documentation** — Missing model validation results and bias testing reports\n\n**Available (3 of 8 required):**\n- Risk Assessment Report (partial)\n- Data Processing Impact Assessment\n- Model Transparency Report\n\nI'd recommend prioritizing the Human Oversight Plan and completing the Risk Assessment update first.",
  'Explain Article 14 human oversight requirements':
    "**Article 14 — Human Oversight** is a key requirement for high-risk AI systems under the EU AI Act.\n\n**Core Requirements:**\n- High-risk AI systems must be designed to allow effective human oversight during use\n- Natural persons assigned to oversight must be able to fully understand the system's capabilities and limitations\n- Oversight measures must be proportionate to the risks and level of autonomy\n\n**Specific Obligations:**\n1. **Interpretability** — Users must be able to interpret outputs and decide when/how to use them\n2. **Intervention** — Ability to override, reverse, or stop the system's operation\n3. **Alert mechanisms** — System must flag anomalies, errors, or unexpected behavior\n4. **Training** — Persons overseeing the system must have adequate training and competence\n\n**For Your Project:**\nGiven Finrisk's unacceptable risk classification, you need to evaluate whether the system can be redesigned with sufficient human oversight to qualify under a lower risk category, or whether certain use cases must be discontinued.",
};

export function ChatPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const lastUserMsgRef = useRef<HTMLDivElement>(null);
  const shouldScrollRef = useRef(false);
  const initialSentRef = useRef(false);

  useEffect(() => {
    if (shouldScrollRef.current && lastUserMsgRef.current) {
      requestAnimationFrame(() => {
        lastUserMsgRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
      });
      shouldScrollRef.current = false;
    }
  }, [messages]);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || isTyping) return;

      const userMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'user',
        content: text.trim(),
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setIsTyping(true);
      shouldScrollRef.current = true;

      setTimeout(() => {
        const response =
          MOCK_RESPONSES[text.trim()] ??
          "I'd be happy to help with that. Based on your project's current compliance status, I can provide detailed guidance. Could you provide more specific details about what aspect you'd like to explore?";

        const assistantMsg: ChatMessage = {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: response,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, assistantMsg]);
        setIsTyping(false);
      }, 1500);
    },
    [isTyping],
  );

  useEffect(() => {
    const q = searchParams.get('q');
    if (q && !initialSentRef.current) {
      initialSentRef.current = true;
      setSearchParams({}, { replace: true });
      sendMessage(q);
    }
  }, [searchParams, setSearchParams, sendMessage]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="flex h-svh flex-col">
      <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-base font-medium">Chat</h1>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto cursor-pointer"
          onClick={() => {
            setMessages([]);
            setIsTyping(false);
          }}
        >
          <SquarePen className="mr-1 size-4" />
          New chat
        </Button>
      </header>

      <div className="relative flex-1 overflow-hidden">
        <div className="from-background pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b to-transparent" />
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t to-transparent" />
        <ScrollArea className="h-full" ref={scrollRef}>
          {isEmpty ? (
            <div className="flex h-full flex-col items-center justify-center px-4 py-24">
              <div className="bg-primary/10 mb-6 flex size-16 items-center justify-center rounded-2xl">
                <MessageSquare className="text-primary size-8" />
              </div>
              <h2 className="mb-2 text-2xl font-semibold">Hi, I'm Norma! How can I help you?</h2>
              <p className="text-muted-foreground mb-8 max-w-lg text-center text-sm">
                Ask me about EU AI Act compliance, your project's risk classification, or any
                regulatory questions.
              </p>
              <div className="flex max-w-lg flex-col items-center gap-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="hover:bg-accent cursor-pointer rounded-full border px-4 py-2.5 text-sm transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
              {(() => {
                const lastUserIdx = messages.findLastIndex((m) => m.role === 'user');
                return messages.map((msg, idx) =>
                  msg.role === 'user' ? (
                    <div
                      key={msg.id}
                      ref={idx === lastUserIdx ? lastUserMsgRef : undefined}
                      className="flex justify-end"
                    >
                      <div className="bg-muted max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
                        {msg.content}
                      </div>
                    </div>
                  ) : (
                    <div key={msg.id} className="flex items-start gap-3">
                      <div className="bg-muted mt-1 flex size-8 shrink-0 items-center justify-center rounded-full">
                        <MessageSquare className="text-muted-foreground size-4" />
                      </div>
                      <div className="prose prose-sm dark:prose-invert max-w-none flex-1 text-foreground">
                        <Markdown>{msg.content}</Markdown>
                      </div>
                    </div>
                  ),
                );
              })()}
              {isTyping && <TypingIndicator />}
            </div>
          )}
        </ScrollArea>
      </div>

      <div className="p-4">
        <div className="mx-auto max-w-3xl">
          <div className="bg-muted/50 flex items-center gap-2 rounded-full border px-4 py-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask Norma"
              rows={1}
              className="placeholder:text-muted-foreground flex-1 resize-none bg-transparent py-1 text-sm outline-none"
            />
            <Button
              size="icon"
              variant="ghost"
              className="size-8 shrink-0 cursor-pointer"
              disabled={!input.trim() || isTyping}
              onClick={() => sendMessage(input)}
            >
              <Send className="size-4" />
            </Button>
          </div>
          <p className="text-muted-foreground mt-2 text-center text-xs">
            Norma can make mistakes. Verify important information.
          </p>
        </div>
      </div>
    </div>
  );
}
