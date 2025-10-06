import React from 'react';
import { FaDownload, FaEllipsisV } from 'react-icons/fa';
import './Chart.css';

const EMITrendChart = () => {
  const paid = 100;
  const notPaid = 20;
  const total = 120;
  
  // Calculate percentages for the pie chart
  const paidPercentage = (paid / total) * 100;
  const notPaidPercentage = (notPaid / total) * 100;

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3 className="chart-title">EMI Trends (Days)</h3>
        <div className="chart-actions">
          <button className="icon-btn"><FaDownload /></button>
          <button className="icon-btn"><FaEllipsisV /></button>
        </div>
      </div>
      <div className="pie-chart-wrapper">
        <svg width="100%" height="250" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#2196f3', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#1976d2', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#ffc107', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#ff9800', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          
          {/* Outer circle (Paid - Blue) */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="url(#blueGradient)"
            strokeWidth="20"
            strokeDasharray={`${(paidPercentage / 100) * 440} 440`}
            strokeDashoffset="0"
            transform="rotate(-90 100 100)"
          />
          
          {/* Outer circle (Not Paid - Yellow) */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="url(#yellowGradient)"
            strokeWidth="20"
            strokeDasharray={`${(notPaidPercentage / 100) * 440} 440`}
            strokeDashoffset={`-${(paidPercentage / 100) * 440}`}
            transform="rotate(-90 100 100)"
          />
          
          {/* Center white circle */}
          <circle cx="100" cy="100" r="60" fill="white" />
          
          {/* Center text */}
          <text x="100" y="95" textAnchor="middle" fontSize="32" fontWeight="700" fill="#333">
            {total}
          </text>
          <text x="100" y="115" textAnchor="middle" fontSize="12" fill="#666">
            Total Drivers
          </text>
        </svg>
      </div>
      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-dot" style={{backgroundColor: '#2196f3'}}></div>
          <span>Paid</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{backgroundColor: '#ffc107'}}></div>
          <span>Not Paid</span>
        </div>
      </div>
    </div>
  );
};

export default EMITrendChart;