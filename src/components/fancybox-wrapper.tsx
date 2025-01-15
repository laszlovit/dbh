'use client'

import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { type ReactNode, useEffect, useRef } from 'react'

interface FancyboxProps {
  children: ReactNode
  delegate?: string
  options?: object
  className?: string
}

function Fancybox({
  children,
  delegate = '[data-fancybox]',
  options = {},
  className = '',
}: FancyboxProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current

    if (container) {
      NativeFancybox.bind(container, delegate, options)
    }

    return () => {
      if (container) {
        NativeFancybox.unbind(container)
        NativeFancybox.close()
      }
    }
  }, [delegate, options])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export default Fancybox
