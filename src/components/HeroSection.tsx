import { useState } from "react";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("artist");

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-200/60 via-pink-100/40 to-orange-200/50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium">Instagram</span>
        </a>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            <span className="text-background font-bold text-sm">S</span>
          </div>
          <span className="font-display font-bold text-lg tracking-wide">SERENADA</span>
        </div>

        <a
          href="#signup"
          className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
          <span className="text-sm font-medium">Join Serenada</span>
        </a>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center px-6 pt-16 lg:pt-24 pb-20">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-center leading-tight mb-6">
          The new way to
          <br />
          <span className="italic text-feature-accent">discover</span> music.
        </h1>

        <p className="text-muted-foreground text-center text-lg max-w-md mb-12">
          The social streaming app where artists and fans connect, discover, and share in one place.
        </p>

        {/* Signup Form */}
        <div className="w-full max-w-xl">
          <div className="flex flex-col sm:flex-row items-stretch bg-background rounded-full shadow-lg overflow-hidden border border-border/30">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
            />
            <div className="flex items-center border-t sm:border-t-0 sm:border-l border-border/30">
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="px-4 py-4 bg-transparent text-foreground text-sm focus:outline-none cursor-pointer"
              >
                <option value="artist">I'm an artist</option>
                <option value="fan">I'm a fan</option>
              </select>
              <button className="px-6 py-3 m-1.5 bg-feature-accent text-white rounded-full font-medium hover:opacity-90 transition-opacity text-sm whitespace-nowrap">
                Join Serenada
              </button>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-4">
            By signing up you agree to Serenada's{" "}
            <a href="#" className="underline hover:text-foreground transition-colors">
              terms and conditions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
