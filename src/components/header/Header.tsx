import { IoMenu } from 'react-icons/io5';
import { MdLanguage } from 'react-icons/md';

import logo from '../../img/logo 1.svg';

const Header = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <IoMenu />
      <MdLanguage />
      <p className="text-base font-bold tracking-tighter">
        sdfrijgirjvir
      </p>
    </div>
  );
};

export default Header;
