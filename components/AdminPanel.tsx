
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc, Timestamp } from 'firebase/firestore';

interface Submission {
  id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  subject: string;
  message: string;
  status: 'new' | 'read';
  createdAt: Timestamp;
}

const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  const ADMIN_PASSWORD = 'AN-Admin1';

  useEffect(() => {
    if (!isAuthenticated) return;

    const q = query(collection(db, 'submissions'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Submission[];
      setSubmissions(docs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const markAsRead = async (id: string) => {
    try {
      await updateDoc(doc(db, 'submissions', id), { status: 'read' });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const deleteSubmission = async (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este mensaje?')) {
      try {
        await deleteDoc(doc(db, 'submissions', id));
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
          <div className="text-center mb-8">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2FAedificia%20Nobile%20logo.png?alt=media" 
              alt="Logo" 
              className="h-20 mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-brand-dark">Panel de Control</h1>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b-2 border-gray-300 focus:border-brand-gold py-2 outline-none transition-colors"
              autoFocus
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-brand-dark text-white font-bold py-3 hover:bg-opacity-90 transition-all rounded"
          >
            Acceder
          </button>
        </form>
      </div>
    );
  }

  const newMessagesCount = submissions.filter(s => s.status === 'new').length;

  return (
    <div className="min-h-screen bg-brand-light pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-brand-dark">Gestión de Mensajes</h1>
            <p className="text-gray-500 mt-2">Bienvenido al panel de administración de Aedificia Nobile.</p>
          </div>
          <div className="bg-brand-gold text-white px-6 py-3 rounded-full font-bold shadow-lg">
            {newMessagesCount} Mensajes nuevos
          </div>
        </header>

        {loading ? (
          <div className="text-center py-20">Cargando mensajes...</div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg shadow border border-gray-200">
            <p className="text-gray-400 italic">No hay mensajes todavía.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {submissions.map((sub) => (
              <div 
                key={sub.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 transition-all duration-300 ${sub.status === 'new' ? 'border-brand-gold' : 'border-gray-300 opacity-80'}`}
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark">
                        {sub.name} {sub.surname}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {sub.createdAt?.toDate().toLocaleString() || 'Sin fecha'}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {sub.status === 'new' && (
                        <button 
                          onClick={() => markAsRead(sub.id)}
                          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded transition-colors"
                        >
                          Marcar como leído
                        </button>
                      )}
                      <button 
                        onClick={() => deleteSubmission(sub.id)}
                        className="text-xs bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1 rounded transition-colors"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6 text-sm text-gray-700">
                    <p><strong>Email:</strong> <a href={`mailto:${sub.email}`} className="text-brand-gold hover:underline">{sub.email}</a></p>
                    <p><strong>Teléfono:</strong> {sub.phone || 'N/A'}</p>
                    <p><strong>Asunto:</strong> {sub.subject}</p>
                    <p><strong>Dirección:</strong> {sub.address || 'N/A'}</p>
                  </div>

                  <div className="bg-brand-light p-4 rounded border border-gray-200">
                    <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                      {sub.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
