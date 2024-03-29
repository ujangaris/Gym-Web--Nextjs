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

### onClick menu mobile

    todo:
    1. components/Header.tsx
        - pasang hook openNav & setOpenNav
        - hiden/open menu button
            - pada button pasang onClick()
        - pasang mdMenu dari react-icon
    2. components/MobileNav.tsx
        - pasang useMediaQuery dengan query : max-width:640px
          dan tampung kedalam variable isMobile
        - pada activeClass pasang logic untuk isMobile, jika pada ukuran mobile/
          ukuran nya terpenuhi maka menu aktif di tiadakan,
          jika pada device dekstop dan xl aktif
    3.  pengujian pada broser:
        - http://localhost:3000/
        - pada device mobile akan ada tampilan menu , klik icon burger bar
          jika di klik akan tampil menu pada device mobile
          jika di klik lagi icon nya akan hilang menunya.

### menu login dan resgister

    todo:
    1. components/Header.tsx
        - login & register
        - styling menu  login dan register
        - rapihkan code agar upercase semua
    2.  pengujian pada broser:
        - http://localhost:3000/
        - akan ada menu login dan register di smua ukuran layar

### styling hero section

    todo:
    1. components/Hero.tsx
        - pasang bg hero yang sudah disiapkan
        - styling hero
        - import dan pasang HeroSlider dan bungkus kedalam className container, mx-auto
    2. components/HeroSlider.tsx
        - rafc
        - pasang "use client";
        - import dan pasang swiper react component
        - import swiper style
        - import dan pasang component CustomButton
            - parameter yang terdapat di CustomButton di gunakan
                - text untuk isi tulisan
                - containerStyles untuk styling nya
    3. components/CustomButton.tsx
        - rafc
        - pasang parameter text,containerStyles,
        - pasang property text,containerStyles,
        - pasang button yang didalamnya kita panggil containerStyles dengan className
        - pasang 2 buah span
            - span pertama untuk animation button ketika dihover
            - span kedua untuk warna text ketika dihover
    4.  pengujian pada broser:
        - http://localhost:3000/
        - tampil hero dengan bg dan text serta button

### swiperNavButton

    todo:
    1. components/SwiperNavButtons.tsx
        - rafc
        - pasang "use client";
        - pasang parameter btnStyles,btnStyles dan containerStyles
        - pasang property btnStyles,btnStyles dan containerStyles
        - pada div pasang containerStyles pada className
        - buat 2 buah button yang membungkus masing2 1 icon dari react-icon
            - pasang btnStyles pada button
            - pasang iconStyles pada icon
    2. components/HeroSlider.tsx
        - import dan pasang SwiperNavButtons
        - pada Swiper tambahkan className h-full
        - styling SwiperNavButtons
            - containerStyles
            - btnStyles
            - iconStyles
    3. components/Hero.tsx
        -tambahkan class h-full
    4.  pengujian pada broser:
        - http://localhost:3000/
        - pada bagian hero akan ada icon right dan left

### action swiperNavButton

    todo:
    1. components/SwiperNavButtons.tsx
        - import dan pasang useSwiper
        - pasang onClick yang didalamnya terdapat swiper.slidePrev dan pada button pertama
        - pasang onClick yang didalamnya terdapat swiper.slideNext dan pada button kedua
        react-icon
            - pasang btnStyles pada button
            - pasang iconStyles pada icon
    2. components/HeroSlider.tsx
        - duplicate code SwiperSlide (hanya untuk text apakah slide berfungsi)
    3.  pengujian pada broser:
        - http://localhost:3000/
        - pada bagian hero akan ada icon right dan left, coba  klik
          jika setup yang kita lakukan berhasil content slide akan bergeser

### pasang animation dengan framer-motion

    todo:
    1. lib/variants.tsx
        - rafc
        - pasang parameter direction dan delay yang di isi dengan string
        - terdapat 2 bagian yakni hidden dan show
                - y
                - opacity
                - x
                - transition
                    - type
                    - duration
                    - delay
                    - ease
    2. components/HeroSlider.tsx
        - docs: https://www.framer.com/motion/scroll-animations/
        - import daan pasang motion dari framer-motion
        - import fadeIn dari /lib/variants
        - pada h1,p dan div tambahakan awalan dengan motion.
          kemudian didalamnya kita pasang properti2 dari framer motion:
            - variants={fadeIn('up', 0.4)}
            - initial="hidden"
            - whileInView={'show'}
            - viewport={{once:false, amount:0.2}}
    3.  pengujian pada broser:
        - http://localhost:3000/
        - pada bagian hero akan ada animasi ketika halaman pertama kali dibuka/setelah di scroll
        - klik juga prev dan next icon , animasi pun akan terjadi
    4.  noted: gunakan docs dari framer-motion untuk animasi2 keren lainnya
        https://www.framer.com/motion/scroll-animations/

