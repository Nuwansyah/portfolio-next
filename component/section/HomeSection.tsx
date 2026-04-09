import FadeIn from "@/animation/FadeIn";

export default function HomeSection() {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
            <FadeIn>
                <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Nera</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
                <p className="mt-4 text-zinc-400">Unity Developer | Gameplay Systems</p>
            </FadeIn>
          
        </div>
      </section>
    );
  }