
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Trophy, 
  Users, 
  BarChart, 
  Clipboard, 
  DollarSign, 
  Tag,
  Award
} from 'lucide-react';

const FootballNav = () => {
  const location = useLocation();
  
  const navItems = [
    {
      name: 'Dashboard',
      path: '/',
      icon: <Clipboard className="w-5 h-5" />
    },
    {
      name: 'Matches',
      path: '/matches',
      icon: <Trophy className="w-5 h-5" />
    },
    {
      name: 'Teams',
      path: '/teams',
      icon: <Users className="w-5 h-5" />
    },
    {
      name: 'Analytics',
      path: '/football-analytics',
      icon: <BarChart className="w-5 h-5" />
    },
    {
      name: 'Tournaments',
      path: '/tournaments',
      icon: <Award className="w-5 h-5" />
    },
    {
      name: 'Transfers',
      path: '/transfers',
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      name: 'Auctions',
      path: '/auctions',
      icon: <Tag className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-white shadow-sm border-b sticky top-16 z-10">
      <div className="container mx-auto px-4">
        <nav className="flex items-center overflow-x-auto py-0">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-4 border-b-2 whitespace-nowrap ${
                location.pathname === item.path
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-300'
              }`}
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default FootballNav;
