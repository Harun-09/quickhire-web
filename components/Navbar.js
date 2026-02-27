import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-16 py-6 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">Q</div>
                <span className="text-navy text-2xl font-bold font-sans">QuickHire</span>
            </div>

            <div className="hidden md:flex items-center gap-10">
                <Link href="/" className="text-body-text hover:text-primary font-medium">Find Jobs</Link>
                <Link href="/companies" className="text-body-text hover:text-primary font-medium">Browse Companies</Link>
            </div>

            <div className="flex items-center gap-4 border-l pl-4 border-gray-100">
                <Link href="/login" className="text-primary font-bold px-4 py-2">Login</Link>
                <Link href="/signup" className="bg-primary text-white font-bold px-6 py-2 rounded-sm hover:opacity-90 transition-opacity">Sign Up</Link>
            </div>
        </nav>
    );
}
