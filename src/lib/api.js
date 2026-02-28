const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8000/api";

export const fetchJobs = async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_URL}/jobs?${query}`);
    return res.json();
};

export const fetchJobById = async (id) => {
    const res = await fetch(`${API_URL}/jobs/${id}`);
    return res.json();
};

export const submitApplication = async (data) => {
    const res = await fetch(`${API_URL}/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const createJob = async (data) => {
    const res = await fetch(`${API_URL}/jobs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const deleteJob = async (id) => {
    const res = await fetch(`${API_URL}/jobs/${id}`, {
        method: 'DELETE',
    });
    return res.json();
};
