// Centralized API client for all API calls
export const api = {
    async _fetch(method: string, endpoint: string, body?: any) {
        const options: RequestInit = {
            method,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (body) options.body = JSON.stringify(body);

        const res = await fetch(`/api${endpoint}`, options);
        let data;

        try {
            data = await res.json();
        } catch {
            data = await res.text();
        }

        if (!res.ok) {
            // Ne jamais faire window.location.href ici — ça cause une boucle infinie
            // Les composants gèrent eux-mêmes les erreurs 401/403
            return { error: data?.error || data || `Erreur ${res.status}`, status: res.status };
        }

        return data;
    },

    // Generic methods
    get: (endpoint: string) => api._fetch('GET', endpoint),
    post: (endpoint: string, body?: any) => api._fetch('POST', endpoint, body),
    put: (endpoint: string, body?: any) => api._fetch('PUT', endpoint, body),
    patch: (endpoint: string, body?: any) => api._fetch('PATCH', endpoint, body),
    delete: (endpoint: string) => api._fetch('DELETE', endpoint),

    // Auth endpoints
    signInSchool: (data: any) => api.post('/auth/sign-in/school', data),
    signUpSchool: (data: any) => api.post('/auth/sign-up/school', data),
    signInStudent: (data: any) => api.post('/auth/sign-in/student', data),
    signUpStudent: (data: any) => api.post('/auth/sign-up/student', data),
    signInTeacher: (data: any) => api.post('/auth/sign-in/teacher', data),
    signUpTeacher: (data: any) => api.post('/auth/sign-up/teacher', data),
    signInParent: (data: any) => api.post('/auth/sign-in/parent', data),
    signUpParent: (data: any) => api.post('/auth/sign-up/parent', data),
    getMe: () => api.get('/auth/me'),
    logout: () => api.post('/auth/logout'),

    // Eleves endpoints
    getEleves: () => api.get('/eleves'),
    getEleve: (id: string) => api.get(`/eleves/${id}`),
    createEleve: (data: any) => api.post('/auth/sign-up/student', data),
    updateEleve: (id: string, data: any) => api.patch(`/eleves/${id}`, data),
    deleteEleve: (id: string) => api.delete(`/eleves/${id}`),
    assignEleveClasse: (id: string, classeId: string) => api.post(`/eleves/${id}/classe/${classeId}`),

    // Classes endpoints
    getClasses: () => api.get('/classe'),
    getClasse: (id: string) => api.get(`/classe/${id}`),
    createClasse: (data: any) => api.post('/classe', data),
    updateClasse: (id: string, data: any) => api.patch(`/classe/${id}`, data),
    deleteClasse: (id: string) => api.delete(`/classe/${id}`),

    // Notes endpoints
    getNotes: (eleveId?: string) => eleveId ? api.get(`/notes/eleve/${eleveId}`) : api.get('/notes'),
    getNotesByEleve: (eleveId: string) => api.get(`/notes/eleve/${eleveId}`),
    getAllNotes: () => api.get('/notes'),
    createNote: (data: any) => api.post('/notes', data),
    createNotesBulk: (data: any) => api.post('/notes/bulk', data),
    updateNote: (id: string, data: any) => api.patch(`/notes/${id}`, data),
    deleteNote: (id: string) => api.delete(`/notes/${id}`),

    // Evaluations endpoints
    getEvaluations: () => api.get('/evaluations'),
    createEvaluation: (data: any) => api.post('/evaluations', data),
    updateEvaluation: (id: string, data: any) => api.patch(`/evaluations/${id}`, data),
    deleteEvaluation: (id: string) => api.delete(`/evaluations/${id}`),

    // Matieres endpoints
    getMatieres: () => api.get('/matieres'),
    createMatiere: (data: any) => api.post('/matieres', data),
    updateMatiere: (id: string, data: any) => api.patch(`/matieres/${id}`, data),
    deleteMatiere: (id: string) => api.delete(`/matieres/${id}`),

    // Bulletins endpoints
    getBulletins: () => api.get('/bulletins'),
    getBulletin: (id: string) => api.get(`/bulletins/${id}`),

    // Professeurs endpoints
    getProfesseurs: () => api.get('/professeurs'),
    getProfesseur: (id: string) => api.get(`/professeurs/${id}`),
    updateProfesseur: (id: string, data: any) => api.patch(`/professeurs/${id}`, data),
    deleteProfesseur: (id: string) => api.delete(`/professeurs/${id}`),
    assignMatiere: (profId: string, matiereId: string) => api.post(`/professeurs/${profId}/matieres/${matiereId}`),
    removeMatiere: (profId: string, matiereId: string) => api.delete(`/professeurs/${profId}/matieres/${matiereId}`),
    assignClasse: (profId: string, classeId: string) => api.post(`/professeurs/${profId}/classes/${classeId}`),
    removeClasse: (profId: string, classeId: string) => api.delete(`/professeurs/${profId}/classes/${classeId}`),

    // Emploi du temps endpoints
    getEmploiTemps: () => api.get('/emploi-temps'),
    getEmploiTempsClasse: (classeId: string) => api.get(`/emploi-temps/classe/${classeId}`),
    getEmploiTempsProfesseur: (professeurId: string) => api.get(`/emploi-temps/professeur/${professeurId}`),
    createEmploiTemps: (data: any) => api.post('/emploi-temps', data),
    updateEmploiTemps: (id: string, data: any) => api.patch(`/emploi-temps/${id}`, data),
    deleteEmploiTemps: (id: string) => api.delete(`/emploi-temps/${id}`),

    // Communication endpoints
    getCommunications: () => api.get('/communications'),
    sendCommunication: (data: any) => api.post('/communications', data),

    // Frais scolaires endpoints
    getFrais: () => api.get('/frais-scolaire'),
    getFraisEleve: (eleveId: string) => api.get(`/frais-scolaire/eleve/${eleveId}`),
    getFraisStats: () => api.get('/frais-scolaire/stats'),
    createFrais: (data: any) => api.post('/frais-scolaire', data),
    updateFrais: (id: string, data: any) => api.patch(`/frais-scolaire/${id}`, data),
    deleteFrais: (id: string) => api.delete(`/frais-scolaire/${id}`),
    addPaiement: (fraisId: string, data: any) => api.post(`/frais-scolaire/${fraisId}/paiement`, data),
    deletePaiement: (id: string) => api.delete(`/paiement/${id}`),
};