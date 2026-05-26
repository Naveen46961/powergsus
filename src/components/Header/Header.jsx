import "./Header.css";

export default function CustomHeader({ title }) {
  return (
    <header className="top-header">

      <div className="header-left">
        <h2>{title}</h2>
      </div>

      <div className="header-right">

        <button className="icon-btn">
          🔔
        </button>

        <div className="mini-profile">

          <div className="mini-avatar">
            SJ
          </div>

          <span>Sarah J.</span>

          <span>▼</span>

        </div>

      </div>

    </header>
  );
}