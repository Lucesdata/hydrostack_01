"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (!res?.error) router.push("/dashboard");
  }

  return (
    <main className="flex items-center justify-center h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-sm p-8 bg-zinc-900 rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-2 text-center">Iniciar sesión</h1>
        <input
          className="rounded px-3 py-2 bg-zinc-800 focus:outline-none"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="rounded px-3 py-2 bg-zinc-800 focus:outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="rounded-xl py-2 font-semibold bg-cyan-500 hover:bg-cyan-600 transition"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
