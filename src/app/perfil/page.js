"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";

export default function Perfil() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-200">
        <div className="max-w-md mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold mb-4">Perfil de Usuario</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Correo Electrónico:
              </label>
              <p className="border-b border-gray-300 py-1">{user.name}</p>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-1">
                Contraseña:
              </label>
              <div className="flex items-center">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  className="border border-gray-300 rounded-l-lg px-3 py-2 flex-1"
                  value={user.password}
                  readOnly
                />
                <button
                  className="bg-gray-300 rounded-r-lg px-4 py-2"
                  onClick={handlePasswordToggle}
                >
                  {isPasswordVisible ? "Ocultar" : "Ver"}
                </button>
              </div>
            </div>
          </div>
          <br></br>
          <button className="bg-white px-4 py-2 rounded">Editar Perfil</button>
        </div>
      </div>
    </>
  );
}
