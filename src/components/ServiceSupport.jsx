import React, { useState } from 'react';
import { FaDownload, FaEdit, FaPhoneAlt, FaCopy, FaEye, FaChevronRight } from 'react-icons/fa';
import './ServiceSupport.css';

const serviceData = [
  { id: 1, name: "Mayank Agarwal", phone: "+91 901 964 9457", serviceId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Open", statusColor: "#ff9800" },
  { id: 2, name: "Mayank Agarwal", phone: "+91 901 964 9457", serviceId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Open", statusColor: "#ff9800" },
  { id: 3, name: "Mayank Agarwal", phone: "+91 901 964 9457", serviceId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Open", statusColor: "#ff9800" },
  { id: 4, name: "Mayank Agarwal", phone: "+91 901 964 9457", serviceId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Open", statusColor: "#ff9800" },
  { id: 5, name: "Mayank Agarwal", phone: "+91 901 964 9457", serviceId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Open", statusColor: "#ff9800" },
  { id: 6, name: "Mayank Agarwal", phone: "+91 901 964 9457", serviceId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Open", statusColor: "#ff9800" },
  { id: 7, name: "Mayank Agarwal", phone: "+91 901 964 9457", serviceId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Open", statusColor: "#ff9800" },
  { id: 8, name: "Mayank Agarwal", phone: "+91 901 964 9457", serviceId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Open", statusColor: "#ff9800" },
  { id: 9, name: "Mayank Agarwal", phone: "+91 901 964 9457", serviceId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", status: "Open", statusColor: "#ff9800" },
];

const ServiceSupport = () => {
  const [activeTab, setActiveTab] = useState('service');

  return (
    <div className="service-page">
      <h1 className="page-title">Service & support</h1>

      {/* Tabs */}
      <div className="service-tabs">
        <button 
          className={activeTab === 'service' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('service')}
        >
          Service Request (5)
        </button>
        <button 
          className={activeTab === 'immobilization' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('immobilization')}
        >
          Immobilization Request (5)
        </button>
        <button 
          className={activeTab === 'miscellaneous' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('miscellaneous')}
        >
          Miscellaneous Ticket (5)
        </button>

        <div className="tab-actions">
          <button className="download-btn">
            <FaDownload /> Download
          </button>
          <select className="driver-dropdown">
            <option>Driver</option>
          </select>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="service-sidebar">
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
          <h4>Date Between (May 01 - Jun 01)</h4>
          <div className="date-range">
            <span>May 01</span>
            <span>Jun 01</span>
          </div>
          <input type="range" className="range-slider" />
        </div>

        <div className="filter-section">
          <h4>Sort By</h4>
          <select>
            <option>Select</option>
            <option>Open</option>
            <option>Open</option>
            <option>Close</option>
          </select>
        </div>

        <div className="filter-section">
          <h4>Sort By</h4>
          <select>
            <option>Select</option>
          </select>
        </div>
      </div>

      {/* Service Table */}
      <div className="service-table-container">
        <table className="service-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Name & Details</th>
              <th>ID</th>
              <th>Date</th>
              <th>City</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {serviceData.map((service) => (
              <tr key={service.id}>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="service-name-cell">
                    <div className="service-avatar">MA</div>
                    <div>
                      <div className="service-name">{service.name}</div>
                      <div className="service-phone">{service.phone}</div>
                    </div>
                  </div>
                </td>
                <td>{service.serviceId}</td>
                <td>{service.date}</td>
                <td>{service.city}</td>
                <td>
                  <span className="status-badge" style={{
                    backgroundColor: service.statusColor + '20',
                    color: service.statusColor
                  }}>
                    {service.status}
                  </span>
                </td>
                <td>
                  <div className="action-icons">
                    <button className="icon-action"><FaEdit /></button>
                    <button className="icon-action"><FaPhoneAlt /></button>
                    <button className="icon-action"><FaCopy /></button>
                    <button className="icon-action"><FaEye /></button>
                    <button className="icon-action"><FaChevronRight /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button className="page-btn">‹</button>
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

export default ServiceSupport;