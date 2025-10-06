import React from 'react';
import { FaDownload, FaEllipsisV } from 'react-icons/fa';
import { nbfcData } from '../data/mockData';
import './Chart.css';

const NBFCChart = () => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3 className="chart-title">Tag NBFC'S</h3>
        <div className="chart-actions">
          <button className="icon-btn"><FaDownload /></button>
          <button className="icon-btn"><FaEllipsisV /></button>
        </div>
      </div>
      <div className="chart-content">
        {nbfcData.map((item, idx) => (
          <div key={idx} className="nbfc-row">
            <div className="nbfc-name">{item.name}</div>
            <div className="nbfc-bar-container">
              <div className="nbfc-bar">
                <div 
                  className="nbfc-bar-rejected" 
                  style={{ width: `${(item.rejected / (item.approved + item.rejected)) * 100}%` }}
                >
                  <span className="bar-value">{item.rejected}</span>
                </div>
                <div 
                  className="nbfc-bar-approved" 
                  style={{ width: `${(item.approved / (item.approved + item.rejected)) * 100}%` }}
                >
                  <span className="bar-value">{item.approved}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-dot approved"></div>
          <span>Approved</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot rejected"></div>
          <span>Rejected</span>
        </div>
      </div>
    </div>
  );
};

export default NBFCChart;