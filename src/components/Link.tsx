import LinkNext from 'next/link'
import { ComponentProps, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const link = tv({
  base: 'cursor-pointer text-center',
  variants: {
    type: {
      default: 'text-center',
      withIcon: 'flex items-center gap-2',
    },
    color: {
      primary: 'text-white',
      secondary: 'text-orange hover:bg-amber-600',
    },
  },
  defaultVariants: {
    type: 'default',
    color: 'primary',
  },
})

type LinkProps = ComponentProps<typeof LinkNext> &
  VariantProps<typeof link> & { children: ReactNode }

export function Link({
  type,
  color,
  children,
  className,
  ...props
}: LinkProps) {
  return (
    <LinkNext className={link({ type, color, className })} href={props.href}>
      {children}
    </LinkNext>
  )
}
