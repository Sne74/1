import React from 'react';
import './StatCard.css';

const StatCard = ({ title, total, icon, stats }) => {
  return (
    <div className="stat-card">
      <div className="card-header">
        <span className="card-title">{title}</span>
        <span className="card-icon">{icon}</span>
      </div>
      <div className="card-total">{total}</div>
      <div className="card-stats">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StatCard;