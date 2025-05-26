# 🧑‍💼 Mini HR Performance Dashboard

A responsive and interactive frontend dashboard built for HR Managers to track employee performance, manage bookmarks, and gain analytical insights into team productivity.


🔗 **Live Demo**: (https://flam-assignment-akhil.vercel.app/)


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
| UI Library         | React.js, Shadcn-ui|
| Routing            | React Router DOM   |
| State Management   | Context API        |
| Charts             | Recharts           |
| Styling            | Tailwind CSS       |
| Icons              | Lucide-react       |
| Notifications      | Custom Toasters    |
| Language           | TypeScript (mixed) |

---

## 📸 Screenshots

**HR DashBoard Home Page**
![image](https://github.com/user-attachments/assets/f5699c97-4ab5-4a76-bf94-31901d4fc552)

![image](https://github.com/user-attachments/assets/fc575ccb-a595-4a07-b623-ce38ffb30136)

---

**Employee Details Page**
![image](https://github.com/user-attachments/assets/8118d303-c22e-46dd-856a-1ef3cf2a2f26)

---

**Bookmark Manager Page**
![image](https://github.com/user-attachments/assets/8ccfd4e3-16e1-45a5-b746-6653010d3a55)

---

**Analytics Page**
![image](https://github.com/user-attachments/assets/e4776540-c199-43f4-8eff-5f7be1d761dd)

![image](https://github.com/user-attachments/assets/e24bfc16-4b95-4565-9886-d118bffe5e41)

---

**Dark Mode Feature**
![image](https://github.com/user-attachments/assets/e45f7c73-d413-47b4-8f20-57d46934d75e)

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

