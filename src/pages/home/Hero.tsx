import Section from '@/components/common/Section';
import heloLulu from '@/pages/home/filesrt.webp';

const Hero = () => {
  return (
    <Section>
      <h1>AiCook </h1>
      <img src={heloLulu} width="240px" height="240px" />
    </Section>
  );
};

export default Hero;
