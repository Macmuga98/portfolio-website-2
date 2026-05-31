# Personal Portfolio — Amos Magembe Masalu

Cloud Computing assignment: full-stack portfolio on **Vercel** (frontend) and **Render** (backend).

## Structure

```
portfolio-website-magembe/
??? frontend/     ? Next.js (Vercel)
??? backend/      ? Express API (Render)
```

## Local Development

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Runs at `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Runs at `http://localhost:3000`

## Customize Content

Edit `backend/src/data/portfolio.js` with updated details.

## Deploy to Render (Backend)

1. Push to GitHub
2. [render.com](https://render.com) ? New Web Service
3. Root Directory: `backend`
4. Build: `npm install` | Start: `npm start`
5. Env: `FRONTEND_URL` = your Vercel URL

## Deploy to Vercel (Frontend)

1. [vercel.com](https://vercel.com) ? Import repo
2. Root Directory: `frontend`
3. Env: `NEXT_PUBLIC_API_URL` = your Render URL

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14, React, TypeScript, Tailwind CSS |
| Backend | Node.js, Express |
| Frontend Host | Vercel |
| Backend Host | Render |
