import React from 'react';
import MainLayout from 'components/layout/component/main/MainLayout';
import AboutContainer from 'components/about/container/AboutContainer';
import BluredWrapper from 'HOC/BluredWrapper';

const AboutPage = () => (
  <>
    <MainLayout>
      <AboutContainer />
    </MainLayout>
  </>
);
export default AboutPage;
