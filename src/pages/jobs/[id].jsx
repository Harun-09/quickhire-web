import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { fetchJobById, submitApplication } from "../../lib/api";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    resume_url: "",
    cover_letter: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!id) {
      return;
    }

    fetchJobById(id)
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await submitApplication({ ...formData, job_id: id });
      if (res.errors) {
        setMessage(`Error: ${Object.values(res.errors).flat().join(", ")}`);
      } else {
        setMessage("Application submitted successfully!");
        setFormData({
          full_name: "",
          email: "",
          resume_url: "",
          cover_letter: "",
        });
      }
    } catch {
      setMessage("Failed to submit application.");
    }

    setSubmitting(false);
  };

  if (loading) {
    return <div className="p-20 text-center text-navy font-bold">Loading...</div>;
  }

  if (!job) {
    return <div className="p-20 text-center text-navy font-bold">Job not found</div>;
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <main className="px-16 py-16 flex gap-12 max-w-7xl mx-auto">
        <div className="flex-1">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-16 h-16 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-2xl font-bold text-navy">
              {job.company?.[0]}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-navy mb-2">{job.title}</h1>
              <p className="text-body-text text-lg">
                {job.company} | {job.location} | {job.type}
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-navy text-2xl font-bold mb-4">Description</h2>
            <p className="text-body-text leading-relaxed mb-8">{job.description}</p>

            <h2 className="text-navy text-2xl font-bold mb-4">Responsibilities</h2>
            <p className="text-body-text leading-relaxed mb-8 whitespace-pre-line">
              {job.responsibilities || "Not specified"}
            </p>

            <h2 className="text-navy text-2xl font-bold mb-4">Requirements</h2>
            <p className="text-body-text leading-relaxed mb-8 whitespace-pre-line">
              {job.requirements || "Not specified"}
            </p>
          </div>
        </div>

        <div className="w-[450px]">
          <div className="p-8 border border-gray-100 bg-zinc-50 rounded-sm sticky top-10">
            <h2 className="text-2xl font-bold text-navy mb-6">Apply Now</h2>

            {message && (
              <div
                className={`p-4 mb-6 rounded text-sm font-bold ${
                  message.includes("Error")
                    ? "bg-red-50 text-red-600"
                    : "bg-green-50 text-green-600"
                }`}
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-navy font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full p-3 bg-white border border-gray-200 rounded-sm outline-none focus:border-primary"
                  value={formData.full_name}
                  onChange={(e) =>
                    setFormData({ ...formData, full_name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-navy font-bold mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full p-3 bg-white border border-gray-200 rounded-sm outline-none focus:border-primary"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-navy font-bold mb-2">Resume URL</label>
                <input
                  type="url"
                  required
                  placeholder="https://google.drive/my-resume"
                  className="w-full p-3 bg-white border border-gray-200 rounded-sm outline-none focus:border-primary"
                  value={formData.resume_url}
                  onChange={(e) =>
                    setFormData({ ...formData, resume_url: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-navy font-bold mb-2">Cover Note</label>
                <textarea
                  rows="4"
                  placeholder="Tell us why you're a good fit..."
                  className="w-full p-3 bg-white border border-gray-200 rounded-sm outline-none focus:border-primary"
                  value={formData.cover_letter}
                  onChange={(e) =>
                    setFormData({ ...formData, cover_letter: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-white font-bold py-4 rounded-sm hover:opacity-95 transition-opacity disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
