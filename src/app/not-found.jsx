import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-[#0b1220] via-[#0f172a] to-[#020617] text-white relative overflow-hidden">

      {/* floating blur circles */}
      <div className="absolute w-72 h-72 bg-sky-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse" />
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />

      <div className="text-center z-10 max-w-md sm:max-w-lg">

        {/* glitch effect */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold relative text-sky-400 tracking-widest">
          <span className="absolute left-0 top-0 text-pink-500 opacity-5 animate-pulse">
            404
          </span>
          404
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl mt-4 font-semibold">
          Lost in Space 🚀
        </h2>

        <p className="text-slate-300 mt-3 text-sm sm:text-base leading-relaxed">
          The page you’re looking for drifted away in the digital universe.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-sky-500 text-black font-semibold hover:bg-sky-400 transition shadow-lg hover:shadow-sky-500/30"
        >
          🚀 Go Back Home
        </Link>

      </div>
    </div>
  );
}