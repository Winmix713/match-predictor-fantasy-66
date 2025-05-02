
import React from 'react';
import Header from '@/components/Header';
import FootballNav from '@/components/FootballNav';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <FootballNav />
      <div className="pt-4">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
