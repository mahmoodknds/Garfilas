export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3a1a00,transparent_40%)]" />

      <section className="relative z-10 flex flex-col items-center text-center px-6">

        <div className="mb-8">
          <div className="w-40 h-40 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center shadow-[0_0_50px_rgba(255,140,0,0.4)]">

            <span className="text-6xl">
              🐱🍝
            </span>

          </div>
        </div>


        <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-orange-500">
          GARFILAS
        </h1>


        <p className="mt-5 text-lg md:text-xl text-gray-300 tracking-wide">
          La Casa della Lasagna
        </p>


        <p className="mt-3 max-w-md text-gray-400">
          Taste the Italian layers of passion
        </p>


        <button
          className="
          mt-12
          px-10
          py-4
          rounded-full
          bg-orange-500
          text-black
          font-bold
          text-lg
          shadow-[0_0_35px_rgba(255,140,0,0.6)]
          hover:scale-105
          transition
          "
        >
          مشاهده منو
        </button>


      </section>


      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-16 text-2xl">

        <button>
          👤
        </button>

        <button>
          🛒
        </button>

        <button>
          ☎️
        </button>

      </div>


    </main>
  );
}