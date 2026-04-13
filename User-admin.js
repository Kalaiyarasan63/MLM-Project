/* Global.css  */

@import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap");
@import "bootstrap/dist/css/bootstrap.min.css";

/* ══════════════════════════════════════════
   THEME TOKENS
══════════════════════════════════════════ */
[data-theme="light"] {
  --bg: #f4f6fb;
  --sb-bg: #ffffff;
  --card: #ffffff;
  --card2: #f8fafc;
  --border: #e2e8f0;
  --primary: #6366f1;
  --accent: #22d3ee;
  --p-dim: rgba(99, 102, 241, 0.1);
  --a-dim: rgba(34, 211, 238, 0.07);
  --text: #1e293b;
  --muted: #64748b;
  --red: #f43f5e;
  --green: #10b981;
  --gold: #f59e0b;
  --topbar: #ffffff;
  --nav-hover: #f1f5f9;
  --nav-active-bg: rgba(99, 102, 241, 0.08);
  --input-bg: #f8fafc;
  --login-left: #f0f4ff;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
}

[data-theme="dark"] {
  --bg: #0a0c10;
  --sb-bg: #0d1117;
  --card: #111827;
  --card2: #111827;
  --border: #1f2937;
  --primary: #6366f1;
  --accent: #22d3ee;
  --p-dim: rgba(99, 102, 241, 0.12);
  --a-dim: rgba(34, 211, 238, 0.08);
  --text: #f1f5f9;
  --muted: #64748b;
  --red: #f43f5e;
  --green: #10b981;
  --gold: #f59e0b;
  --topbar: #0d1117;
  --nav-hover: #111827;
  --nav-active-bg: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.12),
    rgba(34, 211, 238, 0.08)
  );
  --input-bg: #111827;
  --login-left: #0d1117;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
}

/* ══════════════════════════════════════════
   RESET & BASE
══════════════════════════════════════════ */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: "Sora", sans-serif;
  min-height: 100vh;
  transition:
    background 0.25s,
    color 0.25s;
}

/* ══════════════════════════════════════════
   LOGIN PAGE
══════════════════════════════════════════ */
.login-root {
  min-height: 100vh;
  display: flex;
}

.login-left {
  display: none;
  width: 60%;
  background: var(--login-left);
  padding: 48px;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  border-right: 1px solid var(--border);
}
@media (min-width: 1024px) {
  .login-left {
    display: flex;
  }
}

.login-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.blob1 {
  top: -120px;
  right: -120px;
  width: 340px;
  height: 340px;
  background: rgba(99, 102, 241, 0.15);
}
.blob2 {
  bottom: -120px;
  left: -120px;
  width: 340px;
  height: 340px;
  background: rgba(245, 158, 11, 0.08);
}

.login-brand-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22px;
  flex-shrink: 0;
}
.login-brand-name {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--text);
}
.login-brand-sub {
  color: var(--muted);
  font-size: 15px;
}

.net-svg {
  width: 100%;
  max-width: 380px;
}
.net-node {
  animation: pulse-node 2.5s ease-in-out infinite;
}
.net-edge {
  stroke-dasharray: 8 4;
  animation: flow 3s linear infinite;
}

@keyframes pulse-node {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}
@keyframes flow {
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.login-stat-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: var(--shadow);
  flex: 1;
}
.login-stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}
.login-stat-value {
  font-size: 19px;
  font-weight: 700;
  line-height: 1.1;
  color: var(--text);
}
.login-stat-label {
  font-size: 10px;
  color: var(--muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: "JetBrains Mono";
}

.login-right {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  background: var(--card);
}
@media (min-width: 1024px) {
  .login-right {
    width: 40%;
  }
}

.login-box {
  width: 100%;
  max-width: 400px;
}

.login-mobile-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}
.login-mobile-brand-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
}
.login-mobile-brand-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
}
@media (min-width: 1024px) {
  .login-mobile-brand {
    display: none;
  }
}

.login-heading {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
  color: var(--text);
}
.login-sub {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 28px;
}

