import React from 'react';
import HomeContent from '../Components/home/HomeContent';
import Header from '../Components/common/Header'
import FooterComponent from '../Components/common/FooterComponent';

export default function Home() {
  return (
    <div>
      <Header/>
      <HomeContent/>
      <FooterComponent />
    </div>
  )
}
