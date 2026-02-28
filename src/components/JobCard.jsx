import { Link } from "react-router-dom";

export default function JobCard({ job, variant = "vertical" }) {
  if (variant === "horizontal") {
    return (
      <div className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-sm hover:shadow-md transition-shadow">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center font-bold text-navy border border-gray-100 text-xl">
            {job.company?.[0]}
          </div>
          <div>
            <h3 className="text-navy font-bold text-lg">{job.title}</h3>
            <div className="flex gap-2 text-muted-text text-sm mt-1">
              <span>{job.company}</span>
              <span>|</span>
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-tag-green/10 text-tag-green rounded-full text-xs font-bold">
            {job.type}
          </span>
          <div className="h-8 w-[1px] bg-gray-100 mx-2"></div>
          <Link
            to={`/jobs/${job.id}`}
            className="bg-primary text-white px-6 py-2 rounded-sm font-bold text-sm"
          >
            Apply
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white border border-gray-100 rounded-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center font-bold text-navy border border-gray-100 text-xl mb-4">
        {job.company?.[0]}
      </div>
      <h3 className="text-navy font-bold text-lg mb-1">{job.title}</h3>
      <p className="text-muted-text text-sm mb-4">
        {job.company} | {job.location}
      </p>

      <div className="flex gap-2 mb-6">
        <span className="px-3 py-1 bg-tag-green/10 text-tag-green rounded-full text-xs font-bold">
          {job.type}
        </span>
        <span className="px-3 py-1 bg-tag-orange/10 text-tag-orange rounded-full text-xs font-bold">
          {job.category}
        </span>
      </div>

      <Link
        to={`/jobs/${job.id}`}
        className="block text-center w-full bg-primary text-white px-6 py-3 rounded-sm font-bold"
      >
        View Details
      </Link>
    </div>
  );
}
