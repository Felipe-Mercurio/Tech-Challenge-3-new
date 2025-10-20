import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

const VehicleForm = () => {
  const [form, setForm] = useState({
    placa: "",
    marca: "",
    modelo: "",
    ano: "",
    cor: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      api.get(`/vehicles/${id}`).then((res) => setForm(res.data));
    }
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.placa || !form.marca) return alert("Preencha os campos obrigatórios");

    try {
      if (id) await api.put(`/vehicles/${id}`, form);
      else await api.post("/vehicles", form);

      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar veículo");
    }
  };

  return (
    <div className="max-w-md mx-auto my-6">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Editar Veículo" : "Cadastrar Novo Veículo"}
      </h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-2">
        <input className="border p-2 w-full rounded" name="placa" value={form.placa} onChange={handleChange} placeholder="Placa" required />
        <input className="border p-2 w-full rounded" name="marca" value={form.marca} onChange={handleChange} placeholder="Marca" required />
        <input className="border p-2 w-full rounded" name="modelo" value={form.modelo} onChange={handleChange} placeholder="Modelo" />
        <input className="border p-2 w-full rounded" name="ano" value={form.ano} onChange={handleChange} placeholder="Ano" type="number" />
        <input className="border p-2 w-full rounded" name="cor" value={form.cor} onChange={handleChange} placeholder="Cor" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">
          {id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};

export default VehicleForm;
