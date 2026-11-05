export const audiences = [
  {
    id: 'home', name: 'Homeowners & tenants', icon: 'home-clean',
    summary: 'A fresh space or a new address. Find practical help for the way you live.',
    points: ['Regular or one-off home cleaning', 'House and flat removals', 'Packing and furniture moving'],
    cta: 'Get help at home', service: '',
  },
  {
    id: 'landlord', name: 'Private landlords', icon: 'people',
    summary: 'Prepare for a tenancy change with cleaning around your property handover.',
    points: ['End-of-tenancy cleaning', 'Deep cleaning between lets', 'Carpet and upholstery cleaning'],
    cta: 'Request a tenancy clean', service: 'end-of-tenancy-cleaning',
  },
  {
    id: 'manager', name: 'Agents & property managers', icon: 'briefcase',
    summary: 'Share the cleaning and moving needs of the properties you look after.',
    points: ['Cleaning for tenancy handovers', 'Multiple-property enquiries', 'Access and timing requirements'],
    cta: 'Discuss your properties', service: '',
  },
  {
    id: 'business', name: 'Businesses & workspaces', icon: 'building',
    summary: 'Cleaning and relocation help planned around your premises and working day.',
    points: ['Office and workspace cleaning', 'Office removals and packing', 'Furniture and equipment moves'],
    cta: 'Request workspace help', service: '',
  },
] as const;
