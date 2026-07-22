import React from 'react';
import { Navbar } from '../components/navbar';
import { Hero } from '../components/hero';
import { BeforeAfter } from '../components/before-after';
import { Services } from '../components/services';
import { WhyChooseUs } from '../components/why-choose-us';
import { Pricing } from '../components/pricing';
import { Testimonials } from '../components/testimonials';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
