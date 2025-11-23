import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', page: 'Home' },
    { name: 'Demo Challenge', page: 'DailyChallenge' },
    { name: 'Rankings', page: 'Rankings' },
    { name: 'Courses', page: 'Courses' },
    { name: 'FAQ', page: 'FAQ' },
    { name: 'About', page: 'About' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      <style>{`
        :root {
          --primary-violet: #6366f1;
          --deep-violet: #7c3aed;
          --lavender: #c4b5fd;
          --lilac: #e9d5ff;
          --plum: #581c87;
          --soft-white: #fafafa;
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-2 group">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921857e8fc0035b3de52109/0944079e1_Prompty_nobg1.png" 
                alt="Prompty Logo" 
                className="w-10 h-10 object-contain transform group-hover:scale-105 transition-transform"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Prompty AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    currentPageName === item.page
                      ? 'bg-violet-100 text-violet-700'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-1 border-t border-purple-100">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    currentPageName === item.page
                      ? 'bg-violet-100 text-violet-700'
                      : 'text-gray-700 hover:bg-purple-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-8rem)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-violet-900 to-purple-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921857e8fc0035b3de52109/0944079e1_Prompty_nobg1.png" 
                  alt="Prompty Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-bold">Prompty AI</span>
              </div>
              <p className="text-purple-200 text-sm">
                Master prompt engineering through interactive challenges
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className="block text-purple-200 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold mb-4">Social Media</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-sm">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-sm">gh</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-300 text-sm">
            © {new Date().getFullYear()} Prompty AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}