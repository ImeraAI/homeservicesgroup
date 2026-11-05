import type { Metadata } from 'next';
import { ServiceCategoryPage } from '@/components/service-category-page';

export const metadata: Metadata = {
  title: 'Moving Services in London | London Home Services Group',
  description: 'Explore house and flat removals, man and van, packing, furniture moving and office removals enquiries in London.',
};

export default function MovingPage() { return <ServiceCategoryPage category="moving" />; }
