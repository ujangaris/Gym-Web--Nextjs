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

### memasang components Nav

    todo:
    1. components/Nav.tsx
        - rafc
        - pasang parameter containerStyles dengan property containerStyles:string
            ini agar ketika compoent nav ini digunakan dapat menyertakan className pada parrentnya
        - target untuk dipasangkan dengan id pada setiap component
        - pasang Link dari react-scroll
        - buat array of object untuk nama2 pada navbar
        - untuk menampilkan isi dari array loping dengan map
    2. components/Header.tsx
        - import dan pasang Nav kemudian styling
        - styling heder agar bg putih dan position fix dll
    3. components/About.tsx
        pasang id"about"
    4. components/Blog.tsx
        pasang id"blog"
    5. components/Brands.tsx
        pasang id"contact"
    6. components/Classes.tsx
        pasang id"class"
    7. components/Hero.tsx
        pasang id"hero"
    8. components/Memberships.tsx
        pasang id"prices"
    9. components/Team.tsx
        pasang id"team"
    10. components/Testimonial.tsx
        pasang id"testimonial"
    11. pengujian pada browser:
        - http://localhost:3000/
        - perhatikan pada navbar klik setiap menu
         akan ada action yang menuju pada bagian dari menu yang di klik

### membuat menu menjadi aktif

    todo:
    1. components/Nav.tsx
        - pasang activeClass="active"
    2. global.css
        - pasang :
                .active {
                    @apply text-accent;
                    }
    3.  pengujian pada broser:
        - http://localhost:3000/
        - perhatikan pada navbar klik setiap menu
          menu aktif jia berada pada section yang sama dengan menu
    note: class active pada component Nav dan global css harus sama

### Navbar logo, divice mobile & device xl

    todo:
    1. components/Header.tsx
        - pasang logo
            - Link from "next/link";
            - Image from "next/image";
        - pasang mobile nav - hidden on large device
        - pasang desktop nav - hidden on small device
        - import dan pasang MobileNav.tsx
    2. components/MobileNav.tsx
        - rafc
        - pasang paramet dan properti containerStyles
        - pada classNamenya panggil parameter containerStyles
    3.  tailwind.config.ts
        perbaikan code yang typo
    4.  pengujian pada broser:
        - http://localhost:3000/
        - akan ada logo
        - perhatikan pada navbar, menu akan menghilang pada device mobile
        - pada layar xl menu mobile akan menghilang digantikan dengan navbar menu

### headerActive

    todo:
    1. components/Header.tsx
        - pasang hooks headerActive & setHeaderActive - useState
        - pasang useEffect yang memuat function handleScroll
            - detect scroll > 50 px
            - add scroll event
            - clear scroll event
        - ketika pada posisi home/tidak aktive
            - tinggi nav menu 100px
        - ketika pada posisi di scroll mencapai atau melebihi 50px
            - tinggi nav menu 124px
        - pasang class headerActive
        - tambahkan beberapa styling
    2.  pengujian pada broser:
        - http://localhost:3000/
        - ketika di scroll nav akan berubah ukuran dan  terlihat mengambang karna pengarush z- index 50

### menu mobile

    todo:
    1. components/MobileNav.tsx
        - duplikasi code dari Nav untuk array object dan kebutuhan menu lainnya
    2. components/Header.tsx
        - pada MobileNav tambahkan class headerActive untuk merapihkan menu ketika di scroll
        - styling menu mobile
    3.  pengujian pada broser:
        - http://localhost:3000/
        - pada device mobile akan ada tampilan menu yang sama dengan dekstop dan xl
