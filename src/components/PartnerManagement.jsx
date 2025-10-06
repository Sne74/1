import React, { useState } from 'react';
import { FaDownload, FaEdit, FaPhoneAlt, FaCopy, FaEye } from 'react-icons/fa';
import './PartnerManagement.css';

const partnersData = [
  { id: 1, name: "Mayank Agarwal", phone: "+91 901 964 9457", partnerId: "CDF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Active", statusColor: "#4caf50" },
  { id: 2, name: "Mayank Agarwal", phone: "+91 901 964 9457", partnerId: "CDF24D0055", date: "20 April 2025", city: "Gurgaon", status: "In- Active", statusColor: "#f44336" },
  { id: 3, name: "Mayank Agarwal", phone: "+91 901 964 9457", partnerId: "CDF24D0055", date: "20 April 2025", city: "Gurgaon", status: "In- Active", statusColor: "#f44336" },
  { id: 4, name: "Mayank Agarwal", phone: "+91 901 964 9457", partnerId: "CDF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Active", statusColor: "#4caf50" },
  { id: 5, name: "Exide Battery", partnerId: "CDF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Active", statusColor: "#4caf50", type: "battery" },
  { id: 6, name: "Premium Plus", partnerId: "CDF24D0055", date: "20 April 2025", city: "Gurgaon", status: "In- Active", statusColor: "#f44336", type: "premium" },
  { id: 7, name: "Mayank Agarwal", phone: "+91 901 964 9457", partnerId: "CDF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Active", statusColor: "#4caf50" },
  { id: 8, name: "Mayank Agarwal", phone: "+91 901 964 9457", partnerId: "CDF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Active", statusColor: "#4caf50" },
  { id: 9, name: "Mayank Agarwal", phone: "+91 901 964 9457", partnerId: "CDF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Active", statusColor: "#4caf50" },
];

const PartnerManagement = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="partner-page">
      <h1 className="page-title">Partner Management</h1>

      {/* Tabs */}
      <div className="partner-tabs">
        <button 
          className={activeTab === 'all' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('all')}
        >
          All (9)
        </button>
        <button 
          className={activeTab === 'drivers' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('drivers')}
        >
          Drivers (6)
        </button>
        <button 
          className={activeTab === 'dealers' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('dealers')}
        >
          Dealers (4)
        </button>
        <button 
          className={activeTab === 'nbfc' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('nbfc')}
        >
          NBFC's (1)
        </button>
        <button 
          className={activeTab === 'oem' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('oem')}
        >
          OEM's (6)
        </button>
        <button 
          className={activeTab === 'influencer' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('influencer')}
        >
          Influencer (5)
        </button>

        <button className="download-btn">
          <FaDownload /> Download
        </button>
      </div>

      {/* Right Sidebar */}
      <div className="partner-sidebar">
        <div className="filters-label">Filters (1)</div>
        
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
        
        <div className="filter-section">
          <h4>Sort By</h4>
          <select>
            <option>Select</option>
          </select>
        </div>

        <div className="filter-section">
          <h4>On-Time Payer</h4>
        </div>

        <div className="filter-section">
          <h4>Late Payer</h4>
        </div>

        <div className="filter-section">
          <h4>Defaulters</h4>
        </div>

        <div className="filter-section">
          <h4>Responsible Payer</h4>
        </div>

        <div className="filter-section">
          <h4>Pre-Closed</h4>
        </div>

        <div className="filter-section">
          <h4>On-Time Payer</h4>
        </div>

        <div className="filter-section">
          <h4>Late Payer</h4>
        </div>

        <div className="filter-section">
          <h4>Defaulters</h4>
        </div>

        <div className="filter-section">
          <h4>Responsible Payer</h4>
        </div>

        <div className="filter-section">
          <h4>Pre-Closed</h4>
        </div>
      </div>

      {/* Partners Table */}
      <div className="partner-table-container">
        <table className="partner-table">
          <thead>
            <tr>
              <th>Name & Details</th>
              <th>ID</th>
              <th>Date</th>
              <th>City</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {partnersData.map((partner) => (
              <tr key={partner.id}>
                <td>
                  <div className="partner-name-cell">
                    <div className="partner-avatar">
                      {partner.type === 'battery' ? '🔋' : partner.type === 'premium' ? '⚡' : partner.name.charAt(0)}
                    </div>
                    <div>
                      <div className="partner-name">{partner.name}</div>
                      {partner.phone && <div className="partner-phone">{partner.phone}</div>}
                    </div>
                  </div>
                </td>
                <td>{partner.partnerId}</td>
                <td>{partner.date}</td>
                <td>{partner.city}</td>
                <td>
                  <span className="status-badge" style={{
                    backgroundColor: partner.statusColor + '20',
                    color: partner.statusColor,
                    border: `1px solid ${partner.statusColor}`
                  }}>
                    {partner.status}
                  </span>
                </td>
                <td>
                  <div className="action-icons">
                    <button className="icon-action"><FaEdit /></button>
                    <button className="icon-action"><FaPhoneAlt /></button>
                    <button className="icon-action"><FaCopy /></button>
                    <button className="icon-action"><FaEye /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">4</button>
          <button className="page-btn">5</button>
          <button className="page-btn">›</button>
        </div>
      </div>
    </div>
  );
};

export default PartnerManagement;