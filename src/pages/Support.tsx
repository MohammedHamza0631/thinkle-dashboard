import React from 'react';
import './Support.css';

const Support: React.FC = () => {
  return (
    <div className="support-page">
      <div className="support-header">
        <h1 className="support-title">Contact Support</h1>
        <p className="support-subtitle">Need help? We're here to assist you with any questions or issues.</p>
      </div>

      <div className="support-card">
        <form className="support-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" className="form-input" placeholder="Enter your full name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-input" placeholder="Enter your email address" />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" className="form-input" placeholder="What is this regarding?" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-textarea" rows={5} placeholder="Describe your issue or question in detail"></textarea>
          </div>
          
          <button type="submit" className="support-button">Submit Request</button>
        </form>
      </div>
      
      <div className="support-card">
        <h2 className="support-section-title">Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3 className="faq-question">How do I submit content?</h3>
          <p className="faq-answer">Navigate to the Submission page from the sidebar menu and follow the instructions to upload your content.</p>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">When will I receive my earnings?</h3>
          <p className="faq-answer">Earnings are processed at the end of each month and typically take 3-5 business days to appear in your account.</p>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">How is content engagement calculated?</h3>
          <p className="faq-answer">Engagement is calculated based on views, likes, shares, and comments on your content across the platform.</p>
        </div>
      </div>
    </div>
  );
};

export default Support;