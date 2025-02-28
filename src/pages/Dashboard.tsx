import React, { useState, useEffect } from 'react';
import StatCard from '../components/StatCard';
import ContentTable from '../components/ContentTable';
import ContentCard from '../components/ContentCard';
import './Dashboard.css';

const Dashboard: React.FC = () => {
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
        <div className="page">
            <h1>Dashboard Page</h1>
            <p>This is the dashboard page content.</p>
        </div>
    );
};

export default Dashboard;