This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Pakage install:

    npm i framer-motion react-countup react-scroll @types/react-scroll react-icons react-responsive swiper

### setup project

    1. layout.tsx
    2. tailwind.config.tsx
    3. global.css

### components header, hero & footer

    todo:
    1. components/header.tsx
    2. components/hero.tsx
    3. components/footer.tsx
    4. app/layout.tsx
        - import dan pasang header & footer
    5. app/pages.tsx
        import dan pasang hero

    noted:
        - 80vh pada hero karna nanti pada bagian header akan mengambil sekitar 20vh = 100vh

### components about, blog, brands, classes, memberships, team & testimonial

    todo:
    1. components/About.tsx
    2. components/Blog.tsx
    3. components/Brands.tsx
    4. components/Classes.tsx
    5. components/Memberships.tsx
    6. components/Team.tsx
    7. components/Testimonial.tsx
    8. app/pages.tsx
        - import dan about, blog, brands, classes, memberships, team & testimonial
        import dan pasang hero

    noted:
        - 25vh pada Brands sesuai kebutuhan karna akan ada image dari brand saja
        - 50vh pada Testimonial sesuai kebutuhan saja

