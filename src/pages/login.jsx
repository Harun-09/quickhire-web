import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  useEffect(() => {
    document.title = "Login - QuickHire";
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-sans flex items-center justify-center p-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(30deg, #4640DE 2px, transparent 2px), linear-gradient(-30deg, #4640DE 2px, transparent 2px)",
          backgroundSize: "60px 104px",
        }}
      ></div>

      <div className="max-w-md w-full bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(70,64,222,0.15)] p-10 relative z-10 border border-gray-50">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full border-[6px] border-[#4640DE] flex items-center justify-center p-[2px]">
              <div className="w-4 h-4 bg-[#4640DE] rounded-full"></div>
            </div>
            <span className="text-navy text-3xl font-bold tracking-tight">
              QuickHire
            </span>
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-navy text-center mb-2">Welcome Back</h2>
        <p className="text-muted-text text-center mb-8 font-medium">
          Log in to your account to continue
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-navy font-bold mb-2 text-sm">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-200 p-4 rounded-sm outline-none focus:border-[#4640DE] transition-colors bg-gray-50/50 text-navy font-medium placeholder:text-gray-400"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-navy font-bold text-sm">Password</label>
              <a href="#" className="text-[#4640DE] text-sm font-bold hover:text-navy transition-colors">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-200 p-4 rounded-sm outline-none focus:border-[#4640DE] transition-colors bg-gray-50/50 text-navy font-medium placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="remember"
              className="w-5 h-5 accent-[#4640DE] rounded-sm cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="text-muted-text font-medium cursor-pointer select-none"
            >
              Remember me
            </label>
          </div>

          <button className="w-full bg-[#4640DE] text-white p-4 rounded-sm font-bold text-lg hover:bg-navy transition-colors shadow-lg shadow-[#4640DE]/20">
            Login
          </button>
        </form>

        <div className="mt-8 text-center pt-6 border-t border-gray-100">
          <p className="text-muted-text font-medium">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#4640DE] font-bold hover:text-navy transition-colors ml-1"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
