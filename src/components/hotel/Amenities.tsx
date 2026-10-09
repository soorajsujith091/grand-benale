import { Wifi, CarFront, Coffee, Shirt, ConciergeBell, Bell, Wind, ArrowUpDown } from 'lucide-react';
import { Reveal, SectionHeading } from './shared';
const amenities = [
  { icon: Wifi, name: 'Wi-Fi' }, { icon: CarFront, name: 'Ample Parking Area' },
  { icon: Coffee, name: 'Breakfast' }, { icon: Shirt, name: 'Laundry' },
  { icon: ConciergeBell, name: '24/7 Front Desk' }, { icon: Bell, name: 'Concierge' },
  { icon: Wind, name: 'Air Conditioning' }, { icon: ArrowUpDown, name: 'Elevator' },
];
export function Amenities() { return <section id="amenities" className="scroll-mt-20 bg-background py-24 md:py-30"><div className="mx-auto max-w-[1320px] px-5 md:px-10 xl:px-16"><Reveal><div className="text-center"><SectionHeading eyebrow="The little things matter" title="Everything for an effortless stay" /></div></Reveal><div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">{amenities.map(({ icon: Icon, name }) => <Reveal key={name} className="flex min-h-40 flex-col items-center justify-center gap-5 border-b border-r border-border px-3 text-center transition-all duration-500 hover:bg-secondary md:min-h-48"><Icon size={30} strokeWidth={1.25} className="text-gold-dark transition-transform duration-500 group-hover:scale-110" /><h3 className="text-[12px] font-medium uppercase tracking-[0.1em] text-foreground">{name}</h3></Reveal>)}</div></div></section>; }
