

/* =======================================================
   1. DESIGN TOKENS & MEDICAL GREEN PALETTE
======================================================= */
:root {
  --primary: #059669;          /* Emerald Green */
  --primary-hover: #047857;    /* Deep Emerald */
  --primary-dark: #064e3b;     /* Forest Green */
  --primary-light: #ecfdf5;    /* Mint Tint */
  --primary-glow: rgba(5, 150, 105, 0.22);
  
  --secondary: #0d9488;        /* Medical Teal */
  --secondary-light: #f0fdfa;
  --accent: #10b981;           /* Bright Mint */
  
  --dark: #06281e;             /* Deep Spruce */
  --muted: #52796f;            /* Sage Text */
  --border-subtle: rgba(16, 185, 129, 0.18);
  --border-card: #d1fae5;
  
  --card-bg: rgba(255, 255, 255, 0.94);
  --glass-nav: rgba(255, 255, 255, 0.88);
  
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;

  --sidebar-width: 260px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --shadow-soft: 0 12px 32px -4px rgba(6, 40, 30, 0.06), 0 4px 12px -2px rgba(6, 40, 30, 0.03);
  --shadow-hover: 0 20px 40px -8px rgba(5, 150, 105, 0.2);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
}

/* =======================================================
   2. MEDICAL CROSS & ECG WATERMARK BACKGROUND
======================================================= */
body {
  color: var(--dark);
  min-height: 100vh;
  background-color: #f2fbf7;
  background-image: 
    radial-gradient(circle at 10% 15%, rgba(16, 185, 129, 0.16) 0%, transparent 45%),
    radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.14) 0%, transparent 45%),
    radial-gradient(circle at 50% 50%, rgba(13, 148, 136, 0.06) 0%, transparent 60%),
    url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.045' fill-rule='evenodd'%3E%3Cpath d='M34 26v-8h12v8h8v12h-8v8H34v-8h-8V26h8zm-20 36v-4h6v4h4v6h-4v4h-6v-4h-4v-6h4zm52 0v-4h6v4h4v6h-4v4h-6v-4h-4v-6h4z'/%3E%3Cpath d='M10 20h6l3 6 4-12 4 10 3-4h6' stroke='%23059669' stroke-width='1.5' stroke-opacity='0.045' fill='none'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
}

/* =======================================================
   3. APP LAYOUT WITH FIXED LEFT SIDEBAR
======================================================= */
.app-layout {
  display: flex;
  min-height: 100vh;
}

/* SIDEBAR LEFT */
.sidebar-left {
  width: var(--sidebar-width);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(14px);
  border-right: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 60;
  transition: transform 0.3s ease;
}

.sidebar-brand {
  padding: 24px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #e6f7ef;
}

.brand-logo {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: var(--radius-sm);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 800;
  box-shadow: 0 4px 12px var(--primary-glow);
}

.brand-text h1 {
  font-size: 18px;
  font-weight: 800;
  color: var(--primary-dark);
  letter-spacing: -0.5px;
}
.brand-text span {
  font-size: 10.5px;
  color: var(--muted);
  font-weight: 600;
  text-transform: uppercase;
}

.sidebar-menu {
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  overflow-y: auto;
}

.menu-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  padding: 6px 12px;
}

.side-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 14px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: var(--muted);
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: all 0.15s ease;
}
.side-link:hover {
  background: #f0fdf4;
  color: var(--primary-dark);
}
.side-link.active {
  background: var(--primary);
  color: #ffffff;
  box-shadow: 0 4px 12px var(--primary-glow);
}
.side-link.active .badge-new {
  background: #ffffff;
  color: var(--primary);
}

.side-icon {
  font-size: 16px;
}

.badge-new {
  margin-left: auto;
  font-size: 10px;
  font-weight: 800;
  background: #dcfce7;
  color: var(--primary-dark);
  padding: 2px 7px;
  border-radius: 10px;
  text-transform: uppercase;
}

.side-link-action {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border-radius: 10px;
  border: 1px dashed var(--primary);
  background: #f0fdf4;
  color: var(--primary-dark);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: all 0.2s ease;
}
.side-link-action:hover {
  background: #dcfce7;
}

