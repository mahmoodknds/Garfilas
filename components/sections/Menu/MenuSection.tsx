"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./MenuSection.module.css";

type Category = "all" | "meat" | "chicken" | "vegetarian" | "ham";
type MenuItem = { number: string; name: string; italian: string; description: string; category: Exclude<Category, "all">; tag: string };

const items: MenuItem[] = [
  { number: "01", name: "لازانیا گوشت", italian: "Lasagna alla Bolognese", description: "لایه‌های لازانیا با گوشت، سس مخصوص گارفیلاس و پنیر کش‌دار.", category: "meat", tag: "کلاسیک" },
  { number: "02", name: "لازانیا اسفناج", italian: "Lasagna agli Spinaci", description: "ترکیب لطیف اسفناج با سس خامه‌ای و لایه‌های لازانیای تازه.", category: "vegetarian", tag: "گیاهی" },
  { number: "03", name: "لازانیا مرغ و اسفناج", italian: "Pollo e Spinaci", description: "مرغ لطیف و اسفناج در کنار سس مخصوص و پنیر ذوب‌شده.", category: "chicken", tag: "ویژه" },
  { number: "04", name: "لازانیا ژامبون", italian: "Lasagna al Prosciutto", description: "لایه‌های لازانیا با ژامبون و ترکیب پنیرهای خوش‌طعم.", category: "ham", tag: "متفاوت" },
  { number: "05", name: "لازانیا سبزیجات", italian: "Lasagna alle Verdure", description: "کدو، بادمجان و قارچ در ترکیبی خوش‌عطر و لایه‌لایه.", category: "vegetarian", tag: "گیاهی" },
];

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "همه" },
  { id: "meat", label: "گوشتی" },
  { id: "chicken", label: "مرغ" },
  { id: "vegetarian", label: "گیاهی" },
  { id: "ham", label: "ژامبون" },
];

export default function MenuSection() {
  const [active, setActive] = useState<Category>("all");
  const visibleItems = useMemo(() => items.filter((item) => active === "all" || item.category === active), [active]);

  return (
    <section id="menu" className={styles.section} aria-labelledby="menu-title">
      <div className={styles.banner} aria-hidden="true">
        <Image src="/assets/menu/garfilas-food-banner.webp" alt="" fill sizes="100vw" quality={85} className={styles.bannerImage} />
        <div className={styles.bannerShade} />
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>IL NOSTRO MENÙ</span>
          <h2 id="menu-title" className={styles.title}>منوی گارفیلاس</h2>
          <p className={styles.subtitle}>هر لایه، یک تجربه‌ی تازه</p>
          <div className={styles.filters} role="group" aria-label="دسته‌بندی منو">
            {filters.map((filter) => (
              <button key={filter.id} type="button" className={styles.filter} aria-pressed={active === filter.id} onClick={() => setActive(filter.id)}>
                {filter.label}
              </button>
            ))}
          </div>
        </header>

        <ul className={styles.menuList}>
          {visibleItems.map((item, index) => (
            <li className={styles.item} key={item.number} style={{ "--item-index": index } as React.CSSProperties}>
              <span className={styles.number}>{item.number}</span>
              <div className={styles.details}>
                <div className={styles.nameLine}>
                  <h3>{item.name}</h3>
                  <span className={styles.leader} aria-hidden="true" />
                  <span className={styles.price}>قیمت به‌زودی</span>
                </div>
                <div className={styles.meta}>
                  <span className={styles.italian} dir="ltr">{item.italian}</span>
                  <span className={styles.tag}>{item.tag}</span>
                </div>
                <p className={styles.description}>{item.description}</p>
              </div>
              <span className={styles.mark} aria-hidden="true">✦</span>
            </li>
          ))}
        </ul>
        <p className={styles.note}>جزئیات و قیمت نهایی محصولات پس از تکمیل منو نمایش داده می‌شود.</p>
      </div>
    </section>
  );
}
