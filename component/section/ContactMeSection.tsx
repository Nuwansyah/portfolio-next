import FadeIn from "@/animation/FadeIn";

export default function ContactSection() {
    return (
      <section id="contact" className="min-h-screen px-6 md:px-20 py-30">
        <FadeIn>
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
            <p className="text-zinc-400">Email: your@email.com</p>
        </FadeIn>
        
      </section>
    );
  }