import { useState } from "react";

const SignupSection = () => {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("I'm an artist");

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
          What does the world sound
          <br />
          like when you are free to find
          <br />
          out on <span className="italic text-feature-accent">your own terms?</span>
        </h2>
        
        <p className="text-muted-foreground mb-8">
          Join the Serenada waiting list to be the first to get early access.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto flex-1 max-w-xs px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-feature-accent"
          />
          
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-feature-accent"
          >
            <option>I'm an artist</option>
            <option>I'm a fan</option>
            <option>I'm a label</option>
          </select>

          <button className="px-6 py-3 bg-feature-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
            Join Serenada
          </button>
        </div>

        <p className="text-sm text-muted-foreground">
          By signing up you agree to Serenada's{" "}
          <a href="#" className="underline hover:text-foreground">
            terms and conditions
          </a>
        </p>
      </div>
    </section>
  );
};

export default SignupSection;
