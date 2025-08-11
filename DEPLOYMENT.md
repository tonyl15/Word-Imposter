# Word Imposter - Deployment Guide

## Quick Deployment with Vercel

### Option 1: Deploy via Web Interface (Recommended)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your GitHub repository** `tonyl15/Word-Imposter`
5. **Configure settings:**
   - Framework Preset: Create React App
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `build`
6. **Click "Deploy"**

Your app will be live at: `https://word-imposter-[random].vercel.app`

### Option 2: Via CLI (After web setup)

```bash
# Login to Vercel (will open browser)
vercel login

# Deploy the app
vercel

# For production deployment
vercel --prod
```

### Option 3: GitHub Integration (Automatic)

Once you connect Vercel to your GitHub repo:
- **Every push to `main`** = automatic deployment
- **Pull requests** = preview deployments
- **Zero configuration needed**

## Your App Features

✅ **1,152+ Words** across 48 categories
✅ **Simple player selection** (3-10 players)
✅ **Privacy-protected word reveals**
✅ **Mobile-friendly design**
✅ **Zero backend required** - perfect for static hosting!

## Post-Deployment

After deployment, you can:
- **Custom domain** - Add your own domain name
- **Environment variables** - If needed for future features
- **Analytics** - Built-in Vercel analytics
- **Performance monitoring** - Automatic optimization

## Sharing Your Game

Once deployed, share the URL with friends to play Word Imposter together!
