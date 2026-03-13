'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-dairia-orange/30',
          {
            'bg-dairia-orange text-white hover:bg-dairia-orange-dark': variant === 'default',
            'border border-dairia-orange text-dairia-orange hover:bg-dairia-orange/5': variant === 'outline',
            'bg-dairia-surface text-dairia-navy hover:bg-dairia-border': variant === 'secondary',
            'text-dairia-secondary hover:text-dairia-navy hover:bg-dairia-surface': variant === 'ghost',
          },
          {
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-5 text-sm': size === 'md',
            'h-12 px-6 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
