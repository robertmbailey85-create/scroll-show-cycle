const RememberSection = () => {
  return (
    <section className="bg-muted/50 rounded-3xl mx-4 lg:mx-8 p-8 lg:p-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
              Remember the first time
              <br />
              a song <span className="italic text-feature-accent">changed</span> you?
            </h2>
            <p className="text-muted-foreground">
              That feeling matters.
              <br />
              Serenada gives it a home.
            </p>
          </div>
          <button className="px-6 py-3 bg-feature-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
            Join Serenada
          </button>
        </div>

        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=1200&h=600&fit=crop"
            alt="Person listening to music"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RememberSection;
