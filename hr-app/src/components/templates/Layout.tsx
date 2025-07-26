import { ReactNode, useState } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Sidebar from '../organisms/Sidebar';

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex flex-1">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
          <button className="text-left py-2 px-3 rounded hover:bg-gray-200">
            Módulo 1
          </button>
          <button className="text-left py-2 px-3 rounded hover:bg-gray-200">
            Módulo 2
          </button>
        </Sidebar>
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
