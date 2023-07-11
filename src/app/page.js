"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: username,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);

        if (result.token) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(result.User));
          router.push("/inicio");
        } else {
          setError("Credenciales inválidas");
        }
      } else {
        throw new Error("Error en la solicitud");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Ocurrió un error en el servidor");
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold my-8">
        Minerales Raros S.A.
      </h1>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">
          Ingreso a Plataforma de Reportes
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-300 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-1"
            >
              Nombre de usuario:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 rounded border-gray-400 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-1"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded border-gray-400 focus:outline-none"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 rounded font-semibold"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
