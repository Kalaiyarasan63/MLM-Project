/* Login css */
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap");

:root {
  --bg: #0a0c10;
  --card: #0d1117;
  --card2: #111827;
  --border: #1f2937;
  --primary: #6366f1;
  --accent: #22d3ee;
  --text: #f1f5f9;
  --muted: #64748b;
  --red: #f43f5e;
  --green: #10b981;
  --gold: #f59e0b;
}

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
}

/* ── Layout ── */
.login-root {
  min-height: 100vh;
  display: flex;
}

/* ── Left panel ── */
.login-left {
  display: none;
  width: 60%;
  background: linear-gradient(135deg, var(--card), var(--bg), var(--card));
  padding: 48px;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
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
  background: rgba(99, 102, 241, 0.18);
}
.blob2 {
  bottom: -120px;
  left: -120px;
  width: 340px;
  height: 340px;
  background: rgba(245, 158, 11, 0.1);
}
.blob3 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  background: rgba(99, 102, 241, 0.05);
}

.login-brand {
  position: relative;
  z-index: 1;
}
.login-brand-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 6px;
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
}
.login-brand-name {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 0.05em;
}
.login-brand-sub {
  color: var(--muted);
  font-size: 15px;
}

/* network illustration area */
.login-illustration {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.net-svg {
  width: 100%;
  max-width: 380px;
}

/* stats */
.login-stats {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 16px;
}
.stat-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px 22px;
  display: flex;
  align-items: center;
  gap: 14px;
  backdrop-filter: blur(8px);
}
.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(99, 102, 241, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
}
.stat-value {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
}
.stat-label {
  font-size: 10px;
  color: var(--muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: "JetBrains Mono";
}

/* ── Right panel ── */
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

/* mobile brand */
.login-mobile-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
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
}
.login-mobile-brand-name {
  font-size: 20px;
  font-weight: 700;
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
}
.login-sub {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 32px;
}

/* form */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.form-input {
  height: 48px;
  padding: 0 16px;
  background: var(--card2);
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
.form-input::placeholder {
  color: var(--muted);
}
.form-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.input-wrap {
  position: relative;
}
.input-wrap .form-input {
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

/* role selector */
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
  background: var(--card2);
  color: var(--muted);
  font-size: 13px;
  font-weight: 500;
  font-family: "Sora", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  transition: all 0.18s ease;
}
.role-btn.selected.admin {
  border-color: rgba(245, 158, 11, 0.5);
  background: rgba(245, 158, 11, 0.08);
  color: var(--gold);
}
.role-btn.selected.user {
  border-color: rgba(34, 211, 238, 0.4);
  background: rgba(34, 211, 238, 0.08);
  color: var(--accent);
}
.role-btn:not(.selected):hover {
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
.admin .role-tag {
  background: rgba(245, 158, 11, 0.15);
  color: var(--gold);
}
.user .role-tag {
  background: rgba(34, 211, 238, 0.12);
  color: var(--accent);
}

/* hint */
.login-hint {
  font-size: 11px;
  color: var(--muted);
  text-align: center;
  padding: 10px;
  background: var(--card2);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-family: "JetBrains Mono";
}
.login-hint b {
  color: var(--text);
}

/* buttons */
.btn-primary {
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
}
.btn-primary:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}
.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-outline {
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
.btn-outline:hover {
  border-color: rgba(255, 255, 255, 0.25);
  background: var(--card2);
}

/* error */
.login-error {
  padding: 10px 14px;
  border-radius: 8px;
  background: rgba(244, 63, 94, 0.1);
  border: 1px solid rgba(244, 63, 94, 0.3);
  color: var(--red);
  font-size: 13px;
}

/* loading spinner */
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
  margin-right: 8px;
  vertical-align: middle;
}

/* network SVG animation */
@keyframes pulse-node {
  0%,
  100% {
    opacity: 0.6;
    r: 5;
  }
  50% {
    opacity: 1;
    r: 7;
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
.net-node {
  animation: pulse-node 2.5s ease-in-out infinite;
}
.net-node:nth-child(2) {
  animation-delay: 0.4s;
}
.net-node:nth-child(3) {
  animation-delay: 0.8s;
}
.net-node:nth-child(4) {
  animation-delay: 1.2s;
}
.net-edge {
  stroke-dasharray: 8 4;
  animation: flow 3s linear infinite;
}
