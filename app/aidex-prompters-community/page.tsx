export default function AIDExPromptersCommunityPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AIDEx Prompters Community
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A collaborative AI community for PMM students and staff to explore
            prompt engineering, AI tools, automation, and future-ready digital innovation together.
          </p>

        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg hover:border-cyan-400 transition hover:-translate-y-1">

            <div className="text-4xl mb-4">🤖</div>

            <h2 className="text-2xl font-bold mb-3 text-cyan-400">
              AI Prompt Sharing
            </h2>

            <p className="text-gray-400">
              Discover and share powerful prompts for ChatGPT, Gemini,
              automation tools, image generation, and more.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg hover:border-blue-400 transition hover:-translate-y-1">

            <div className="text-4xl mb-4">🚀</div>

            <h2 className="text-2xl font-bold mb-3 text-blue-400">
              Workshops & Activities
            </h2>

            <p className="text-gray-400">
              Participate in AI sharing sessions, webinars, competitions,
              and digital innovation activities organised by AIDEx.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg hover:border-purple-400 transition hover:-translate-y-1">

            <div className="text-4xl mb-4">🌐</div>

            <h2 className="text-2xl font-bold mb-3 text-purple-400">
              Networking & Collaboration
            </h2>

            <p className="text-gray-400">
              Connect with students, educators, and AI enthusiasts
              to build future-ready skills together.
            </p>

          </div>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 text-center">

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-4xl font-bold text-cyan-400 mb-2">500+</h3>
            <p className="text-gray-400">Community Members</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-4xl font-bold text-blue-400 mb-2">20+</h3>
            <p className="text-gray-400">AI Workshops</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-4xl font-bold text-purple-400 mb-2">1000+</h3>
            <p className="text-gray-400">Shared Prompts</p>
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
  );
}