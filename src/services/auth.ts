import axios from 'axios';

export async function login(username: string, password: string): Promise<string> {
    const form = new URLSearchParams();
    form.append('username', username);
    form.append('password', password);

    const res = await axios.post('http://localhost:8000/login', form);
    localStorage.setItem('token', res.data.access_token);
    return res.data.access_token;
}

export function getToken(): string | null {
    return localStorage.getItem('token');
}

export function logout() {
    localStorage.removeItem('token');
}
