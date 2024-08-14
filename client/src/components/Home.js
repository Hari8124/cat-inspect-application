import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcomeMessage')}</h1>
    </div>
  );
};

export default Home;
