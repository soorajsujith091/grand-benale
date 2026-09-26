import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { hotel, nav } from './data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  return <>
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? 'bg-primary shadow-lg' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:h-24 md:px-10 xl:px-16">
        <a href="/#home" aria-label="Hotel Grand Benale home" className="relative z-50 flex shrink-0 items-center" onClick={() => setOpen(false)}><img src={hotel.whiteLogo} alt="Hotel Grand Benale" className="h-16 w-auto max-w-[150px] object-contain md:h-20 md:max-w-[180px]" /></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex xl:gap-9">{nav.map(item => <a key={item.href} href={item.href} className="text-[12px] font-medium text-primary-foreground/85 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold">{item.label}</a>)}</nav>
        <Button asChild className="hidden h-11 rounded-sm bg-gold px-6 text-xs font-semibold uppercase tracking-[0.13em] text-gold-foreground hover:bg-gold/90 lg:inline-flex"><a href="#booking">Book Now <ArrowUpRight size={15} /></a></Button>
        <Button variant="ghost" size="icon" className="relative z-50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={25} /> : <Menu size={25} />}</Button>
      </div>
    </header>
    <div className={`fixed inset-0 z-40 flex flex-col justify-center bg-primary px-8 transition-transform duration-300 lg:hidden ${open ? 'translate-x-0' : 'pointer-events-none translate-x-full'}`} aria-hidden={!open}>
      <nav aria-label="Mobile navigation" className="flex flex-col items-start gap-5">{nav.map((item, i) => <a tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} key={item.href} href={item.href} className="font-display text-4xl text-primary-foreground transition-colors hover:text-gold"><span className="mr-4 align-middle font-sans text-xs text-gold">0{i + 1}</span>{item.label}</a>)}</nav>
      <Button asChild tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="mt-10 w-fit rounded-sm bg-gold px-8 text-gold-foreground hover:bg-gold/90"><a href="#booking">Book your stay <ArrowUpRight /></a></Button>
    </div>
  </>;
}
