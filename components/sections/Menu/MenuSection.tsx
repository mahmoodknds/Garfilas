import Image from "next/image";
import styles from "./MenuSection.module.css";
import MenuScrollReveal from "./MenuScrollReveal";
import MenuQuantityControl from "./MenuQuantityControl";

type MenuItem = {
  number: string;
  name: string;
  italian: string;
  description: string;
  price: number;
  discountPercent?: number;
  tag?: string;
};

const items: MenuItem[] = [
  {
    number: "01",
    name: "گارفی",
    italian: "Garfi",
    description: "400گرم؛ راسته گوساله چرخ‌شده، قارچ، فلفل دلمه‌ای، پنیر پستو، پنیر موزارلا و سس مخصوص گارفیلاز.",
    price: 1015000,
    discountPercent: 50,
    tag: "VIP",
  },
  {
    number: "02",
    name: "بلاویتا",
    italian: "Bellavita",
    description: "400گرم؛ اسفناج، گوشت ریزشده فیله مرغ، قارچ، فلفل دلمه‌ای، سس بالویتا، پنیر پستو، پنیر گودا و پنیر موزارلا.",
    price: 1182000,
    tag: "VIP",
  },
  {
    number: "03",
    name: "مگنیفیکو",
    italian: "Magnifico",
    description: "400گرم؛ راسته گوساله چرخ‌شده، بادمجان کبابی، کدو، قارچ، فلفل دلمه‌ای، سس مخصوص، پنیر پستو، پنیر گودا و پنیر موزارلا.",
    price: 1300000,
    tag: "VIP",
  },
  {
    number: "04",
    name: "فیالدلفیا",
    italian: "Philadelphia",
    description: "400گرم؛ ژامبون گوشت ۹۸٪، سس پنیر ایتالیایی، پنیر پستو، پنیر گودا و پنیر موزارلا.",
    price: 914000,
  },
  {
    number: "05",
    name: "الگانزا",
    italian: "Eleganza",
    description: "400گرم؛ بادمجان کبابی دودی، کدو، قارچ، فلفل دلمه‌ای، پنیر پستو، پنیر گودا و پنیر موزارلا.",
    price: 838000,
    tag: "وجترین",
  },
  {
    number: "06",
    name: "بلونیا",
    italian: "Bologna",
    description: "400گرم؛ اسفناج، سس بلونیا با عصاره گوشت، فلفل دلمه‌ای، سیر، پنیر پستو، پنیر گودا و پنیر موزارلا.",
    price: 927000,
  },
  {
    number: "07",
    name: "میکس",
    italian: "Misto",
    description: "400گرم؛ ترکیبی از گارفی، فیالدلفیا، بلونیا و الگانزا.",
    price: 1203000,
  },
];

function getCurrentPrice(item: MenuItem) {
  return item.discountPercent
    ? Math.round(item.price * (100 - item.discountPercent) / 100)
    : item.price;
}

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
          <h2 id="menu-title" className={styles.title}>گارفیلاز ضمانت برگشت وجه دارد!</h2>
          <p className={styles.subtitle}>هر لایه، یک تجربه‌ی تازه</p>
        </header>

        <ul className={styles.menuList}>
          {items.map((item, index) => (
            <MenuScrollReveal
              key={item.number}
              className={styles.item}
              readyClassName={styles.revealReady}
              visibleClassName={styles.revealVisible}
              index={index}
            >
              <span className={styles.number}>{item.number}</span>
              <div className={styles.details}>
                <div className={styles.nameLine}>
                  <h3>{item.name}</h3>
                  <span className={styles.leader} aria-hidden="true" />
                  <div className={styles.priceBlock}>
                    {item.discountPercent && (
                      <span className={styles.discountRibbon}>
                        {item.discountPercent}% تخفیف
                      </span>
                    )}
                    <div className={styles.priceRow} dir="ltr">
                      {item.discountPercent && (
                        <span className={styles.originalPrice}>
                          T {item.price.toLocaleString("en-US")}
                        </span>
                      )}
                      <span className={`${styles.price} ${item.discountPercent ? styles.discountedPrice : ""}`} dir="ltr">
                        T {getCurrentPrice(item).toLocaleString("en-US")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.meta}>
                  <span className={styles.italian} dir="ltr">{item.italian}</span>
                  {item.tag && (
                    <span className={item.tag === "VIP" || item.tag === "وجترین" ? `${styles.tag} ${styles.vipTag}` : styles.tag}>{item.tag}</span>
                  )}
                </div>
                <p className={styles.description}>{item.description}</p>

              </div>
              <div className={styles.cardActions}>
                <MenuQuantityControl
                  className={styles.menuQuantityControl}
                  product={{
                    id: item.number,
                    name: item.name,
                    italian: item.italian,
                    description: item.description,
                    price: getCurrentPrice(item),
                    ...(item.discountPercent
                      ? { originalPrice: item.price, discountPercent: item.discountPercent }
                      : {}),
                    ...(item.tag ? { tag: item.tag } : {}),
                  }}
                />
                <span className={styles.mark} aria-hidden="true">✦</span>
              </div>
            </MenuScrollReveal>
          ))}
        </ul>

        <a className={styles.scrollCue} href="#cart" aria-label="رفتن به سبد خرید">
          <span />
          <span />
          <span />
        </a>
      </div>
    </section>
  );
}
