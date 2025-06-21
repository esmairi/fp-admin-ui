import { login } from '@fastadm/services/auth.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/');
    } catch {
      alert('Login failed');
    }
  }

  return (
    <div className="flex justify-content-center align-items-center min-h-screen bg-gray-100 w-screen h-screen">
      <div className="surface-card p-4 shadow-2 border-round w-11 sm:w-8 md:w-5">
        <div className="bg-green-900 text-white text-center py-3 mb-3 border-round-top">
          <h1 className="m-0 text-xl font-normal">FastApi administration</h1>
        </div>

        <h2 className="text-900 text-lg mb-3 border-bottom-1 border-gray-300 pb-1">
          Log in
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-column gap-3">
          <div>
            <label
              htmlFor="username"
              className="block mb-1 font-medium text-900"
            >
              Username:
            </label>
            <InputText
              id="username"
              type="text"
              name="username"
              className="w-full p-2 border-1 border-gray-300 border-round"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-900"
            >
              Password:
            </label>
            <InputText
              id="password"
              type="password"
              name="password"
              className="w-full p-2 border-1 border-gray-300 border-round"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-right mt-2">
            <Button
              type="submit"
              rounded={false}
              className="bg-green-700 text-white px-4 py-2"
            >
              Log in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
