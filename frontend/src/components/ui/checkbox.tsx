import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Checkbox({
  className,
  children,
  ...props
}: CheckboxPrimitive.Root.Props) {
  return (
    <label className="flex items-center gap-2.5 text-sm">
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        className={cn(
          'flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-sm border border-input transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground',
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center"
          keepMounted
        >
          <CheckIcon className="size-3 opacity-0 [[data-checked]_&]:opacity-100" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {children}
    </label>
  );
}

export { Checkbox };
