import type { Metadata } from 'next';
import { ServiceCategoryPage } from '@/components/service-category-page';

export const metadata: Metadata = {
  title: 'Cleaning Services in London | London Home Services Group',
  description: 'Explore domestic, deep, end-of-tenancy, carpet, upholstery, oven and office cleaning enquiries for the London pilot.',
};

export default function CleaningPage() { return <ServiceCategoryPage category="cleaning" />; }
