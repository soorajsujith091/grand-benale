import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Rooms } from './Rooms';
import { Amenities } from './Amenities';
import { Gallery } from './Gallery';
import { Testimonials } from './Testimonials';
import { Location } from './Location';
import { CTA } from './CTA';
import { Footer } from './Footer';
export function HomePage() { return <><Navbar /><main><Hero /><About /><Rooms /><Amenities /><Gallery /><Testimonials /><Location /><CTA /></main><Footer /><Button asChild className="fixed bottom-4 left-4 right-4 z-30 h-12 rounded-sm bg-gold text-xs font-semibold uppercase tracking-[0.14em] text-gold-foreground shadow-lg hover:bg-gold/90 md:hidden"><a href="#booking">Book now <ArrowUpRight /></a></Button></>; }
