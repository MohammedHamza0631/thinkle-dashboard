import React from 'react';
import './StatCard.css';

interface StatCardProps {
  title: string;
  value: string | number;
  subtext?: string;
  growth?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtext, growth }) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <h3 className="stat-title">{title}</h3>
        {growth !== undefined && (
          <div className="growth-badge">
            <span className="growth-arrow">↑</span> {growth}%
          </div>
        )}
      </div>
      <div className="stat-value">{value}</div>
      {subtext && <div className="stat-subtext">{subtext}</div>}
    </div>
  );
};

export default StatCard;