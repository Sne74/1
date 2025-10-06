import React, { useState } from 'react';
import { FaDownload, FaEllipsisV, FaChevronDown } from 'react-icons/fa';
import { serviceRequestsData } from '../data/mockData';
import './Table.css';

const ServiceRequestsTable = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Driver');

  const filterOptions = ['Driver', 'Dealer', "NBFC's", "OEM's", 'Driver(OEM)', 'Dealer(OEM)', "NBFC's(OEM)"];

  return (
    <div className="table-container">
      <div className="table-header">
        <h3 className="table-title">Service Requests (6)</h3>
        <div className="table-actions">
          <div className="dropdown-wrapper">
            <button 
              className="dropdown-btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {selectedFilter}
              <FaChevronDown style={{marginLeft: '8px', fontSize: '10px'}} />
            </button>
            {showDropdown && (
              <div className="dropdown-content">
                {filterOptions.map((option, idx) => (
                  <div 
                    key={idx} 
                    className="dropdown-option"
                    onClick={() => {
                      setSelectedFilter(option);
                      setShowDropdown(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="icon-btn"><FaDownload /></button>
          <button className="icon-btn"><FaEllipsisV /></button>
        </div>
      </div>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Driver Details</th>
              <th>Location</th>
              <th>Service Type</th>
            </tr>
          </thead>
          <tbody>
            {serviceRequestsData.map((row) => (
              <tr key={row.id}>
                <td>
                  <div className="user-cell">
                    <div className="avatar">SR</div>
                    <div>
                      <div className="user-name">{row.name}</div>
                      <div className="user-phone">{row.phone}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="location-text">{row.location}</div>
                  <div className="state-text">{row.state}</div>
                </td>
                <td>
                  <span className="service-badge">{row.serviceType}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceRequestsTable;