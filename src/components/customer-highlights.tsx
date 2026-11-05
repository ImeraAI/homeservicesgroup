import { Icon } from './icon';
import styles from './us-track-record.module.css';

const figures = [
  { value: '9.6', suffix: '/10', label: 'Client rating' },
  { value: '5+', suffix: ' years', label: 'Home services experience' },
  { value: '24/7', suffix: '', label: 'Enquiry support' },
];

const benefits = [
  { icon: 'home-clean', title: 'Clean & move together', body: 'End-of-tenancy cleaning, removals and packing in one enquiry.' },
  { icon: 'phone', title: 'Share your job details', body: 'Our AI agent gathers your postcode, property size, access and dates.' },
  { icon: 'shield', title: 'Confirm before booking', body: 'Agree scope, availability and price. An enquiry is not a booking.' },
  { icon: 'building', title: 'One home or a portfolio', body: 'Cleaning and moving for homes, rentals and workspaces.' },
];

export function CustomerHighlights() {
  return <div className={styles.proof}>
    <div className="section-heading centered">
      <span className="eyebrow">CLEANING & MOVING IN LONDON</span>
      <h2>A cleaner home.<br className={styles.mobileBreak} /> A simpler move.</h2>
      <p>Cleaning and moving help for your next chapter.</p>
    </div>
    <div className={styles.figures}>
      {figures.map(figure => <article className={styles.figure} key={figure.label}>
        <strong className={styles.value}>{figure.value}<span>{figure.suffix}</span></strong>
        <h3>{figure.label}</h3>
      </article>)}
    </div>
    <p className={styles.note}>Rating and experience reflect our US home-services background. 24/7 refers to AI enquiry support.</p>
    <div className={styles.benefits}>{benefits.map(benefit => <article className={styles.card} key={benefit.title}><span className={styles.cardIcon}><Icon name={benefit.icon} /></span><h3>{benefit.title}</h3><p>{benefit.body}</p></article>)}</div>
    <div className={styles.action}><a className="button button-dark" href="/contact">Tell us what you need <Icon name="arrow" /></a></div>
  </div>;
}
