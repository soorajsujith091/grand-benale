import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ArrowUpRight, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CareerPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-32 pb-24 text-foreground">
        <div className="mx-auto max-w-[1000px] px-5 md:px-10">
          <h1 className="font-display text-4xl md:text-6xl italic text-[#dca11d] mb-6">Join Our Team</h1>
          <p className="text-gray-600 mb-12 max-w-2xl leading-relaxed">
            At Hotel Grand Benale, we believe that true hospitality comes from the heart. We are always looking for passionate, dedicated individuals to join our growing family. Discover our current openings below and start your journey with us.
          </p>
          
          <div className="space-y-6">
            <div className="border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-display text-2xl italic text-gray-900 flex items-center gap-2"><Briefcase size={20} className="text-[#dca11d]"/> Front Desk Executive</h3>
                <p className="text-sm text-gray-500 mt-2 uppercase tracking-widest font-semibold">Full Time • Kannur, Kerala</p>
              </div>
              <Button asChild className="rounded-xl bg-[#dca11d] text-white hover:bg-[#c28e19]"><a href="mailto:info@grandbenale.com?subject=Job Application: Front Desk Executive">Apply Now <ArrowUpRight size={16} className="ml-2"/></a></Button>
            </div>
            
            <div className="border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-display text-2xl italic text-gray-900 flex items-center gap-2"><Briefcase size={20} className="text-[#dca11d]"/> F&B Service Associate</h3>
                <p className="text-sm text-gray-500 mt-2 uppercase tracking-widest font-semibold">Full Time • Kannur, Kerala</p>
              </div>
              <Button asChild className="rounded-xl bg-[#dca11d] text-white hover:bg-[#c28e19]"><a href="mailto:info@grandbenale.com?subject=Job Application: F&B Service Associate">Apply Now <ArrowUpRight size={16} className="ml-2"/></a></Button>
            </div>
          </div>
          
          <div className="mt-20 bg-[#f8f6f0] p-10 rounded-3xl text-center">
            <h2 className="font-display text-3xl italic mb-4">Don't see a fit?</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">Send us your resume anyway. We'll keep it on file and reach out if a relevant position opens up.</p>
            <Button asChild className="rounded-xl border border-[#dca11d] text-[#dca11d] bg-transparent hover:bg-[#dca11d] hover:text-white transition-colors"><a href="mailto:info@grandbenale.com?subject=General Job Application">Submit Resume</a></Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
