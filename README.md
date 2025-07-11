A lightweight Business Intelligence (BI) dashboard built with **Next.js 14 App Router**, **shadcn/ui**, and **Recharts**, designed for rapid delivery and clean architecture. Data is stored and managed on the client side using `localStorage`.

---

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Components**: shadcn/ui
- **Charting**: Recharts
- **State**: LocalStorage + React Context
- **Styling**: Tailwind CSS
- **Lint/Format**: ESLint + Prettier (default config)

---

## ✅ Functional Features

### 🔐 `/login`
- Simple login form (email + password)
- Stubbed in-memory auth (no real backend)

### 🧑‍💼 `/admin`
- CRUD for users and companies
- Assign users to companies and to reports
- Admin access is stored in memory and localStorage

### 📊 `/report/[reportId]`
- **Left Sidebar**:
  - Shows reports available to the current user
- **Main Content**:
  - KPI cards (Total & Average)
  - Line chart (time series data)
  - Bar chart (categorical breakdown)
- Responsive layout

### 🚪 `/logout`
- Simple logout screen with a link to `/login`

### 🔝 Top Header
- Visible on all pages except `/login`
- Includes app title and logout link

---

## 📁 Sample Data

Sample reports are served from `/public/data/reports.json`. Accessible via `/data/reports.json`.

Example format:
```json
{
  "reports": [
    {
      "id": "sales",
      "name": "Sales Report",
      "cards": { "total": 125000, "average": 4166.67 },
      "line": [...],
      "bar": [...]
    },
    ...
  ]
}
```
⚙️ Persistence Strategy

All user state (auth, assignments, edits) is stored in localStorage. This allows full client-side operation without needing a backend.
🚀 Setup & Run

pnpm install
pnpm dev

Open http://localhost:3000.
🧠 Evaluation Summary

This project demonstrates:

    ✅ Full scope coverage: login, user/admin, and report view

    ✅ Clean component structure using modern Next.js 14 conventions

    ✅ Responsive UI using shadcn/ui + Tailwind

    ✅ Charts rendered client-side only (Recharts + dynamic import)

    ✅ Data filtering by logged-in user

🧠 Multi-provider Authentication Strategy

In scenarios where reports pull data from multiple external systems (e.g., Odoo, Azure, internal APIs), a clean and secure authentication flow is necessary. Below is a proposed strategy to manage multi-source authentication effectively in a production environment.
1. Triggering Each Provider's Login

Each external system would have its own authentication flow:

    OAuth2/OIDC compliant providers:

        Use redirect flows for systems like Azure or Google

        Use popup flows when you want to keep the user on the dashboard

    Triggering Strategy:

        On-demand when loading a report

        Optionally, allow user to pre-authenticate from a settings page

2. Token Storage & Refresh Strategy

    Access Tokens: Stored in sessionStorage or in-memory only to reduce XSS risk.

    Refresh Tokens: Should be managed via a secure backend or proxy (not used in this demo).

    Tokens should have minimal scopes for security.

3. Detecting When All Providers Are Authenticated

UI components responsible for loading reports should verify all required provider tokens:

const allReady = ["azure", "odoo", "internal"].every(
  (key) => authTokens[key] !== undefined
);

If a token is missing:

    Prompt the user with a modal to authenticate

    Block the report until all necessary tokens are present

4. Trade-offs
Aspect	Pros	Cons / Risks
Security	No long-term storage of sensitive tokens	Short sessions may require re-auth
UX	On-demand login per provider	Can cause interruption if not handled smoothly
Complexity	Modular handling per provider	Requires shared state & coordination
Flexibility	Supports any API/system	Needs extra code for token refresh
✅ Conclusion

This approach balances security, user experience, and simplicity. In production, this design can be extended with backend token management or a gateway API to securely handle refresh flows and token exchanges.
📅 Deadline Notes

All features were implemented within the allotted 1-day timeframe. If extended, further enhancements could include:

    Real backend auth integration

    Token refresh via middleware proxy

    Animated charts & transitions

    User preference persistence

👨‍💻 Demo Credentials

User: technology@kameleonlabs.ai  
Password: #4nrsHSre1#@uPC$3ZR8

📂 Repository

    GitHub: https://github.com/yourusername/dev-bi-dashboard
