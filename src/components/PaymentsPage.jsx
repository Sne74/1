import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import './PaymentsPage.css';

const paymentsData = [
  { id: 1, name: "Mayank Agarwal", phone: "+91 901 964 9457", paymentId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", amount: "₹3,980", mode: "Online", avatar: "MA" },
  { id: 2, name: "Mayank Agarwal", phone: "+91 901 964 9457", paymentId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", amount: "₹3,980", mode: "Online", avatar: "MA" },
  { id: 3, name: "Mayank Agarwal", phone: "+91 901 964 9457", paymentId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", amount: "₹3,980", mode: "Online", avatar: "MA" },
  { id: 4, name: "Mayank Agarwal", phone: "+91 901 964 9457", paymentId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", amount: "₹3,980", mode: "Online", avatar: "MA" },
  { id: 5, name: "Mayank Agarwal", phone: "+91 901 964 9457", paymentId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", amount: "₹3,980", mode: "Online", avatar: "MA" },
  { id: 6, name: "Mayank Agarwal", phone: "+91 901 964 9457", paymentId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", amount: "₹3,980", mode: "Online", avatar: "MA" },
  { id: 7, name: "Mayank Agarwal", phone: "+91 901 964 9457", paymentId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", amount: "₹3,980", mode: "Online", avatar: "MA" },
  { id: 8, name: "Mayank Agarwal", phone: "+91 901 964 9457", paymentId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", amount: "₹3,980", mode: "Online", avatar: "MA" },
  { id: 9, name: "Mayank Agarwal", phone: "+91 901 964 9457", paymentId: "CGF24D0055", date: "20 April 2025", city: "Gurgaon", amount: "₹3,980", mode: "Online", avatar: "MA" },
];

const PaymentsPage = () => {
  const [activeTab, setActiveTab] = useState('paid');

  return (
    <div className="payments-page">
      <h1 className="page-title">Payments</h1>

      <div className="payments-tabs">
        <button
          className={activeTab === 'paid' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('paid')}
        >
          EMI Paid (5)
        </button>
        <button
          className={activeTab === 'due' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('due')}
        >
          EMI Due (6)
        </button>
        <button
          className={activeTab === 'closed' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('closed')}
        >
          EMI Closed (6)
        </button>

        <div className="tab-actions">
          <button className="download-btn">
            <FaDownload /> Download
          </button>
          <select className="driver-dropdown">
            <option>Drivers</option>
          </select>
        </div>
      </div>

      <div className="payments-sidebar">
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
          <h4>EMI Amount Btw (3000 - 5000)</h4>
          <div className="date-range">
            <span>₹3000</span>
            <span>₹5000</span>
          </div>
          <input type="range" className="range-slider" />
        </div>
      </div>

      <div className="payments-table-container">
        <table className="payments-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Name & Details</th>
              <th>ID</th>
              <th>Date of EMI</th>
              <th>City</th>
              <th>EMI Amount</th>
              <th>Mode</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paymentsData.map((payment) => (
              <tr key={payment.id}>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="payment-name-cell">
                    <div className="payment-avatar">{payment.avatar}</div>
                    <div>
                      <div className="payment-name">{payment.name}</div>
                      <div className="payment-phone">{payment.phone}</div>
                    </div>
                  </div>
                </td>
                <td>{payment.paymentId}</td>
                <td>{payment.date}</td>
                <td>{payment.city}</td>
                <td>{payment.amount}</td>
                <td>{payment.mode}</td>
                <td>
                  <button className="view-btn">View</button>
                  <button className="edit-btn">✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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

export default PaymentsPage;

