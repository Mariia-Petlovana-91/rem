import Section from '@/components/common/Section';
import heloLulu from '@/pages/home/herodesk.png';
import { Loader } from '@/components';

const Hero = () => {
  return (
    <Section>
      <h1>AiCook </h1>
      <img src={heloLulu} width="100px" height="80px" />
      <Loader />
    </Section>
  );
};

export default Hero;
