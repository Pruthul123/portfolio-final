"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { GraphicsPageData } from "@/lib/graphics";
import CinematicImageRail from "@/components/cinematic-image-rail";

type GraphicsCategoryPageProps = {
  category: GraphicsPageData;
};

export default function GraphicsCategoryPage({ category }: GraphicsCategoryPageProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Portfolio",
        "item": "https://pruthul123.github.io/portfolio-final"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": category.title,
        "item": `https://pruthul123.github.io/portfolio-final/${category.slug}`
      }
    ]
  };

  return (
    <main className="graphics-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className="graphics-page__topbar">
        <Link href="/" className="graphics-page__backlink" aria-label="Return to portfolio home">
          Back to portfolio
        </Link>
        <span aria-current="page">{category.title}</span>
      </header>

      <section className="graphics-page__hero" aria-label={`${category.title} showcase`}>
        <div className="graphics-page__hero-copy">
          <p className="eyebrow">{category.eyebrow}</p>
          <h1>{category.title}</h1>
          <p className="graphics-page__subtitle">{category.subtitle}</p>
          <p className="graphics-page__intro">{category.intro}</p>

          <div className="graphics-page__details">
            {category.details.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>
        </div>

        <div className="graphics-page__hero-visual">
          <CinematicImageRail images={category.images.slice(0, 6)} title={category.title} />
        </div>
      </section>

      <section className="graphics-page__story">
        <div className="graphics-page__story-sticky">
          <p className="eyebrow">Cinematic gallery system</p>
          <h2>Floating labels, soft motion, and a dark editorial frame for every uploaded graphic.</h2>
        </div>

        <div className="graphics-page__masonry">
          {category.images.length ? (
            category.images.map((src, index) => (
              <motion.figure
                key={src}
                className={`graphics-page__figure graphics-page__figure--${(index % 5) + 1}`}
                initial={{ y: 56, opacity: 0, filter: "blur(10px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: (index % 4) * 0.05 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <img src={src} alt={`${category.title} ${index + 1}`} loading="lazy" width="800" height="600" decoding="async" />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{category.title}</span>
                </figcaption>
              </motion.figure>
            ))
          ) : (
            <div className="graphics-page__empty">
              <p className="eyebrow">No images found</p>
              <h3>Add image URLs in <span>lib/graphics.ts</span> and they will appear here automatically.</h3>
              <p>Set the <span>images</span> array for this category.</p>
            </div>
          )}
        </div>
      </section>

      <footer className="graphics-page__footer">
        <p className="eyebrow">Immersive category view</p>
        <h2>{category.title}</h2>
      </footer>
    </main>
  );
}
