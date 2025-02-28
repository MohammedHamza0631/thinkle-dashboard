import React, { useState, useEffect } from 'react';
import './Submission.css';
import { Upload, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import StatCard from '../components/StatCard';
import ContentTable from '../components/ContentTable';
import ContentCard from '../components/ContentCard';

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
    <div className="dashboard">
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
                        <ContentCard
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            views={item.views}
                            earning={item.earning}
                            likes={item.likes}
                            share={item.share}
                            date={item.date}
                        />
                    ))}
                </div>
            ) : (
                <ContentTable data={tableData} />
            )}
        </div>
  );
};

export default Submission;