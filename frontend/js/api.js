const BASE_URL = 'http://localhost:3000/api'; // ← tu changes juste ça quand tu passes en prod

const api = {
  // Méthode générique
  _fetch: async (method, endpoint, body = null) => {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(localStorage.getItem('token') && {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      }
    };
    if (body) options.body = JSON.stringify(body);

    const res = await fetch(BASE_URL + endpoint, options);

    // Token expiré → retour au login
    if (res.status === 401) { auth.logout(); return; }

    return res.json();
  },

  get:    (endpoint)       => api._fetch('GET',    endpoint),
  post:   (endpoint, body) => api._fetch('POST',   endpoint, body),
  put:    (endpoint, body) => api._fetch('PUT',    endpoint, body),
  delete: (endpoint)       => api._fetch('DELETE', endpoint),

  // Routes concrètes
  login:          (data)              => api.post('/auth/login', data),
  getEleves:      ()                  => api.get('/eleves'),
  getEleve:       (id)                => api.get(`/eleves/${id}`),
  getClasses:     ()                  => api.get('/classes'),
  getNotes:       (classeId, evalId)  => api.get(`/notes/${classeId}/${evalId}`),
  saveNotes:      (data)              => api.post('/notes', data),
  getBulletin:    (eleveId)           => api.get(`/bulletin/${eleveId}`),
};