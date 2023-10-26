import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputPrefixProps = ComponentProps<'div'>

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function Control(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 font-normal text-white placeholder-gray_hard outline-none"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-2 rounded-md bg-inputs px-3 py-2',
        'focus-within:border-amber-600 focus-within:ring-2 focus-within:ring-orange',
        props.className,
      )}
      {...props}
    />
  )
}
