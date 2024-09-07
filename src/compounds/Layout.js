import React from 'react';
import WebsInfo from './WebsInfo.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Layout(props) {
    const { children } = props;
  return (
    <div>
      <Header></Header>
      { children }
      <Footer></Footer>
    </div>
  )
}
