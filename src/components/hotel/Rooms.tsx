import { ArrowUpRight, BedDouble, Maximize, Users, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { hotel, rooms } from './data';
import { Photo, Reveal, SectionHeading } from './shared';

export function Rooms() {
  return (
    <section id="rooms" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10 xl:px-16">
        <Reveal>
          <div className="flex flex-col md:flex-row relative mb-32 items-center">
            <div className="md:w-[45%] z-10 relative shrink-0">
               <Photo src={hotel.room} alt="Premium Room" className="w-full h-full object-cover shadow-2xl aspect-[4/3] md:aspect-[3/4] md:-mt-12" />
            </div>
            <div className="md:w-[65%] bg-[#dca11d] p-10 md:py-24 md:pr-24 md:pl-[16%] md:-ml-[10%] relative flex flex-col justify-center text-white">
               <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] italic mb-10">
                 Designed for Rest, Styled<br />for You
               </h2>
               <h3 className="font-display text-3xl italic mb-4">Premium Rooms</h3>
               <p className="text-white/90 leading-relaxed font-sans text-sm md:text-base max-w-lg">
                 Our Premium Rooms at Hotel Grand Benale offer elegant decor, plush bedding, and all the comforts of modern living. Ideal for both business and leisure travelers seeking a touch of sophistication.
               </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-5 mb-12">
            <SectionHeading eyebrow="Stay a little longer" title="Our Categories" description="Beautifully considered spaces for the way you travel." />
          </div>
        </Reveal>
        
        <div className="grid gap-6 md:grid-cols-3">
          {rooms.map((room, i) => (
            <Reveal key={room.name} className="group flex flex-col overflow-hidden bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl border border-gray-100">
              <Photo src={room.image} alt={`Guest room at Hotel Grand Benale — ${room.name}`} className="aspect-[4/3]" />
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#dca11d]">0{i+1} / Accommodation</span>
                <h3 className="font-display text-2xl italic text-gray-900">{room.name}</h3>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-b border-gray-100 pb-5 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-2"><Users size={15} className="text-[#dca11d]" />{room.occupancy}</span>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-2"><BedDouble size={15} className="text-[#dca11d]" />{room.bed}</span>
                  <span className="inline-flex items-center gap-2"><Wifi size={15} className="text-[#dca11d]" />Wi-Fi</span>
                </div>
                <Button asChild variant="link" className="mt-6 h-auto w-fit justify-start p-0 text-xs font-semibold uppercase tracking-[0.12em] text-gray-900 hover:text-[#dca11d]">
                  <a href="#booking">View details <ArrowUpRight size={16} /></a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
