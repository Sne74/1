import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import ColdLeadsTable from './components/ColdLeadsTable';
import ServiceRequestsTable from './components/ServiceRequestsTable';
import HotLeadsTable from './components/HotLeadsTable';
import NBFCChart from './components/NBFCChart';
import EMITrendChart from './components/EMITrendChart';
import LeadsPage from './components/LeadsPage';
import PartnerManagement from './components/PartnerManagement';
import PaymentsPage from './components/PaymentsPage';
import { FaTruck, FaStore, FaRupeeSign, FaWrench, FaCalendar, FaChevronDown } from 'react-icons/fa';
import ServiceSupport from './components/ServiceSupport';
import Settings from './components/Settings';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  return (
    <div className="app">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-content">
        <Header activePage={activePage} />
        
        {activePage === 'dashboard' && (
          <div className="dashboard-content">
            {/* Filter Section */}
            <div className="filter-section">
              <div className="filter-dropdown-wrapper">
                <button 
                  className="filter-dropdown-btn"
                  onClick={() => setShowMonthDropdown(!showMonthDropdown)}
                >
                  Current Month
                  <FaChevronDown style={{marginLeft: '8px', fontSize: '12px'}} />
                </button>
                {showMonthDropdown && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item" onClick={() => setShowMonthDropdown(false)}>Current Month</div>
                    <div className="dropdown-item" onClick={() => setShowMonthDropdown(false)}>Last 3 months</div>
                    <div className="dropdown-item" onClick={() => setShowMonthDropdown(false)}>Last 6 months</div>
                    <div className="dropdown-item" onClick={() => setShowMonthDropdown(false)}>Last 1 Year</div>
                    <div className="dropdown-item" onClick={() => setShowMonthDropdown(false)}>Last 5 Years</div>
                    <div className="dropdown-item" onClick={() => setShowMonthDropdown(false)}>Last 7 Years</div>
                  </div>
                )}
              </div>
              <div className="date-filter-group">
                <button className="date-filter">
                  <FaCalendar style={{marginRight: '8px', fontSize: '12px'}} />
                  From Date
                  <span style={{margin: '0 10px', color: '#ccc'}}>—</span>
                  To Date
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
              <StatCard
                title="Total Drivers"
                total="120"
                icon={<FaTruck style={{ color: '#4caf50', fontSize: '28px' }} />}
                stats={[
                  { value: '94', label: 'Onboarded' },
                  { value: '06', label: 'New' },
                  { value: '20', label: 'In-Process' },
                ]}
              />
              <StatCard
                title="Total Dealers"
                total="050"
                icon={<FaStore style={{ color: '#ff9800', fontSize: '28px' }} />}
                stats={[
                  { value: '24', label: 'Onboarded' },
                  { value: '06', label: 'New' },
                  { value: '20', label: 'In-Process' },
                ]}
              />
              <StatCard
                title="Total NBFC'S"
                total="010"
                icon={<FaRupeeSign style={{ color: '#9c27b0', fontSize: '28px' }} />}
                stats={[
                  { value: '05', label: 'Onboarded' },
                  { value: '02', label: 'New' },
                  { value: '03', label: 'In-Process' },
                ]}
              />
              <StatCard
                title="Total OEM'S"
                total="010"
                icon={<FaWrench style={{ color: '#2196f3', fontSize: '28px' }} />}
                stats={[
                  { value: '07', label: 'Onboarded' },
                  { value: '01', label: 'New' },
                  { value: '02', label: 'In-Process' },
                ]}
              />
            </div>

            {/* Cold Leads, Service Requests and EMI Trends */}
            <div className="tables-grid-3col">
              <ColdLeadsTable />
              <ServiceRequestsTable />
              <EMITrendChart />
            </div>

            {/* Hot Leads and NBFC Chart */}
            <div className="bottom-grid">
              <div className="hot-leads-section">
                <HotLeadsTable />
              </div>
              <div className="charts-section">
                <NBFCChart />
              </div>
            </div>
          </div>
        )}

        {activePage === 'leads' && <LeadsPage />}
        {activePage === 'partner' && <PartnerManagement />}
        {activePage === 'payments' && <PaymentsPage />}
        {activePage === 'service' && <ServiceSupport />}
{activePage === 'settings' && <Settings />}
      </div>
    </div>
  );
}

export default App;
