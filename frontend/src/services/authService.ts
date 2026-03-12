import { api } from "@/lib/api";

export const authService = {
  async register(data: any) {
    const response = await api.post("/auth/register", data);
    return response.data;
  },
};
