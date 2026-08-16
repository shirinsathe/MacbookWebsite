#  MacBook Website

An Apple-inspired MacBook landing page built with React, Three.js, GSAP, and Tailwind CSS.

This project recreates Apple's smooth, interactive product experience with 3D MacBook models, scroll-based animations, video textures, and responsive layouts.

## Features

- Apple-inspired responsive UI
- Interactive 3D MacBook models
- Video textures displayed on the MacBook screen
- Scroll-triggered 3D animations
- GSAP animations and ScrollTrigger
- Tailwind CSS styling
- Vite development environment

## Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **Three.js**
- **React Three Fiber**
- **React Three Drei**
- **GSAP**
- **Zustand**
- **React Responsive**
- **clsx**

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Then open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## 📁 Project Structure

```text
MacbookWebsite/
│
├── public/
│   ├── fonts/
│   ├── images/
│   ├── models/
│   └── videos/
│
├── src/
│   ├── components/
│   │   ├── models/
│   │   ├── three/
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ModelScroll.jsx
│   │   ├── NavBar.jsx
│   │   ├── Performance.jsx
│   │   ├── ProductViewer.jsx
│   │   └── Showcase.jsx
│   │
│   ├── constants/
│   │   └── index.js
│   │
│   ├── store/
│   │   └── index.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## How It Works

The website is divided into several interactive sections:

### Hero

Introduces the MacBook with a responsive hero section and animated visuals.

### Product Viewer

Displays an interactive 3D MacBook model that can be rotated and customized.

### Showcase

Uses video and masking effects to recreate Apple's cinematic product presentation.

### Performance

Displays animated performance graphics that move based on the user's scroll position.

### Features

Combines the 3D MacBook model with video textures and scroll-triggered animations.

### Highlights

Presents additional MacBook features using animated cards and responsive layouts.

## Styling

The project uses Tailwind CSS for utility-based styling with custom utilities, fonts, colors, and component styles defined in:

```text
src/index.css
```

## 🎥 3D & Animation

3D models are loaded using:

```js
@react-three/fiber
@react-three/drei
```

GSAP and ScrollTrigger are used for scroll-based animations:

```js
gsap
gsap/ScrollTrigger
```

Video textures are applied to the MacBook display using `useVideoTexture`.

## What I Learned

This project was built as a way to practice:

- React component architecture
- Tailwind CSS
- Three.js
- React Three Fiber
- 3D model rendering
- GSAP timelines
- ScrollTrigger
- Video textures
- Responsive design
- Zustand state management

## Author

**Shirin Sathe**

GitHub:  
https://github.com/shirinsathe