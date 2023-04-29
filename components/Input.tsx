import * as React from 'react';

interface IInputProps {
  placeholder?: string
  value?: string
  type?: string
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInputProps> = (props) => {
  return (
    <input
      disabled={props.disabled}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
      className="
        w-full
        pt-3
        pb-4
        px-4
        text-lg
        bg-slate-950
        border-2
        border-neutral-700
        rounded-md
        outline-none
        text-white
        focus:border-sky-500
        focus:border-2
        transition
        disabled:bg-neutral-800
        disabled:opacity-70
        disabled:cursor-not-allowed
      "
    />
  );
};

export default Input;
