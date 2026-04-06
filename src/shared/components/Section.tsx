import type { Children } from '@/types/children';

const Section = ({ children }: Children) => {
  return <section className="pb-6 md:pb-12 lg:pb-16">{children}</section>;
};
export default Section;
