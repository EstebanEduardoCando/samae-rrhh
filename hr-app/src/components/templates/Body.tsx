import { ReactNode } from 'react';

interface BodyProps {
  children?: ReactNode;
}

export default function Body({ children }: BodyProps) {
  return <div className="p-6 text-gray-700">{children}</div>;
}
