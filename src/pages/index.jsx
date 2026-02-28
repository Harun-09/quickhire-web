import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import { fetchJobs } from "../lib/api";

const CATEGORIES = ["Design", "Sales", "Marketing", "Finance", "Engineering"];

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [filters, setFilters] = useState({});

  const hasActiveFilters = useMemo(() => Object.keys(filters).length > 0, [filters]);

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      try {
        const data = await fetchJobs(filters);
        setJobs(Array.isArray(data) ? data : []);
      } catch {
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, [filters]);

  const applyFilters = (nextCategory = categoryInput) => {
    const nextFilters = {
      ...(searchInput.trim() ? { search: searchInput.trim() } : {}),
      ...(locationInput.trim() ? { location: locationInput.trim() } : {}),
      ...(nextCategory ? { category: nextCategory } : {}),
    };

    setCategoryInput(nextCategory);
    setFilters(nextFilters);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    applyFilters(categoryInput);
  };

  const handleClearFilters = () => {
    setSearchInput("");
    setLocationInput("");
    setCategoryInput("");
    setFilters({});
  };

  const handleCategoryCardClick = (categoryName) => {
    const nextCategory = categoryInput === categoryName ? "" : categoryName;
    applyFilters(nextCategory);
  };

  return (
    <div className="font-sans min-h-screen bg-white">
      <div className="relative bg-[#F8FAFF] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(30deg, #4640DE 2px, transparent 2px), linear-gradient(-30deg, #4640DE 2px, transparent 2px)",
            backgroundSize: "60px 104px",
          }}
        ></div>

        <Navbar />

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 pt-12 pb-28 relative z-10 flex flex-col xl:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-2xl pt-6 pb-10">
            <h1 className="text-navy text-5xl md:text-[72px] font-bold leading-[1.1] mb-8 tracking-tight">
              Discover <br />
              more than <br />
              <span className="text-primary relative inline-block whitespace-nowrap">
                5000+ Jobs
                <svg
                  className="absolute w-[110%] h-8 -bottom-3 -left-4 text-[#4640DE]"
                  viewBox="0 0 320 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 10 Q 150 -5 310 12" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <path d="M12 18 Q 160 5 300 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-body-text text-xl md:text-[22px] leading-relaxed mb-10 max-w-[550px]">
              Great platform for job seekers who want to reach new career heights.
            </p>

            <form
              onSubmit={handleSearch}
              className="bg-white p-3 shadow-[0_20px_60px_-15px_rgba(70,64,222,0.15)] rounded-sm max-w-[860px]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_auto] gap-3">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Job title or keyword"
                  className="w-full px-4 py-3 text-base outline-none text-navy border border-gray-200 rounded-sm"
                />
                <input
                  type="text"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  placeholder="Location"
                  className="w-full px-4 py-3 text-base outline-none text-navy border border-gray-200 rounded-sm"
                />
                <select
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                  className="w-full px-4 py-3 text-base outline-none text-navy border border-gray-200 rounded-sm bg-white"
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="bg-[#4640DE] text-white px-8 py-3 font-bold rounded-sm text-base whitespace-nowrap hover:opacity-90 transition-opacity"
                >
                  Search
                </button>
              </div>

              {hasActiveFilters && (
                <div className="mt-3 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-sm text-muted-text">
                    Active filters: {Object.entries(filters).map(([key, value]) => `${key}: ${value}`).join(" | ")}
                  </p>
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="text-sm font-bold text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </form>

            <p className="text-muted-text mt-6 text-base">
              Popular: <span className="text-navy font-bold">UI Designer, UX Researcher, Android, Admin</span>
            </p>
          </div>

          <div className="hidden lg:flex flex-1 relative h-full items-end justify-center z-20">
            <img
              src="/images/hero-boy.png"
              alt="Confident job seeker"
              className="w-auto h-[680px] object-contain absolute bottom-[-120px] right-[-40px]"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop";
                e.target.style.objectFit = "cover";
                e.target.style.borderRadius = "50%";
                e.target.style.height = "420px";
                e.target.style.width = "420px";
                e.target.style.bottom = "0";
                e.target.style.right = "0";
              }}
            />
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-[250px] bg-white z-10"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        ></div>
      </div>

      <main>
        <section className="bg-white px-6 md:px-10 xl:px-16 pt-8 pb-20 border-b border-gray-100 relative z-20">
          <div className="max-w-7xl mx-auto">
            <p className="text-gray-400 font-medium mb-10">Companies we helped grow</p>
            <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="/images/vodafone.png" alt="Vodafone" className="h-8 object-contain" />
              <img src="/images/intel.png" alt="Intel" className="h-10 object-contain" />
              <img src="/images/tesla.png" alt="Tesla" className="h-6 object-contain" />
              <img src="/images/amd.png" alt="AMD" className="h-8 object-contain" />
              <span className="text-3xl font-serif font-bold tracking-tight text-gray-500">Talkit</span>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 xl:px-16 py-20 max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-navy text-4xl font-bold">
              Explore by <span className="text-[#4640DE]">category</span>
            </h2>
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-[#4640DE] font-bold text-lg underline decoration-2 underline-offset-8"
            >
              Show all jobs
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {CATEGORIES.map((category) => {
              const active = categoryInput === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryCardClick(category)}
                  className={`p-8 border border-gray-100 rounded-sm text-left transition-all shadow-sm ${
                    active
                      ? "bg-[#4640DE] text-white shadow-2xl shadow-[#4640DE]/20"
                      : "bg-white hover:bg-[#4640DE] hover:text-white hover:shadow-2xl hover:shadow-[#4640DE]/20"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 font-bold text-xl ${
                      active ? "bg-white text-[#4640DE]" : "bg-[#4640DE]/10 text-[#4640DE]"
                    }`}
                  >
                    {category[0]}
                  </div>
                  <h3 className="font-bold text-2xl mb-2">{category}</h3>
                  <p className={`text-sm ${active ? "text-white/80" : "text-muted-text"}`}>Tap to filter</p>
                </button>
              );
            })}
          </div>
        </section>

        <section className="px-6 md:px-10 xl:px-16 py-20 bg-gray-50/50">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-navy text-4xl font-bold">
                Featured <span className="text-[#4640DE]">jobs</span>
              </h2>
              <p className="text-muted-text font-semibold">Showing {jobs.length} result(s)</p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-80 bg-gray-200 animate-pulse rounded-sm"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {jobs.slice(0, 4).map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="px-6 md:px-10 xl:px-16 py-20 max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-navy text-4xl font-bold">
              Latest <span className="text-[#4640DE]">jobs open</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} variant="horizontal" />
            ))}
            {jobs.length === 0 && !loading && (
              <p className="text-center py-20 text-muted-text italic text-xl">
                No jobs found for the selected filters.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
