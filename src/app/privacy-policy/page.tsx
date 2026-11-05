import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {"title": "Privacy policy | London Home Services Group", "description": "How information is handled when you visit London Home Services Group or contact us."};

export default function Page() { return <LegalPage policy="privacy-policy" />; }
