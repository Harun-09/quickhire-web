# QuickHire Web

Frontend for the QuickHire mini job board project.

This app is built with **React.js** and consumes the Laravel API from `quickhire-api`.

## Features

- Job listing page with featured/latest sections
- Job details page
- Job application form (name, email, resume URL, cover note)
- Companies page
- Basic admin page for creating and deleting jobs
- Responsive UI styled with Tailwind CSS

## Pages

- `/` Home and job listing
- `/jobs/:id` Job details and apply form
- `/companies` Company browsing page
- `/admin` Basic admin dashboard
- `/login` Login UI
- `/signup` Sign-up UI

## Tech Stack

- React.js 19
- Tailwind CSS 4

## Prerequisites

- Node.js 20+ (recommended)
- npm
- Backend API running locally (default: `http://localhost:8000`)

## Environment Variables

Create `.env` or `.env.local` in this folder:

```bash
VITE_API_URL=http://localhost:8000/api
```

If not provided, the app falls back to `http://localhost:8000/api`.

## Local Setup

```bash
npm install
npm run dev
```

App will run at:

- `http://localhost:3000`

Backend should be running at `http://localhost:8000` (Laravel API).

## Available Scripts

- `npm run dev` Start development server
- `npm run build` Build for production
- `npm run preview` Preview production build
- `npm run lint` Run lint checks

## API Endpoints Used

- `GET /api/jobs`
- `GET /api/jobs/{id}`
- `POST /api/jobs`
- `DELETE /api/jobs/{id}`
- `POST /api/applications`

## Demo Video Requirement (Loom)

Record a **3-5 minute** demo and show these 4 flows clearly:

1. Job listing page (browse/search/filter).
2. Job details page.
3. Apply flow (submit application form).
4. Admin flow (create job + delete job).

## Suggested Demo Script

1. Open home page and show search/filter behavior.
2. Open one job details page and explain key fields.
3. Submit one application and show success/error feedback.
4. Open admin page, create one job, then delete one job.
5. End by showing repo link (and live link if available).

## Submission Checklist

- GitHub repository link
- Loom/demo video link
- Live link (optional)

## Notes

- This repository contains the frontend only.
- Admin actions are currently basic and do not include authentication.
