export default function AIDExPromptersCommunityPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src="/videos/community-bg.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* WEBSITE CONTENT */}
      <div className="relative z-10 min-h-screen px-6 py-20">

        <div className="max-w-6xl mx-auto">

          {/* HERO */}
          <div className="text-center mb-20">

            <h1 className="font-audiowide text-4xl md:text-6xl font-bold leading-tight title-glow">
              <span className="text-white">AIDEx</span>{" "}
              <span className="text-cyan-400">Prompters</span>
              <br />
              <span className="text-white">Community</span>
            </h1>

            <p className="text-gray-300 tracking-wide text-lg max-w-3xl mx-auto leading-relaxed mt-6">
              A collaborative AI community for PMM students and staff to explore
              prompt engineering, AI tools, automation, and future-ready digital innovation together.
            </p>

          </div>

          {/* FUTURISTIC COMMUNITY SECTION */}
          <div className="relative flex items-center justify-center min-h-[700px] -translate-y-10 mb-24 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

            {/* CENTER GLOBE */}
            <div className="relative z-10 w-[350px] h-[350px] rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-[0_0_80px_rgba(34,211,238,0.25)]">

              <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-pulse"></div>

              <div className="text-center px-8">
                <h1 className="text-6xl font-extrabold text-cyan-400">
                  AIDEx
                </h1>

                <p className="text-gray-300 text-sm leading-relaxed mt-4">
                  A collaborative AI community for PMM students and staff
                  to explore prompt engineering, AI tools, automation,
                  and future-ready digital innovation together.
                </p>
              </div>

            </div>

            {/* TOP LEFT */}
            <div className="absolute top-[12%] left-[24%] circle-btn">
              <div className="text-5xl">🤖</div>
              <h2>AI Prompt Sharing</h2>
            </div>

            {/* TOP RIGHT */}
            <div className="absolute top-[12%] right-[24%] circle-btn">
              <div className="text-5xl">🚀</div>
              <h2>Workshops & Activities</h2>
            </div>

            {/* LEFT */}
            <div className="absolute left-[12%] top-[40%] circle-btn purple">
              <div className="text-5xl">🌐</div>
              <h2>Networking & Collaboration</h2>
            </div>

            {/* RIGHT */}
            <div className="absolute right-[12%] top-[40%] circle-btn">
              <div className="text-5xl">👥</div>
              <h2>Community Members</h2>
              <p className="stat">500+</p>
            </div>

            {/* BOTTOM LEFT */}
            <div className="absolute bottom-[12%] left-[24%] circle-btn">
              <div className="text-5xl">🧠</div>
              <h2>AI Workshops</h2>
              <p className="stat">20+</p>
            </div>

            {/* BOTTOM RIGHT */}
            <div className="absolute bottom-[12%] right-[24%] circle-btn purple">
              <div className="text-5xl">💬</div>
              <h2>Shared Prompts</h2>
              <p className="stat">1000+</p>
            </div>

          </div>

          {/* JOIN */}
          <div className="text-center">

            <h2 className="text-3xl font-bold mb-6">
              Join Our AI Community Today
            </h2>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Be part of the growing AI movement at PMM and collaborate
              with the next generation of digital innovators.
            </p>

            <a
              href="https://chat.whatsapp.com/ECglP9ubmNuK98UYVsM4yg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:scale-105 transition px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl"
            >
              🚀 Join AIDEx WhatsApp Community
            </a>

            <div className="mt-5">
              <a
                href="https://discord.gg/GTvEpRuf"
                className="inline-block bg-[#5865F2] hover:bg-[#4752C4] hover:scale-105 transition px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl"
              >
                🎮 Join AIDEx Discord Community
              </a>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}