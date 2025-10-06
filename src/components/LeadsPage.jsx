import React, { useState } from 'react';
import { FaDownload, FaEdit, FaPhoneAlt, FaCopy, FaEye } from 'react-icons/fa';
import './LeadsPage.css';

const leadsData = [
  { id: 1, name: "Mayank Agarwal", phone: "+91 901 964 9457", leadId: "1234", category: "V+B", city: "Gurgaon", date: "12 April 2025", status: "Cold", color: "#4caf50" },
  { id: 2, name: "Mayank Agarwal", phone: "+91 901 964 9457", leadId: "1234", category: "V+B", city: "Gurgaon", date: "12 April 2025", status: "Unable to Connect", color: "#ff9800" },
  { id: 3, name: "Mayank Agarwal", phone: "+91 901 964 9457", leadId: "1234", category: "V+B", city: "Gurgaon", date: "12 April 2025", status: "Warm", color: "#ffc107" },
  { id: 4, name: "Mayank Agarwal", phone: "+91 901 964 9457", leadId: "1234", category: "V+B", city: "Gurgaon", date: "12 April 2025", status: "Cold", color: "#4caf50" },
  { id: 5, name: "Mayank Agarwal", phone: "+91 901 964 9457", leadId: "1234", category: "V+B", city: "Gurgaon", date: "12 April 2025", status: "Unable to Connect", color: "#ff9800" },
  { id: 6, name: "Mayank Agarwal", phone: "+91 901 964 9457", leadId: "1234", category: "V+B", city: "Gurgaon", date: "12 April 2025", status: "Warm", color: "#ffc107" },
  { id: 7, name: "Mayank Agarwal", phone: "+91 901 964 9457", leadId: "1234", category: "V+B", city: "Gurgaon", date: "12 April 2025", status: "Cold", color: "#4caf50" },
  { id: 8, name: "Mayank Agarwal", phone: "+91 901 964 9457", leadId: "1234", category: "V+B", city: "Gurgaon", date: "12 April 2025", status: "Unable to Connect", color: "#ff9800" },
  { id: 9, name: "Mayank Agarwal", phone: "+91 901 964 9457", leadId: "1234", category: "V+B", city: "Gurgaon", date: "12 April 2025", status: "Warm", color: "#ffc107" },
];

const LeadsPage = () => {
  const [activeTab, setActiveTab] = useState('new');
  const [currentPage, setCurrentPage] = useState(1);

  // unused variable setCurrentPage removed

  return (
    <div className="leads-page">
      {/* Stats Cards */}
      <div className="leads-stats">
        <div className="lead-stat-card">
          <div className="stat-number">45</div>
          <div className="stat-label">All Leads</div>
        </div>
        <div className="lead-stat-card">
          <div className="stat-number">45</div>
          <div className="stat-label">Cold Leads</div>
        </div>
        <div className="lead-stat-card">
          <div className="stat-number">45</div>
          <div className="stat-label">Warm Leads</div>
        </div>
        <div className="leads-filters">
          <div className="filters-label">Filters (1)</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="leads-tabs">
        <button 
          className={activeTab === 'new' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('new')}
        >
          New (6)
        </button>
        <button 
          className={activeTab === 'hot' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('hot')}
        >
          Hot leads (16)
        </button>
        <button 
          className={activeTab === 'tag' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('tag')}
        >
          Tag NBFC (6)
        </button>
        <button 
          className={activeTab === 'rejected' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('rejected')}
        >
          Rejected (8)
        </button>

        <div className="tab-actions">
          <button className="action-btn">
            <FaDownload /> Download
          </button>
          <select className="driver-dropdown">
            <option>Driver</option>
          </select>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="leads-sidebar">
        <div className="filters-header">
          <div className="filters-label">Filters (1)</div>
          <button className="clear-all-btn">Clear all</button>
        </div>
        
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
        
        <div className="filter-section">
          <h4>Sort By Location</h4>
          <select>
            <option>Select</option>
          </select>
        </div>
        <div className="filter-section">
          <h4>Date Between (May 01 - Jun 01)</h4>
          <div className="date-range">
            <span>May 01</span>
            <span>Jun 01</span>
          </div>
          <input type="range" />
        </div>
        <div className="filter-section">
          <h4>Sort By</h4>
          <select>
            <option>Select</option>
            <option>Cold leads</option>
            <option>Warm leads</option>
            <option>Hot leads</option>
          </select>
        </div>
        <div className="filter-section">
          <h4>Sort By Category</h4>
          <select>
            <option>Select</option>
            <option>V+B</option>
            <option>B</option>
            <option>V</option>
          </select>
        </div>
      </div>

      {/* Leads Table */}
      <div className="leads-table-container">
        <table className="leads-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Name & Details</th>
              <th>Lead ID</th>
              <th>Category</th>
              <th>City</th>
              <th>Created on</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leadsData.map((lead) => (
              <tr key={lead.id}>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="lead-name-cell">
                    <div className="lead-avatar" style={{backgroundColor: lead.color}}>
                      {lead.name.charAt(0)}
                    </div>
                    <div>
                      <div className="lead-name">{lead.name}</div>
                      <div className="lead-phone">{lead.phone}</div>
                    </div>
                  </div>
                </td>
                <td>{lead.leadId}</td>
                <td>{lead.category}</td>
                <td>{lead.city}</td>
                <td>{lead.date}</td>
                <td>
                  <span className="status-badge" style={{backgroundColor: lead.color + '20', color: lead.color}}>
                    {lead.status}
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
          <button className={currentPage === 1 ? 'page-btn active' : 'page-btn'}>1</button>
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

export default LeadsPage;

