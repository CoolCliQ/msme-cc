import * as React from 'react';

type Size = 'sm' | 'md' | 'lg';
type Tone = 'soft' | 'solid' | 'outline';

type YellowPillProps = {
  children: React.ReactNode;
  size?: Size; // default: md
  tone?: Tone; // default: soft
  gradientText?: boolean; // default: true (yellow → orange text)
  iconLeft?: React.ElementType<{ className?: string }>;
  iconRight?: React.ElementType<{ className?: string }>;
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const SIZES: Record<Size, { wrap: string; text: string; icon: string }> = {
  sm: { wrap: 'px-3 py-1.5 gap-2', text: 'text-xs', icon: 'h-3 w-3' },
  md: { wrap: 'px-5 py-2 gap-2.5', text: 'text-base', icon: 'h-5 w-5' },
  lg: { wrap: 'px-6 py-3 gap-3', text: 'text-lg', icon: 'h-6 w-6' },
};

const Y_SOFT =
  'bg-yellow-50 ring-1 ring-yellow-200 text-yellow-700 ' +
  'dark:bg-yellow-400/10 dark:ring-yellow-400/30 dark:text-yellow-300';

const Y_SOLID = 'bg-yellow-500 text-black hover:bg-yellow-500/90';
const Y_OUTLINE =
  'border border-yellow-300 text-yellow-700 ' + 'dark:border-yellow-400/40 dark:text-yellow-300';

export function YellowPill({
  children,
  size = 'md',
  tone = 'soft',
  gradientText = true,
  iconLeft: IconLeft,
  iconRight: IconRight,
  className = '',
  ...rest
}: YellowPillProps) {
  const sz = SIZES[size];
  const toneCls = tone === 'soft' ? Y_SOFT : tone === 'solid' ? Y_SOLID : Y_OUTLINE;

  const base =
    `inline-flex items-center rounded-full select-none transition-colors ` +
    `${sz.wrap} ${toneCls} ${className}`;

  const textCls = gradientText
    ? `${sz.text} font-medium bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent`
    : `${sz.text} font-medium`;

  const content = (
    <>
      {IconLeft ? <IconLeft className={sz.icon + ' text-yellow-500'} /> : null}
      <span className={textCls}>{children}</span>
      {IconRight ? <IconRight className={sz.icon + ' text-yellow-500'} /> : null}
    </>
  );

  return (
    <div className={base} {...rest}>
      {content}
    </div>
  );
}
