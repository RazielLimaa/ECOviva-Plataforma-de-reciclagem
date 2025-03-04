import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Leaf, User, MessageSquare, LogOut, LogIn, ChevronDown, Globe, Award, Users } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navbarClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-green-800/95 backdrop-blur-sm shadow-lg py-2' 
      : 'bg-transparent py-4'
  }`;

  const menuItems = [
    {
      label: 'Sobre',
      submenu: [
        { label: 'Nossa História', icon: Globe, href: '#history' },
        { label: 'Impacto Ambiental', icon: Leaf, href: '#impact' },
        { label: 'Certificações', icon: Award, href: '#certificates' },
        { label: 'Equipe', icon: Users, href: '#team' },
      ]
    },
    {
      label: 'Comunidade',
      href: '/forum'
    },
    {
      label: 'Programas',
      submenu: [
        { label: 'Reciclagem Diária', icon: Leaf, href: '/checkin' },
        { label: 'Educação Ambiental', icon: Globe, href: '#education' },
        { label: 'Parcerias', icon: Users, href: '#partners' },
      ]
    }
  ];

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
              <Leaf className="h-8 w-8 text-white relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">EcoViva</span>
              <span className="text-xs text-green-300">Sustentabilidade em Ação</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <div 
                key={item.label}
                className="relative group"
                onMouseEnter={() => setShowDropdown(item.label)}
                onMouseLeave={() => setShowDropdown('')}
              >
                {item.href ? (
                  <Link 
                    to={item.href}
                    className="nav-item flex items-center space-x-1 text-white hover:text-green-300 transition-colors py-2"
                  >
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button 
                    className="nav-item flex items-center space-x-1 text-white hover:text-green-300 transition-colors py-2"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                )}
                
                {item.submenu && showDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-lg bg-white shadow-lg overflow-hidden animate-scaleIn">
                    <div className="py-2">
                      {item.submenu.map((subItem, idx) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-green-50 transition-colors"
                          style={{
                            animation: `fadeInUp 0.2s ease forwards ${idx * 0.05}s`
                          }}
                        >
                          <subItem.icon className="h-5 w-5 text-green-600" />
                          <span className="text-gray-700">{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-3 hover:text-green-300 transition-colors group"
                >
                  {user?.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-10 h-10 rounded-full border-2 border-green-300 group-hover:border-white transition-colors"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <User className="h-6 w-6 text-white" />
                    </div>
                  )}
                  <div className="hidden md:block">
                    <p className="text-white font-medium">{user?.name}</p>
                    <p className="text-xs text-green-300">Membro Ativo</p>
                  </div>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-full bg-green-700 text-white hover:bg-green-600 transition-colors flex items-center space-x-2"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="hidden md:inline">Sair</span>
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="px-6 py-3 rounded-full bg-white text-green-700 hover:bg-green-100 transition-colors flex items-center space-x-2 maximal-shadow hover-lift"
              >
                <LogIn className="h-5 w-5" />
                <span>Entrar</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="lg:hidden border-t border-green-700 mt-4">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-around">
            <Link 
              to="/" 
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                location.pathname === '/' ? 'bg-green-700 text-white' : 'text-green-300 hover:bg-green-700/50'
              }`}
            >
              <Leaf className="h-6 w-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link 
              to="/forum" 
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                location.pathname === '/forum' ? 'bg-green-700 text-white' : 'text-green-300 hover:bg-green-700/50'
              }`}
            >
              <MessageSquare className="h-6 w-6" />
              <span className="text-xs mt-1">Fórum</span>
            </Link>
            {isAuthenticated && (
              <Link 
                to="/checkin" 
                className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                  location.pathname === '/checkin' ? 'bg-green-700 text-white' : 'text-green-300 hover:bg-green-700/50'
                }`}
              >
                <Leaf className="h-6 w-6" />
                <span className="text-xs mt-1">Check-in</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;