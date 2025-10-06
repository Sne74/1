import React from 'react';
import { FaThLarge, FaBullseye, FaUsers, FaRupeeSign, FaHeadset, FaCog } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-text">DIGI</span>
        <span className="logo-accent">VOLTT</span>
      </div>

      <div className="menu">
        <div 
          className={activePage === 'dashboard' ? 'menu-item active' : 'menu-item'}
          onClick={() => setActivePage('dashboard')}
        >
          <FaThLarge className="menu-icon" />
          <span>Dashboard</span>
        </div>
      </div>

      <div className="section">
        <div className="section-title">PRE ONBOARDING</div>
        <div 
          className={activePage === 'leads' ? 'menu-item active' : 'menu-item'}
          onClick={() => setActivePage('leads')}
        >
          <FaBullseye className="menu-icon" />
          <span>Leads</span>
        </div>
      </div>

      <div className="section">
        <div className="section-title">PARTNER LIFECYCLE</div>
        <div 
          className={activePage === 'partner' ? 'menu-item active' : 'menu-item'}
          onClick={() => setActivePage('partner')}
        >
          <FaUsers className="menu-icon" />
          <span>Partner Mgmt</span>
        </div>
        <div 
          className={activePage === 'payments' ? 'menu-item active' : 'menu-item'}
          onClick={() => setActivePage('payments')}
        >
          <FaRupeeSign className="menu-icon" />
          <span>Payments</span>
        </div>
        <div 
          className={activePage === 'service' ? 'menu-item active' : 'menu-item'}
          onClick={() => setActivePage('service')}
        >
          <FaHeadset className="menu-icon" />
          <span>Service & Support</span>
        </div>
        <div 
          className={activePage === 'settings' ? 'menu-item active' : 'menu-item'}
          onClick={() => setActivePage('settings')}
        >
          <FaCog className="menu-icon" />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
