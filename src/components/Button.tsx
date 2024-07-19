import React from 'react';
interface ButtonProps {
  type?: 'submit' | 'reset' | 'button' | undefined;
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
export default function Button({
  type = 'button',
  text,
  onClick,
  className,
  disabled,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`button-theme ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
