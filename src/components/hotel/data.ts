import hero from '@/assets/hotel/grand-benale-scaled.jpg.asset.json';
import lobby from '@/assets/hotel/about-scaled.jpg.asset.json';
import dining from '@/assets/hotel/services-scaled.jpg.asset.json';
import room from '@/assets/hotel/rooms-scaled.jpg.asset.json';
import restaurant from '@/assets/hotel/18094.jpg.asset.json';

import whiteLogo from '@/assets/hotel/grand-benale-white-logo1.png.asset.json';
import darkLogo from '@/assets/hotel/grand-benale-logo1.png.asset.json';

export const hotel = {
  hero: '/images/Gemini_Generated_Image_b4hkfrb4hkfrb4hk.png', lobby: '/images/hotel_lobby.png', dining: '/images/fine_dining.png', room: '/images/standard_room.png',
  restaurant: '/images/fine_dining.png', reception: '/images/reception.png', events: '/images/events_hall.png',
  whiteLogo: '/images/grand-benale-white-logo1.webp', darkLogo: '/images/grand-benale-white-logo1.webp',
  email: 'info@grandbenale.com', phone: '+91 928 803 4446',
  address: 'Kakkad Road, Kannur, Kerala, India',
};
export const nav = [
  { label: 'Home', href: '/#home' }, { label: 'Rooms', href: '/#rooms' },
  { label: 'Amenities', href: '/#amenities' }, { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' }, { label: 'Contact', href: '/#contact' },
  { label: 'Careers', href: 'mailto:hr@benaleinternational.com' },
];
export const rooms = [
  { name: 'Standard Double Room', occupancy: '2 guests', bed: 'Queen bed', image: '/images/standard_room.png' },
  { name: 'Deluxe Double Room', occupancy: '3 guests', bed: 'King bed', image: '/images/deluxe_room.png' },
  { name: 'Luxury Suite', occupancy: '3 guests', bed: 'King bed', image: '/images/luxury_suite.png' },
];
export const gallery = [
  { src: hotel.hero, alt: 'Hotel Grand Benale exterior at dusk', label: 'The hotel' },
  { src: hotel.lobby, alt: 'Hotel Grand Benale double-height lobby', label: 'The lobby' },
  { src: hotel.room, alt: 'Guest room at Hotel Grand Benale', label: 'The rooms' },
  { src: hotel.dining, alt: 'Dining space at Hotel Grand Benale', label: 'Dining' },
  { src: hotel.reception, alt: 'Reception desk at Hotel Grand Benale', label: 'Reception' },
  { src: hotel.events, alt: 'Events hall at Hotel Grand Benale', label: 'Events' },
];
export const inquiryHref = (checkIn?: string, checkOut?: string, guests?: string) =>
  `mailto:${hotel.email}?subject=${encodeURIComponent('Stay enquiry — Hotel Grand Benale')}&body=${encodeURIComponent(`Hello Hotel Grand Benale,\n\nI would like to enquire about a stay.\nCheck-in: ${checkIn || 'To be confirmed'}\nCheck-out: ${checkOut || 'To be confirmed'}\nGuests: ${guests || 'To be confirmed'}\n\nPlease let me know about availability and rates.\n`)}`;
