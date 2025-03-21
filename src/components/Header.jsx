import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[60px] flex items-center justify-between px-8 shadow-md bg-white z-50 font-['Pretendard']">
      <div className="font-bold text-xl flex items-center">
        <a href="/" className="hover:text-gray-500 transition-colors">HK's PORTFOLIO</a>
      </div>

      <nav className="hidden sm:flex gap-6 font-semibold text-base ">
        <a href="#about" className="hover:text-gray-500 transition-colors">AboutMe</a>
        <a href="#skills" className="hover:text-gray-500 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-gray-500 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-gray-500 transition-colors">Contact</a>
      </nav>

      <button className="sm:hidden text-2xl" onClick={toggleMenu}>☰</button>

      {isMenuOpen && (
        <nav className="absolute top-[60px] right-0 bg-white shadow-md flex flex-col w-full py-4 space-y-4 text-center sm:hidden">
          <a href="#about" className="hover:text-gray-500 transition-colors" onClick={()=> setIsMenuOpen(false)}>AboutMe</a>
          <a href="#skills" className="hover:text-gray-500 transition-colors" onClick={()=> setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" className="hover:text-gray-500 transition-colors" onClick={()=> setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-gray-500 transition-colors" onClick={()=> setIsMenuOpen(false)}>Contact</a>
      </nav>)}
    </header>
  );
};

export default Header;



