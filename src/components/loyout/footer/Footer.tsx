import { Container } from '@/components/common';

const Footer = () => {
  return (
    <Container>
      {' '}
      <footer className="bg-[var(--bg)] border-t border-primary-yellow ">
        <p className="text-[var(--text)] text-center text-base">Cook smarter with AI</p>
        <p className="text-[var(--text)] text-sm text-center">© 2026 AiCook</p>
      </footer>
    </Container>
  );
};

export default Footer;
