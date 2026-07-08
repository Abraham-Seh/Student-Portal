# 🎓 EduPortal — Student Management System

A full-stack student management portal with React frontend, Node.js/Express backend, PostgreSQL database, and JWT authentication.

---

## 📁 Project Structure

```
student-portal/
├── frontend/
│   └── index.html          ← Standalone React app (open in browser)
├── backend/
│   ├── src/
│   │   ├── index.ts        ← Express server entry point
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   ├── client.ts
│   │   │   └── seed.ts
│   │   ├── controllers/    ← Business logic
│   │   ├── routes/         ← API route definitions
│   │   └── middleware/     ← JWT auth middleware
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
└── docker-compose.yml      ← PostgreSQL + pgAdmin
```

---

## 🚀 Quick Start

### Step 1 — Start the database

```bash
# Requires Docker Desktop
docker-compose up -d
```

This starts:
- PostgreSQL on port **5432**
- pgAdmin (web UI) on **http://localhost:5050** (admin@admin.com / admin)

---

### Step 2 — Configure the backend

```bash
cd backend

# Copy environment file
cp .env.example .env
# Edit .env if needed (default values work with docker-compose)
```

---

### Step 3 — Setup and run the backend

```bash
cd backend

# Install dependencies
npm install

# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# Seed with demo data
npm run db:seed

# Start development server
npm run dev
```

Backend runs on **http://localhost:5000**

---

### Step 4 — Open the frontend

Simply open `frontend/index.html` in your browser — no build step needed!

Or serve it:
```bash
npx serve frontend
```

---

## 🔑 Default Login

| Field    | Value                        |
|----------|------------------------------|
| Email    | admin@studentportal.com      |
| Password | admin123                     |

---

## 📡 API Endpoints

### Auth
| Method | Path              | Description        |
|--------|-------------------|--------------------|
| POST   | /api/auth/login   | Admin login        |
| POST   | /api/auth/register| Register admin     |
| GET    | /api/auth/me      | Get current admin  |

### Students
| Method | Path                  | Description         |
|--------|-----------------------|---------------------|
| GET    | /api/students         | List (paginated)    |
| GET    | /api/students/:id     | Get one student     |
| POST   | /api/students         | Create student      |
| PUT    | /api/students/:id     | Update student      |
| DELETE | /api/students/:id     | Delete student      |

### Courses
| Method | Path              | Description       |
|--------|-------------------|-------------------|
| GET    | /api/courses      | List courses      |
| GET    | /api/courses/:id  | Get one course    |
| POST   | /api/courses      | Create course     |
| PUT    | /api/courses/:id  | Update course     |
| DELETE | /api/courses/:id  | Delete course     |

### Enrollments
| Method | Path                              | Description      |
|--------|-----------------------------------|------------------|
| POST   | /api/enrollments                  | Enroll student   |
| PUT    | /api/enrollments/:id/grade        | Update grade     |
| DELETE | /api/enrollments/:id              | Remove           |
| GET    | /api/enrollments/student/:id      | Student's courses|

### Dashboard
| Method | Path                  | Description     |
|--------|-----------------------|-----------------|
| GET    | /api/dashboard/stats  | All stats       |

---

## 🎯 Features

- ✅ JWT Authentication
- ✅ Student CRUD with profile management
- ✅ Course management with capacity tracking
- ✅ Student enrollment & grade management
- ✅ Admin dashboard with statistics
- ✅ Search & filter
- ✅ Pagination
- ✅ Demo mode (works without backend)

---

## 🛠️ Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Frontend  | React 18, CSS Variables       |
| Backend   | Node.js, Express, TypeScript  |
| Database  | PostgreSQL via Prisma ORM     |
| Auth      | JWT + bcrypt                  |
| Dev DB    | Docker Compose                |

---

## 🔧 Production Deployment

1. Set `NODE_ENV=production` in your environment
2. Use a real `JWT_SECRET` (32+ random characters)
3. Use a managed PostgreSQL (e.g., Supabase, Railway, Neon)
4. Build the backend: `npm run build && npm start`
5. Host the frontend on Netlify, Vercel, or any static host