/* ── Form Elements ── */
.form-label-custom {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}
.form-input-custom {
  height: 48px;
  padding: 0 16px;
  background: var(--input-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text);
  font-size: 14px;
  font-family: "Sora", sans-serif;
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  width: 100%;
}
.form-input-custom::placeholder {
  color: var(--muted);
}
.form-input-custom:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
.form-select-custom {
  height: 48px;
  padding: 0 16px;
  background: var(--input-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text);
  font-size: 14px;
  font-family: "Sora", sans-serif;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  cursor: pointer;
}
.form-select-custom:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
.form-textarea-custom {
  padding: 12px 16px;
  background: var(--input-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text);
  font-size: 14px;
  font-family: "Sora", sans-serif;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  resize: vertical;
}
.form-textarea-custom:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.input-wrap {
  position: relative;
}
.input-wrap .form-input-custom {
  padding-right: 48px;
}
.eye-btn {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--muted);
  display: flex;
  align-items: center;
  transition: color 0.2s;
  font-size: 16px;
}
.eye-btn:hover {
  color: var(--text);
}

.otp-input {
  text-align: center;
  letter-spacing: 0.4em;
  font-size: 20px;
  font-family: "JetBrains Mono";
  padding: 0;
}

/* ── Role Selector ── */
.role-selector {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.role-btn {
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid var(--border);
  background: var(--input-bg);
  color: var(--muted);
  font-size: 13px;
  font-weight: 500;
  font-family: "Sora", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  transition: all 0.18s ease;
  width: 100%;
}
.role-btn.selected-admin {
  border-color: rgba(245, 158, 11, 0.5);
  background: rgba(245, 158, 11, 0.08);
  color: var(--gold);
}
.role-btn.selected-user {
  border-color: rgba(34, 211, 238, 0.4);
  background: rgba(34, 211, 238, 0.08);
  color: var(--accent);
}
.role-btn:not(.selected-admin):not(.selected-user):hover {
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--text);
}
.role-tag {
  font-size: 9px;
  letter-spacing: 0.06em;
  font-family: "JetBrains Mono";
  padding: 2px 8px;
  border-radius: 999px;
}
.role-tag-admin {
  background: rgba(245, 158, 11, 0.15);
  color: var(--gold);
}
.role-tag-user {
  background: rgba(34, 211, 238, 0.12);
  color: var(--accent);
}

/* ── Buttons ── */
.btn-primary-custom {
  height: 48px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, var(--primary), #818cf8);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  font-family: "Sora", sans-serif;
  transition:
    opacity 0.2s,
    transform 0.15s;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.btn-primary-custom:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}
.btn-primary-custom:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-outline-custom {
  height: 48px;
  border-radius: 10px;
  cursor: pointer;
  background: none;
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
  font-family: "Sora", sans-serif;
  transition: all 0.18s;
  width: 100%;
}
.btn-outline-custom:hover {
  border-color: var(--primary);
  background: var(--p-dim);
}

.btn-sm-primary {
  height: 36px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, var(--primary), #818cf8);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  font-family: "Sora", sans-serif;
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition:
    opacity 0.2s,
    transform 0.15s;
  white-space: nowrap;
}
.btn-sm-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.btn-sm-outline {
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  background: none;
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 13px;
  font-weight: 500;
  font-family: "Sora", sans-serif;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.18s;
}
.btn-sm-outline:hover {
  border-color: var(--primary);
  background: var(--p-dim);
}

.login-hint {
  font-size: 11px;
  color: var(--muted);
  text-align: center;
  padding: 10px;
  background: var(--input-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-family: "JetBrains Mono";
}
.login-hint b {
  color: var(--text);
}

.form-forgot {
  font-size: 12px;
  color: var(--primary);
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Sora", sans-serif;
}
.form-forgot:hover {
  text-decoration: underline;
}

.login-error {
  padding: 10px 14px;
  border-radius: 8px;
  background: rgba(244, 63, 94, 0.1);
  border: 1px solid rgba(244, 63, 94, 0.3);
  color: var(--red);
  font-size: 13px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

/* ══════════════════════════════════════════
   TOPBAR
══════════════════════════════════════════ */
.aghan-topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: var(--topbar);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 40;
  box-shadow: var(--shadow);
  transition: background 0.25s;
}
.aghan-logo-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
  font-size: 16px;
}
.aghan-logo-name {
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.06em;
  line-height: 1.2;
  color: var(--text);
}
.aghan-logo-sub {
  font-size: 10px;
  color: var(--muted);
  font-family: "JetBrains Mono";
  letter-spacing: 0.08em;
}

