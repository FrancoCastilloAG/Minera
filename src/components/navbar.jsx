import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <h1 className="font-semibold">Minerales Raros S.A.</h1>
        </div>
        <div className="flex items-center">
          <div className="relative ml-4">
            <button
              onClick={handleMenuToggle}
              className="flex items-center focus:outline-none"
            >
              <img
                src="url_de_la_imagen_de_perfil"
                alt="Foto de perfil"
                className="w-8 h-8 rounded-full"
              />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow-lg z-10">
                <p className="block px-4 py-2 text-gray-800 bg-gray-200">
                  Usuario: {user.name}
                </p>
                <a
                  href="/perfil"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Perfil
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Cerrar sesión
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-2">
        <div>
          <a
            href="/inicio"
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded mr-2"
          >
            Inicio
          </a>
          <a
            href="/produccion"
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded mr-2"
          >
            Producción
          </a>
          <a
            href="/reportes"
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded mr-2"
          >
            Reportes
          </a>
        </div>
      </div>
    </nav>
  );
}
