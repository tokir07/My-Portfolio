# Modern Developer Portfolio

A serious, disciplined, and growth-oriented portfolio for a Computer Science student focused on DSA & Machine Learning.

## 🎯 Features

- **Modern Tech Stack**: React + Vite + Tailwind CSS + Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Professional animations using Framer Motion
- **Dark Theme**: Black background with red and blue accents
- **Interactive Components**: Hover effects, smooth transitions, and scroll animations
- **EmailJS Integration**: Contact form with email functionality
- **PDF Viewer**: Resume and certificate viewer built-in

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
My_portfolio/
├── public/
│   ├── resume.pdf              # Add your resume PDF here
│   ├── profile-placeholder.jpg # Add your profile photo here
│   └── certificates/           # Create this folder and add certificate PDFs
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Resume.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Certificates.jsx
│   │   ├── Projects.jsx
│   │   ├── Journey.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## ⚙️ Configuration

### EmailJS Setup

1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and User ID
5. Update the credentials in `src/components/Contact.jsx`:

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const USER_ID = 'YOUR_USER_ID';
```

### Adding Your Content

1. **Profile Photo**: Add your photo to `public/profile-placeholder.jpg`
2. **Resume PDF**: Add your resume to `public/resume.pdf`
3. **Certificate PDFs**: Create `public/certificates/` folder and add your certificate PDFs
4. **Certificate Thumbnails**: Add certificate thumbnail images to the public folder
5. **Contact Info**: Update email, GitHub, and LinkedIn links in `Contact.jsx` and `Footer.jsx`
6. **Project Links**: Update project links in `Projects.jsx`

## 🎨 Customization

### Colors

The portfolio uses a black, red, and blue color scheme defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    black: '#000000',
    red: '#DC2626',
    blue: '#2563EB',
  },
}
```

### Fonts

The portfolio uses Inter font from Google Fonts. You can change this in `src/index.css`.

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist/` directory.

## 🌐 Deployment

You can deploy this portfolio to:

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## 📝 Content Guidelines

This portfolio is designed with the following principles:

- **Discipline over motivation**
- **Consistency over shortcuts**
- **Fundamentals over hype**
- **Growth-oriented mindset**

All content reflects a serious, professional tone focused on technical depth and long-term growth.

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Contact form functionality

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

For any questions or issues, feel free to reach out via the contact form on the portfolio.

---

**Built with discipline and consistency** 🚀
