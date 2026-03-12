
import axios from 'axios';


const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export const ubicacionService = {
  getAll: async (token: string) => {
    const response = await axios.get(`${API_URL}/admin/ubicaciones`, { 
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  }
};