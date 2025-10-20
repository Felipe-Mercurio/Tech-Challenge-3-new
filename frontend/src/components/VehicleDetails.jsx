import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const res = await api.get(`/vehicles/${id}`);
        setVehicle(res.data);
      } catch (err) {
        console.error(err);
        alert("Erro ao buscar veículo");
      }
    };
    fetchVehicle();
  }, [id]);

  if (!vehicle) {
    return <div className="text-center mt-8">Carregando...</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow rounded p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Detalhes do Veículo</h2>
      <ul className="space-y-2">
        <li><strong>Placa:</strong> {vehicle.placa}</li>
        <li><strong>Marca:</strong> {vehicle.marca}</li>
        <li><strong>Modelo:</strong> {vehicle.modelo}</li>
        <li><strong>Ano:</strong> {vehicle.ano}</li>
        <li><strong>Cor:</strong> {vehicle.cor}</li>
      </ul>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate(`/edit/${vehicle.id}`)}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Editar
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default VehicleDetails;
