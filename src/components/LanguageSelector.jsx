import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { playSound } from '../utils/soundFx';

export default function LanguageSelector({ isMobile = false }) {
  const { currentLang, activeLangConfig, supportedLanguages, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (langCode) => {
    playSound('click');
    setLanguage(langCode);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    playSound('click');
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`lang-selector-container ${isMobile ? 'mobile-lang-selector' : ''}`} ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-label={t('nav_choose_lang', 'Choose Language')}
        className="lang-selector-btn"
        style={{
          height: isMobile ? '38px' : '36px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid var(--border-color)',
          backdropFilter: 'blur(12px)',
          color: 'var(--text-primary)',
          padding: isMobile ? '0 14px' : '0 12px',
          borderRadius: '18px',
          fontSize: '0.82rem',
          fontWeight: 700,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'all 0.25s ease',
          boxShadow: isOpen ? '0 0 15px rgba(99, 102, 241, 0.25)' : 'none',
          borderColor: isOpen ? 'var(--accent-color)' : 'var(--border-color)'
        }}
      >
        <Globe size={14} color="var(--accent-color)" />
        <span style={{ fontSize: '0.95rem' }}>{activeLangConfig.flag}</span>
        <span style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>{activeLangConfig.code}</span>
        <ChevronDown
          size={13}
          style={{
            transition: 'transform 0.25s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            opacity: 0.7
          }}
        />
      </button>

      {isOpen && (
        <div
          className="lang-dropdown-menu"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: activeLangConfig.dir === 'rtl' ? 'auto' : 0,
            left: activeLangConfig.dir === 'rtl' ? 0 : 'auto',
            minWidth: '185px',
            background: 'var(--bg-card-glass, rgba(12, 16, 28, 0.95))',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '6px',
            zIndex: 1100,
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 255, 204, 0.15)',
            animation: 'fadeInSlide 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div style={{
            padding: '6px 10px 4px',
            fontSize: '0.7rem',
            fontWeight: 800,
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            borderBottom: '1px solid var(--border-color)',
            marginBottom: '4px'
          }}>
            {t('nav_select_lang', 'Select Language')}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', maxHeight: '280px', overflowY: 'auto' }}>
            {supportedLanguages.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '10px',
                    border: 'none',
                    background: isSelected ? 'rgba(0, 255, 204, 0.12)' : 'transparent',
                    color: isSelected ? 'var(--accent-color)' : 'var(--text-primary)',
                    fontSize: '0.84rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    textAlign: lang.dir === 'rtl' ? 'right' : 'left'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.1rem' }}>{lang.flag}</span>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.2 }}>
                      <span style={{ fontSize: '0.84rem', fontWeight: 600 }}>{lang.nativeName}</span>
                      <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{lang.name}</span>
                    </div>
                  </div>
                  {isSelected && <Check size={14} color="var(--accent-color)" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
