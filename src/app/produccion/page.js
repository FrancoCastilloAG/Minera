"use client";
import Navbar from '@/components/navbar';
import { useState } from 'react';

export default function Produccion() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = () => {
    // Lógica de búsqueda según searchQuery
    console.log(`Búsqueda: ${searchQuery}`);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Lógica para subir el archivo
    console.log('Archivo cargado:', file);
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="bg-gray-200 p-4">
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <button onClick={handleSearch} className="bg-white text-gray-800 px-4 py-2 rounded">
          Buscar
        </button>
        <input type="file" onChange={handleFileUpload} className="hidden" />
        <button onClick={() => document.querySelector('input[type=file]').click()} className="bg-white text-gray-800 px-4 py-2 rounded">
          Subir archivo
        </button>
        <div className="relative inline-block">
          <button onClick={handleFilterToggle} className="bg-white text-gray-800 px-4 py-2 rounded">
            Filtrar por
          </button>
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow-lg">
              <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Fecha
              </button>
              <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Fase
              </button>
              <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Material
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
