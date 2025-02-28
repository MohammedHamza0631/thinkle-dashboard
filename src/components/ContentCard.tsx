import React from 'react';
import './ContentCard.css';

interface ContentCardProps {
  icon: string;
  title: string;
  views: string;
  earning: string;
  likes: string;
  share: string;
  date: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ 
  icon, 
  title, 
  views, 
  earning, 
  likes, 
  share, 
  date 
}) => {
  return (
    <div className="content-card">
      <div className="content-header">
        <div className="content-icon">{icon}</div>
        <div className="content-title">{title}</div>
      </div>
      
      <div className="content-stats">
        <div className="stat-row">
          <div className="stat-label">Views</div>
          <div className="stat-value">{views}</div>
        </div>
        
        <div className="stat-row">
          <div className="stat-label">Earning</div>
          <div className="stat-value">{earning}</div>
        </div>
        
        <div className="stat-row">
          <div className="stat-label">Likes</div>
          <div className="stat-value">{likes}</div>
        </div>
        
        <div className="stat-row">
          <div className="stat-label">Share</div>
          <div className="stat-value">{share}</div>
        </div>
        
        <div className="stat-row">
          <div className="stat-label">Date</div>
          <div className="stat-value">{date}</div>
        </div>
      </div>
      
      <div className="content-divider"></div>
    </div>
  );
};

export default ContentCard;