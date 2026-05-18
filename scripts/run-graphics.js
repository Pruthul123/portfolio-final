const categoryConfig = {
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
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80"
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
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ]
  }
};

function getShowcaseCategories() {
  return Object.keys(categoryConfig).map((folder) => {
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

function getGraphicsPageData(slug) {
  const entry = Object.values(categoryConfig).find((config) => config.slug === slug) || categoryConfig.food;
  const folder = Object.keys(categoryConfig).find((key) => categoryConfig[key].slug === slug) || 'food';
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

console.log('getShowcaseCategories():');
console.log(JSON.stringify(getShowcaseCategories(), null, 2));
console.log('\ngetGraphicsPageData("food-graphics"):');
console.log(JSON.stringify(getGraphicsPageData('food-graphics'), null, 2));
