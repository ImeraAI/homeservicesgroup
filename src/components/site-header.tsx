'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Icon } from './icon';
import { pilot } from '@/content/landing';
import { serviceGroups } from '@/content/services';

const links = [['Home', '/#home'], ['About', '/about'], ['Services', '/#services'], ['FAQ', '/#faqs'], ['Contact Us', '/contact']];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const closeServices = () => { cancelClose(); setServicesOpen(false); };
  const closeAll = () => { closeServices(); setMenuOpen(false); };
  const navigateService = closeAll;

  useEffect(() => {
    if (!servicesOpen) return;
    const dismissOutside = (event: PointerEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    document.addEventListener('pointerdown', dismissOutside);
    return () => document.removeEventListener('pointerdown', dismissOutside);
  }, [servicesOpen]);
  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  return <header className="site-header">
    <div className="nav-shell">
      <a href="/#home" className="nav-brand" aria-label="London Home Services Group home" onClick={closeAll}>
        <span className="brand-logo"><Image src="/images/london-home-services-logo.png" width={1774} height={887} alt="London Home Services Group" preload /></span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map(([label, href]) => label === 'Services' ?
          <div className="nav-services" key={label} ref={servicesRef}
            onMouseEnter={() => { cancelClose(); setServicesOpen(true); }}
            onMouseLeave={() => { cancelClose(); closeTimer.current = setTimeout(() => setServicesOpen(false), 180); }}
            onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeServices(); }}
            onKeyDown={event => { if (event.key === 'Escape') { closeServices(); triggerRef.current?.focus(); } }}>
            <button className="nav-services-trigger" ref={triggerRef} aria-expanded={servicesOpen} aria-controls="services-mega-menu"
              onClick={() => { cancelClose(); setServicesOpen(!servicesOpen); }}
              onKeyDown={event => { if (event.key === 'ArrowDown') { event.preventDefault(); cancelClose(); setServicesOpen(true); requestAnimationFrame(() => servicesRef.current?.querySelector<HTMLAnchorElement>('.mega-menu a')?.focus()); } }}>
              Services <span className="nav-chevron" aria-hidden="true" />
            </button>
            <div className="mega-menu" id="services-mega-menu" hidden={!servicesOpen}>
              <div className="mega-intro">
                <div className="mega-photo"><Image src="/images/london-home-services-hero.png" alt="London Home Services Group moving professional with boxes beside a branded van" fill sizes="(max-width: 1000px) 100vw, 400px" /></div>
                <span className="eyebrow">CLEANING & MOVING</span>
                <h2>A fresh start.<br />A smoother move.</h2>
                <p>From a clean home to a new address. Find the help you need.</p>
                <a className="text-link" href="/#services" onClick={navigateService}>Explore all services <Icon name="arrow" /></a>
              </div>
              {serviceGroups.map(group => <div className="mega-category" key={group.id}>
                <a className="mega-category-title" href={'/' + group.id} onClick={navigateService}><Icon name={group.icon} />{group.name} services <Icon name="arrow" /></a>
                <ul>{group.services.map(service => <li key={service.slug}><a href={'/' + group.id + '/' + service.slug} onClick={navigateService}>{service.name}<Icon name="arrow" /></a></li>)}</ul>
                <a className="mega-group-link" href={'/' + group.id} onClick={navigateService}>View all {group.name.toLowerCase()} <Icon name="arrow" /></a>
              </div>)}
            </div>
          </div> : <a href={href} key={label} onClick={closeAll}>{label}</a>)}
      </nav>
      <div className="nav-contacts">
        <a className="nav-phone" href={`tel:${pilot.phone}`} aria-label={`Call ${pilot.phoneLabel}`}><Icon name="phone" /><span>{pilot.phoneLabel}</span></a>
        <a className="nav-email" href={`mailto:${pilot.email}`}><Icon name="mail" /><span>{pilot.email}</span></a>
      </div>
      <button className="nav-mobile-toggle" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => { closeServices(); setMenuOpen(!menuOpen); }}>{menuOpen ? '×' : '☰'}</button>
    </div>
    <nav id="mobile-navigation" className="nav-mobile" aria-label="Mobile navigation" hidden={!menuOpen}>
      {links.filter(([label]) => label !== 'Services').map(([label, href]) => <a href={href} key={label} onClick={closeAll}>{label}</a>)}
      {serviceGroups.map(group => <details className="mobile-service-group" key={group.id}><summary><Icon name={group.icon} />{group.name} services<span aria-hidden="true">+</span></summary><div>{group.services.map(service => <a key={service.slug} href={'/' + group.id + '/' + service.slug} onClick={navigateService}>{service.name}<Icon name="arrow" /></a>)}</div></details>)}
      <a href={`tel:${pilot.phone}`}><Icon name="phone" />{pilot.phoneLabel}</a>
      <a href={`mailto:${pilot.email}`}><Icon name="mail" />{pilot.email}</a>
    </nav>
  </header>;
}
