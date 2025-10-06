import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <h1 className="page-title">Partner Management</h1>

      <div className="settings-container">
        <div className="settings-tabs">
          <button className="settings-tab active">Alert setting</button>
        </div>

        <div className="settings-content">
          <div className="settings-section">
            <h3 className="section-title">Leads</h3>
            
            <div className="setting-item">
              <div>
                <h4>New lead alerts</h4>
                <p>Receive notification when new leads are created</p>
              </div>
            </div>

            <div className="setting-item">
              <div>
                <h4>New Conversion alerts</h4>
                <p>Receive notification when lead is converted to partner</p>
              </div>
            </div>

            <div className="setting-item">
              <div>
                <h4>Lead alert priority</h4>
                <p>All leads</p>
              </div>
              <select className="priority-dropdown">
                <option>All leads</option>
              </select>
            </div>
          </div>

          <div className="settings-section">
            <h3 className="section-title">Service</h3>
            
            <div className="setting-item">
              <div>
                <h4>New Service request alerts</h4>
                <p>Receive notification when new Service request are created</p>
              </div>
            </div>

            <div className="setting-item">
              <div>
                <h4>Service completion alerts</h4>
                <p>Receive notification when Service request are completed</p>
              </div>
            </div>

            <div className="setting-item">
              <div>
                <h4>Service request alert priority</h4>
                <p>All Service</p>
              </div>
              <select className="priority-dropdown">
                <option>All Service</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;