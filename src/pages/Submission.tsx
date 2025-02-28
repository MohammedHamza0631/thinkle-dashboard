import React, { useState, useEffect } from 'react';
import './Submission.css';
import StatCard from '../components/StatCard';
import { FileText } from 'lucide-react';

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
            likes: '200',
            earning: '₹700',
            share: '70'
        },
        {
            id: 2,
            icon: '📝',
            title: 'Resume Template Pack',
            date: '02-04-2025',
            views: '1.2k',
            likes: '200',
            earning: '₹700',
            share: '70'
        }
    ];

    return (
        
            <div className="dashboard page">
                <div className="dashboard-header">
                    <h1 className="dashboard-title">Thinkle+ Creator</h1>
                    <p className="dashboard-subtitle">Create Content that generate revenue for you</p>
                </div>

                <div className="stats-container">
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
                        {tableData.map((item) => (
                            <div key={item.id} className="content-card-mobile">
                                <div className="post-cell-mobile">
                                    <div className="post-icon-mobile">
                                        {item.icon === '📊' ? (
                                            <div className="excel-icon">
                                                <FileText size={20} color="#fff" />
                                            </div>
                                        ) : (
                                            <div className="resume-icon">
                                                <FileText size={20} color="#fff" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="post-title-mobile">{item.title}</div>
                                </div>
                                <div className="mobile-stats-grid">
                                    <div className="mobile-stat">
                                        <div className="mobile-stat-value">{item.views}</div>
                                        <div className="mobile-stat-label">Views</div>
                                    </div>
                                    <div className="mobile-stat">
                                        <div className="mobile-stat-value">{item.earning}</div>
                                        <div className="mobile-stat-label">Earning</div>
                                    </div>
                                    <div className="mobile-stat">
                                        <div className="mobile-stat-value">{item.likes}</div>
                                        <div className="mobile-stat-label">Likes</div>
                                    </div>
                                    <div className="mobile-stat">
                                        <div className="mobile-stat-value">{item.share}</div>
                                        <div className="mobile-stat-label">Share</div>
                                    </div>
                                </div>
                                <div className="mobile-date">
                                    <div className="mobile-date-label">Date</div>
                                    <div className="mobile-date-value">{item.date}</div>
                                </div>

                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="content-table-container">
                        <table className="content-table">
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
                                {tableData.map((item) => (
                                    <tr key={item.id}>
                                        <td className="post-cell">
                                            {item.icon === '📊' ? (
                                                <div className="excel-icon">
                                                    <FileText size={20} color="#fff" />
                                                </div>
                                            ) : (
                                                <div className="resume-icon">
                                                    <FileText size={20} color="#fff" />
                                                </div>
                                            )}
                                            <span>{item.title}</span>
                                        </td>
                                        <td>{item.date}</td>
                                        <td>{item.views}</td>
                                        <td>{item.likes}</td>
                                        <td>{item.earning}</td>
                                        <td>{item.share}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        
    );
};

export default Submission;