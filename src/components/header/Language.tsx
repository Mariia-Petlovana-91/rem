import { MdLanguage } from 'react-icons/md';

const Language = () => {
  return (
    <button
      type="button"
      className="icon-btn group"
      aria-label="Change language"
    >
      <MdLanguage
        className="
    icon
  "
      />
    </button>
  );
};

export default Language;
