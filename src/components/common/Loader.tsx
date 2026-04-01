const Loader = () => {
  return (
    <div className="flex justify-center gap-1">
      <div className="w-3 md:w-6 h-3 md:h-6 bg-primary-yellow rounded-full animate-bounce" />
      <div className="w-3 md:w-6 h-3 md:h-6 bg-primary-yellow rounded-full animate-bounce [animation-delay:0.1s]" />
      <div className="w-3 md:w-6 h-3 md:h-6 bg-primary-yellow rounded-full animate-bounce [animation-delay:0.2s]" />
    </div>
  );
};

export default Loader;
