const BASE_URL = '/api'; // Proxy Vite vers http://localhost:3000

const api = {
  _fetch: async (method, endpoint, body = null) => {
    const options = {
      method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) options.body = JSON.stringify(body);

    const res = await fetch(BASE_URL + endpoint, options);
    const text = await res.text();
    let data = null;

    if (text) {
      try {
        data = JSON.parse(text);
      } catch (error) {
        data = text;
      }
    }

    if ((res.status === 401 || res.status === 403) && typeof auth !== 'undefined') {
      auth.clearSession();
      navigate('#/login');
    }

    if (!res.ok) {
      return data || { error: `Erreur ${res.status}` };
    }

    return data;
  },

  get: (endpoint) => api._fetch('GET', endpoint),
  post: (endpoint, body) => api._fetch('POST', endpoint, body),
  put: (endpoint, body) => api._fetch('PUT', endpoint, body),
  patch: (endpoint, body) => api._fetch('PATCH', endpoint, body),
  delete: (endpoint) => api._fetch('DELETE', endpoint),

  // Authentification
  signInSchool: (data) => api.post('/auth/sign-in/school', data),
  signUpSchool: (data) => api.post('/auth/sign-up/school', data),
  signInStudent: (data) => api.post('/auth/sign-in/student', data),
  signUpStudent: (data) => api.post('/auth/sign-up/student', data),
  signInTeacher: (data) => api.post('/auth/sign-in/teacher', data),
  signUpTeacher: (data) => api.post('/auth/sign-up/teacher', data),
  signInParent: (data) => api.post('/auth/sign-in/parent', data),
  signUpParent: (data) => api.post('/auth/sign-up/parent', data),
  getMe: () => api.get('/auth/me'),
  logout: () => api.post('/auth/logout'),

  // Routes metier
  getEleves: () => api.get('/eleves'),
  getEleve: (id) => api.get(`/eleves/${id}`),
  createEleve: (data) => api.post('/auth/sign-up/student', data),
  updateEleve: (id, data) => api.patch(`/eleves/${id}`, data),
  deleteEleve: (id) => api.delete(`/eleves/${id}`),
  assignEleveClasse: (id, classeId) => api.post(`/eleves/${id}/classe/${classeId}`),

  getClasses: () => api.get('/classe'),
  getClasse: (id) => api.get(`/classe/${id}`),
  createClasse: (data) => api.post('/classe', data),
  updateClasse: (id, data) => api.patch(`/classe/${id}`, data),
  deleteClasse: (id) => api.delete(`/classe/${id}`),

  getNotes: (eleveId) => api.get(`/notes/eleve/${eleveId}`),
  getAllNotes: () => api.get('/notes'),
  createNote: (data) => api.post('/notes', data),
  createNotesBulk: (data) => api.post('/notes/bulk', data),
  updateNote: (id, data) => api.patch(`/notes/${id}`, data),
  deleteNote: (id) => api.delete(`/notes/${id}`),

  getEvaluations: () => api.get('/evaluations'),
  createEvaluation: (data) => api.post('/evaluations', data),
  updateEvaluation: (id, data) => api.patch(`/evaluations/${id}`, data),
  deleteEvaluation: (id) => api.delete(`/evaluations/${id}`),

  getMatieres: () => api.get('/matieres'),
  createMatiere: (data) => api.post('/matieres', data),
  updateMatiere: (id, data) => api.patch(`/matieres/${id}`, data),
  deleteMatiere: (id) => api.delete(`/matieres/${id}`),

  getProfesseurs: () => api.get('/professeurs'),
  getProfesseur: (id) => api.get(`/professeurs/${id}`),
  createProfesseur: (data) => api.post('/auth/sign-up/teacher', data),
  updateProfesseur: (id, data) => api.patch(`/professeurs/${id}`, data),
  assignProfesseurMatiere: (id, matiereId) => api.post(`/professeurs/${id}/matieres/${matiereId}`),
  removeProfesseurMatiere: (id, matiereId) => api.delete(`/professeurs/${id}/matieres/${matiereId}`),

  getParents: () => api.get('/parents'),
  getParent: (id) => api.get(`/parents/${id}`),
  updateParent: (id, data) => api.patch(`/parents/${id}`, data),
  assignParentEleve: (id, eleveId) => api.post(`/parents/${id}/enfants/${eleveId}`),
  removeParentEleve: (id, eleveId) => api.delete(`/parents/${id}/enfants/${eleveId}`),

  getEcole: () => api.get('/ecole'),
  createEcole: (data) => api.post('/ecole', data),
  updateEcole: (id, data) => api.patch(`/ecole/${id}`, data),
  deleteEcole: (id) => api.delete(`/ecole/${id}`),
};
