# ApplyZen — Deployment Guide

ApplyZen uses a **split deployment** strategy:

| Service | Platform | Role |
|---------|----------|------|
| Frontend | **Vercel** | Vite/React static site |
| Backend | **Railway** / **Render** | Express API + MongoDB |

---

## 1. Deploy Backend → Railway / Render

The backend must be deployed **first** so you have a URL to configure in the frontend.

### Steps for Railway

1. Go to [railway.app](https://railway.app) and sign in with GitHub.
2. Click **New Project → Deploy from GitHub repo** → select `ApplyZen`.
3. Set the **Root Directory** to `backend`.
4. Railway will auto-detect Node.js and use the `Procfile` (`web: node server.js`).
5. Add the following **Environment Variables** in Railway → Variables tab:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/applyzen
JWT_SECRET=<your_strong_secret>
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_SECRET=<your_strong_refresh_secret>
JWT_REFRESH_EXPIRES_IN=7d
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
GOOGLE_CALLBACK_URL=https://<your-railway-domain>/api/v1/auth/google/callback
FRONTEND_URL=https://<your-vercel-domain>
```

6. Copy your deployed backend URL (e.g., `https://applyzen-backend.up.railway.app`).

---

## 2. Deploy Frontend → Vercel

### Steps

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project** → Import `ApplyZen`.
3. Vercel automatically uses `vercel.json` in the root.
4. Add the following **Environment Variables** under Project → Settings → Environment Variables:

```env
VITE_API_URL=https://<your-railway-domain>
VITE_GOOGLE_CLIENT_ID=<your_google_client_id>
VITE_MICROSOFT_CLIENT_ID=<your_microsoft_client_id>
```

5. Click **Deploy**. Vercel will execute `npm run build --prefix frontend` and serve `frontend/dist`.

---

## 3. Update Google OAuth Authorized URLs

In [Google Cloud Console → APIs & Services → Credentials](https://console.cloud.google.com/apis/credentials):

- **Authorized JavaScript origins**: Add your Vercel domain  
  `https://applyzen.vercel.app`
- **Authorized redirect URIs**: Add your Railway callback URL  
  `https://applyzen-backend.up.railway.app/api/v1/auth/google/callback`

---

## Environment Variable Reference

### Vercel (Frontend)

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Your Railway/Render backend URL |
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth public client ID |
| `VITE_MICROSOFT_CLIENT_ID` | Microsoft OAuth public client ID |

### Backend (Railway / Render)

| Variable | Required | Description |
|----------|----------|-------------|
| `NODE_ENV` | ✅ | Set to `production` |
| `MONGODB_URI` | ✅ | MongoDB Atlas connection string |
| `JWT_SECRET` | ✅ | Access token signing secret |
| `JWT_REFRESH_SECRET` | ✅ | Refresh token signing secret |
| `GOOGLE_CLIENT_ID` | ✅ | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | ✅ | Google OAuth client secret |
| `GOOGLE_CALLBACK_URL` | ✅ | Full Railway callback URL |
| `FRONTEND_URL` | ✅ | Vercel frontend URL (for CORS) |
