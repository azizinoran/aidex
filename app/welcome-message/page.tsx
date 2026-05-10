export default function WelcomeMessagePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 py-24">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Welcome Message
          </h1>

          <p className="text-gray-300 text-xl leading-relaxed max-w-4xl mx-auto">
            Welcome to AIDEx — Artificial Intelligence & Digital Excellence Hub.
            A futuristic innovation ecosystem empowering PMM students and staff
            through AI technology, prompt engineering, automation, and digital transformation.
          </p>

        </div>

      </section>

    </main>
  );
}