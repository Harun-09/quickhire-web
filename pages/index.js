import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import { fetchJobs } from '../lib/api';

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs().then(data => {
      setJobs(Array.isArray(data) ? data : []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-white px-16 py-24 border-b border-gray-100 flex flex-col xl:flex-row items-center justify-between gap-16">
          <div className="flex-1 max-w-3xl">
            <h1 className="text-navy text-6xl md:text-8xl font-bold leading-tight mb-8">
              Discover <br />
              <span className="text-primary">more than 5000+</span> Jobs
            </h1>
            <p className="text-body-text text-xl md:text-2xl mb-12 max-w-2xl">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>

            {/* Simple Search Mockup */}
            <div className="flex bg-white p-3 shadow-2xl shadow-primary/10 rounded-sm border border-gray-100 w-full max-w-4xl">
              <div className="flex-1 px-6 border-r border-gray-100 flex items-center gap-4">
                <span className="text-gray-400 text-xl">🔍</span>
                <input type="text" placeholder="Job title or keyword" className="w-full outline-none text-navy font-medium text-lg" />
              </div>
              <div className="flex-1 px-6 flex items-center gap-4 overflow-hidden">
                <span className="text-gray-400 text-xl">📍</span>
                <input type="text" placeholder="Florence, Italy" className="w-full outline-none text-navy font-medium text-lg" />
              </div>
              <button className="bg-primary text-white px-10 md:px-14 py-6 font-bold rounded-sm hover:bg-navy transition-colors whitespace-nowrap text-lg">Search</button>
            </div>

            <p className="text-muted-text mt-10 text-lg">
              Popular: <span className="text-navy font-bold">UI Designer, UX Researcher, Android, Admin</span>
            </p>
          </div>

          {/* Hero Illustration Mockup */}
          <div className="hidden xl:flex relative flex-1 items-center justify-center py-10">
            <div className="w-[550px] h-[550px] bg-primary/5 rounded-full relative overflow-hidden border-[16px] border-white shadow-2xl flex items-center justify-center">
              <span className="text-primary/5 text-[300px] font-black italic select-none -rotate-12">Q</span>
            </div>
            {/* Floating Badges */}
            <div className="absolute top-10 -left-12 bg-white p-6 shadow-2xl rounded-2xl border border-gray-50 flex items-center gap-5 animate-bounce duration-[4000ms]">
              <div className="w-14 h-14 bg-tag-green rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-tag-green/20">✓</div>
              <div>
                <p className="text-xs text-muted-text font-bold uppercase tracking-wider mb-1">Job Seeker</p>
                <p className="text-navy font-bold text-lg">Naimur Rahman</p>
              </div>
            </div>
            <div className="absolute bottom-20 -right-8 bg-white p-6 shadow-2xl rounded-2xl border border-gray-100 animate-pulse duration-[5000ms]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-primary font-bold text-2xl tracking-tighter">5,000+</p>
              </div>
              <p className="text-xs text-muted-text font-medium uppercase tracking-widest pl-4">Jobs Posted Daily</p>
            </div>
          </div>
        </section>

        {/* Categories Section (Simplified) */}
        <section className="px-16 py-20">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-navy text-4xl font-bold">Explore by <span className="text-primary">category</span></h2>
            <a href="#" className="text-primary font-bold text-lg flex items-center gap-2 underline decoration-2 underline-offset-8">Show all jobs →</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Design', color: 'bg-primary' },
              { name: 'Sales', color: 'bg-tag-orange' },
              { name: 'Marketing', color: 'bg-tag-green' },
              { name: 'Finance', color: 'bg-blue-400' }
            ].map(cat => (
              <div key={cat.name} className="p-10 bg-white border border-gray-100 rounded-sm hover:bg-primary group transition-all cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-primary/20">
                <div className={`w-16 h-16 ${cat.color} bg-opacity-10 text-primary group-hover:bg-white flex items-center justify-center mb-8 transition-colors rounded-lg font-bold text-2xl`}>
                  {cat.name[0]}
                </div>
                <h3 className="text-navy font-bold text-3xl mb-3 group-hover:text-white">{cat.name}</h3>
                <p className="text-muted-text text-lg group-hover:text-white/80 font-medium">150+ Jobs Available</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="px-16 py-20 bg-gray-50/50">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-navy text-4xl font-bold">Featured <span className="text-primary">jobs</span></h2>
            <a href="#" className="text-primary font-bold text-lg flex items-center gap-2 underline decoration-2 underline-offset-8">Show all jobs →</a>
          </div>

          {loading ? (
            <div className="grid grid-cols-4 gap-8">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-80 bg-gray-200 animate-pulse rounded-sm"></div>)}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {jobs.slice(0, 4).map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </section>

        {/* Latest Jobs Section */}
        <section className="px-16 py-20">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-navy text-4xl font-bold">Latest <span className="text-primary">jobs open</span></h2>
            <a href="#" className="text-primary font-bold text-lg flex items-center gap-2 underline decoration-2 underline-offset-8">Show all jobs →</a>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobs.map(job => (
              <JobCard key={job.id} job={job} variant="horizontal" />
            ))}
            {jobs.length === 0 && !loading && <p className="text-center py-20 text-muted-text italic text-xl">No jobs found. Try seeding the database.</p>}
          </div>
        </section>
      </main>
    </div>
  );
}
