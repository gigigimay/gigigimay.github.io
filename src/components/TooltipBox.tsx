import { useState } from 'react'
import classNames from 'classnames'
import {
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
} from '@floating-ui/react'
import { createPortal } from 'react-dom'

const tooltipPortalElement = document.getElementById('tooltip')!

interface TooltipBoxProps {
  show?: boolean
  padding?: number
  children?: React.ReactNode
  tooltipContent?: React.ReactNode
  tooltipClassName?: string
  className?: string
  style?: React.CSSProperties
  placement?: Placement
}

export const TooltipBox = ({
  children,
  padding = 8,
  tooltipContent,
  tooltipClassName,
  className,
  style,
  placement,
}: TooltipBoxProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(padding), flip(), shift()],
    whileElementsMounted: autoUpdate,
    placement,
  })

  const hover = useHover(context, { move: false })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  // const role = useRole(context, {
  //   // If your reference element has its own label (text).
  //   role: 'tooltip',
  //   // If your reference element does not have its own label,
  //   // e.g. an icon.
  //   role: 'label',
  // });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    // role,
  ])

  return (
    <>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className={className}
        style={style}
      >
        {children}
      </div>
      {isOpen &&
        createPortal(
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className={classNames(
              'px-4 py-2 z-40',
              'text-white mix-blend-difference backdrop-blur-md',
              tooltipClassName
            )}
          >
            {tooltipContent}
          </div>,
          tooltipPortalElement
        )}
    </>
  )
}
