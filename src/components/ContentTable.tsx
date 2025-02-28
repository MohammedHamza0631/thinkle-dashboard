import React from 'react';
import './ContentTable.css';

interface ContentItem {
    id: number;
    icon: string;
    title: string;
    date: string;
    views: string;
    likes: string;
    earning: string;
    share: string;
}

interface ContentTableProps {
    data: ContentItem[];
}

const ContentTable: React.FC<ContentTableProps> = ({ data }) => {
    return (
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
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="post-cell">
                                <div className="post-icon">{item.icon}</div>
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
    );
};

export default ContentTable;