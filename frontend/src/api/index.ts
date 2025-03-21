import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export const getTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks/`);
    return response.data;
};

export const createTask = async (title: string) => {
    const response = await axios.post(`${API_URL}/tasks/`, { title });
    return response.data;
};

export const deleteTask = async (taskId: number) => {
    await axios.delete(`${API_URL}/tasks/${taskId}`);
};