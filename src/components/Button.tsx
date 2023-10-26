import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-md transition-colors px-4 py-2 text-base font-medium outline-none ',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  variants: {
    variant: {
      primary: 'bg-orange text-background enabled:hover:bg-amber-600',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button className={button({ variant, className })} {...props}>
      {props.children}
    </button>
  )
}
