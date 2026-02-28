import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { fetchJobs, createJob, deleteJob } from '../../lib/api';

export default function AdminDashboard() {
    const [jobs, setJobs] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: '', company: '', location: '', category: 'Design',
        type: 'Full-time', salary_range: '', description: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = () => {
        fetchJobs().then(data => {
            setJobs(Array.isArray(data) ? data : []);
            setLoading(false);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createJob(formData);
        setFormData({ title: '', company: '', location: '', category: 'Design', type: 'Full-time', salary_range: '', description: '' });
        setShowForm(false);
        loadJobs();
    };

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this job?')) {
            await deleteJob(id);
            loadJobs();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            <main className="px-16 py-12 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold text-navy">Admin <span className="text-primary">Dashboard</span></h1>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-primary text-white px-6 py-2 rounded-sm font-bold"
                    >
                        {showForm ? 'Cancel' : 'Post New Job'}
                    </button>
                </div>

                {showForm && (
                    <div className="bg-white p-8 border border-gray-100 rounded-sm mb-12 max-w-2xl">
                        <h2 className="text-2xl font-bold text-navy mb-6">Create Job Listing</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    placeholder="Job Title" required
                                    className="p-3 border rounded-sm outline-none"
                                    value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })}
                                />
                                <input
                                    placeholder="Company Name" required
                                    className="p-3 border rounded-sm outline-none"
                                    value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    placeholder="Location" required
                                    className="p-3 border rounded-sm outline-none"
                                    value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })}
                                />
                                <select
                                    className="p-3 border rounded-sm outline-none"
                                    value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option>Design</option>
                                    <option>Sales</option>
                                    <option>Marketing</option>
                                    <option>Finance</option>
                                    <option>Engineering</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <select
                                    className="p-3 border rounded-sm outline-none"
                                    value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })}
                                >
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Contract</option>
                                </select>
                                <input
                                    placeholder="Salary Range (optional)"
                                    className="p-3 border rounded-sm outline-none"
                                    value={formData.salary_range} onChange={e => setFormData({ ...formData, salary_range: e.target.value })}
                                />
                            </div>
                            <textarea
                                placeholder="Job Description" rows="5" required
                                className="w-full p-3 border rounded-sm outline-none"
                                value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })}
                            />
                            <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-sm">Create Job Listing</button>
                        </form>
                    </div>
                )}

                <div className="bg-white border border-gray-100 rounded-sm overflow-hidden text-navy">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100 font-bold">
                            <tr>
                                <th className="p-4">Job Title</th>
                                <th className="p-4">Company</th>
                                <th className="p-4">Location</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {jobs.map(job => (
                                <tr key={job.id}>
                                    <td className="p-4 font-bold">{job.title}</td>
                                    <td className="p-4">{job.company}</td>
                                    <td className="p-4">{job.location}</td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => handleDelete(job.id)}
                                            className="text-red-500 font-bold hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {jobs.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="p-10 text-center text-muted-text italic">No jobs posted yet.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
