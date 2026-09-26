import { useState, type FormEvent } from 'react';
import { CalendarDays, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { hotel, inquiryHref } from './data';

export function Hero() {
  const [checkIn, setCheckIn] = useState(''); const [checkOut, setCheckOut] = useState(''); const [guests, setGuests] = useState('2'); const [error, setError] = useState('');
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkIn || !checkOut) { setError('Please select check-in and check-out dates.'); return; }
    if (checkIn < today || checkOut <= checkIn) { setError('Check-out must be after check-in, and dates cannot be in the past.'); return; }
    setError(''); window.location.href = inquiryHref(checkIn, checkOut, guests);
  };
  return <section id="home" className="relative bg-background text-foreground">
    <div className="relative flex min-h-[690px] flex-col justify-end overflow-hidden pt-32 pb-48 md:min-h-[min(850px,100svh)] md:pb-52">
      <img src={hotel.hero} alt="Hotel Grand Benale exterior illuminated at dusk" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-16 flex flex-col items-center justify-end">
        <h1 className="w-full max-w-[1000px] font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] text-white italic drop-shadow-xl">
          <span className="block text-center md:text-left">Luxury Living, Redefined at</span>
          <span className="block text-center md:text-right mt-2 md:pr-10">Hotel Grand Benale</span>
        </h1>
      </div>
    </div>
    <div id="booking" className="relative z-10 mx-auto -mt-24 w-full max-w-[1000px] px-4 md:px-10">
      <div className="rounded-[1.5rem] bg-white p-6 shadow-2xl border border-gray-100">
        <form onSubmit={submit} className="flex flex-col md:flex-row gap-6 md:gap-4 md:items-end border-b border-gray-200 pb-6" noValidate>
          <label className="flex-1 flex flex-col gap-2 px-2 md:px-4">
             <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Check-in</span>
             <input type="date" value={checkIn} min={today} onChange={e => { setCheckIn(e.target.value); setError(''); }} className="w-full bg-transparent text-sm md:text-base font-medium text-gray-900 outline-none" required />
          </label>
          <div className="hidden md:block w-px h-12 bg-gray-200" />
          <label className="flex-1 flex flex-col gap-2 px-2 md:px-4">
             <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Check-out</span>
             <input type="date" value={checkOut} min={checkIn || today} onChange={e => { setCheckOut(e.target.value); setError(''); }} className="w-full bg-transparent text-sm md:text-base font-medium text-gray-900 outline-none" required />
          </label>
          <div className="hidden md:block w-px h-12 bg-gray-200" />
          <label className="flex-1 flex flex-col gap-2 px-2 md:px-4">
             <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Guests</span>
             <select value={guests} onChange={e => setGuests(e.target.value)} className="w-full bg-transparent text-sm md:text-base font-medium text-gray-900 outline-none cursor-pointer">
               {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
             </select>
          </label>
          <Button type="submit" className="md:ml-4 w-full md:w-auto rounded-xl bg-[#dca11d] px-8 py-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-white hover:bg-[#c28e19] transition-colors">
            Check Availability
          </Button>
        </form>
        <div className="mt-4 flex items-center gap-2 px-2 md:px-4 text-[11px] md:text-xs font-medium text-gray-500">
           <CheckCircle2 size={14} className="text-[#dca11d]" /> Best Rate Guarantee &nbsp;|&nbsp; No Booking Fees
        </div>
        {error && <p role="alert" className="mt-4 text-sm font-medium text-red-600 px-2 md:px-4">{error}</p>}
      </div>
    </div>
  </section>;
}
