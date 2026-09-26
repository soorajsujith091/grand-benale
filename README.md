# Grand Benale Homepage

Build a premium, modern, mobile-first React homepage for a luxury boutique hotel called 
"Hotel Grand Benale," located in Kannur, Kerala, India.

EXISTING LIVE SITE (reference for brand matching): https://grandbenale.com/
This is a redesign of that existing hotel's website — not a new brand. Match its established 
brand identity (colors, logo, tone, photography style) as closely as possible. If you are able 
to browse/fetch the URL, extract the actual brand colors, logo, and images from it directly. 
If you cannot access the live URL, use the brand values supplied below instead — do not invent 
an unrelated color scheme.

BRAND IDENTITY (use exactly, do not substitute):
- Primary color: [FILL IN hex, e.g. #1A2E2B deep green]
- Accent/gold color: [FILL IN hex, e.g. #C9A660 muted gold]
- Background/neutral: [FILL IN hex, e.g. #FAF7F2 warm ivory]
- Text color: [FILL IN hex, e.g. #22221F charcoal]
- Logo file: [FILL IN path/URL, or pull from https://grandbenale.com/]
- Heading font: [FILL IN, e.g. a serif like Playfair Display / Cormorant]
- Body font: [FILL IN, e.g. a clean sans like Lato / Inter]

TECH STACK:
- React (functional components + hooks), Tailwind CSS for styling
- Framer Motion for subtle scroll/entrance animations
- Fully responsive: mobile-first, then tablet, then desktop breakpoints
- Lazy-load images, optimize for Core Web Vitals
- Semantic HTML, accessible (proper alt text, contrast, focus states, aria labels)

DESIGN STYLE:
- Modern luxury hotel aesthetic: generous white space, large full-bleed imagery, 
  elegant serif headings paired with clean sans-serif body text
- Soft shadows, rounded corners on cards (not too rounded — refined, not playful)
- Gold/brass accent lines or dividers used sparingly for a premium feel
- Smooth hover states (image zoom on hover, subtle underline animations on links)
- Sticky/transparent-to-solid navbar on scroll

SECTIONS TO INCLUDE (in order):

1. NAVBAR
   - Logo left (from https://grandbenale.com/), nav links center/right: Home, Rooms, 
     Amenities, Gallery, About, Contact, Book Now (styled as a gold CTA button)
   - Transparent over hero, turns solid brand-color on scroll
   - Hamburger menu for mobile with full-screen slide-in overlay

2. HERO SECTION
   - Full-viewport-height image/video background of the hotel exterior or lobby 
     (sourced from https://grandbenale.com/ where possible)
   - Overlay gradient for text legibility
   - Headline: "Your Home of Comfort in Kannur" (exact tagline from the live site)
   - Subheadline: one line about comfort, hospitality, Kannur location
   - Primary CTA: "Book Your Stay" button
   - Small embedded booking widget bar (check-in date, check-out date, guests, Search button) 
     floating at the bottom edge of the hero, card-style with shadow

3. WELCOME / ABOUT STRIP
   - Two-column: image left, text right (stack on mobile)
   - Short story about the hotel — comfort, hospitality, Kannur location
     (pull actual About copy from https://grandbenale.com/)
   - 3 small stat highlights inline (e.g. "36 Rooms", "24/7 Front Desk", "Free Wi-Fi & Breakfast")

4. ROOM CATEGORIES
   - Section heading: "Rooms & Suites"
   - Grid of room cards: Standard Double Room, Deluxe Double Room, Luxury Suite 
     (use exact names/sizes/pricing/images from https://grandbenale.com/)
   - Each card: image, room name, size, occupancy, key amenities as small icons, 
     "View Details" link
   - Image zoom-on-hover effect, card lift on hover

5. AMENITIES / FACILITIES
   - Icon grid (4-6 columns desktop, 2 columns mobile): Free Wi-Fi, Free Parking, 
     Free Breakfast, Laundry Service, 24/7 Front Desk, Concierge, Garden, Elevator
   - Minimal line-icons in accent gold color, short label under each

6. GALLERY
   - Masonry or grid layout of hotel photos (exterior, rooms, lobby, garden), 
     pulled from https://grandbenale.com/ gallery
   - Lightbox on click (full-screen image viewer with next/prev arrows)
   - "View Full Gallery" button

7. GUEST REVIEWS / TESTIMONIALS
   - Carousel/slider of 3-4 guest quotes with star rating, guest name
   - Overall rating badge prominently displayed (e.g. "8.8/10 Excellent")

8. LOCATION / NEARBY ATTRACTIONS
   - Embedded map (Google Maps iframe) on one side, using the hotel's actual Kannur address
   - List of nearby landmarks on the other (Payyambalam Beach, Tellicherry Fort, 
     Kannur Station, Kannur Airport) with distance/time

9. CALL-TO-ACTION BANNER
   - Full-width band in primary brand color with gold accent text
   - "Ready to experience comfort? Book your stay today." + Book Now button

10. FOOTER
    - 4-column layout: Logo + short tagline & social icons | Quick Links | 
      Contact Info (address, phone, email — from https://grandbenale.com/) | Newsletter signup
    - Bottom bar: copyright, privacy policy, terms links
    - Dark version of brand primary color background, gold accent text/links

INTERACTIONS & POLISH:
- Smooth scroll-to-section navigation
- Fade/slide-up entrance animations as sections enter viewport
- Sticky "Book Now" floating button on mobile (bottom of screen)
- Loading skeleton states for images
- Form validation on the booking widget

DELIVERABLE:
- Single well-organized React app: separate components per section 
  (Navbar.jsx, Hero.jsx, About.jsx, Rooms.jsx, Amenities.jsx, Gallery.jsx, 
  Testimonials.jsx, Location.jsx, CTA.jsx, Footer.jsx) imported into HomePage.jsx
- Tailwind config with the brand colors set as custom theme tokens 
  (e.g. colors.brand.primary, colors.brand.gold)
- Where real photos/logo from https://grandbenale.com/ aren't available, mark clearly 
  as [IMAGE: description] placeholders

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://grand-benale-bloom.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ad9835c3-07b2-483b-9870-ef356536e7f6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
