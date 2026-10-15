import Image from "next/image";
import styles from "./MenuSection.module.css";

type MenuItem = {
  number: string;
  name: string;
  italian: string;
  description: string;
  price: string;
  tag?: string;
};

const items: MenuItem[] = [
  {
    number: "01",
    name: "گارفی",
    italian: "Garfi",
    description: "راسته گوساله چرخ‌شده، قارچ، فلفل دلمه‌ای، پنیر پستو، پنیر موزارلا و سس مخصوص گارفیلاس.",
    price: "۱٬۰۱۵٬۰۰۰",
    tag: "VIP",
  },
  {
    number: "02",
    name: "لازانیا بالویتا",
    italian: "Bellavita",
    description: "۴۰۰ گرم؛ لازانیا، اسفناج، گوشت ریزشده فیله مرغ، قارچ، فلفل دلمه‌ای، سس بالویتا، پنیر پستو، پنیر گودا و پنیر موزارلا.",
    price: "۱٬۱۸۲٬۰۰۰",
    tag: "VIP",
  },
  {
    number: "03",
    name: "مگنیفیکو",
    italian: "Magnifico",
    description: "راسته گوساله چرخ‌شده، بادمجان کبابی، کدو، قارچ، فلفل دلمه‌ای، سس مخصوص، پنیر پستو، پنیر گودا و پنیر موزارلا.",
    price: "۱٬۳۰۰٬۰۰۰",
    tag: "VIP",
  },
  {
    number: "04",
    name: "فیالدلفیا",
    italian: "Philadelphia",
    description: "ژامبون گوشت ۹۸٪، سس پنیر ایتالیایی، پنیر پستو، پنیر گودا و پنیر موزارلا.",
    price: "۹۱۴٬۰۰۰",
  },
  {
    number: "05",
    name: "الگانزا",
    italian: "Eleganza",
    description: "بادمجان کبابی دودی، کدو، قارچ، فلفل دلمه‌ای، پنیر پستو، پنیر گودا و پنیر موزارلا.",
    price: "۸۳۸٬۰۰۰",
    tag: "وجترین",
  },
  {
    number: "06",
    name: "بلونیا",
    italian: "Bologna",
    description: "اسفناج، سس بلونیا با عصاره گوشت، فلفل دلمه‌ای، سیر، پنیر پستو، پنیر گودا و پنیر موزارلا.",
    price: "۹۲۷٬۰۰۰",
  },
  {
    number: "07",
    name: "میکس",
    italian: "Misto",
    description: "ترکیبی از گارفی، فیالدلفیا، بلونیا و الگانزا.",
    price: "۱٬۲۰۳٬۰۰۰",
    tag: "میکس",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" dir="rtl" className={styles.section} aria-labelledby="menu-title">
      <div className={styles.banner} aria-hidden="true">
        <Image src="/assets/menu/garfilas-food-banner.webp" alt="" fill sizes="100vw" quality={85} className={styles.bannerImage} />
        <div className={styles.bannerShade} />
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>IL NOSTRO MENÙ</span>
          <h2 id="menu-title" className={styles.title}>منوی گارفیلاس</h2>
          <p className={styles.subtitle}>هر لایه، یک تجربه‌ی تازه</p>
        </header>

        <ul className={styles.menuList}>
          {items.map((item, index) => (
            <li className={styles.item} key={item.number} style={{ "--item-index": index } as React.CSSProperties}>
              <span className={styles.number}>{item.number}</span>
              <div className={styles.details}>
                <div className={styles.nameLine}>
                  <h3>{item.name}</h3>
                  <span className={styles.leader} aria-hidden="true" />
                  <span className={styles.price}>{item.price}</span>
                </div>
                <div className={styles.meta}>
                  <span className={styles.italian} dir="ltr">{item.italian}</span>
                  {item.tag && (
                    <span className={item.tag === "VIP" ? `${styles.tag} ${styles.vipTag}` : styles.tag}>{item.tag}</span>
                  )}
                </div>
                <p className={styles.description}>{item.description}</p>
              </div>
              <span className={styles.mark} aria-hidden="true">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
