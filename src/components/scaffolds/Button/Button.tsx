import * as React from "react"

interface Button {
  variant?: "primary" | "secondary"
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Button: React.FunctionComponent<Button> = ({ variant = "primary", children, onClick }) => {
  return(
  <button 
    className={`button button-${variant}`} 
    onClick={onClick}>{children}
  </button>)
}

export { Button }