.role-badge {
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  font-family: "JetBrains Mono";
}
.role-badge-admin {
  background: rgba(245, 158, 11, 0.15);
  color: var(--gold);
  border: 1px solid rgba(245, 158, 11, 0.3);
}
.role-badge-user {
  background: rgba(34, 211, 238, 0.12);
  color: var(--accent);
  border: 1px solid rgba(34, 211, 238, 0.3);
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--muted);
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  transition:
    color 0.2s,
    background 0.2s;
}
.icon-btn:hover {
  color: var(--text);
  background: var(--nav-hover);
}
.notif-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--red);
  border: 2px solid var(--topbar);
}
.user-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}
.user-email {
  font-size: 11px;
  color: var(--muted);
  font-family: "JetBrains Mono";
}
@media (max-width: 640px) {
  .user-meta {
    display: none;
  }
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  border: 2px solid var(--border);
  transition: border-color 0.2s;
  flex-shrink: 0;
}
.avatar:hover {
  border-color: var(--primary);
}

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text);
  padding: 8px;
  border-radius: 8px;
  line-height: 0;
  transition: background 0.2s;
}
.hamburger:hover {
  background: var(--nav-hover);
}
@media (max-width: 1024px) {
  .hamburger {
    display: flex;
    align-items: center;
  }
}

/* Theme toggle */
.theme-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--nav-hover);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 12px;
  color: var(--muted);
  font-family: "JetBrains Mono";
  transition: all 0.2s;
  white-space: nowrap;
}
.theme-toggle:hover {
  border-color: var(--primary);
  color: var(--text);
}

/* ══════════════════════════════════════════
   OVERLAY
══════════════════════════════════════════ */
.overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  z-index: 45;
}
@media (max-width: 1024px) {
  .overlay.show {
    display: block;
  }
}

/* ══════════════════════════════════════════
   SIDEBAR
══════════════════════════════════════════ */
.sidebar {
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  width: 260px;
  background: var(--sb-bg);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  z-index: 50;
  transition:
    width 0.3s ease,
    transform 0.3s ease;
  overflow: hidden;
}
.sidebar.collapsed {
  width: 72px;
}
@media (max-width: 1024px) {
  .sidebar {
    transform: translateX(-100%);
    box-shadow: 4px 0 32px rgba(0, 0, 0, 0.3);
  }
  .sidebar.open {
    transform: translateX(0);
  }
  .sidebar.collapsed {
    width: 260px;
  }
}

.user-strip {
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
}
.user-strip.hidden {
  display: none;
}
.strip-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  flex-shrink: 0;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fff;
  font-size: 15px;
}
.strip-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}
.strip-id {
  font-size: 11px;
  color: var(--muted);
  font-family: "JetBrains Mono";
}
.chip {
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.chip-plan {
  background: var(--p-dim);
  color: var(--primary);
  border: 1px solid rgba(99, 102, 241, 0.3);
}
.chip-active {
  background: rgba(16, 185, 129, 0.12);
  color: var(--green);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.nav-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 10px 8px;
}
.nav-scroll::-webkit-scrollbar {
  width: 3px;
}
.nav-scroll::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 9px 11px;
  border-radius: 10px;
  margin-bottom: 2px;
  text-decoration: none;
  color: var(--muted);
  font-size: 13px;
  font-weight: 500;
  border: 1px solid transparent;
  transition: all 0.18s ease;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
  background: none;
  width: 100%;
  text-align: left;
  font-family: "Sora", sans-serif;
}
.nav-item:hover {
  color: var(--text);
  background: var(--nav-hover);
  border-color: var(--border);
}
.nav-item.active {
  color: var(--text);
  background: var(--nav-active-bg);
  border-color: rgba(99, 102, 241, 0.2);
}
.nav-indicator {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 18px;
  border-radius: 0 3px 3px 0;
  background: linear-gradient(to bottom, var(--primary), var(--accent));
}
.nav-label {
  flex: 1;
  overflow: hidden;
  transition: opacity 0.2s;
}
.nav-badge {
  background: var(--red);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 7px;
  border-radius: 999px;
  margin-left: auto;
  flex-shrink: 0;
}

.sidebar.collapsed .nav-item {
  justify-content: center;
  padding: 10px;
}
.sidebar.collapsed .nav-label,
.sidebar.collapsed .nav-badge {
  display: none;
}
.sidebar.collapsed .nav-item:hover::after {
  content: attr(data-label);
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  background: var(--card);
  color: var(--text);
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid var(--border);
  white-space: nowrap;
  z-index: 999;
  pointer-events: none;
}

.nav-group-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  font-family: "JetBrains Mono";
  padding: 6px 11px 4px;
  margin-top: 8px;
}
.sidebar.collapsed .nav-group-label {
  display: none;
}

