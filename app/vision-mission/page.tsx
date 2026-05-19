export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      {/* HERO */}
      <section className="relative px-6 py-24">

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-24">

            <h1 className="font-audiowide text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Vision</span>{" "}
              <span className="text-cyan-400">& Mission</span>
            </h1>

            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Driving PMM towards a future-ready AI and digital innovation ecosystem
              through creativity, automation, collaboration, and technological excellence.
            </p>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-12">

            {/* VISION */}
            <div className="relative rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-10 shadow-[0_0_60px_rgba(34,211,238,0.15)] overflow-hidden">

              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full"></div>

              <div className="relative z-10">

                <p className="font-audiowide text-2xl md:text-3xl text-cyan-400 tracking-[0.3em] uppercase mb-6 text-center">
                  Our Vision
                </p>

                <p className="text-gray-300 leading-relaxed text-lg text-center">
                  Leading TVET education innovation by becoming a reference hub for AI and digital technology.
                </p>

              </div>

            </div>

            {/* MISSION */}
            <div className="relative rounded-3xl border border-purple-400/20 bg-white/5 backdrop-blur-xl p-10 shadow-[0_0_60px_rgba(168,85,247,0.15)] overflow-hidden">

              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 blur-[80px] rounded-full"></div>

              <div className="relative z-10">

                <p className="font-audiowide text-2xl md:text-3xl text-purple-400 tracking-[0.3em] uppercase mb-6 text-center">
                  Our Mission
                </p>                

                <ul className="space-y-5 text-gray-300 text-lg leading-relaxed">

                  <p className="text-gray-300 leading-relaxed text-lg text-center">
                    Producing highly skilled and competitive graduates through the integration of AI in education, talent development, and industry collaboration.
                  </p>

                  
                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}