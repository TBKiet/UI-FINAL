# Railway Deployment Guide

This guide explains how to deploy the UI application to Railway.

## Prerequisites

- A [Railway](https://railway.app/) account
- Git repository with your UI code

## Deployment Steps

1. **Create a new project in Railway**
   - Go to [Railway Dashboard](https://railway.app/dashboard)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account and select this repository

2. **Configure Environment Variables**
   
   Add the following environment variables in your Railway project settings:

   ```
   # NextAuth.js
   NEXTAUTH_SECRET=<generate-a-strong-secret>
   
   # Database (if using Railway PostgreSQL)
   DATABASE_URL=${DATABASE_URL}
   
   # OAuth Providers
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>
   ```

3. **Add PostgreSQL Database (Optional)**
   - Click "New" and select "PostgreSQL"
   - Railway will automatically add the `DATABASE_URL` variable to your project

4. **Configure Domain (Optional)**
   - Go to "Settings" > "Domains"
   - Add a custom domain or use the Railway-provided domain
   - Update the `NEXTAUTH_URL` to match this domain

## Environment Variables Reference

| Variable | Description |
|----------|-------------|
| `NEXTAUTH_URL` | Full URL of your deployed application (Railway will set this automatically) |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js session encryption |
| `DATABASE_URL` | PostgreSQL connection string (provided by Railway if using their PostgreSQL) |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `NEXT_PUBLIC_API_URL` | URL of your API Gateway |
| `NEXT_PUBLIC_WS_URL` | WebSocket URL for real-time updates |
| `NEXT_PUBLIC_VIDEO_MANAGER_API` | URL for the video manager API |

## Troubleshooting

- **Build Failures**: Check the build logs in Railway for specific errors
- **Database Connection Issues**: Verify that the `DATABASE_URL` is correctly set
- **Authentication Problems**: Ensure your OAuth redirect URIs are updated to match your Railway domain

## Monitoring

- Railway provides basic monitoring and logs for your application
- Access logs by clicking on your deployment and selecting the "Logs" tab 