# Portfolio Setup Instructions

## ✅ What's Already Done

Your portfolio is fully built and ready to run! Here's what's been set up:

### ✨ Components Created
- ✅ Navbar with smooth scroll and animations
- ✅ Hero section with exact text as specified
- ✅ Resume section with PDF viewer modal
- ✅ About section with your narrative
- ✅ Skills section with 8 categorized skill cards
- ✅ Certificates carousel with 7 certificates
- ✅ Projects section with 3 projects (Loan Approval, Fraud Detection, DSA Journey)
- ✅ Journey timeline with 5 milestones
- ✅ Contact form with EmailJS integration
- ✅ Footer with social links

### 🎨 Design Features
- ✅ Black background with red & blue accents
- ✅ Smooth Framer Motion animations
- ✅ Hover effects on all interactive elements
- ✅ Gradient text effects
- ✅ Responsive design for all screen sizes
- ✅ Custom scrollbar with gradient
- ✅ Animated background with grid pattern

### 📦 Tech Stack
- ✅ React + Vite
- ✅ Tailwind CSS
- ✅ Framer Motion
- ✅ EmailJS (ready for configuration)

## 🚀 Quick Start

1. **Run the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   - Visit `http://localhost:5173`
   - The portfolio should load immediately!

## 📝 What You Need to Add

### 1. Profile Photo
- Add your profile photo to: `public/profile-placeholder.jpg`
- Recommended size: 500x500px or larger (square)
- Format: JPG or PNG

### 2. Resume PDF
- Add your resume to: `public/resume.pdf`
- This will be displayed in the Resume section modal

### 3. Certificate PDFs (Optional but Recommended)
Create a folder and add your certificate PDFs:
```
public/certificates/
├── data-analysis.pdf
├── data-visualization.pdf
├── python-programming.pdf
├── probabilistic-modelling.pdf
├── ai-intro.pdf
├── ai-tools.pdf
└── web-development.pdf
```

**Note:** Certificate thumbnails have already been generated and added!

### 4. EmailJS Configuration

To enable the contact form:

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your credentials:
   - Service ID
   - Template ID
   - User ID (Public Key)

6. Update `src/components/Contact.jsx` (around line 24):
   ```javascript
   const SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace this
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace this
   const USER_ID = 'YOUR_USER_ID';            // Replace this
   ```

### 5. Update Contact Information

Update your personal links in these files:

**In `src/components/Contact.jsx`** (around line 45):
```javascript
{
  icon: '📧',
  label: 'Email',
  value: 'your.email@example.com',           // Update this
  link: 'mailto:your.email@example.com',     // Update this
},
{
  icon: '💼',
  label: 'GitHub',
  value: 'github.com/yourusername',          // Update this
  link: 'https://github.com/yourusername',   // Update this
},
{
  icon: '🔗',
  label: 'LinkedIn',
  value: 'linkedin.com/in/yourprofile',      // Update this
  link: 'https://linkedin.com/in/yourprofile', // Update this
},
```

**In `src/components/Footer.jsx`** (around line 15 and line 82):
```javascript
link: 'https://github.com/yourusername',      // Update this
link: 'https://linkedin.com/in/yourprofile',  // Update this
link: 'mailto:your.email@example.com',        // Update this
```

### 6. Add Project Links (Optional)

If you have GitHub repos for your projects, update in `src/components/Projects.jsx`:
```javascript
link: 'https://github.com/yourusername/loan-approval',  // Update these
link: 'https://github.com/yourusername/fraud-detection',
link: 'https://github.com/yourusername/dsa-journey',
```

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    black: '#000000',
    red: '#DC2626',    // Change these
    blue: '#2563EB',   // Change these
  },
}
```

### Change Font
Edit `src/index.css` (line 1):
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800;900&display=swap');
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
},
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🐛 Troubleshooting

### Port already in use?
```bash
npm run dev -- --port 3000
```

### Tailwind styles not working?
```bash
npm install -D tailwindcss postcss autoprefixer
```

### Images not loading?
- Make sure images are in the `public` folder
- Reference them with `/image-name.jpg` (starting with `/`)

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for errors (F12)
2. Make sure all dependencies are installed: `npm install`
3. Try deleting `node_modules` and running `npm install` again

## 🎯 Final Checklist

Before deploying:
- [ ] Added profile photo
- [ ] Added resume PDF
- [ ] Added certificate PDFs (optional)
- [ ] Configured EmailJS
- [ ] Updated email, GitHub, LinkedIn links
- [ ] Updated project links (optional)
- [ ] Tested contact form
- [ ] Tested on mobile devices
- [ ] Built for production: `npm run build`

---

**Your portfolio is ready to showcase your discipline, consistency, and growth! 🚀**
