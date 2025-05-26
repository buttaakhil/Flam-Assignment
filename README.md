# 🧑‍💼 Mini HR Performance Dashboard

A responsive and interactive frontend dashboard built for HR Managers to track employee performance, manage bookmarks, and gain analytical insights into team productivity.


## 🚀 Features

### 🏠 Dashboard Homepage (`/`)
- Displays 20 mock employees with:
  - Full Name, Email, Age, Department
  - Performance Rating (1–5 stars)
  - Action Buttons: `View`, `Bookmark`, `Promote`

### 🔍 Search & Filter
- Search bar to filter users by name, email, or department (case-insensitive)
- Multi-select filter by department and performance rating

### 👤 Employee Details Page (`/employee/:id`)
- Displays detailed employee profile including:
  - Address, Phone, Bio, and Performance History
  - Tabbed Interface:
    - `Overview`
    - `Projects`
    - `Feedback`
- Performance badges and color-coded indicators

### 📌 Bookmark Manager (`/bookmarks`)
- View all bookmarked employees
- Remove bookmarks or perform UI actions: `Promote`, `Assign to Project`

### 📊 Analytics Page (`/analytics`)
- Charts and graphs visualizing:
  - Department-wise average performance ratings
  - Bookmark trends (mocked)

---

## 🛠️ Tech Stack

| Layer              | Technology         |
|--------------------|--------------------|
| UI Library         | React.js           |
| Routing            | React Router DOM   |
| State Management   | Context API        |
| Charts             | Recharts           |
| Styling            | Tailwind CSS       |
| Icons              | Lucide-react       |
| Notifications      | Custom Toasters    |
| Language           | TypeScript (mixed) |

---

## 📸 Screenshots

**HR DashBoard**
![image](https://github.com/user-attachments/assets/f5699c97-4ab5-4a76-bf94-31901d4fc552)

![image](https://github.com/user-attachments/assets/02faeb09-ff8a-4f17-bbfb-557ec3ca63b7)

---

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/buttaakhil/Flam-Assignment.git
   cd Flam-Assignment

2. **Install Dependencies**
   ```bash
   npm install

3. **Run the Development Server**
   ```bash
   npm run dev

