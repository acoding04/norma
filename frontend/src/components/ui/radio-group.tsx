import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';
import { Radio } from '@base-ui/react/radio';

import { cn } from '@/lib/utils';

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn('flex flex-col gap-3', className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, children, ...props }: Radio.Root.Props<string>) {
  return (
    <label className="flex items-center gap-2.5 text-sm">
      <Radio.Root
        data-slot="radio-group-item"
        className={cn(
          'relative flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-input transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-checked:border-primary data-checked:bg-primary',
          className,
        )}
        {...props}
      >
        <Radio.Indicator
          data-slot="radio-group-indicator"
          className="flex items-center justify-center"
          keepMounted
        >
          <span className="size-1.5 rounded-full bg-primary-foreground opacity-0 transition-opacity [[data-checked]_&]:opacity-100" />
        </Radio.Indicator>
      </Radio.Root>
      {children}
    </label>
  );
}

export { RadioGroup, RadioGroupItem };