.sidebar-footer {
  padding: 10px 8px;
  border-top: 1px solid var(--border);
}
.footer-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 11px;
  border-radius: 10px;
  background: none;
  border: 1px solid transparent;
  cursor: pointer;
  color: var(--muted);
  font-size: 13px;
  font-weight: 500;
  font-family: "Sora", sans-serif;
  transition: all 0.18s;
  width: 100%;
  white-space: nowrap;
}
.footer-btn:hover {
  color: var(--text);
  background: var(--nav-hover);
  border-color: var(--border);
}
.footer-btn.danger:hover {
  color: var(--red);
  background: rgba(244, 63, 94, 0.08);
  border-color: rgba(244, 63, 94, 0.25);
}
.sidebar.collapsed .footer-btn {
  justify-content: center;
}
.sidebar.collapsed .footer-label {
  display: none;
}
@media (max-width: 1024px) {
  .collapse-btn {
    display: none !important;
  }
}

/* ══════════════════════════════════════════
   MAIN CONTENT
══════════════════════════════════════════ */
.main {
  margin-left: 260px;
  margin-top: 64px;
  padding: 28px;
  transition: margin-left 0.3s ease;
  min-height: calc(100vh - 64px);
}
.main.collapsed {
  margin-left: 72px;
}
@media (max-width: 1024px) {
  .main {
    margin-left: 0 !important;
    padding-bottom: 80px;
  }
}

/* ══════════════════════════════════════════
   BOTTOM NAV
══════════════════════════════════════════ */
.bottom-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: var(--sb-bg);
  border-top: 1px solid var(--border);
  align-items: center;
  justify-content: space-around;
  z-index: 50;
}
@media (max-width: 1024px) {
  .bottom-nav {
    display: flex;
  }
}
.bottom-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 8px 14px;
  text-decoration: none;
  color: var(--muted);
  font-size: 10px;
  font-weight: 500;
  border-radius: 10px;
  transition: color 0.2s;
  cursor: pointer;
  background: none;
  border: none;
  font-family: "Sora", sans-serif;
}
.bottom-item.active {
  color: var(--primary);
}
.bottom-item:hover {
  color: var(--text);
}

/* ══════════════════════════════════════════
   DASHBOARD & PAGE COMPONENTS
══════════════════════════════════════════ */
.page-header {
  margin-bottom: 24px;
}
.page-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text);
}
.page-sub {
  font-size: 14px;
  color: var(--muted);
  margin-top: 4px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 28px;
}

.dash-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px;
  box-shadow: var(--shadow);
  transition:
    transform 0.15s,
    box-shadow 0.15s;
}
.dash-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
.dash-card-label {
  font-size: 12px;
  color: var(--muted);
  font-family: "JetBrains Mono";
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.dash-card-value {
  font-size: 26px;
  font-weight: 700;
  color: var(--text);
  line-height: 1.1;
}
.dash-card-sub {
  font-size: 12px;
  color: var(--green);
  margin-top: 4px;
  font-weight: 500;
}
.icon-circle {
  width: 42px;
  height: 42px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-bottom: 12px;
}

.section-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 16px;
}

.content-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px;
  box-shadow: var(--shadow);
  margin-bottom: 20px;
}

.table-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px;
  box-shadow: var(--shadow);
  margin-bottom: 20px;
  overflow-x: auto;
}
.custom-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.custom-table th {
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 8px 12px;
  border-bottom: 1px solid var(--border);
  font-family: "JetBrains Mono";
  font-weight: 500;
  text-align: left;
}
.custom-table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--border);
  color: var(--text);
}
.custom-table tr:last-child td {
  border-bottom: none;
}
.custom-table tr:hover td {
  background: var(--nav-hover);
}

.status-pill {
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  font-family: "JetBrains Mono";
}
.status-active {
  background: rgba(16, 185, 129, 0.12);
  color: var(--green);
  border: 1px solid rgba(16, 185, 129, 0.3);
}
.status-pending {
  background: rgba(245, 158, 11, 0.12);
  color: var(--gold);
  border: 1px solid rgba(245, 158, 11, 0.3);
}
.status-inactive {
  background: rgba(244, 63, 94, 0.1);
  color: var(--red);
  border: 1px solid rgba(244, 63, 94, 0.3);
}

.mono {
  font-family: "JetBrains Mono";
  font-size: 12px;
  color: var(--muted);
}
.text-green {
  color: var(--green);
  font-weight: 600;
}
.text-red {
  color: var(--red);
  font-weight: 600;
}
.text-gold {
  color: var(--gold);
  font-weight: 600;
}
.text-primary-c {
  color: var(--primary);
  font-weight: 600;
}
