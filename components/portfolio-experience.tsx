"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import CinematicImageRail from "@/components/cinematic-image-rail";
import type { ShowcaseCategory } from "@/lib/graphics";

const introLines = [
  "Designing visuals that people actually remember.",
  "Building brands with motion, typography & emotion.",
  "Internet-born creative direction.",
  "Posters. Brands. Motion. Culture.",
  "Design that moves louder than words."
];

const services = ["BRANDING", "TYPOGRAPHY", "POSTER DESIGN", "SOCIAL MEDIA", "PACKAGING", "UI DESIGN"];
const manifesto = [
  "Pruthul is a graphic designer with 1 year of experience making social content, identity systems, and type-led visuals feel more alive than the average template.",
  "The work lives between strategy and attitude: bold layouts, sharp copy rhythms, and a visual language that knows how to hit on screens, posters, and campaigns."
];

const skills = ["Branding", "Typography", "Poster Design", "Social Media Design", "Packaging", "UI Design"];

const projects = [
  {
    code: "01",
    title: "PROJECT TITLE",
    note: "Data pending. Reserved for a future brand system, campaign, or launch story.",
    tone: "High contrast launch system"
  },
  {
    code: "02",
    title: "PROJECT TITLE",
    note: "Data pending. Placeholder editorial layout with a bold image block and layered typography.",
    tone: "Cinematic content world"
  },
  {
    code: "03",
    title: "PROJECT TITLE",
    note: "Data pending. Space held for a motion-led identity with sharp digital culture energy.",
    tone: "Experimental identity case"
  }
];

const gallery = [
  {
    title: "Editorial Stack",
    detail: "A split layout where text stays in control and the image block keeps shifting underneath."
  },
  {
    title: "Hover Field",
    detail: "Typography reacts to the cursor with layered outlines, duplicated text, and cropped motion."
  },
  {
    title: "Poster Drift",
    detail: "A composition built like a campaign poster set, but treated with digital first motion energy."
  }
];

function SplitLine({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`split-line ${className}`} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <motion.span
          className="split-word"
          key={`${word}-${index}`}
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
}

