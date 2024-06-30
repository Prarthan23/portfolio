import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import NavLinks from './NavLinks';

// eslint-disable-next-line react/prop-types
const DropdownMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`fixed top-12 left-0 w-full h-64 bg-slate-800 bg-opacity-50 z-50 ${isOpen ? 'block' : 'hidden'} md:hidden lg:hidden`}>
      <div className=' bg-slate-900 w-full bg-opacity-75 h-80 p-4 text-blue-200'>
        <button onClick={toggleMenu} className='mb-4'>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <div onClick={toggleMenu}>
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
