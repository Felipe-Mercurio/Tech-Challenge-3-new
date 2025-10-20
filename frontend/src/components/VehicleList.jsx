import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filterMarca, setFilterMarca] = useState("");
  const [filterAno, setFilterAno] = useState("");
  const navigate = useNavigate();

  const fetchVehicles = async () => {
    const res = await api.get("/vehicles");
    setVehicles(res.data);
  };

  useEffect(() => { fetchVehicles(); }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Deseja realmente excluir?")) {
      await api.delete(`/vehicles/${id}`);
      fetchVehicles();
    }
  };

  // 🔍 Filtragem combinada por marca e ano
  const filteredVehicles = vehicles.filter((v) => {
    const matchMarca = v.marca.toLowerCase().includes(filterMarca.toLowerCase());
    const matchAno = filterAno ? String(v.ano) === String(filterAno) : true;
    return matchMarca && matchAno;
  });

  // Obter lista única de anos para o filtro
  const uniqueYears = [...new Set(vehicles.map((v) => v.ano))].sort((a, b) => b - a);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestão de Veículos</h1>

      <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
        <input
          placeholder="Filtrar por marca"
          value={filterMarca}
          onChange={(e) => setFilterMarca(e.target.value)}
          className="border p-2 w-full rounded mb-2 md:mb-0"
        />

        <select
          value={filterAno}
          onChange={(e) => setFilterAno(e.target.value)}
          className="border p-2 w-full md:w-40 rounded"
        >
          <option value="">Todos os anos</option>
          {uniqueYears.map((ano) => (
            <option key={ano} value={ano}>{ano}</option>
          ))}
        </select>
      </div>

      <ul className="space-y-2">
        {filteredVehicles.map((v) => (
          <li
            key={v.id}
            className="border p-3 rounded flex justify-between items-center"
          >
            <span>
              {v.placa} - {v.marca} {v.modelo} ({v.ano}) - {v.cor}
            </span>
            <div className="space-x-2">
              <button
                onClick={() => navigate(`/details/${v.id}`)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Visualizar
              </button>
              <button
                onClick={() => navigate(`/edit/${v.id}`)}
                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(v.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>

      {filteredVehicles.length === 0 && (
        <p className="text-gray-500 text-center mt-4">Nenhum veículo encontrado.</p>
      )}
    </div>
  );
};

export default VehicleList;
