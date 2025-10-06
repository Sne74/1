import React, { useState } from 'react';
import { FaDownload, FaEllipsisV, FaChevronDown } from 'react-icons/fa';
import { hotLeadsData } from '../data/mockData';
import './Table.css';

const HotLeadsTable = () => {
  const [expandedRow, setExpandedRow] = useState(0);
  const [showDriverDropdown, setShowDriverDropdown] = useState(false);
  const [showStageDropdown, setShowStageDropdown] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState('Driver');
  const [selectedStage, setSelectedStage] = useState('Stage');

  const driverOptions = ['Driver', 'Dealer', "NBFC's", "OEM's", 'Driver(OEM)', 'Dealer(OEM)', "NBFC's(OEM)"];
  const stageOptions = ['Stage', 'KYC Verification', 'Product assigned', 'Down payment'];

  return (
    <div className="table-container">
      <div className="table-header">
        <h3 className="table-title">Hot leads (6)</h3>
        <div className="table-actions">
          <div className="dropdown-wrapper">
            <button 
              className="dropdown-btn"
              onClick={() => setShowDriverDropdown(!showDriverDropdown)}
            >
              {selectedDriver}
              <FaChevronDown style={{marginLeft: '8px', fontSize: '10px'}} />
            </button>
            {showDriverDropdown && (
              <div className="dropdown-content">
                {driverOptions.map((option, idx) => (
                  <div 
                    key={idx} 
                    className="dropdown-option"
                    onClick={() => {
                      setSelectedDriver(option);
                      setShowDriverDropdown(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="dropdown-wrapper">
            <button 
              className="dropdown-btn"
              onClick={() => setShowStageDropdown(!showStageDropdown)}
            >
              {selectedStage}
              <FaChevronDown style={{marginLeft: '8px', fontSize: '10px'}} />
            </button>
            {showStageDropdown && (
              <div className="dropdown-content">
                {stageOptions.map((option, idx) => (
                  <div 
                    key={idx} 
                    className="dropdown-option"
                    onClick={() => {
                      setSelectedStage(option);
                      setShowStageDropdown(false);
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
              <th>Employee Assign</th>
              <th>Stage</th>
            </tr>
          </thead>
          <tbody>
            {hotLeadsData.map((row, idx) => (
              <React.Fragment key={row.id}>
                <tr onClick={() => setExpandedRow(expandedRow === idx ? null : idx)} style={{cursor: 'pointer'}}>
                  <td>
                    <div className="user-cell">
                      <FaChevronDown 
                        className="chevron-icon"
                        style={{
                          transform: expandedRow === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s'
                        }}
                      />
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
                    <div className="location-text">{row.employee}</div>
                    <div className="state-text">{row.empId}</div>
                  </td>
                  <td>
                    <span className="stage-badge">{row.stage}</span>
                  </td>
                </tr>
                {expandedRow === idx && (
                  <tr>
                    <td colSpan="4" className="expanded-row">
                      <div className="progress-container">
                        <div className="progress-step">
                          <div className="progress-dot completed"></div>
                          <div className="progress-label">Registration</div>
                        </div>
                        <div className="progress-line completed"></div>
                        
                        <div className="progress-step">
                          <div className="progress-dot completed"></div>
                          <div className="progress-label">KYC Verified</div>
                        </div>
                        <div className="progress-line"></div>
                        
                        <div className="progress-step">
                          <div className="progress-dot current"></div>
                          <div className="progress-label active">Awaiting KYC Verification</div>
                        </div>
                        <div className="progress-line"></div>
                        
                        <div className="progress-step">
                          <div className="progress-dot pending"></div>
                          <div className="progress-label">Product assigned</div>
                        </div>
                        <div className="progress-line"></div>
                        
                        <div className="progress-step">
                          <div className="progress-dot"></div>
                          <div className="progress-label">Down payment</div>
                        </div>
                        <div className="progress-line"></div>
                        
                        <div className="progress-step">
                          <div className="progress-dot"></div>
                          <div className="progress-label">Physical Verification</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotLeadsTable;