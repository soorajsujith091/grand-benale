import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Expand, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gallery } from './data';
import { Photo, Reveal, SectionHeading } from './shared';

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null); if (e.key === 'ArrowRight') setActive(n => n === null ? null : (n+1)%gallery.length); if (e.key === 'ArrowLeft') setActive(n => n === null ? null : (n-1+gallery.length)%gallery.length); };
    document.addEventListener('keydown', onKey); document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [active]);
  return <section id="gallery" className="scroll-mt-20 bg-secondary py-24 md:py-30"><div className="mx-auto max-w-[1320px] px-5 md:px-10 xl:px-16"><Reveal><SectionHeading eyebrow="A glimpse inside" title="The Grand Benale experience" description="From the first welcome to the final morning, discover the spaces that make a stay memorable." /></Reveal><div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">{gallery.slice(0, showAll ? 6 : 5).map((photo, i) => <Button variant="ghost" key={photo.src} aria-label={`View photo: ${photo.label}`} onClick={() => setActive(i)} className={`group relative block h-auto min-w-0 overflow-hidden rounded-none p-0 ${i === 0 ? 'col-span-2 row-span-2' : ''}`}><Photo src={photo.src} alt={photo.alt} className="aspect-square h-full w-full" /><span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-primary/80 to-transparent p-4 text-left text-xs uppercase tracking-[0.14em] text-primary-foreground md:p-6">{photo.label}<Expand size={16} /></span></Button>)}</div><div className="mt-9 text-center"><Button variant="outline" onClick={() => setShowAll(!showAll)} className="h-11 rounded-sm border-foreground/30 bg-transparent px-7 text-xs font-semibold uppercase tracking-[0.12em] text-foreground hover:bg-primary hover:text-primary-foreground">{showAll ? 'Show less' : 'View full gallery'} <ArrowRight size={16} /></Button></div></div>
    {active !== null && <div role="dialog" aria-modal="true" aria-label="Hotel photo gallery" className="fixed inset-0 z-[70] flex items-center justify-center bg-primary/95 p-4 md:p-12" onClick={() => setActive(null)}><Button size="icon" variant="ghost" aria-label="Close gallery" className="absolute right-4 top-4 z-10 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground md:right-8 md:top-8" onClick={() => setActive(null)}><X size={24} /></Button><Button size="icon" variant="ghost" aria-label="Previous photo" className="absolute left-2 z-10 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground md:left-8" onClick={e => { e.stopPropagation(); setActive((active-1+gallery.length)%gallery.length); }}><ArrowLeft size={26} /></Button><img src={gallery[active]!.src} alt={gallery[active]!.alt} className="max-h-[78vh] max-w-[calc(100vw-5rem)] object-contain" onClick={e => e.stopPropagation()} /><Button size="icon" variant="ghost" aria-label="Next photo" className="absolute right-2 z-10 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground md:right-8" onClick={e => { e.stopPropagation(); setActive((active+1)%gallery.length); }}><ArrowRight size={26} /></Button><p className="absolute bottom-5 text-xs uppercase tracking-[0.15em] text-primary-foreground/80">{gallery[active]!.label} · {active+1} / {gallery.length}</p></div>}
  </section>;
}
