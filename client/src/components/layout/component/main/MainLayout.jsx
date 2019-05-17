import React from 'react';
import NavigationContainer from 'components/layout/container/NavigationContainer';
import LanguageContainer from 'components/language/container/LanguageContainer';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';

const MainLayout = (props) => {
  MainLayout.propTypes = {
    children: PropTypes.object.isRequired,
  };

  const { children } = props;
  return (
    <>
      <ToastContainer
        className="Toast"
        toastClassName="Toast__item"
      />
      <div className="MainLayout">
        <NavigationContainer />
        <LanguageContainer />
        {children}
      </div>
    </>
  );
};
export default MainLayout;
