'use client';

import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, ArrowRight } from 'lucide-react';

const sectionsList = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' }
];

export default function Search() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<{ label: string; id: string }[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      setActiveIndex(-1);
      return;
    }
    const filtered = sectionsList.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => dropdownRef.current ? document.removeEventListener('mousedown', handleClickOutside) : undefined;
  }, []);

  // Global Ctrl + K listener
  useEffect(() => {
    const handleKeyDownGlobal = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDownGlobal);
    return () => window.removeEventListener('keydown', handleKeyDownGlobal);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    setQuery('');
    
    // Check if on Landing page or Home page. If on landing, redirect to /home#id
    if (typeof window !== 'undefined' && window.location.pathname !== '/home') {
      window.location.href = `/home#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % Math.max(suggestions.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + suggestions.length) % Math.max(suggestions.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        handleScrollTo(suggestions[activeIndex].id);
      }
    }
  };

  return (
    <div className="relative w-full max-w-[320px]" ref={dropdownRef}>
      {/* Premium glowing input container inspired by Lakshay-art */}
      <div className="group relative rounded-full p-[1px] transition-all duration-300">
        {/* Animated Glow Border background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary opacity-40 blur-[4px] group-hover:opacity-100 group-hover:blur-[8px] group-focus-within:opacity-100 group-focus-within:blur-[8px] transition-all duration-500" />
        
        {/* Inner Border layout */}
        <div className="relative flex items-center bg-bg-primary rounded-full px-5 h-[48px] border border-white/10 group-hover:border-accent-primary/50 group-focus-within:border-accent-primary transition-all duration-300">
          <SearchIcon size={16} className="text-text-muted group-focus-within:text-accent-primary mr-2.5 transition-colors" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search... (Ctrl+K)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-sm text-text-primary placeholder:text-text-muted/80 focus:outline-none"
          />
        </div>
      </div>

      {/* Auto-suggest dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-surface/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-200">
          {suggestions.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors duration-150 ${
                index === activeIndex
                  ? 'bg-accent-primary/20 text-accent-light'
                  : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
              }`}
            >
              <span>{item.label}</span>
              <ArrowRight size={14} className="opacity-60 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
