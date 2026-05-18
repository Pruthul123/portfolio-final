"use client";

type CinematicImageRailProps = {
  images: string[];
  title: string;
  reverse?: boolean;
};

export default function CinematicImageRail({ images, title, reverse = false }: CinematicImageRailProps) {
  const railImages = images.length ? [...images, ...images] : [];

  return (
    <div className={`cinematic-rail${reverse ? " cinematic-rail--reverse" : ""}`} aria-label={title}>
      <div className="cinematic-rail__glow cinematic-rail__glow--one" aria-hidden />
      <div className="cinematic-rail__glow cinematic-rail__glow--two" aria-hidden />

      <div className="cinematic-rail__viewport">
        <div className="cinematic-rail__track">
          {railImages.map((src, index) => (
            <figure key={`${src}-${index}`} className="cinematic-rail__frame">
              <img src={src} alt={title} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>

      <div className="cinematic-rail__label">
        <span>Hover to pause</span>
        <span>Infinite horizontal loop</span>
      </div>
    </div>
  );
}
