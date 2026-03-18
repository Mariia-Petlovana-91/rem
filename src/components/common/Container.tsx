import type { Children } from '@/types/children';

const Container = ({ children }: Children) => {
  return <div className="w-full overflow-x-hidden py-2 md:py-4 lg:py-6">{children}</div>;
};

export default Container;
