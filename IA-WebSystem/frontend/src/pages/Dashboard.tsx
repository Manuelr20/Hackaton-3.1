
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [iaInput, setIaInput] = useState('');
  const [iaResult, setIaResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      setAuthError(false);
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No autenticado');
        const res = await axios.get('/api/data', { headers: { Authorization: `Bearer ${token}` } });
        setItems(res.data);
      } catch (err: any) {
        if (err.response && (err.response.status === 401 || err.message === 'No autenticado')) {
          setAuthError(true);
        } else {
          setError('No se pudieron cargar los datos');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleIa = async (e: React.FormEvent) => {
    e.preventDefault();
    setIaResult('');
    try {
      const res = await axios.post('/api/ia/analyze', { text: iaInput });
      setIaResult(res.data.result);
    } catch (err: any) {
      setIaResult('Error al consultar la IA');
    }
  };

  return (
    <div className="dashboard-hero animate__animated animate__fadeIn">
      <h2 className="mb-4">Panel de Control <span role="img" aria-label="dashboard">📊</span></h2>
      {loading && <div className="text-center my-5"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Cargando...</span></div></div>}
      {authError && (
        <div className="alert alert-warning text-center">
          Debes iniciar sesión para ver tus datos. <a href="/login" className="btn btn-sm btn-primary ms-2">Ir a Login</a>
        </div>
      )}
      {!loading && !authError && (
        <>
          <div className="row g-4 mb-4">
            <div className="col-md-4">
              <div className="card shadow h-100 border-info animate__animated animate__fadeInUp">
                <div className="card-body text-center">
                  <h5 className="card-title">Total de registros</h5>
                  <p className="display-4 text-info">{items.length}</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card shadow h-100 animate__animated animate__fadeInUp">
                <div className="card-body">
                  <h5 className="card-title">Tus datos</h5>
                  {items.length === 0 ? (
                    <p className="text-muted">No hay datos registrados aún.</p>
                  ) : (
                    <ul className="list-group list-group-flush">
                      {items.map(item => (
                        <li className="list-group-item" key={item.id}>
                          <span className="badge bg-info me-2">ID: {item.id}</span>
                          {item.data}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card p-4 shadow animate__animated animate__fadeInUp">
            <h4 className="mb-3">Asistente IA <span role="img" aria-label="robot">🤖</span></h4>
            <form onSubmit={handleIa} className="mb-2 row g-2 align-items-center">
              <div className="col-md-10">
                <input type="text" className="form-control form-control-lg" value={iaInput} onChange={e => setIaInput(e.target.value)} placeholder="Escribe tu texto para analizar..." required />
              </div>
              <div className="col-md-2 d-grid">
                <button className="btn btn-info btn-lg" type="submit">Analizar</button>
              </div>
            </form>
            {iaResult && (
              <div className="alert alert-success animate__animated animate__fadeInDown mt-3">
                {iaResult}
                {iaResult.includes('No tengo una respuesta') && (
                  <div className="mt-2">
                    <span className="fw-bold">¿No encontraste lo que buscas?</span> Visita la <a href="/help" className="alert-link">sección de Ayuda</a> para más información.
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default Dashboard;
