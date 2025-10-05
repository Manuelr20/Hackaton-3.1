import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    try {
      await axios.post('/api/auth/register', { username, password });
      setMessage('Registro exitoso. Ahora puedes iniciar sesión.');
    } catch (err: any) {
      setMessage('Error en el registro');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          {message && <div className="alert alert-info">{message}</div>}
          <button type="submit" className="btn btn-success w-100">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