### about section

    todo:
    1. components/About.tsx
        - import dan pasang icon FaUsers dari react-icon
        - import dan pasang icon IoIosPricetag dari react-icon
        - import dan pasang icon FaDumbbell dari react-icon
        - buat 3 buah array of object yang ditampung kedalam variable featured
        - buat styling head untuk about
        - buat styling featured items
            - variable featured diatas kita loping dengan map
            - panggil icon2 dari react-icon yang sudah kita siapkan diatas
    3.  pengujian pada broser:
        - http://localhost:3000/
        - pada section about akan berisikan content about

### about achivement

    todo:
    1.  components/Achivements.tsx
        - rafc
        - pasang use client
        - buat array of object dengan 4 data, dengn  masing2 berisikan:
            - number
            - icon
            - text
          tampung kedalam variable stats
        - bungkus semua cotent didalam class container mx-auto
        - styling achivement agar menampilkan lingkaran yang ditengahnya berisikan dari number
        - forloop data stats menggunakan map
        - import dan pasang CountUp dari react-counup
            digunakan untuk menambah angka sampai batas yang telah di tentukan pada numer
        - import dan pasang useRef() dari react
            ini akan digunakan bersamaan dengan framer-motion
        - import dan pasang useInView dari framer-motion
            ini digunakan bersamaan dengan useRef
        noted: useInView dan useRef digunakan untuk membuat animation otomatis
               ketika halaman di reload dan di scroll perhatikan nilai saat di scroll
               akan berubah dari 0 - nilai dari number yang sudah ditentukan
    2.  components/About.tsx
        - import dan pasang Achivement
    3.  pengujian pada broser:
        - http://localhost:3000/
        - pada section about akan ada 4 linkaran yang berisikan angka
          yang ketika di reload dan scroll angkanya akan bertambah
          dari 0 - nilai dari number yang sudah ditentukan

### styling responsive about achivement

    todo:
    1.  components/Achivements.tsx
        - menampilkan dan styling bagian text
        - stiling bagian icon agar responsive di semua layar
    2.  pengujian pada broser:
        - http://localhost:3000/
        - pada section about aachivement akan terlihat lebih responsive
        - buka pada ukuran layar xl, large, medium dan small akan responsive

### pasang animation dari framer-motion

    todo:
    1.  components/Achivements.tsx
        - animation
            - buat object statsContainerVariant
            - buat object statsItem
        - import dan  pasang motion dari framer-motion
            - variants={statsContainerVariant}
            - initial="hidden"
            - whileInView={"show"}
            - viewport={{ once: false, amount: 0.3 }}
        - pada div pengkus inner count number pasang
            - motion
            - variants={statsItem}
        - stiling bagian icon agar responsive di semua layar
    2.  components/About.tsx
        - import dan pasang motion dari framer-motion
            - variants={fadeIn("up", 0.4)} // nilai disesuikan
            - initial="hidden"
            - whileInView={"show"}
            - viewport={{ once: false, amount: 0.3 }}
        - import dan pasang fadIn dari lib/variants
        - pasang motion sesuia kebutuhan
    3.  pengujian pada broser:
        - http://localhost:3000/
        - ketika section about di scroll/ di refresh animation akan bekerja

### classes component

    todo:
    1.  components/Classes.tsx
        - pasang use client
        - pasang array object classes yang berisi:
            - name
            - img
            - description
        - looping classes dengan map
        - import dan pasang Image dari "next/image"
        - pasang overlay agar terlihat lebih gelap
        - gunakan grid untuk tampilan responsive
    2.  pengujian pada broser:
        - http://localhost:3000/
        - pada section classes akan ada 4 image yang responsive

### classes component text & button

    todo:
    1.  components/Classes.tsx
        - text & btn
            - panggil loop text
            - panggil loop description
        - import dan panggil CustomButton
    2.  pengujian pada broser:
        - http://localhost:3000/
        - pada section classes akan ada 4 text dan button

### pasang animation clasess

    todo:
    1.  components/Classes.tsx
        - import dan pasang motion dari "framer-motion";
            - variants={fadeIn("up", 0.6)}
            - initial="hidden"
            - whileInView={"show"}
            - viewport={{ once: false, amount: 0.2 }}
    2.  pengujian pada broser:
        - http://localhost:3000/
        - ketika section classes di scroll/di refresh akan ada animation

### image team section

    todo:
    1.  components/Team.tsx
        - pasang use client
        - buat data trainerData sebanyak 4 data yang isinya
            - image
            - name
            - role
            - description
            - social
        - trainers grid ( ini agar responsive image)
        - looping trainerData menggunakan map
        - import dan pasang icon dari react-icon
        - import dan pasang Image dari "next/image";
          pada image tambahkan fill agar tidak error
    2.  pengujian pada browser
        - http://localhost:3000/
        - akan ada image responsive pada section team
