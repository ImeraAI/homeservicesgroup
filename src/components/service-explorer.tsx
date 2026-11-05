'use client';

import Image from 'next/image';
import { Icon } from './icon';
import { serviceGroups } from '@/content/services';
import styles from './service-catalogue.module.css';

export function ServiceCatalogue() {
  return <div className={'container ' + styles.catalogue}>
    <div className={styles.intro}>
      <span className={styles.eyebrow}>OUR SERVICES</span>
      <h2>Making home life a little <span>easier.</span></h2>
      <p>From keeping your home fresh to making your next move simpler,<br />we’re here to help you get started.</p>
    </div>
    <div className={styles.categoryCards}>
      {serviceGroups.map(group => <a className={styles.categoryCard} key={group.id} href={'/' + group.id}>
        <div className={styles.cardPhoto}><Image src={'/images/' + group.id + '-service-provided.webp'} alt={group.id === 'cleaning' ? 'Bright living room with a cream sofa, green cushion and flowers' : 'Packed moving boxes and a hand trolley in a bright room'} fill sizes="(max-width:700px) 90vw, 450px" /></div>
        <div className={styles.cardFade} />
        <div className={styles.cardCopy}><Icon name={group.id === 'cleaning' ? 'home-clean' : 'truck'} /><h3>{group.name}</h3><p>{group.id === 'cleaning' ? <>A fresher, cleaner space<br />for you and your family.</> : <>A smoother move,<br />with less hassle.</>}</p><span className={styles.cardCta}>Explore {group.name.toLowerCase()} <Icon name="arrow" /></span></div>
      </a>)}
    </div>
    <div className={styles.reassurance}>{[['phone','One clear enquiry','Tell us what you need'],['box','Cleaning & moving together','Discuss both in one conversation'],['check','Confirm before booking','Agree the scope and next step']].map(([icon,title,body]) => <div key={title}><Icon name={icon} /><div><strong>{title}</strong><span>{body}</span></div></div>)}</div>
    <div className={styles.allHeading}><span className="eyebrow">FIND THE HELP YOU NEED</span><h2>Explore all our services</h2><p>Every cleaning and moving service, in one view.</p></div>
    <div className={styles.allServices}>
      {serviceGroups.map(group => <section id={group.id} key={group.id} aria-labelledby={group.id + '-heading'} className={styles.serviceGroup}>
        <div className={styles.groupHeading}><Icon name={group.icon} /><h2 id={group.id + '-heading'}>{group.heading}</h2></div>
        {group.services.map(service => <article id={service.slug} key={service.slug} className={styles.serviceRow}><h3><a href={'/' + group.id + '/' + service.slug}><span className={styles.serviceIcon}><Icon name={group.id === 'cleaning' ? 'home-clean' : 'truck'} /></span><span>{service.name}</span></a></h3><p>{service.body}</p></article>)}
        <a className={styles.groupLink} href={'/' + group.id}>Explore all {group.name.toLowerCase()} <Icon name="arrow" /></a>
      </section>)}
    </div>
    <div className={styles.together}><div><h3>Need a move and a clean?</h3><p>Discuss removals and end-of-tenancy cleaning in one enquiry.</p></div><a href="/contact?service=cleaning-and-moving">I need both <Icon name="arrow" /></a></div>
    <p className={styles.availability}>London pilot · Planned services, subject to provider and postcode availability.</p>
  </div>;
}

