const Footer = () => {
  return (
    <footer className="border-t border-border py-6 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
            <span className="text-background text-xs font-bold">S</span>
          </div>
          <span>Serenada 2026. All Rights Reserved</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy
          </a>
          <span>/</span>
          <a href="#" className="hover:text-foreground transition-colors">
            Terms
          </a>
          <span>/</span>
          <a href="#" className="hover:text-foreground transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
