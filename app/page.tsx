import {
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Cpu,
  FileText,
  Gauge,
  HardDrive,
  Home,
  MessageSquareText,
  MoreHorizontal,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "Hardware", icon: HardDrive },
  { label: "Accounts", icon: UsersRound },
  { label: "Flood Monitor", icon: Gauge },
  { label: "AI Optimization", icon: Cpu },
  { label: "Sensors", icon: SlidersHorizontal },
  { label: "Verification", icon: ShieldCheck },
  { label: "Reports", icon: FileText },
  { label: "Settings", icon: Settings },
];

const summary = [
  { label: "Active Sensors", value: "128", tone: "blue", delta: "+12 today" },
  { label: "Pending Tickets", value: "18", tone: "amber", delta: "6 urgent" },
  { label: "Resolved", value: "94%", tone: "green", delta: "+4.2%" },
  { label: "Offline Units", value: "7", tone: "red", delta: "needs review" },
];

const requests = [
  {
    id: "REQ-2048",
    name: "Barangay Sta. Cruz",
    type: "Water level sensor",
    status: "In progress",
    owner: "M. Santos",
    date: "May 24, 2026",
  },
  {
    id: "REQ-2047",
    name: "Poblacion Bridge",
    type: "Hardware check",
    status: "For verification",
    owner: "J. Reyes",
    date: "May 24, 2026",
  },
  {
    id: "REQ-2046",
    name: "San Isidro Node",
    type: "Signal calibration",
    status: "Completed",
    owner: "A. Garcia",
    date: "May 23, 2026",
  },
  {
    id: "REQ-2045",
    name: "Zone 4 Pump Station",
    type: "Flood alert review",
    status: "Scheduled",
    owner: "L. Cruz",
    date: "May 23, 2026",
  },
];

const alerts = [
  "Sensor HI-21 crossed warning threshold",
  "Verification batch ready for approval",
  "Firmware update available for 12 devices",
];

export default function HomePage() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandMark">W</div>
          <div>
            <span>Web UI</span>
            <strong>Operations</strong>
          </div>
        </div>

        <nav className="navList" aria-label="Main navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                className={item.active ? "navItem active" : "navItem"}
                href="#"
                key={item.label}
              >
                <Icon size={18} strokeWidth={2.2} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="operator">
          <div className="avatar">WS</div>
          <div>
            <span>Signed in as</span>
            <strong>Wendell</strong>
          </div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Flood Monitoring Console</p>
            <h1>Dashboard</h1>
          </div>

          <div className="topActions">
            <label className="searchBox">
              <Search size={18} />
              <input placeholder="Search records" />
            </label>
            <button className="iconButton" aria-label="Notifications">
              <Bell size={18} />
            </button>
            <button className="profileButton">
              <UserRound size={18} />
              <span>Admin</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </header>

        <section className="contentGrid">
          <div className="mainColumn">
            <section className="summaryGrid" aria-label="System summary">
              {summary.map((item) => (
                <article className="metricCard" key={item.label}>
                  <span className={`metricIcon ${item.tone}`} />
                  <p>{item.label}</p>
                  <div>
                    <strong>{item.value}</strong>
                    <span>{item.delta}</span>
                  </div>
                </article>
              ))}
            </section>

            <section className="panel">
              <div className="panelHeader">
                <div>
                  <p className="eyebrow">Live Queue</p>
                  <h2>Hardware & Verification Requests</h2>
                </div>
                <button className="secondaryButton">
                  <CalendarDays size={17} />
                  Today
                </button>
              </div>

              <div className="tableWrap">
                <table>
                  <thead>
                    <tr>
                      <th>Request</th>
                      <th>Location</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Owner</th>
                      <th>Date</th>
                      <th aria-label="Actions" />
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((request) => (
                      <tr key={request.id}>
                        <td className="requestId">{request.id}</td>
                        <td>{request.name}</td>
                        <td>{request.type}</td>
                        <td>
                          <span className={`status ${slugify(request.status)}`}>
                            {request.status}
                          </span>
                        </td>
                        <td>{request.owner}</td>
                        <td>{request.date}</td>
                        <td>
                          <button className="rowAction" aria-label="More actions">
                            <MoreHorizontal size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <aside className="sideColumn">
            <section className="panel compact">
              <div className="panelHeader">
                <div>
                  <p className="eyebrow">Action Center</p>
                  <h2>Quick Tasks</h2>
                </div>
              </div>

              <div className="taskList">
                <button>
                  <ClipboardList size={18} />
                  Create inspection
                </button>
                <button>
                  <Wrench size={18} />
                  Assign hardware
                </button>
                <button>
                  <MessageSquareText size={18} />
                  Send update
                </button>
              </div>
            </section>

            <section className="panel compact">
              <div className="panelHeader">
                <div>
                  <p className="eyebrow">Alerts</p>
                  <h2>Recent Activity</h2>
                </div>
              </div>

              <ul className="alertList">
                {alerts.map((alert) => (
                  <li key={alert}>
                    <CheckCircle2 size={18} />
                    <span>{alert}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </section>
      </section>
    </main>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replaceAll(" ", "-");
}
