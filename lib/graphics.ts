export type GraphicFolder = "food" | "technical" | "other";

export type ShowcaseCategory = {
  slug: "food-graphics" | "technical-graphics" | "other-graphics";
  title: string;
  eyebrow: string;
  summary: string;
  routeLabel: string;
  folder: GraphicFolder;
  images: string[];
};

export type GraphicsPageData = ShowcaseCategory & {
  subtitle: string;
  intro: string;
  details: string[];
};

const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"]);

const categoryConfig: Record<
  GraphicFolder,
  {
    slug: ShowcaseCategory["slug"];
    title: string;
    eyebrow: string;
    summary: string;
    routeLabel: string;
    subtitle: string;
    intro: string;
    details: string[];
    images: string[];
  }
> = {
  food: {
    slug: "food-graphics",
    title: "FOOD GRAPHICS",
    eyebrow: "Selected work / 01",
    summary: "Cinematic visuals for menus, launches, and edible brand worlds.",
    routeLabel: "Open food graphics",
    subtitle: "Menu systems, launch graphics, and appetite-led visual direction.",
    intro:
      "A premium visual shelf for food-driven graphics that keeps the compositions crisp, atmospheric, and easy to browse.",
    details: ["Menu design", "Campaign graphics", "Appetite direction"],
    images: [
      "https://images.unsplash.com/photo-1779026211860-11a97f150471?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779026212159-061b77dd9c8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779026212679-1c0eb2c10d7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779026213459-6de8bf0c8fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779026211947-a2ca2e187e6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779026211696-6b9288bd9a65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779026212992-e622b1482cb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779026212341-e59006e59a58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8fA%3D%3D" 
    ]
  },
  technical: {
    slug: "technical-graphics",
    title: "TECHNICAL GRAPHICS",
    eyebrow: "Selected work / 02",
    summary: "Structured visuals, system-led layouts, and precise information design.",
    routeLabel: "Open technical graphics",
    subtitle: "System thinking translated into sharp visuals and disciplined layouts.",
    intro:
      "Technical graphics are presented as a polished editorial strip with a slow cinematic flow and tight information hierarchy.",
    details: ["System graphics", "Information design", "Interface direction"],
    images: [
      "https://images.unsplash.com/photo-1779079789690-15ad28da90c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779079788975-093406351654?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779079789426-f5839b124817?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779079789977-f163f2be1876?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779079789175-4696fbe24555?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779079788602-5aef12a6079b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779079788466-56a5edd1de3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779079788759-0b8ae231d579?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  other: {
    slug: "other-graphics",
    title: "OTHER GRAPHICS",
    eyebrow: "Selected work / 03",
    summary: "Experimental pieces, cultural graphics, and flexible visual studies.",
    routeLabel: "Open other graphics",
    subtitle: "A flexible gallery for the more experimental and culture-driven pieces.",
    intro:
      "Other graphics gathers the remaining visuals into a cinematic collection that feels curated, not assembled.",
    details: ["Experimental studies", "Culture pieces", "Visual essays"],
    images: [
      "https://images.unsplash.com/photo-1779087706837-43cdd9d26899?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779087706760-3c40757d18c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779087706748-c16aba8ba7c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779087706958-2fd66b63e918?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1779087706772-991fcbf939cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    ]
  }
};

export function getShowcaseCategories(): ShowcaseCategory[] {
  return (Object.keys(categoryConfig) as GraphicFolder[]).map((folder) => {
    const config = categoryConfig[folder];

    return {
      slug: config.slug,
      title: config.title,
      eyebrow: config.eyebrow,
      summary: config.summary,
      routeLabel: config.routeLabel,
      folder,
      images: config.images
    };
  });
}

export function getGraphicsPageData(slug: ShowcaseCategory["slug"]): GraphicsPageData {
  const entry =
    (Object.values(categoryConfig).find((config) => config.slug === slug) ?? categoryConfig.food) as (typeof categoryConfig)[GraphicFolder];
  const folder = (Object.keys(categoryConfig).find((key) => categoryConfig[key as GraphicFolder].slug === slug) ?? "food") as GraphicFolder;

  return {
    slug: entry.slug,
    title: entry.title,
    eyebrow: entry.eyebrow,
    summary: entry.summary,
    routeLabel: entry.routeLabel,
    folder,
    images: entry.images,
    subtitle: entry.subtitle,
    intro: entry.intro,
    details: entry.details
  };
}
