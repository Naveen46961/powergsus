import React, { useState } from "react";
import {
  Shield,
  Sparkles,
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LayoutGrid,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import CustomButton from "../../components/Button/Button";

export default function App() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      {/* LEFT PANEL: Marketing Info */}
      <div className="left-panel">
        {/* Glow effect element */}
        <div className="radial-glow"></div>
        <div className="ring1"></div>
        <div className="ring2"></div>
        <div className="origin"></div>

        {/* Brand Logo */}
        <div className="brand-logo">
          <div className="logo-icon">
            <div className="logo-inner-circle">
              <div className="logo-dot"></div>
            </div>
          </div>
          <span className="brand-name">GSUS PerformX</span>
        </div>

        {/* Core Content */}
        <div className="marketing-content">
          <h1 className="hero-title">Unlock your team's full potential</h1>
          <p className="hero-subtitle">
            AI-powered performance management that helps you set goals, track
            progress, and drive results across your entire organization.
          </p>

          {/* Feature Badges/Rows */}
          <div className="feature-list">
            <div className="feature-item">
              <div className="icon-wrapper">
                <LayoutGrid size={16} />
              </div>
              <p className="feature-text">
                Smart KPI tracking with real-time insights
              </p>
            </div>

            <div className="feature-item">
              <div className="icon-wrapper">
                <Sparkles size={16} />
              </div>
              <p className="feature-text">
                AI-generated performance recommendations
              </p>
            </div>

            <div className="feature-item">
              <div className="icon-wrapper">
                <ArrowRight size={16} />
              </div>
              <p className="feature-text">
                Streamlined review cycles and feedback
              </p>
            </div>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="left-footer">Trusted by 500+ enterprises worldwide</div>
      </div>

      {/* RIGHT PANEL: Authentication Form */}
      <div className="right-panel">
        <div className="form-wrapper">
          {/* Form Header */}
          <div className="form-header">
            <h2>Welcome back</h2>
            <p>Sign in to your account to continue</p>
          </div>

          {/* Identity Providers / SSO */}
          {/* <div className="sso-group">
            <button className="sso-button">
              <svg
                className="sso-icon"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Continue with Google
            </button>

            <button className="sso-button">
              <svg
                className="sso-icon"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C3.79 16.35 4.17 9.82 8.26 9.49c1.52.12 2.45.96 3.24.96.77 0 2.03-1.01 3.87-.82 1.41.14 2.44.78 2.94 1.7-2.92 1.74-2.45 5.72.63 6.94-.65 1.44-1.32 2.45-1.89 3.01zM12.03 9.25c-.15-2.23 1.66-4.07 3.74-4.25.22 2.34-2.12 4.4-3.74 4.25z" />
              </svg>
              Continue with Apple
            </button>

            <button className="sso-button">
              <Shield size={14} className="sso-icon-lucide" />
              Continue with Okta SSO
            </button>
          </div> */}

          {/* Divider line */}
          {/* <div className="divider-container">
            <div className="divider-line"></div>
            <span className="divider-text">or continue with email</span>
          </div> */}

          {/* Submission Fields */}
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="input-label">Email1</label>
              <div className="input-wrapper">
                <Mail size={14} className="input-icon-left" />
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="login-form"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="label-row">
                <label className="input-label">Password</label>
                <a href="#" className="forgot-password-link">
                  Forgot password?
                </a>
              </div>
              <div className="input-wrapper">
                <Lock size={14} className="input-icon-left" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="login-form"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            <CustomButton
              text="Sign In"
              icon={<ArrowRight size={14} />}
              onClick={handleLogin}
            />
          </form>

          {/* Form Links Footer */}
          <div className="form-footer">
            <p className="admin-notice">
              Don't have an account? <a href="#">Contact your admin</a>
            </p>
            <p className="legal-notice">
              By signing in, you agree to our <a href="#">Terms of Service</a>{" "}
              and <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
