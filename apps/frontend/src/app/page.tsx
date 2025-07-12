import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <h1 className="text-6xl font-extrabold tracking-tight mb-6">
        Hydro<span className="text-cyan-400">Stack</span>
      </h1>
      <p className="text-lg opacity-80 max-w-xl mb-10">
        Plataforma moderna para monitorizar en tiempo real tus recursos hídricos y tomar decisiones basadas en datos.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/dashboard"
          className="rounded-xl px-6 py-3 font-semibold bg-cyan-500 hover:bg-cyan-600 transition-colors"
        >
          Empezar ahora
        </Link>

        <Link
          href="https://docs.hydrostack.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl px-6 py-3 font-semibold border border-zinc-700 hover:bg-zinc-800 transition-colors"
        >
          Documentación
        </Link>
      </div>
    </main>
  );
}
