## Getting Started

First, install dependencies. This project uses [Yarn](https://yarnpkg.com/) as a package manager. If you don't have it installed, you can install it with this command:
```bash
npm install --global yarn
```

We'll then run:
```bash
yarn
```

Secondly, let's edit the .env variable. You can copy the .
```bash
cp .env.example .env
```

Let's edit the .env to support things as needed.
NEXT_PUBLIC_THEME is the theme that will be used for the site. You can see the available themes below:
![img.png](img.png)

Lastly, run the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
