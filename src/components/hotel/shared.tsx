import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .65, ease: 'easeOut' }}>{children}</motion.div>;
}
export function Photo({ src, alt, className = '', priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) setLoaded(true);
  }, [src]);
  return <div className={`relative overflow-hidden bg-muted ${className}`}>
    {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />}
    <img ref={imageRef} src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} onLoad={() => setLoaded(true)} className={`h-full w-full object-cover transition-[opacity,transform] duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-105`} />
  </div>;
}
export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return <div className="mb-9 md:mb-12"><p className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] ${light ? 'text-gold' : 'text-gold-dark'}`}>{eyebrow}</p><h2 className={`font-display text-4xl leading-[1.08] md:text-5xl ${light ? 'text-primary-foreground' : 'text-foreground'}`}>{title}</h2>{description && <p className={`mt-5 max-w-2xl leading-relaxed ${light ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{description}</p>}</div>;
}
