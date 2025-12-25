
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

  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2FAedificia%20Nobile%20logo.png?alt=media&token=7ecc00e6-28ed-4897-86b0-d29a96c0b141";
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
        <form onSubmit={handleLogin} className="bg-white p-10 rounded-sm shadow-2xl w-full max-w-md border-t-4 border-brand-gold">
          <div className="text-center mb-10">
            <img 
              src={logoUrl} 
              alt="Logo" 
              className="h-24 mx-auto mb-6"
            />
            <h1 className="text-xl font-bold text-brand-dark uppercase tracking-widest">Admin Dashboard</h1>
            <p className="text-gray-400 text-xs mt-2 uppercase tracking-tighter">Secure Login Required</p>
          </div>
          <div className="mb-8">
            <label className="block text-gray-500 text-[10px] font-bold mb-2 uppercase tracking-widest">Access Key</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-200 focus:border-brand-gold py-3 outline-none transition-colors text-center font-mono tracking-widest"
              autoFocus
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-brand-dark text-white font-bold py-4 hover:bg-brand-gold transition-all rounded-sm uppercase tracking-widest text-xs"
          >
            Authenticate
          </button>
        </form>
      </div>
    );
  }

  const newMessagesCount = submissions.filter(s => s.status === 'new').length;

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-gray-200 pb-10">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img src={logoUrl} alt="Logo" className="h-12" />
              <div className="h-8 w-[1px] bg-gray-200"></div>
              <h1 className="text-2xl font-bold text-brand-dark uppercase tracking-widest">Inbox</h1>
            </div>
            <p className="text-gray-400 text-sm font-light uppercase tracking-widest">Managing project inquiries & leads</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-brand-gold text-white px-8 py-3 rounded-full text-xs font-bold shadow-lg uppercase tracking-widest">
              {newMessagesCount} New Inquiries
            </div>
          </div>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 text-gray-400 gap-4">
             <div className="w-8 h-8 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
             <p className="uppercase tracking-widest text-xs font-bold">Synchronizing...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-sm shadow-sm border border-gray-100">
            <p className="text-gray-400 italic uppercase tracking-widest text-xs">No project submissions yet.</p>
          </div>
        ) : (
          <div className="grid gap-8">
            {submissions.map((sub) => (
              <div 
                key={sub.id} 
                className={`bg-white rounded-sm shadow-sm overflow-hidden border-l-4 transition-all duration-300 hover:shadow-md ${sub.status === 'new' ? 'border-brand-gold shadow-brand-gold/5' : 'border-gray-200 opacity-90'}`}
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between mb-8 gap-4 border-b border-gray-50 pb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-dark mb-1">
                        {sub.name} {sub.surname}
                      </h3>
                      <p className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.2em]">
                        Received: {sub.createdAt?.toDate().toLocaleString('es-ES', { day:'2-digit', month:'long', year:'numeric', hour:'2-digit', minute:'2-digit' }) || 'Pending'}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      {sub.status === 'new' && (
                        <button 
                          onClick={() => markAsRead(sub.id)}
                          className="text-[10px] uppercase tracking-widest bg-brand-light hover:bg-brand-gold hover:text-white text-brand-gold px-5 py-2 rounded-sm transition-all font-bold border border-brand-gold/20"
                        >
                          Mark Processed
                        </button>
                      )}
                      <button 
                        onClick={() => deleteSubmission(sub.id)}
                        className="text-[10px] uppercase tracking-widest bg-red-50 hover:bg-red-600 hover:text-white text-red-600 px-5 py-2 rounded-sm transition-all font-bold"
                      >
                        Archive
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-xs text-gray-500 uppercase tracking-widest">
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 mb-1">Email</p>
                      <a href={`mailto:${sub.email}`} className="text-brand-dark hover:text-brand-gold transition-colors font-bold lowercase tracking-normal">{sub.email}</a>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 mb-1">Phone</p>
                      <p className="text-brand-dark font-bold">{sub.phone || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 mb-1">Subject</p>
                      <p className="text-brand-dark font-bold">{sub.subject}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 mb-1">Location</p>
                      <p className="text-brand-dark font-bold truncate" title={sub.address}>{sub.address || '—'}</p>
                    </div>
                  </div>

                  <div className="bg-[#fcfcfc] p-8 rounded-sm border border-gray-100">
                    <p className="text-brand-dark text-sm leading-relaxed whitespace-pre-wrap font-light">
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
