// src/views/Reportar.jsx
import React from 'react';
import ReportarHeader from '../../components/ReportarProblema/ReportarHeader';
import './ReportarF.css';
import SidebarUsu from '../../components/mainusu/SidebarUsu';
import Reportar from '../../components/ReportarProblema/Reportar';

const ReportarF = () => (
  <div className="reportar-page">
    <SidebarUsu></SidebarUsu>
    <div className="main-content">
      <ReportarHeader></ReportarHeader>
      <Reportar></Reportar>
    </div>
  </div>
);

export default ReportarF;
