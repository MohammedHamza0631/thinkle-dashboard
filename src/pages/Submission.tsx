import React from 'react';
import './Submission.css';
import { Upload, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Submission: React.FC = () => {
  return (
    <div className="submission-page">
      <div className="submission-header">
        <h1 className="submission-title">Content Submission</h1>
        <p className="submission-subtitle">Upload your content to start earning revenue</p>
      </div>

      <div className="submission-stats-container">
        <div className="submission-stat-card">
          <div className="stat-icon">
            <FileText size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">12</div>
            <div className="stat-label">Total Submissions</div>
          </div>
        </div>
        
        <div className="submission-stat-card">
          <div className="stat-icon">
            <CheckCircle size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">8</div>
            <div className="stat-label">Approved</div>
          </div>
        </div>
        
        <div className="submission-stat-card">
          <div className="stat-icon">
            <Clock size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">3</div>
            <div className="stat-label">Pending Review</div>
          </div>
        </div>
        
        <div className="submission-stat-card">
          <div className="stat-icon">
            <AlertCircle size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">1</div>
            <div className="stat-label">Rejected</div>
          </div>
        </div>
      </div>

      <div className="submission-card">
        <div className="upload-area">
          <div className="upload-icon">
            <Upload size={40} />
          </div>
          <h3 className="upload-title">Upload Content</h3>
          <p className="upload-description">Drag and drop files here or click to browse</p>
          <button className="upload-button">Select Files</button>
          <p className="upload-formats">Supported formats: PDF, DOCX, XLSX, PPT, ZIP (max 50MB)</p>
        </div>
      </div>

      <div className="submission-card">
        <h2 className="submission-section-title">Recent Submissions</h2>
        <div className="submission-list">
          <div className="submission-item">
            <div className="submission-item-icon">📊</div>
            <div className="submission-item-details">
              <h3 className="submission-item-title">Advanced Excel Tutorial</h3>
              <p className="submission-item-meta">Submitted on 02-04-2025</p>
            </div>
            <div className="submission-item-status pending">Pending Review</div>
          </div>
          
          <div className="submission-item">
            <div className="submission-item-icon">📝</div>
            <div className="submission-item-details">
              <h3 className="submission-item-title">Resume Template Pack</h3>
              <p className="submission-item-meta">Submitted on 28-03-2025</p>
            </div>
            <div className="submission-item-status approved">Approved</div>
          </div>
          
          <div className="submission-item">
            <div className="submission-item-icon">📚</div>
            <div className="submission-item-details">
              <h3 className="submission-item-title">Study Guide: Marketing Basics</h3>
              <p className="submission-item-meta">Submitted on 15-03-2025</p>
            </div>
            <div className="submission-item-status approved">Approved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submission;