import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-16 py-6 bg-transparent relative z-30 max-w-[1600px] mx-auto">
            <div className="flex items-center gap-12">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 cursor-pointer">
                    <div className="w-8 h-8 rounded-full border-[5px] border-[#4640DE] flex items-center justify-center p-[2px]">
                        <div className="w-3 h-3 bg-[#4640DE] rounded-full"></div>
                    </div>
                    <span className="text-navy text-2xl font-bold tracking-tight">QuickHire</span>
                </Link>

                {/* Left Links */}
                <div className="hidden md:flex items-center gap-6 ml-4">
                    <Link href="/" className="text-muted-text hover:text-navy font-semibold transition-colors">Find Jobs</Link>
                    <Link href="/companies" className="text-muted-text hover:text-navy font-semibold transition-colors">Browse Companies</Link>
                </div>
            </div>

            {/* Right Links */}
            <div className="flex items-center gap-8 pl-8 border-l border-gray-200">
                <Link href="/login" className="text-primary font-bold hover:text-navy transition-colors">Login</Link>
                <Link href="/signup" className="bg-primary text-white font-bold px-10 py-3 hover:bg-navy transition-colors text-sm tracking-wide">Sign Up</Link>
            </div>
        </nav>
    );
}
