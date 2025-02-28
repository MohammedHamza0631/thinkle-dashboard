import React, { useState, useEffect } from 'react';
import './Submission.css';
import StatCard from '../components/StatCard';

const Submission: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const tableData = [
        {
            id: 1,
            icon: '📊',
            title: 'Advanced Excel Tutorial',
            date: '02-04-2025',
            views: '1.2k',
            likes: '450',
            earning: '₹700',
            share: '29'
        },
        {
            id: 2,
            icon: '📝',
            title: 'Resume Template Pack',
            date: '02-04-2025',
            views: '1.2k',
            likes: '450',
            earning: '₹700',
            share: '29'
        }
    ];

    return (
        <div className="page">
            <div className="page-header">
                <h1 className="page-title">Thinkle+ Creator</h1>
                <p className="page-subtitle">Create Content that generate revenue for you</p>
            </div>

            <div className="stats-grid">
                <StatCard
                    title="Views"
                    value="12.5K"
                    subtext="Platform: 12,48,960"
                    growth={26}
                />
                <StatCard
                    title="Earnings"
                    value="₹1490"
                    subtext="Pool: ₹5,48,960"
                    growth={26}
                />
                <StatCard
                    title="Engagement"
                    value="12.5k"
                    subtext="352 likes • 100 shares"
                    growth={26}
                />
                <StatCard
                    title="Content"
                    value="3"
                    subtext="1 pending review"
                />
            </div>

            {isMobile ? (
                <div className="mobile-content">
                    <div className="content-card">
                        {tableData.map((item, index) => (
                            <div key={item.id} className="mobile-row">
                                <div className="mobile-post">
                                    <div className="post-icon">{item.icon}</div>
                                    <div className="post-title">{item.title}</div>
                                </div>
                                <div className="mobile-stats">
                                    <div className="mobile-stat-row">
                                        <div className="mobile-stat">
                                            <span className="stat-value">{item.views}</span>
                                            <span className="stat-label">Views</span>
                                        </div>
                                        <div className="mobile-stat">
                                            <span className="stat-value">{item.earning}</span>
                                            <span className="stat-label">Earning</span>
                                        </div>
                                    </div>
                                    <div className="mobile-stat-row">
                                        <div className="mobile-stat">
                                            <span className="stat-value">{item.likes}</span>
                                            <span className="stat-label">Likes</span>
                                        </div>
                                        <div className="mobile-stat">
                                            <span className="stat-value">{item.share}</span>
                                            <span className="stat-label">Share</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-date">
                                    <span className="date-label">Date</span>
                                    <span className="date-value">{item.date}</span>
                                </div>
                                {index < tableData.length - 1 && <div className="mobile-divider" />}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="content-table">
                    <div className="table-header">
                        <div className="header-cell">Post</div>
                        <div className="header-cell">Date</div>
                        <div className="header-cell">views</div>
                        <div className="header-cell">likes</div>
                        <div className="header-cell">Earning</div>
                        <div className="header-cell">Share</div>
                    </div>
                    {tableData.map((item) => (
                        <div key={item.id} className="content-row">
                            <div className="post">
                                <div className="post-icon">{item.icon}</div>
                                <div className="post-title">{item.title}</div>
                            </div>
                            <div className="content-cell">{item.date}</div>
                            <div className="content-cell">{item.views}</div>
                            <div className="content-cell">{item.likes}</div>
                            <div className="content-cell">{item.earning}</div>
                            <div className="content-cell">{item.share}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Submission;