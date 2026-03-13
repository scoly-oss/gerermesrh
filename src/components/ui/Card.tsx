import { HTMLAttributes } from 'react'
import { clsx } from 'clsx'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-dairia-border bg-card shadow-dairia',
        className
      )}
      {...props}
    />
  )
}
