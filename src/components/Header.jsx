import React from 'react';
import { FaBell, FaPlus } from 'react-icons/fa';
import './Header.css';

const Header = ({ activePage }) => {
  const getTitle = () => {
    if (activePage === 'leads') return 'Leads';
    if (activePage === 'partner') return 'Partner Management';
    if (activePage === 'payments') return 'Payments';
    return 'Dashboard';
  };

  return (
    <div className="header">
      <h1 className="header-title">{getTitle()}</h1>
      <div className="header-actions">
        <button className="create-btn">
          <FaPlus className="plus-icon" />
          Create Lead
        </button>
        <div className="notification-icon">
          <FaBell />
        </div>
        <div className="user-avatar">Surya</div>
      </div>
    </div>
  );
};

export default Header;