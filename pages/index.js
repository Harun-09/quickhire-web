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
    <div className="font-sans min-h-screen bg-white">
      {/* Top Wrapper for Navbar + Hero to share background */}
      <div className="relative bg-[#F8FAFF] overflow-hidden">
        {/* Subtle Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `linear-gradient(30deg, #4640DE 2px, transparent 2px), linear-gradient(-30deg, #4640DE 2px, transparent 2px)`,
          backgroundSize: '60px 104px'
        }}></div>

        <Navbar />

        <div className="max-w-[1600px] mx-auto px-16 pt-12 pb-32 relative z-10 flex flex-col xl:flex-row items-center justify-between">
          {/* Left Content (Text and Search) */}
          <div className="flex-1 max-w-2xl pt-10 pb-20">
            <h1 className="text-navy text-6xl md:text-[80px] font-bold leading-[1.1] mb-8 tracking-tight">
              Discover <br />
              more than <br />
              <span className="text-primary relative inline-block whitespace-nowrap">
                5000+ Jobs
                <svg className="absolute w-[110%] h-8 -bottom-3 -left-4 text-[#4640DE]" viewBox="0 0 320 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10 Q 150 -5 310 12" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <path d="M12 18 Q 160 5 300 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-body-text text-xl md:text-[22px] leading-relaxed mb-12 max-w-[550px]">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>

            {/* Exact Search Bar Mockup */}
            <div className="flex bg-white p-3 shadow-[0_20px_60px_-15px_rgba(70,64,222,0.15)] rounded-sm max-w-[700px] items-center">
              <div className="flex-1 px-4 flex items-center gap-3 border-r border-gray-100">
                <span className="text-gray-400 text-xl">🔍</span>
                <input type="text" placeholder="Job title or keyword" className="w-full text-lg outline-none text-navy placeholder:text-gray-400 font-medium bg-transparent" />
              </div>
              <div className="flex-1 px-4 flex items-center gap-3">
                <span className="text-gray-400 text-xl">📍</span>
                <input type="text" placeholder="Florence, Italy" className="w-full text-lg outline-none text-navy placeholder:text-navy font-medium bg-transparent" />
                <span className="text-gray-400 text-sm cursor-pointer">⌄</span>
              </div>
              <button className="bg-[#4640DE] text-white px-8 py-4 font-bold rounded-sm text-lg whitespace-nowrap hover:opacity-90 transition-opacity">
                Search my job
              </button>
            </div>

            <p className="text-muted-text mt-8 text-base">
              Popular : <span className="text-navy font-bold">UI Designer, UX Researcher, Android, Admin</span>
            </p>
          </div>

          {/* Right Image Boy */}
          <div className="hidden lg:flex flex-1 relative h-full items-end justify-center z-20">
            <img
              src="/images/hero-boy.png"
              alt="Confident job seeker pointing"
              className="w-auto h-[750px] object-contain absolute bottom-[-150px] right-[-50px]"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'; e.target.style.objectFit = 'cover'; e.target.style.borderRadius = '50%'; e.target.style.height = '500px'; e.target.style.width = '500px'; e.target.style.bottom = '0'; e.target.style.right = '0'; }}
            />
          </div>
        </div>

        {/* Angled White Cutout */}
        <div className="absolute bottom-0 left-0 w-full h-[250px] bg-white z-10" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}></div>
      </div>

      <main>
        {/* Companies Logos Section */}
        <section className="bg-white px-16 pt-8 pb-20 border-b border-gray-100 relative z-20">
          <div className="max-w-7xl mx-auto">
            <p className="text-gray-400 font-medium mb-10">Companies we helped grow</p>
            <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="/images/vodafone.png" alt="Vodafone" className="h-8 object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML += '<span class="text-2xl font-bold font-sans text-gray-500">vodafone</span>'; }} />
              <img src="/images/intel.png" alt="Intel" className="h-10 object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML += '<span class="text-3xl font-bold font-serif text-gray-500">intel</span>'; }} />
              <img src="/images/tesla.png" alt="Tesla" className="h-6 object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML += '<span class="text-2xl font-bold tracking-widest uppercase text-gray-500">Tesla</span>'; }} />
              <img src="/images/amd.png" alt="AMD" className="h-8 object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML += '<span class="text-3xl font-bold font-sans tracking-tight text-gray-500">AMD</span>'; }} />
              <span className="text-3xl font-serif font-bold tracking-tight text-gray-500">Talkit</span>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-16 py-20 max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-navy text-4xl font-bold">Explore by <span className="text-[#4640DE]">category</span></h2>
            <a href="#" className="text-[#4640DE] font-bold text-lg flex items-center gap-2 underline decoration-2 underline-offset-8">Show all jobs →</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Design', color: 'bg-[#4640DE]' },
              { name: 'Sales', color: 'bg-tag-orange' },
              { name: 'Marketing', color: 'bg-tag-green' },
              { name: 'Finance', color: 'bg-blue-400' }
            ].map(cat => (
              <div key={cat.name} className="p-10 bg-white border border-gray-100 rounded-sm hover:bg-[#4640DE] group transition-all cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-[#4640DE]/20">
                <div className={`w-16 h-16 ${cat.color} bg-opacity-10 text-[#4640DE] group-hover:bg-white flex items-center justify-center mb-8 transition-colors rounded-lg font-bold text-2xl`}>
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
          <div className="max-w-[1600px] mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-navy text-4xl font-bold">Featured <span className="text-[#4640DE]">jobs</span></h2>
              <a href="#" className="text-[#4640DE] font-bold text-lg flex items-center gap-2 underline decoration-2 underline-offset-8">Show all jobs →</a>
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
          </div>
        </section>

        {/* Latest Jobs Section */}
        <section className="px-16 py-20 max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-navy text-4xl font-bold">Latest <span className="text-[#4640DE]">jobs open</span></h2>
            <a href="#" className="text-[#4640DE] font-bold text-lg flex items-center gap-2 underline decoration-2 underline-offset-8">Show all jobs →</a>
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
