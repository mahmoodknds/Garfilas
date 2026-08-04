const products = [
  {
    name: "لاسـانیا کلاسیک",
    subtitle: "Classic · Rich & layered",
    badge: "Signature",
    tone: "product-art-meat",
  },
  {
    name: "لاسـانیا اسفناج",
    subtitle: "Spinach · Fresh & creamy",
    badge: "Fresh",
    tone: "product-art-spinach",
  },
  {
    name: "لاسـانیا سبزیجات",
    subtitle: "Vegetable · Light & aromatic",
    badge: "Vegetarian",
    tone: "product-art-vegetable",
  },
] as const;

function ProductArt({ tone }: { tone: string }) {
  return (
    <div className={`product-art ${tone}`} aria-hidden="true">
      <div className="product-art-glow" />
      <div className="product-art-plate">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="menu" className="featured-products px-6 py-24" aria-labelledby="featured-products-title">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <p className="section-kicker">Garfilas Selection</p>
          <h2 id="featured-products-title" className="section-title mt-3">
            انتخابِ امضای گارفیلاز
          </h2>
          <p className="section-copy mx-auto mt-4 max-w-2xl">
            چند انتخاب شاخص برای شروع. منوی کامل در مرحله بعدی به همین سیستم متصل می‌شود.
          </p>
        </header>

        <div className="featured-products-grid">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              <ProductArt tone={product.tone} />
              <div className="product-card-body">
                <span className="product-badge">{product.badge}</span>
                <h3>{product.name}</h3>
                <p>{product.subtitle}</p>
                <a href="#menu" className="product-link">
                  مشاهده انتخاب‌ها <span aria-hidden="true">←</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
