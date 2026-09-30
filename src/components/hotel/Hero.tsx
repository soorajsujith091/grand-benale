import { hotel } from './data';

export function Hero() {
  return <section id="home" className="relative bg-background text-foreground">
    <div className="relative flex min-h-[690px] flex-col justify-end overflow-hidden pt-32 pb-16 md:min-h-[min(850px,100svh)] md:pb-24">
      <img src={hotel.hero} alt="Hotel Grand Benale exterior illuminated at dusk" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-16 flex flex-col items-center justify-end">
        <h1 className="w-full max-w-[1000px] font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] text-white italic drop-shadow-xl">
          <span className="block text-center md:text-left">Luxury Living, Redefined at</span>
          <span className="block text-center md:text-right mt-2 md:pr-10">Hotel Grand Benale</span>
        </h1>
      </div>
    </div>
  </section>;
}