function CharacterTitle({ text }: { text: string }) {
  return (
    <span className="character-title" aria-label={text}>
      {Array.from(text).map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="character-title__char"
          initial={{ y: "120%", rotateX: -45, opacity: 0 }}
          animate={{ y: 0, rotateX: 0, opacity: 1 }}
          transition={{ delay: 0.35 + index * 0.02, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function PortfolioExperience({ showcaseCategories }: { showcaseCategories: ShowcaseCategory[] }) {
  const rootRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const storyRef = useRef<HTMLElement | null>(null);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openCategory = useCallback((folder: string) => {
    setActiveCategory(folder);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroShift = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.92, 0.8]);

  useEffect(() => {
    // Skip heavy scroll/animation runtime on small/touch devices for performance
    const isSmallScreen = typeof window !== "undefined" && window.matchMedia("(max-width: 900px)").matches;
    if (isSmallScreen) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const context = gsap.context(() => {
      const marqueeTracks = gsap.utils.toArray<HTMLElement>("[data-marquee-track]");
      marqueeTracks.forEach((track, index) => {
        gsap.to(track, {
          xPercent: index % 2 === 0 ? -50 : 50,
          ease: "none",
          scrollTrigger: {
            trigger: track.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6
          }
        });
      });

      const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]");
      cards.forEach((card, index) => {
        const visual = card.querySelector<HTMLElement>("[data-project-visual]");
        const caption = card.querySelector<HTMLElement>("[data-project-caption]");

        if (visual) {
          gsap.fromTo(
            visual,
            { y: 80, scale: 0.92, rotate: -1.5 },
            {
              y: -24,
              scale: 1,
              rotate: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 40%",
                scrub: 0.9
              }
            }
          );
        }

        if (caption) {
          gsap.fromTo(
            caption,
            { x: 120 },
            {
              x: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 50%",
                scrub: 0.8
              }
            }
          );
        }

        gsap.fromTo(
          card,
          { opacity: 0.68 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 55%",
              scrub: 0.5
            }
          }
        );
      });

      if (storyRef.current) {
        gsap.fromTo(
          ".story-panel",
          { clipPath: "inset(18% 18% 18% 18%)", scale: 0.94 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: storyRef.current,
              start: "top 75%",
              end: "bottom 35%",
              scrub: 0.8
            }
          }
        );
      }
    }, rootRef.current ?? undefined);

    return () => {
      context.revert();
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={rootRef} className="portfolio-shell">
      <header className="topbar">
        <p>Patel Pruthul </p>
        <p>Graphic Designer / Brand Designer / Creative Director</p>
      </header>

      <section ref={heroRef} className="section hero-section">
        <motion.div className="hero-frame" style={{ y: heroShift, scale: heroScale, opacity: heroOpacity }}>
          <div className="hero-eyebrow-row">
            <span className="eyebrow">Creative portfolio / 01</span>
            <span className="hero-note">Black, white, type, motion.</span>
          </div>

          <div className="hero-name-stack">
            <p className="hero-overline">PATEL</p>
            <h1 className="hero-name">
              <CharacterTitle text="PRUTHUL" />
              <span className="hero-name__ghost"></span>
            </h1>
          </div>

          <div className="hero-support-grid">
            <div className="hero-statement">
              {introLines.map((line) => (
                <SplitLine key={line} text={line} className="hero-statement__line" />
              ))}
            </div>

            <div className="hero-meta-card">
              <p className="eyebrow">Role</p>
              <p>Graphic Designer / Brand Designer / Creative Director</p>
              <p className="hero-meta-card__copy">
                Social media systems, branding, typography, and visual direction shaped with a clean but rebellious pulse.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="marquee-section">
        <div className="marquee-shell">
          <div className="marquee-row">
            <div ref={marqueeRef} data-marquee-track className="marquee-track">
              {[...services, ...services].map((item, index) => (
                <span key={`${item}-${index}`} className="marquee-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="marquee-row marquee-row--alt">
            <div data-marquee-track className="marquee-track marquee-track--alt">
              {[...services, ...services].map((item, index) => (
                <span key={`${item}-alt-${index}`} className="marquee-item marquee-item--ghost">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section manifesto-section">
        <div className="section-heading">
          <span className="eyebrow">Creative manifesto</span>
          <h2 className="section-title">A type-led studio page for a designer who wants the work to feel remembered.</h2>
        </div>

        <div className="manifesto-grid">
          <div className="manifesto-lead">
            <SplitLine text="Designing visuals that people actually remember." className="manifesto-lead__line" />
            <SplitLine text="Building brands with motion, typography & emotion." className="manifesto-lead__line" />
          </div>

          <div className="manifesto-copy">
            {manifesto.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="section-heading section-heading--split">
          <span className="eyebrow">Skill system</span>
          <h2 className="section-title">Typography instead of progress bars.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-chip"
              initial={{ y: 60, clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ y: 0, clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ delay: index * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <span className="skill-chip__index">0{index + 1}</span>
              <span className="skill-chip__label">{skill}</span>
              <span className="skill-chip__ghost">{skill}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section project-section">
        <div className="section-heading section-heading--split">
          <span className="eyebrow">Portfolio preview</span>
          <h2 className="section-title">Selected work is now organized as three immersive graphic worlds.</h2>
        </div>

        <div className="project-stack">
          {showcaseCategories.map((category, index) => (
            <Link key={category.slug} href={`/${category.slug}`} className="project-card project-card--showcase" data-project-card>
              <article className="project-card__sticky">
                <div className="project-card__header">
                  <p className="project-card__code">0{index + 1}</p>
                  <p className="project-card__tone">{category.routeLabel}</p>
                </div>

                <div className="project-card__body">
                  <div className="project-card__type">
                    <p className="project-card__label">Selected work</p>
                    <h3>{category.title}</h3>
                    <p className="project-card__summary">{category.summary}</p>

                    <div className="project-card__details">
                      <span>{category.eyebrow}</span>
                      <span>/images/{category.folder}/</span>
                    </div>
                  </div>

                  <div className="project-card__visual project-card__visual--rail" data-project-visual>
                    <CinematicImageRail images={category.images} title={category.title} reverse={index % 2 === 1} />
                  </div>
                </div>

                <div className="project-card__footer" data-project-caption>
                  <p>{category.summary}</p>
                  <span>Open full page / Hover to pause / Infinite loop</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section ref={storyRef} className="section story-section">
        <div className="section-heading">
          <span className="eyebrow">Typography storytelling</span>
          <h2 className="section-title">The work should read like a magazine spread and move like a music visualizer.</h2>
        </div>

        <div className="story-grid">
          <div className="story-panel story-panel--large">
            <p className="story-panel__label">01 / attitude</p>
            <p>
              A confident editorial system built from oversized contrast, cropped type, and spacing that lets the page breathe before it hits.
            </p>
          </div>
          <div className="story-panel">
            <p className="story-panel__label">02 / culture</p>
            <p>
              Internet-native, fashion-adjacent, and aware of how a portfolio feels when it is actually designed instead of assembled.
            </p>
          </div>
          <div className="story-panel">
            <p className="story-panel__label">03 / motion</p>
            <p>
              Heavy scrolling, sticky reveals, and layered typography so every transition feels art-directed instead of generic.
            </p>
          </div>
        </div>
      </section>

     
      <footer className="footer-section">
        <div className="footer-copy">
          <span className="eyebrow">Final screen</span>
          <h2>LET&apos;S BUILD SOMETHING ICONIC</h2>
          <p>DESIGN THAT PEOPLE FEEL</p>
          <p>VISUALS WITH ATTITUDE</p>
        </div>

        <div className="footer-links">
          <a href="https://www.instagram.com/pruthul.bbm" target="_blank" rel="noreferrer">
            Instagram @pruthul.bbm
          </a>
          <a href="mailto:pruthul@brandboosters.marketing">pruthul@brandboosters.marketing</a>
        </div>
      </footer>
    </main>
  );
}
