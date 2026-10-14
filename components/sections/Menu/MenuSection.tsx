"use client";

import Image from "next/image";
import MenuProductCard from "@/components/sections/Menu/MenuProductCard";
import styles from "./MenuSection.module.css";

export default function MenuSection() {
  return (
    <section id="menu" className={styles.section} aria-labelledby="menu-title">
      <div className={styles.banner} aria-hidden="true">
        <Image
          src="/assets/menu/garfilas-food-banner.webp"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className={styles.bannerImage}
        />
        <div className={styles.bannerShade} />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>IL GUSTO DI GARFILAS</p>
        <h2 id="menu-title" className={styles.title}>منوی گارفیلاس</h2>
        <p className={styles.subtitle}>طعم ایتالیایی، لایه‌لایه با عشق</p>
        <div className={styles.products}>
          <MenuProductCard />
        </div>
      </div>
    </section>
  );
}
