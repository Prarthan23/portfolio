import  { useState } from 'react';
import NavLinks from './NavLinks';
import DropdownMenu from './DropdownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='flex gap-2 justify-between items-center px-4 py-2 bg-slate-800 text-blue-200 sticky top-0 md:h-20'>
        <div className='text-2xl text-blue-200 font-bold font-play'>
          Prarthan Parmar
        </div>
        <div className='md:hidden' onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg"  className='text-blue-200'/>
        </div>
        <div className='hidden md:flex'>
          <NavLinks />
        </div>
      </div>
      <DropdownMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default NavBar;
