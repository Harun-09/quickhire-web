import Navbar from '../components/Navbar';

export default function Companies() {
    const companies = [
        { name: 'Nomad', jobs: 3, icon: 'N' },
        { name: 'Dropbox', jobs: 5, icon: 'D' },
        { name: 'Terraform', jobs: 2, icon: 'T' },
        { name: 'Spotify', jobs: 8, icon: 'S' },
    ];

    return (
        <div className="min-h-screen bg-zinc-50 font-sans">
            <Navbar />
            <main className="px-16 py-20 max-w-7xl mx-auto">
                <h1 className="text-navy text-4xl font-bold mb-10">Browse <span className="text-primary">Companies</span></h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {companies.map(company => (
                        <div key={company.name} className="p-8 bg-white border border-gray-100 rounded-sm hover:shadow-xl transition-shadow cursor-pointer text-center group">
                            <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-3xl font-bold text-navy mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                {company.icon}
                            </div>
                            <h3 className="text-navy font-bold text-2xl mb-2">{company.name}</h3>
                            <p className="text-muted-text font-medium">{company.jobs} Jobs Available</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-primary rounded-2xl text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">Wanna see more companies?</h2>
                    <p className="text-white/80 text-xl mb-8">We are constantly adding new startups and tech giants to our platform.</p>
                    <button className="bg-white text-primary px-10 py-4 font-bold rounded-sm hover:bg-gray-100 transition-colors">Get Started</button>
                </div>
            </main>
        </div>
    );
}
