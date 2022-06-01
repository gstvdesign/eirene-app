import React from "react"

export const FunctionLink = React.forwardRef(function FunctionLink({ onClick, href, children }, ref) {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      {children}
    </a>
  )
})