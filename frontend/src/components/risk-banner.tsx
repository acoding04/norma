import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Ban, Info, MessageSquare, ShieldAlert } from 'lucide-react';

const RISK_CONFIG: Record<string, { label: string; icon: typeof Ban; className: string }> = {
  unacceptable: {
    label: 'Unacceptable Risk',
    icon: Ban,
    className: 'border-destructive/30 bg-destructive/10 text-destructive',
  },
  high: {
    label: 'High Risk',
    icon: ShieldAlert,
    className: 'border-orange-500/30 bg-orange-500/10 text-orange-700 dark:text-orange-400',
  },
  limited: {
    label: 'Limited Risk',
    icon: AlertTriangle,
    className: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
  },
  minimal: {
    label: 'Minimal Risk',
    icon: Info,
    className: 'border-primary/30 bg-primary/10 text-primary',
  },
};

interface RiskBannerProps {
  riskClassification: string;
  description: string;
  chatMessage: string;
}

export function RiskBanner({ riskClassification, description, chatMessage }: RiskBannerProps) {
  const navigate = useNavigate();
  const config = RISK_CONFIG[riskClassification];
  if (!config) return null;

  return (
    <div className={`mb-6 flex items-center gap-3 rounded-lg border px-4 py-3 ${config.className}`}>
      <config.icon className="size-5 shrink-0" />
      <div className="flex-1">
        <p className="text-sm font-semibold">{config.label}</p>
        <p className="text-xs opacity-80">{description}</p>
      </div>
      <div
        className="flex cursor-pointer items-center gap-1.5 rounded-md border border-current/30 px-2.5 py-1.5 hover:bg-current/5"
        onClick={() => navigate(`/chat?q=${encodeURIComponent(chatMessage)}`)}
      >
        <MessageSquare className="size-4" />
        <span className="text-xs font-medium">Ask Norma</span>
      </div>
    </div>
  );
}
