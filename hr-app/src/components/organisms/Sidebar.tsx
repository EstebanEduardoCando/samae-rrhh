import { ReactNode } from 'react';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export default function Sidebar({ open, onClose, children }: SidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-100 p-4 transform transition-transform md:static md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <button className="md:hidden mb-4" onClick={onClose} aria-label="Close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <nav className="flex flex-col space-y-2">{children}</nav>
    </aside>
  );
}
