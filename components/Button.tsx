import * as React from 'react';

interface IButtonProps {
  label: string
  secondary?: boolean
  fullWidth?: boolean
  large?: boolean
  disabled?: boolean
  outlined?: boolean
  onClick: () => void
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        border-2
        ${props.fullWidth ? "w-full" : "w-fit"}
        ${props.secondary ? "bg-white text-slate-950 border-slate-950" : "bg-sky-500 text-white border-sky-500"}
        ${props.large ? "text-xl px-5 pt-2 pb-3" : "text-md px-4 pt-1 pb-2"}
        ${props.outlined ? "bg-transparent border-white text-white" : ""}
      `}
    >
      {props.label}
    </button>
  );
};

export default Button;
