import type { Children } from '@/types/children';

const Container = ({ children }: Children) => {
  return <div className="p-sm md:p-xs lg:p-2xl">{children}</div>;
};

export default Container;