.sidebar-footer {
  padding: 16px;
  border-top: 1px solid #e6f7ef;
}
.emergency-box {
  background: #fff1f2;
  border: 1px solid #fecdd3;
  padding: 12px;
  border-radius: 10px;
  font-size: 11.5px;
}
.emergency-title {
  color: #9f1239;
  font-weight: 700;
  margin-bottom: 2px;
}
.emergency-num {
  font-weight: 800;
  color: #be123c;
  font-size: 13px;
  margin-bottom: 4px;
}

/* MAIN CONTENT WRAPPER */
.main-wrapper {
  margin-left: var(--sidebar-width);
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* TOPBAR */
.topbar {
  height: 64px;
  background: var(--glass-nav);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  position: sticky;
  top: 0;
  z-index: 40;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-sidebar-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 22px;
  color: var(--primary-dark);
  cursor: pointer;
}

.breadcrumb {
  font-size: 14px;
  font-weight: 700;
  color: var(--primary-dark);
}

.topbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* GOOGLE AUTH BUTTON & PROFILE */
.btn-google {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  color: #374151;
  border: 1px solid #d1fae5;
  padding: 7px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(6, 40, 30, 0.04);
}
.btn-google:hover {
  background: #f0fdf4;
}
.google-icon { width: 17px; height: 17px; }

.user-profile-badge {
  display: none;
  align-items: center;
  gap: 10px;
  background: #ecfdf5;
  padding: 4px 12px 4px 6px;
  border-radius: 24px;
  border: 1px solid #a7f3d0;
}
.user-avatar-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
}
.user-details { display: flex; flex-direction: column; line-height: 1.1; }
.user-name { font-size: 12.5px; font-weight: 700; color: var(--primary-dark); }
.user-email { font-size: 10.5px; color: var(--muted); }
.btn-signout {
  background: none;
  border: none;
  color: var(--danger);
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  padding: 2px 4px;
}

/* PAGE CONTAINER */
.page-container {
  padding: 26px 30px 60px;
  max-width: 1200px;
  width: 100%;
}

/* =======================================================
   4. HERO BANNER & STATS CARDS
======================================================= */
.medical-hero-banner {
  background: linear-gradient(135deg, rgba(6, 78, 59, 0.94) 0%, rgba(15, 118, 110, 0.9) 100%),
    url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat;
  border-radius: var(--radius-lg);
  padding: 30px 34px;
  color: #ffffff;
  margin-bottom: 26px;
  box-shadow: 0 10px 30px rgba(6, 78, 59, 0.2);
}

