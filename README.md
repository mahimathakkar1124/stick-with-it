# Stick With It

A modern, interactive Next.js web application featuring immersive 3D experiences, smooth animations, and a headless CMS backend.

## Tech Stack

This project is built with a powerful modern tech stack focused on high performance and rich visual experiences:

- **Framework**: [Next.js 16](https://nextjs.org/) with React 19
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) & React Three Fiber / Drei
- **Smooth Scrolling**: [Lenis](https://github.com/studio-freight/lenis)
- **CMS**: [Sanity](https://www.sanity.io/)

## Getting Started

First, make sure you have the required environment variables set up (check `.env.local` if available).

Then, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src` - Source code for the Next.js application (components, app router, etc.)
- `/sanity` - Sanity CMS schema definitions and configuration
- `/public` - Static assets

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run start`: Runs the built app in production mode.
- `npm run lint`: Runs ESLint to catch potential issues.

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) - learn how to build 3D scenes in React.
- [GSAP Documentation](https://gsap.com/docs/v3/) - learn about robust animations.
- [Sanity Documentation](https://www.sanity.io/docs) - learn how to manage your content.
