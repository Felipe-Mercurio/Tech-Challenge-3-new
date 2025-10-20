import { Vehicle } from "../models/vehicleModel.js";

export const getAll = async (req, res) => {
  const { rows } = await Vehicle.getAll();
  res.json(rows);
};
export const getById = async (req, res) => {
  const { rows } = await Vehicle.getById(req.params.id);
  res.json(rows[0] || {});
};
export const create = async (req, res) => {
  const { rows } = await Vehicle.create(req.body);
  res.status(201).json(rows[0]);
};
export const update = async (req, res) => {
  const { rows } = await Vehicle.update(req.params.id, req.body);
  res.json(rows[0]);
};
export const remove = async (req, res) => {
  await Vehicle.remove(req.params.id);
  res.sendStatus(204);
};
