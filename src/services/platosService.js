import axios from 'axios';
const API_URL = 'http://localhost:3000/api/platos';

export const getPlatos = () => axios.get(API_URL);
export const getPlato = (id) => axios.get(`${API_URL}/${id}`);
export const createPlato = (plato) => axios.post(API_URL, plato);
export const updatePlato = (id, plato) => axios.put(`${API_URL}/${id}`, plato);
export const deletePlato = (id) => axios.delete(`${API_URL}/${id}`);
