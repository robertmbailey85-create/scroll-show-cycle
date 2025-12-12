import { useEffect, useRef, useState } from "react";
import phoneDiscovery from "@/assets/phone-discovery.png";
import phoneTastemakers from "@/assets/phone-tastemakers.png";
import phoneCircles from "@/assets/phone-circles.png";
import phoneConnection from "@/assets/phone-connection.png";

const features = [
  {
    image: phoneDiscovery,
    badge: "Discovery",
    badgeIcon: "◎",
    title: "Where ",
    highlight: "discovery",
    titleEnd: " actually means something",
    description:
      "Find music you would never have heard. New artists, new voices and new ideas, surging through real people.",
  },
  {
    image: phoneTastemakers,
    badge: "Tastemakers",
    badgeIcon: "♫",
    title: "Follow the people who ",
    highlight: "shape",
    titleEnd: " music",
    description:
      "Anyone can build a following here, artists or fans. When you find something great, you can share it, sparking a chain reaction.",
  },
  {
    image: phoneCircles,
    badge: "Circles",
    badgeIcon: "◌",
    title: "Find your ",
    highlight: "people",
    titleEnd: "",
    description:
      "Every scene, every sound, every corner of culture, all in one place. Join conversations worth having and bring your circle with you.",
  },
  {
    image: phoneConnection,
    badge: "Connection",
    badgeIcon: "⚯",
    title: "Music moves ",
    highlight: "further",
    titleEnd: " when people move with it",
    description: "The more it moves, the more it matters.",
  },
];

const FeatureScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const { top, height } = container.getBoundingClientRect();
      const scrollProgress = -top / (height - window.innerHeight);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      const newIndex = Math.min(
        features.length - 1,
        Math.floor(clampedProgress * features.length)
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${features.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* iPhone Container */}
            <div className="relative w-full max-w-md lg:w-1/2 flex justify-center">
              <div className="relative">
                {features.map((feature, index) => (
                  <img
                    key={index}
                    src={feature.image}
                    alt={feature.badge}
                    className={`w-full max-w-[360px] transition-opacity duration-500 ${
                      index === activeIndex
                        ? "opacity-100"
                        : "opacity-0 absolute inset-0"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 relative min-h-[300px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background mb-6">
                    <span className="text-muted-foreground">
                      {feature.badgeIcon}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    {feature.title}
                    <span className="italic text-feature-accent">
                      {feature.highlight}
                    </span>
                    {feature.titleEnd}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}

              {/* Progress Dots */}
              <div className="flex gap-2 mt-8">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-feature-accent w-6"
                        : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureScroll;