.hero-tag {
  display: inline-block;
  background: rgba(16, 185, 129, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #a7f3d0;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.medical-hero-banner h2 { font-size: 23px; font-weight: 800; margin-bottom: 8px; }
.medical-hero-banner p { color: #d1fae5; font-size: 13.5px; max-width: 680px; margin-bottom: 16px; }
.hero-stats-strip { display: flex; gap: 20px; flex-wrap: wrap; font-size: 12.5px; font-weight: 600; color: #6ee7b7; }

/* STATS ROW */
.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 26px;
}
.stat-card {
  background: var(--card-bg);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  padding: 20px;
  box-shadow: var(--shadow-soft);
}
.stat-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.stat-title { font-size: 11.5px; font-weight: 700; color: var(--muted); text-transform: uppercase; }
.stat-pill { padding: 3px 8px; border-radius: 12px; font-size: 10.5px; font-weight: 700; }
.stat-pill.green { background: #dcfce7; color: #15803d; }
.stat-pill.teal { background: #ccfbf1; color: #0f766e; }
.stat-pill.amber { background: #fef3c7; color: #b45309; }
.stat-number { font-size: 30px; font-weight: 800; color: var(--primary-dark); }
.stat-sub { font-size: 11.5px; color: var(--muted); margin-top: 4px; }

/* QUICK ACCESS GRID (HOME VIEW) */
.quick-access-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}
.access-card {
  background: #ffffff;
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  box-shadow: var(--shadow-soft);
  transition: all 0.2s ease;
}
.access-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  box-shadow: var(--shadow-hover);
}
.access-icon {
  font-size: 28px;
  background: #f0fdf4;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.access-card h4 { font-size: 15px; font-weight: 800; color: var(--primary-dark); margin-bottom: 3px; }
.access-card p { font-size: 12px; color: var(--muted); }

/* =======================================================
   5. CITIZEN REGISTRATION STATUS LOOKUP & PASS
======================================================= */
.status-search-card {
  background: #ffffff;
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-soft);
  margin-bottom: 24px;
}
.status-search-form {
  display: flex;
  gap: 10px;
}
.status-search-form input {
  flex: 1;
  padding: 12px 18px;
  border: 1px solid #a7f3d0;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
}
.status-search-form input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.12);
}
.status-hints {
  font-size: 12px;
  color: var(--muted);
  margin-top: 10px;
}

/* DIGITAL CAMP PASS */
.admit-pass-card {
  background: #ffffff;
  border: 2px solid var(--primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(5, 150, 105, 0.14);
  max-width: 680px;
  margin: 0 auto;
}
.pass-header {
  background: linear-gradient(135deg, #059669 0%, #064e3b 100%);
  color: #fff;
  padding: 20px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pass-header h3 { font-size: 18px; font-weight: 800; }
.pass-header span { font-size: 12px; color: #a7f3d0; }
.pass-body {
  padding: 26px;
}
.pass-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}
.pass-field-label { font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; }
.pass-field-val { font-size: 15px; font-weight: 800; color: var(--primary-dark); margin-top: 2px; }
.pass-qr-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0fdf4;
  border: 1px dashed var(--primary);
  border-radius: 10px;
  padding: 16px 20px;
}
.pass-actions {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}

/* =======================================================
   6. CAMPS, CHARTS & PARTICIPANTS STYLES
======================================================= */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.section-header h2 { font-size: 21px; font-weight: 800; color: var(--primary-dark); }
.section-subtitle { font-size: 13px; color: var(--muted); }

.filter-pills { display: flex; gap: 8px; }
.pill {
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid #d1fae5;
  background: #ffffff;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: var(--muted);
}
.pill.active { background: var(--primary); color: #fff; border-color: var(--primary); }

.camps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}
.camp-card {
  background: var(--card-bg);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-soft);
}
.camp-status-badge {
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 10.5px;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 12px;
}
.camp-status-badge.upcoming { background: #dcfce7; color: #166534; }
.camp-status-badge.active { background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; }
.camp-status-badge.completed { background: #f1f5f9; color: #475569; }

.camp-title { font-size: 17px; font-weight: 800; color: var(--primary-dark); margin-bottom: 4px; }
.camp-specialty { font-size: 13px; color: var(--primary); font-weight: 700; margin-bottom: 12px; }
.camp-details { display: flex; flex-direction: column; gap: 6px; font-size: 12.5px; color: var(--muted); margin-bottom: 16px; }

.capacity-bar-container { margin-bottom: 18px; }
.capacity-label { display: flex; justify-content: space-between; font-size: 11.5px; font-weight: 700; color: var(--muted); margin-bottom: 5px; }
.capacity-bar-bg { height: 7px; background: #e6f7ef; border-radius: 4px; overflow: hidden; }
.capacity-bar-fill { height: 100%; background: linear-gradient(90deg, #10b981 0%, #059669 100%); border-radius: 4px; }
.camp-card-actions { display: flex; gap: 8px; }

/* CHARTS */
.charts-grid {
  display: grid;
  grid-template-columns: 2fr 1.25fr;
  gap: 20px;
}
.chart-box {
  background: var(--card-bg);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-soft);
}
.chart-box h3 { font-size: 16px; font-weight: 800; color: var(--primary-dark); margin-bottom: 4px; }
.chart-box p { font-size: 12.5px; color: var(--muted); margin-bottom: 18px; }
.chart-container { position: relative; width: 100%; height: 280px; }

/* TABLE */
.table-card {
  background: var(--card-bg);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-soft);
}
.table-toolbar {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-card);
  gap: 12px;
}
.search-input {
  padding: 9px 14px;
  border: 1px solid #a7f3d0;
  border-radius: 8px;
  font-size: 13px;
  width: 300px;
}
.participant-count-text { font-size: 12.5px; color: var(--muted); }
table { width: 100%; border-collapse: collapse; font-size: 13px; }
th { background: #f0fdf4; padding: 12px 16px; font-size: 11.5px; font-weight: 700; color: var(--primary-dark); border-bottom: 1px solid var(--border-card); text-align: left; }
td { padding: 14px 16px; border-bottom: 1px solid #f1fdf7; }
.status-tag { padding: 3px 8px; border-radius: 10px; font-size: 10.5px; font-weight: 700; }
.status-tag.confirmed { background: #dcfce7; color: #166534; }
.status-tag.checked-in { background: #ccfbf1; color: #0f766e; }
.status-tag.waitlist { background: #fef3c7; color: #b45309; }

/* BUTTONS */
.btn {
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.15s ease;
}
.btn-primary { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #fff; }
.btn-primary:hover { transform: translateY(-1px); }
.btn-outline { background: #fff; border-color: #a7f3d0; color: var(--primary-dark); }
.btn-outline:hover { background: #ecfdf5; }
.btn-full { width: 100%; justify-content: center; }

/* MODALS */
.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(6, 40, 30, 0.6);
  z-index: 100;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}
.modal.open { display: flex; }
.modal-box {
  background: #ffffff;
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 500px;
  padding: 26px;
}
.modal-auth { max-width: 420px; }
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; }
.modal-header h3 { font-size: 18px; font-weight: 800; color: var(--primary-dark); }
.close-btn { background: none; border: none; font-size: 24px; cursor: pointer; color: var(--muted); }

.auth-header-left { display: flex; align-items: center; gap: 8px; }
.auth-icon { width: 22px; height: 22px; }
.auth-title { font-weight: 800; font-size: 15px; }
.auth-subtitle { font-size: 12.5px; color: var(--muted); margin-bottom: 12px; }
.auth-divider { text-align: center; font-size: 11px; color: var(--muted); margin: 10px 0; }
.reg-camp-subtitle { font-size: 11.5px; color: var(--primary); font-weight: 700; }

.form-group { margin-bottom: 14px; display: flex; flex-direction: column; gap: 5px; }
.form-group label { font-size: 11.5px; font-weight: 700; color: var(--muted); }
.form-group input, .form-group select { padding: 9px 12px; border: 1px solid #d1fae5; border-radius: 8px; font-size: 13px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.modal-footer { display: flex; justify-content: flex-end; gap: 10px; margin-top: 18px; }

.google-account-list { display: flex; flex-direction: column; gap: 8px; margin: 14px 0; }
.google-account-item { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border: 1px solid #d1fae5; border-radius: 10px; cursor: pointer; }
.google-account-item:hover { background-color: #f0fdf4; border-color: var(--primary); }
.g-avatar { width: 34px; height: 34px; border-radius: 50%; background: var(--primary); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; }
.g-avatar.teal { background: var(--secondary); }
.g-name { font-size: 13px; font-weight: 700; }
.g-email { font-size: 11.5px; color: var(--muted); }

/* TOASTS */
.toast-container { position: fixed; bottom: 20px; right: 20px; z-index: 150; display: flex; flex-direction: column; gap: 8px; }
.toast { background: #064e3b; color: #ffffff; padding: 12px 18px; border-radius: 10px; font-size: 13px; font-weight: 600; box-shadow: 0 10px 25px rgba(6, 40, 30, 0.25); border-left: 4px solid var(--accent); transform: translateX(120%); transition: transform 0.3s ease; }
.toast.show { transform: translateX(0); }

.view-section { display: block; }
.view-section.hidden { display: none; }

/* RESPONSIVE */
@media (max-width: 900px) {
  .sidebar-left { transform: translateX(-100%); }
  .sidebar-left.open { transform: translateX(0); }
  .main-wrapper { margin-left: 0; }
  .btn-sidebar-toggle { display: block; }
  .charts-grid { grid-template-columns: 1fr; }
  .pass-grid { grid-template-columns: 1fr; }
  .page-container { padding: 18px; }
}
