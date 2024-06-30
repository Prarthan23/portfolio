const NavLinks = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <ul className='flex flex-col md:flex-row gap-6  font-semibold '>
        <li className='hover:text-teal-400 hover:cursor-pointer' onClick={() => scrollToSection('home')}>Home</li>
        <li className='hover:text-teal-400 hover:cursor-pointer' onClick={() => scrollToSection('skills')}>Skills</li>
        <li className='hover:text-teal-400 hover:cursor-pointer' onClick={() => scrollToSection('internships')}>Internships</li>
        <li className='hover:text-teal-400 hover:cursor-pointer' onClick={() => scrollToSection('projects')}>Projects</li>
        <li className='hover:text-teal-400 hover:cursor-pointer' onClick={() => scrollToSection('connect')}>Connect with me</li>
      </ul>
    </div>
  );
};

export default NavLinks;
