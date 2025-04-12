import axios from "axios";
import { Usuario } from "../types/api";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const getUsuarios = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    throw error;
  }
};

export const addUsuario = async (usuario: Usuario): Promise<Usuario> => {
  try {
    const response = await api.post<Usuario>("/users", usuario);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar usuário:", error);
    throw error;
  }
};

