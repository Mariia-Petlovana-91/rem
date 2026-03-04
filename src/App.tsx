import Popap from './components/common/popap/Popup';
import i18n from 'i18next';

import Header from './components/header/Header';

const App = () => {
  return (
    <>
      <Header />
      <button onClick={() => i18n.changeLanguage('ua')}>UA</button>

      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <main>hello</main>
      <Popap />
    </>
  );
};

export default App;
