import React from "react"

interface ButtonProps {
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  title: string
  end?: boolean
}
//"inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"

const Button: React.FC<ButtonProps> = ({ className, onClick, type, title, end }) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      <span className="font-medium"> {title} </span>
      {!end && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-3 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      )}
    </button>
  )
}

export default Button
