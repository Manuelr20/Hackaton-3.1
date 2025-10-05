import React, { useState } from 'react';
import axios from 'axios';

const FormPage: React.FC = () => {
  const [data, setData] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/data', { data }, { headers: { Authorization: `Bearer ${token}` } });
      setMessage('Datos enviados correctamente');
      setData('');
    } catch (err: any) {
      setMessage('Error al enviar los datos');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Formulario de ingreso de datos</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Dato</label>
            <input type="text" className="form-control" value={data} onChange={e => setData(e.target.value)} required />
          </div>
          {message && <div className="alert alert-info">{message}</div>}
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
