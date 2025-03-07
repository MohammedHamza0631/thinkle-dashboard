import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, FileText, DollarSign, TrendingUp, Share2, HelpCircle, User, LogOut, Info, ChevronDown, Wand2 } from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    const [coachesExpanded, setCoachesExpanded] = useState(false);
    const [creatorExpanded, setCreatorExpanded] = useState(true);
    const [activeSection, setActiveSection] = useState('creator');

    const toggleCoaches = () => {
        setCoachesExpanded(!coachesExpanded);
        setActiveSection('coaches');
    };

    const toggleCreator = () => {
        setCreatorExpanded(!creatorExpanded);
        setActiveSection('creator');
    };

    return (
        <>
            <div className="mobile-header">
                <button className="menu-toggle" onClick={toggleSidebar}>
                    <Menu size={24} />
                </button>
                <h1 className="mobile-title">Thinkle+ Creator</h1>
            </div>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h1 className="logo">thinkle.</h1>
                    <button className="menu-toggle mobile-only" onClick={toggleSidebar}>
                        <X size={24} />
                    </button>
                </div>

                <div className={`sidebar-section ${coachesExpanded ? 'expanded' : ''} ${activeSection === 'coaches' ? 'active' : ''}`}>
                    <div className="section-header" onClick={toggleCoaches}>
                        <User size={16} />
                        <span>Coaches</span>
                        <ChevronDown size={16} className="dropdown-icon" />
                    </div>
                    {coachesExpanded && (
                        <div className="section-content">
                            {/* No items in Coaches section as per requirement */}
                        </div>
                    )}
                </div>

                <div className={`sidebar-section ${creatorExpanded ? 'expanded' : ''} ${activeSection === 'creator' ? 'active' : ''}`}>
                    <div className="section-header" onClick={toggleCreator}>
                        <Wand2 size={16} />
                        <span>Thinkle Creator</span>
                        <ChevronDown size={16} className="dropdown-icon" />
                    </div>

                    {creatorExpanded && (
                        <nav className="sidebar-nav">
                            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                {({ isActive }) => (
                                    <>
                                        <Home size={16} />
                                        <span>Dashboard</span>
                                        {isActive && <span className="dot"></span>}
                                    </>
                                )}
                            </NavLink>

                            <NavLink to="/submission" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                {({ isActive }) => (
                                    <>
                                        <FileText size={16} />
                                        <span>Submission</span>
                                        {isActive && <span className="dot"></span>}
                                    </>
                                )}
                            </NavLink>

                            <NavLink to="/earnings" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                {({ isActive }) => (
                                    <>
                                        <DollarSign size={16} />
                                        <span>Earnings</span>
                                        {isActive && <span className="dot"></span>}
                                    </>
                                )}
                            </NavLink>

                            <NavLink to="/trending" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                {({ isActive }) => (
                                    <>
                                        <TrendingUp size={16} />
                                        <span>Trending</span>
                                        {isActive && <span className="dot"></span>}
                                    </>
                                )}
                            </NavLink>

                            <NavLink to="/refer" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                {({ isActive }) => (
                                    <>
                                        <Share2 size={16} />
                                        <span>Refer</span>
                                        {isActive && <span className="dot"></span>}
                                    </>
                                )}
                            </NavLink>

                            <NavLink to="/help" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                {({ isActive }) => (
                                    <>
                                        <HelpCircle size={16} />
                                        <span>Help</span>
                                        {isActive && <span className="dot"></span>}
                                    </>
                                )}
                            </NavLink>

                            <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                {({ isActive }) => (
                                    <>
                                        <User size={16} />
                                        <span>Profile</span>
                                        {isActive && <span className="dot"></span>}
                                    </>
                                )}
                            </NavLink>
                        </nav>
                    )}
                </div>

                <div className="sidebar-footer">
                    <NavLink to="/support" className={({ isActive }) => isActive ? 'footer-link active' : 'footer-link'}>
                        <Info size={16} />
                        <span>Contact Support</span>
                    </NavLink>

                    <button className="footer-link">
                        <LogOut size={16} />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;