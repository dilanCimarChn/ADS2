// src/views/Parking.jsx
import React from 'react';
import './MainUsu.css';
import Headerusu from '../../components/mainusu/headerusu';
import Inform from '../../components/mainusu/inform';
import SidebarUsu from '../../components/mainusu/SidebarUsu';

const MainUsu = () => (
  <div className="parking-page">
    <SidebarUsu></SidebarUsu>
    <div className="main-content">
      <Headerusu></Headerusu>
      <Inform></Inform>
    </div>
  </div>
);

export default MainUsu;
