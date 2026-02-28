# QuickHire Web

Frontend for the QuickHire mini job board project.

This app is built with **Next.js (React)** and consumes the Laravel API from `quickhire-api`.

## Features

- Job listing page with featured/latest sections
- Job details page
- Job application form (name, email, resume URL, cover note)
- Companies page
- Basic admin page for creating and deleting jobs
- Responsive UI styled with Tailwind CSS

## Pages

- `/` Home and job listing
- `/jobs/[id]` Job details and apply form
- `/companies` Company browsing page
- `/admin` Basic admin dashboard
- `/login` Login UI
- `/signup` Sign-up UI

## Tech Stack

- Next.js 16 (Pages Router)
- React 19
- Tailwind CSS 4

## Prerequisites

- Node.js 20+ (recommended)
- npm
- Backend API running locally (default: `http://localhost:8000`)

## Environment Variables

Create `.env.local` in this folder:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

If not provided, the app falls back to `http://localhost:8000/api`.

## Local Setup

```bash
npm install
npm run dev
```

App will run at:

- `http://localhost:3000`

## Available Scripts

- `npm run dev` Start development server
- `npm run build` Build for production
- `npm run start` Start production server
- `npm run lint` Run lint checks

## API Endpoints Used

- `GET /api/jobs`
- `GET /api/jobs/{id}`
- `POST /api/jobs`
- `DELETE /api/jobs/{id}`
- `POST /api/applications`

## Notes

- This repository contains the frontend only.
- Admin actions are currently basic and do not include authentication.
