"use client";
import Navbar from '@/components/navbar';
import { useState } from 'react';

export default function Reportes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = () => {
    // Lógica de búsqueda según searchQuery
    console.log(`Búsqueda: ${searchQuery}`);
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="bg-gray-200 p-4">
      <div className="flex items-center justify-between ">
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
        <div className="relative inline-block">
          <button onClick={handleFilterToggle} className="bg-white text-gray-800 px-4 py-2 rounded">
            Filtrar por
          </button>
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow-lg">
              <button onClick={() => handleFilterByFase('Fase')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Fase
              </button>
              <button onClick={() => handleFilterByRajo('Rajo')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Rajo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
