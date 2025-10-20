# 🚗 Gestão de Veículos — Frontend (React)

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Status](https://img.shields.io/badge/status-em_desenvolvimento-yellow)]()

Aplicação **frontend** desenvolvida em **React** para gerenciar veículos, com funcionalidades de cadastro, edição, visualização, exclusão e filtros dinâmicos por marca e ano.

---

## 🚀 Funcionalidades

- 📋 Listagem de veículos  
- ➕ Cadastro de novo veículo  
- ✏️ Edição de veículo existente  
- 👁️ Visualização detalhada  
- ❌ Exclusão com confirmação  
- 🔍 Filtro por **marca** e **ano**  
- 🧭 Navegação simples via React Router (Home / Adicionar)

---

## 🧰 Tecnologias utilizadas

- **React 18+**
- **Vite** (opcional, se o projeto foi criado com Vite)
- **React Router DOM**
- **Axios** — para integração com o backend
- **Tailwind CSS** — para estilização rápida e responsiva

---

## ⚙️ Instalação e execução

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/SEU_USUARIO/vehicle-management-frontend.git
cd vehicle-management-frontend
```

### 2️⃣ Instalar as dependências
```bash
npm install
```
### 3️⃣ Configurar o backend
Edite o arquivo src/services/api.js com a URL do seu backend (exemplo):

```js
import axios from "axios";

export default axios.create({
  baseURL: "https://seu-backend-na-railway.app", // ou localhost:3000
});
```

### 4️⃣ Executar o projeto
```bash
npm run dev
```
Acesse no navegador:
👉 http://localhost:5173

---

## 🧭 Estrutura de pastas
```css
src/
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ VehicleList.jsx
 │   ├─ VehicleForm.jsx
 │   └─ VehicleDetails.jsx
 ├─ services/
 │   └─ api.js
 ├─ App.jsx
 └─ main.jsx
```

---

## 🧩 Rotas da aplicação
Rota	Descrição
/	Lista de veículos
/add	Formulário de novo veículo
/edit/:id	Edição de veículo existente
/details/:id	Visualização detalhada do veículo

---

## 🧑‍💻 Autor
[Felipe Mercurio]
💼 https://www.linkedin.com/in/felipemercurio/
📧 mercuriofelipe10@gmail.com