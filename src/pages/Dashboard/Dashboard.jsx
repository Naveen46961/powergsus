import React, { useState } from "react";
import "./Dashboard.css";
import CustomSidebar from "../../components/Sidebar/Sidebar";
import CustomHeader from "../../components/Header/Header";
import CreateKpiModal from "../../components/CreateKpiModal/CreateKpiModal";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  const [activeCategory, setActiveCategory] = useState("All Categories");

  // Dummy structured data mimicking the state in your image
  const categories = [
    { name: "All Categories", count: 24 },
    { name: "Technical Excellence", count: 8 },
    { name: "Customer Focus", count: 5 },
    { name: "Productivity", count: 6 },
    { name: "Communication", count: 5 },
  ];

  const templates = [
    { title: "Engineering KPIs", count: 8 },
    { title: "Leadership KPIs", count: 6 },
  ];

  const kpis = [
    {
      id: 1,
      title: "Customer Satisfaction Score",
      status: "On track",
      category: "Customer Focus",
      frequency: "Monthly",
      assignees: "12 assignees",
      currentValue: 87,
      targetValue: 90,
      weight: "25%",
    },
    {
      id: 2,
      title: "Code Review Completion Rate",
      status: "On track",
      category: "Technical Excellence",
      frequency: "Weekly",
      assignees: "45 assignees",
      currentValue: 92,
      targetValue: 95,
      weight: "20%",
    },
    {
      id: 3,
      title: "Sprint Velocity",
      status: "At risk",
      category: "Productivity",
      frequency: "Bi-weekly",
      assignees: "30 assignees",
      currentValue: 38,
      targetValue: 40,
      weight: "20%",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* LEFT PRIMARY SIDEBAR */}
      <CustomSidebar></CustomSidebar>

      {/* MAIN DATA INTERFACE CONTAINER */}
      <main className="main-content">
        {/* TOP STATUS BAR */}
        <CustomHeader title="Dashboard" />

        {/* VIEWPORT CONTENT BODY */}
        <div className="content-body">
          {/* CONTENT TITLE HEADER SECTION */}
          <div className="kpi-management-title">
            <div className="title-text">
              <h1>KPI Management</h1>
              <p>Create, manage, and track key performance indicators</p>
            </div>
            <div className="actions-group">
              <button className="btn btn-secondary">🗄️ Import Template</button>
              <button
                onClick={() => setShowModal(true)}
                className="btn btn-primary"
              >
                ＋ Create KPI
              </button>
            </div>
          </div>

          {/* SEARCH AND FILTERS */}
          <div className="search-filter-bar">
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="🔍 Search KPIs..."
              />
            </div>
            <button className="btn btn-secondary">⏳ Filters</button>
          </div>

          {/* SPLIT GRID DATA SECTION */}
          <div className="dashboard-grid">
            {/* LEFT FILTER PANELS */}
            <div className="left-column-panels">
              {/* Categories Navigation panel */}
              <div className="panel-card">
                <h3>Categories</h3>
                <ul className="category-list">
                  {categories.map((cat) => (
                    <li
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                      className={`category-item ${activeCategory === cat.name ? "active" : ""}`}
                    >
                      <span>{cat.name}</span>
                      <span className="category-count">{cat.count}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Templates Shortcut Panel */}
              <div className="panel-card">
                <div className="panel-card-header">
                  <h3>Templates</h3>
                  <a href="#view-all" className="view-all-link">
                    View All
                  </a>
                </div>
                <div className="templates-list">
                  {templates.map((tpl) => (
                    <div key={tpl.title} className="template-item">
                      <div className="template-icon">◎</div>
                      <div className="template-info-text">
                        <div className="title">{tpl.title}</div>
                        <div className="sub">{tpl.count} KPIs</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MAIN DATA KPI FEED LIST */}
            <div className="kpi-list">
              {kpis.map((kpi) => {
                const percentage = (kpi.currentValue / kpi.targetValue) * 100;
                const statusClass = kpi.status.toLowerCase().replace(" ", "-");

                return (
                  <div key={kpi.id} className="kpi-card">
                    <div className="kpi-card-header">
                      <div>
                        <div className="kpi-title-row">
                          <h2>{kpi.title}</h2>
                          <span className={`status-badge ${statusClass}`}>
                            ✓ {kpi.status}
                          </span>
                        </div>
                        <div className="kpi-meta-row">
                          <div className="meta-item">◎ {kpi.category}</div>
                          <div className="meta-item">📅 {kpi.frequency}</div>
                          <div className="meta-item">👥 {kpi.assignees}</div>
                        </div>
                      </div>

                      <div className="kpi-actions-right">
                        <button className="action-icon-btn">✏️</button>
                        <button className="action-icon-btn">🗑️</button>
                        <button className="action-icon-btn">⋮</button>
                      </div>
                    </div>

                    <div className="kpi-card-body">
                      {/* Metric Indicator Progress Slider */}
                      <div className="progress-container">
                        <div className="progress-labels">
                          <div>
                            <span className="progress-muted-label">
                              Progress
                            </span>
                          </div>
                          <div>
                            <span className="progress-current">
                              {kpi.currentValue}
                            </span>
                            <span className="progress-target">
                              {" "}
                              / {kpi.targetValue}
                            </span>
                          </div>
                        </div>
                        <div className="progress-bar-bg">
                          <div
                            className={`progress-bar-fill ${statusClass}`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <div className="progress-labels">
                          <span className="progress-min-label">
                            {kpi.currentValue}
                          </span>
                          <span className="progress-min-label">
                            Target: {kpi.targetValue}
                          </span>
                        </div>
                      </div>

                      {/* Weight value percentage block metadata layout */}
                      <div className="kpi-weight-action">
                        <div className="weight-display">
                          <div className="weight-value">{kpi.weight}</div>
                          <div className="weight-label">Weight</div>
                        </div>
                        <button className="btn btn-secondary btn-sm">
                          Details ❯
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <CreateKpiModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
