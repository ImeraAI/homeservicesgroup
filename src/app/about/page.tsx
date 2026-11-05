import type { Metadata } from 'next';
import Image from 'next/image';
import { Header, Footer, FinalCta, PoweredByMango } from '@/components/landing-sections';
import { Icon } from '@/components/icon';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us | London Home Services Group · Powered by Mango',
  description: 'Meet London Home Services Group: US home-services experience and Mango technology, bringing a simpler approach to cleaning and moving enquiries in London.',
};

const principles = [
  { icon: 'people', title: 'People before process', body: 'A home is personal. So is a move. We start with your circumstances, your priorities and the details that make your request different.' },
  { icon: 'shield', title: 'Clarity before commitment', body: 'Know the scope, price, availability and provider before you agree to a booking. A clear next step matters more than a rushed promise.' },
  { icon: 'home-clean', title: 'The whole picture', body: 'Cleaning and moving often belong to the same moment. We bring both into one conversation, from the last clean to the first box.' },
  { icon: 'phone', title: 'Technology with a purpose', body: 'Mango gathers the practical details so your enquiry can move forward. The goal is simple: make asking for help feel easier.' },
];

export default function AboutPage() {
  return <><Header /><main id="main">
    <section className={`container ${styles.hero}`}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">About us</span></nav>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <span className="eyebrow">ABOUT LONDON HOME SERVICES GROUP</span>
          <h1>Big care for<br />life’s <span>big changes.</span></h1>
          <p>Moving home. Handing over the keys. Making a space feel like yours again. We believe getting the right help should be the easy part.</p>
          <p>We bring cleaning and moving enquiries together, powered by Mango and shaped around the people who need the work done.</p>
          <a className="button button-dark" href="/contact">Let’s talk about your property <Icon name="arrow" /></a>
          <PoweredByMango />
        </div>
        <figure className={styles.heroPhoto}>
          <Image src="/images/london-home-services-hero.png" alt="London Home Services Group professional with moving boxes beside a branded vehicle" fill sizes="(max-width: 760px) 100vw, 50vw" preload />
        </figure>
      </div>
    </section>

    <section className={`container ${styles.trackRecord}`} aria-label="Our background">
      <div><strong>9.6<span>/10</span></strong><p>Client experience rating</p></div>
      <div><strong>5+<span> years</span></strong><p>Home-services experience</p></div>
      <div><strong>24/7</strong><p>Mango AI enquiry support</p></div>
      <p className={styles.statNote}>Rating and experience relate to our US home-services background. Round-the-clock support refers to Mango’s AI enquiry service.</p>
    </section>

    <section className={`section container ${styles.story}`}>
      <div><span className="eyebrow">OUR STORY</span><h2>US experience.<br />London ambition.<br /><span>A personal approach.</span></h2></div>
      <div><p className={styles.lead}>A better home-service experience starts long before anyone arrives at your door.</p><p>It starts when someone understands what you need. The property. The access. The dates that matter. Whether you need a careful clean, help with a move, or both.</p><p>London Home Services Group builds on our US home-services background and Mango’s AI technology. We’re preparing our London pilot with a focused offer: cleaning and moving enquiries for homes, rentals and workspaces.</p><p>Our ambition is to become the first place you turn when your property needs attention or your address is about to change. Clear communication, useful technology and a practical next step are how we intend to earn that place.</p></div>
    </section>

    <section className={styles.principles}><div className="section container">
      <div className={styles.sectionIntro}><span className="eyebrow">WHAT WE STAND FOR</span><h2>High standards.<br />Human priorities.</h2><p>Four principles behind the experience we’re building.</p></div>
      <div className={styles.principleGrid}>{principles.map(item => <article key={item.title}><Icon name={item.icon} /><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
    </div></section>

    <section className="section container">
      <div className={styles.serviceIntro}><div><span className="eyebrow">OUR FOCUS</span><h2>Two essentials.<br />One thoughtful approach.</h2></div><p>For homeowners, tenants, landlords, agents and businesses. Start with your space, your plans and the help you have in mind.</p></div>
      <div className={styles.serviceGrid}>
        <a href="/cleaning"><Icon name="home-clean" /><span>CLEANING</span><h3>A fresh start for your space.</h3><p>Domestic and deep cleaning, tenancy handovers, carpets, upholstery, ovens and offices.</p><strong>Explore cleaning <Icon name="arrow" /></strong></a>
        <a href="/moving"><Icon name="truck" /><span>MOVING</span><h3>Make room for your next chapter.</h3><p>House and flat removals, man and van, packing, furniture moving and office relocations.</p><strong>Explore moving <Icon name="arrow" /></strong></a>
      </div>
      <div className={styles.promise}><Icon name="check" /><p>Your requirements come first. Provider availability, scope, price and booking details are confirmed before work is arranged.</p></div>
    </section>
    <FinalCta />
  </main><Footer /></>;
}
