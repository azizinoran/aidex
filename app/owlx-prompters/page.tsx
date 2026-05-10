export default function OwlxPromptersPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 py-24">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-28">

            <h1 className="font-audiowide text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">OWLX</span>{" "}
              <span className="text-cyan-400">Prompters</span>
            </h1>

            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Meet the AI innovators and prompt engineers behind the OWLX ecosystem.
              A futuristic collaboration of PMM digital creators driving AI innovation forward.
            </p>

          </div>

          {/* PROMPTER 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-36">

            {/* VIDEO */}
            <div className="group relative rounded-3xl overflow-hidden border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.18)]">

              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              >
                <source src="/videos/prompter1.mp4" type="video/mp4" />
              </video>

              {/* VIDEO OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            </div>

            {/* TEXT */}
            <div>

              <p className="text-cyan-400 tracking-[0.3em] uppercase mb-4">
                OWLX PROMPTER 01
              </p>

              <h2 className="text-5xl font-bold mb-6">
                Noran Azizi
              </h2>

              <p className="text-cyan-300 text-xl mb-6">
                AI Automation & Prompt Engineering Specialist
              </p>

              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Specializing in AI workflow automation, prompt engineering,
                generative AI systems, and future-ready digital innovation
                for education and technology ecosystems.
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-4">

                <span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                  Prompt Engineering
                </span>

                <span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                  AI Automation
                </span>

                <span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                  Generative AI
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}