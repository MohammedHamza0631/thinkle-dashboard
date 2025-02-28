import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Icons
const DashboardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 13H10V6H4V13ZM4 18H10V15H4V18ZM12 18H18V11H12V18ZM12 6V9H18V6H12Z" fill="currentColor"/>
  </svg>
);

const SubmissionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
  </svg>
);

const EarningsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.5 15H6.32C6.46 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.48 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.49 11.8 10.9Z" fill="currentColor"/>
  </svg>
);

const TrendingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="currentColor"/>
  </svg>
);

const ReferIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill="currentColor"/>
  </svg>
);

const HelpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z" fill="currentColor"/>
  </svg>
);

const ProfileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
  </svg>
);

const SupportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z" fill="currentColor"/>
  </svg>
);

const LogoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="currentColor"/>
  </svg>
);

const ExcelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#1D6F42"/>
    <text x="12" y="17" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle">X</text>
  </svg>
);

const ResumeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#E74C3C"/>
    <text x="12" y="17" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle">R</text>
  </svg>
);

// Components
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="logo-container">
        <div className="logo">thinkle.</div>
        <button className="menu-toggle desktop-hide" onClick={toggleSidebar}>
          {isOpen ? '×' : '≡'}
        </button>
      </div>
      
      <div className="sidebar-section">
        <div className="section-title">
          <div className="section-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
            </svg>
          </div>
          <span>Coaches</span>
          <div className="section-dropdown">▼</div>
        </div>
      </div>
      
      <div className="sidebar-section active">
        <div className="section-title">
          <div className="section-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 16.5L13.2 12L8 7.5L9.44 6L16 12L9.44 18L8 16.5Z" fill="currentColor"/>
            </svg>
          </div>
          <span>Thinkle Creator</span>
          <div className="section-dropdown">▼</div>
        </div>
        
        <div className="section-menu">
          <NavLink to="/" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <DashboardIcon />
            <span>Dashboard</span>
          </NavLink>
          
          <NavLink to="/submission" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <SubmissionIcon />
            <span>Submission</span>
            <span className="menu-indicator">•</span>
          </NavLink>
          
          <NavLink to="/earnings" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <EarningsIcon />
            <span>Earnings</span>
          </NavLink>
          
          <NavLink to="/trending" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <TrendingIcon />
            <span>Trending</span>
          </NavLink>
          
          <NavLink to="/refer" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <ReferIcon />
            <span>Refer</span>
          </NavLink>
          
          <NavLink to="/help" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <HelpIcon />
            <span>Help</span>
          </NavLink>
          
          <NavLink to="/profile" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <ProfileIcon />
            <span>Profile</span>
          </NavLink>
        </div>
      </div>
      
      <div className="sidebar-footer">
        <div className="footer-item">
          <SupportIcon />
          <span>Contact Support</span>
        </div>
        
        <div className="footer-item">
          <LogoutIcon />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, subvalue, trend }) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className="stat-title">{title}</div>
        {trend && <div className="stat-trend">{trend}%</div>}
      </div>
      <div className="stat-value">{value}</div>
      {subvalue && <div className="stat-subvalue">{subvalue}</div>}
    </div>
  );
};

const ContentCard = () => {
  return (
    <div className="content-card">
      <div className="stat-value">3</div>
      <div className="stat-subvalue">1 pending review</div>
    </div>
  );
};

const PostTableItem = ({ icon, title, date, views, likes, earning, shares }) => {
  return (
    <tr className="post-table-item">
      <td className="post-title">
        <div className="post-icon">{icon}</div>
        <div>{title}</div>
      </td>
      <td>{date}</td>
      <td>{views}</td>
      <td>{likes}</td>
      <td className="earning-cell">₹{earning}</td>
      <td>{shares}</td>
    </tr>
  );
};

const PostCardItem = ({ icon, title, views, earning, likes, shares, date }) => {
  return (
    <div className="post-card-item">
      <div className="post-card-header">
        <div className="post-icon">{icon}</div>
        <div className="post-title">{title}</div>
      </div>
      <div className="post-card-stats">
        <div className="post-stat">
          <div className="post-stat-value">{views}</div>
          <div className="post-stat-label">Views</div>
        </div>
        <div className="post-stat">
          <div className="post-stat-value">₹{earning}</div>
          <div className="post-stat-label">Earning</div>
        </div>
      </div>
      <div className="post-card-stats">
        <div className="post-stat">
          <div className="post-stat-value">{likes}</div>
          <div className="post-stat-label">Likes</div>
        </div>
        <div className="post-stat">
          <div className="post-stat-value">{shares}</div>
          <div className="post-stat-label">Share</div>
        </div>
      </div>
      <div className="post-card-stats">
        <div className="post-stat">
          <div className="post-stat-value">{date}</div>
          <div className="post-stat-label">Date</div>
        </div>
      </div>
      <div className="post-card-divider"></div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Thinkle+ Creator</h1>
        <p>Create Content that generate revenue for you</p>
      </div>
      
      <div className="stats-container">
        <StatCard 
          title="Views" 
          value="12.5K" 
          subvalue="Platform: 12,48,960" 
          trend="26" 
        />
        <StatCard 
          title="Earnings" 
          value="₹1490" 
          subvalue="Pool: ₹5,48,960" 
          trend="26" 
        />
        <StatCard 
          title="Engagement" 
          value="12.5k" 
          subvalue="352 likes • 100 shares" 
          trend="26" 
        />
        <ContentCard />
      </div>
      
      <div className="table-container desktop-only">
        <table className="posts-table">
          <thead>
            <tr>
              <th>Post</th>
              <th>Date</th>
              <th>views</th>
              <th>likes</th>
              <th>Earning</th>
              <th>Share</th>
            </tr>
          </thead>
          <tbody>
            <PostTableItem 
              icon={<ExcelIcon />}
              title="Advanced Excel Tutorial"
              date="02-04-2025"
              views="1.2k"
              likes="200"
              earning="700"
              shares="70"
            />
            <PostTableItem 
              icon={<ResumeIcon />}
              title="Resume Template Pack"
              date="02-04-2025"
              views="1.2k"
              likes="200"
              earning="700"
              shares="70"
            />
          </tbody>
        </table>
      </div>
      
      <div className="mobile-posts-container mobile-only">
        <PostCardItem 
          icon={<ExcelIcon />}
          title="Advanced Excel Tutorial"
          views="1.2K"
          earning="700"
          likes="450"
          shares="29"
          date="Feb 21,2025"
        />
        <PostCardItem 
          icon={<ExcelIcon />}
          title="Advanced Excel Tutorial"
          views="1.2K"
          earning="700"
          likes="450"
          shares="29"
          date="Feb 21,2025"
        />
      </div>
    </div>
  );
};

const Submissions = () => {
  return <div>Submissions Page</div>;
};

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <button className="menu-toggle mobile-only" onClick={toggleSidebar}>
          ≡
        </button>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/submission" element={<Submissions />} />
            <Route path="/earnings" element={<div>Earnings Page</div>} />
            <Route path="/trending" element={<div>Trending Page</div>} />
            <Route path="/refer" element={<div>Refer Page</div>} />
            <Route path="/help" element={<div>Help Page</div>} />
            <Route path="/profile" element={<div>Profile Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;