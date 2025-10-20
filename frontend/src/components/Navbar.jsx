import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/"><h1 className="font-bold text-lg">Gestão de Veículos</h1></Link>
      <div className="space-x-4">
        <Link to="/add" className="hover:text-gray-300">Adicionar Veículo</Link>
      </div>
    </nav>
  );
};

export default Navbar;
