export default function AIDExPromptersCommunityPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AIDEx Prompters Community
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join the growing AI community for PMM students and staff.
            Learn prompt engineering, AI tools, automation, and future-ready digital skills together.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* STUDENT */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg hover:border-cyan-400 transition">

            <h2 className="text-3xl font-bold mb-4 text-cyan-400">
              Students
            </h2>

            <p className="text-gray-300 mb-6">
              Connect with fellow students, explore AI prompting,
              participate in community activities, and access shared AI resources.
            </p>

            <a
              href="https://chat.whatsapp.com/"
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              Join WhatsApp Group
            </a>

          </div>

          {/* STAFF */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg hover:border-blue-400 transition">

            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              Staff
            </h2>

            <p className="text-gray-300 mb-6">
              Collaborate with educators and professionals in AI-driven teaching,
              digital innovation, and academic transformation initiatives.
            </p>

            <a
              href="https://chat.whatsapp.com/"
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              Join WhatsApp Group
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}