import { pool } from "../db.js";

export const Vehicle = {
  getAll: () => pool.query("SELECT * FROM vehicles"),
  getById: (id) => pool.query("SELECT * FROM vehicles WHERE id=$1", [id]),
  create: (v) =>
    pool.query(
      "INSERT INTO vehicles (placa, marca, modelo, ano, cor) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [v.placa, v.marca, v.modelo, v.ano, v.cor]
    ),
  update: (id, v) =>
    pool.query(
      "UPDATE vehicles SET placa=$1, marca=$2, modelo=$3, ano=$4, cor=$5 WHERE id=$6 RETURNING *",
      [v.placa, v.marca, v.modelo, v.ano, v.cor, id]
    ),
  remove: (id) => pool.query("DELETE FROM vehicles WHERE id=$1", [id]),
};
