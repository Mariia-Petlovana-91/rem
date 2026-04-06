import { FaLinkedinIn, FaGithub, FaTelegram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className=" border-t border-primary-yellow py-4 px-2 md:px-4 lg:px-6 flex flex-col gap-4 items-center justify-between  md:flex-row ">
      <ul className="">
        <li className="text-center">
          <a
            className="link"
            aria-label="go to mail"
            href="mailto:petlovanam333@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            petlovanam333@gmail.com
          </a>
        </li>
        <li className="text-center">
          <a
            className="link"
            aria-label="go to phone"
            href="tel:+48539608110"
            target="_blank"
            rel="noopener noreferrer"
          >
            +48 539 608 110
          </a>
        </li>
      </ul>
      <div>
        <p className="text-text text-center text-xs md:text-sm lg:text-base">Cook smarter with AI</p>
        <p className="text-text text-center text-xs md:text-sm lg:text-base">© 2026 AiCook</p>
      </div>
      <ul className="display flex justify-center gap-4">
        <li>
          <a
            className="icon-btn group"
            aria-label="go to author git hub"
            href="https://github.com/Mariia-Petlovana-91"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </li>
        <li>
          <a
            className="icon-btn group"
            aria-label="go to author linkedin"
            href="https://www.linkedin.com/in/mariia-petlovana-637842224"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </li>
        <li>
          <a
            className="icon-btn group"
            aria-label="go to author telegram"
            href="https://t.me/PetlovanaMariia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
