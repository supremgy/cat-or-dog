import React from 'react';
interface ButtonProps {
  type?: 'submit' | 'reset' | 'button' | undefined;
  text: string;
  onClick?: () => void;
  className?: string;
}
export default function Button({
  type = 'button',
  text,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`button-theme ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
