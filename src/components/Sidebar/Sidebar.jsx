import {
  LayoutDashboard,
  Target,
  FileText,
  Users,
  Building2,
  BarChart3,
  Sparkles,
  ChevronDown,
  LogOut,
  UserCircle2,
} from "lucide-react";

import "./Sidebar.css";

export default function CustomSidebar() {
  return (
    <div className="sidebar">
      {/* TOP LOGO */}
      <div className="sidebar-top">
        <div className="brand-section">
          <div className="brand-icon">
            <div className="brand-dot"></div>
          </div>

          <h2 className="brand-name">GSUS PerformX</h2>
        </div>
      </div>

      {/* SCROLLABLE MENU */}
      <div className="sidebar-scroll">
        {/* EMPLOYEE */}
        <div className="sidebar-group">
          <div className="group-header">
            <span>EMPLOYEE</span>
            <ChevronDown size={14} />
          </div>

          <div className="sidebar-menu">
            <div className="sidebar-item">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </div>

            <div className="sidebar-item active">
              <Target size={18} />
              <span>My KPIs</span>
            </div>

            <div className="sidebar-item">
              <FileText size={18} />
              <span>My Reviews</span>
            </div>
          </div>
        </div>

        {/* MANAGER */}
        <div className="sidebar-group">
          <div className="group-header">
            <span>MANAGER</span>
            <ChevronDown size={14} />
          </div>

          <div className="sidebar-menu">
            <div className="sidebar-item">
              <Users size={18} />
              <span>Team Overview</span>
            </div>

            <div className="sidebar-item">
              <Target size={18} />
              <span>Team KPIs</span>
            </div>

            <div className="sidebar-item">
              <FileText size={18} />
              <span>Reviews</span>
            </div>
          </div>
        </div>

        {/* HR ADMIN */}
        <div className="sidebar-group">
          <div className="group-header">
            <span>HR ADMIN</span>
            <ChevronDown size={14} />
          </div>

          <div className="sidebar-menu">
            <div className="sidebar-item">
              <Building2 size={18} />
              <span>Organization</span>
            </div>

            <div className="sidebar-item">
              <Target size={18} />
              <span>KPI Templates</span>
            </div>

            <div className="sidebar-item">
              <BarChart3 size={18} />
              <span>Analytics</span>
            </div>
          </div>
        </div>

        {/* SYSTEM */}
        <div className="sidebar-group">
          <div className="group-header">
            <span>SYSTEM</span>
            <ChevronDown size={14} />
          </div>

          <div className="sidebar-menu">
            <div className="sidebar-item">
              <Sparkles size={18} />
              <span>AI Assistant</span>
            </div>
          </div>
        </div>
      </div>

      {/* USER CARD */}
      <div className="sidebar-footer">
        <div className="profile-card">
          <div className="profile-left">
            <div className="profile-avatar">
              <UserCircle2 size={18} />
            </div>

            <div>
              <h4>Sarah Johnson</h4>
              <p>Product Manager</p>
            </div>
          </div>

          <LogOut size={18} className="logout-icon" />
        </div>
      </div>
    </div>
  );
}
