import FadeIn from "@/animation/FadeIn";

export default function AboutSection() {
    return (
      <section id="about" className="min-h-screen px-6 md:px-20 py-20">
        <div className="max-w-4xl">
            <FadeIn>
               <h2 className="text-2xl font-bold mb-4">About Me</h2> 
            </FadeIn>
            <FadeIn delay={0.2}>
                <p className="text-zinc-400">
                    Saya adalah developer yang fokus pada pengembangan sistem dalam game,
                    seperti inventory, save system, dan gameplay architecture.
                </p>
            </FadeIn>
          
        </div>
      </section>
    );
  }