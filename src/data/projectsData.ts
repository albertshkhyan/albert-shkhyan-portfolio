import type { ProjectEntry } from '../types/resume';

const base = import.meta.env.BASE_URL;

export const projectEntries: ProjectEntry[] = [
  // —— Commercial Mobile Apps ——
  {
    title: 'TeeSheet',
    category: 'commercial-mobile',
    logo: `${base}logos/tee-sheet-logo.svg`,
    date: '2023 - 2024',
    location: 'Yerevan, Armenia',
    tags: ['React Native', 'TypeScript'],
    role: 'Frontend Engineer',
    description:
      'Golf tee-time booking app. Frontend for a system that helps golf courses and players manage tee time bookings, rounds, and groups.',
    bullets: [
      'Tee time booking and management for courses and players.',
      'Rounds and group coordination.',
    ],
    badges: ['demo'],
  },
  {
    title: 'Mementix',
    category: 'commercial-mobile',
    logo: `${base}logos/mementix-logo.svg`,
    titleHref: 'https://apps.apple.com/am/app/mementix/id6472716301',
    date: '2023 - 2024',
    location: 'Yerevan, Armenia',
    tags: ['React Native', 'TypeScript', 'NestJS', 'PostgreSQL'],
    role: 'Frontend Engineer',
    description:
      'Events, tickets, raffles, and social features. Create/join events, ticket management & resale, in-app chat (Twilio Conversations), raffles, and affiliate ticket links.',
    bullets: [
      'React Native app with real-time updates and offline support.',
      'Backend APIs for events, tickets, and user management.',
    ],
    badges: ['live', 'demo', 'appStore'],
    demoGif: `${base}gif/mementix-demo.gif`,
    links: [
      { type: 'appStore', label: 'App Store', href: 'https://apps.apple.com/am/app/mementix/id6472716301' },
      { type: 'website', label: 'Website', href: 'https://mementix.com/' },
    ],
  },
  {
    title: 'MyFits',
    category: 'commercial-mobile',
    logo: `${base}logos/my-fits-logo.svg`,
    date: '2022 - 2023',
    location: 'Yerevan, Armenia',
    tags: ['React Native', 'Expo', 'TypeScript'],
    role: 'Frontend Engineer',
    description:
      'Wardrobe / "fits" manager. Save and organize clothing items, manage your closet, and track favorites. Rebuilt as a mobile app with Expo.',
    bullets: [
      'Closet organization and item management.',
      'Favorites and outfit tracking.',
    ],
    badges: ['demo'],
  },
  {
    title: 'Reserve-Me',
    category: 'commercial-mobile',
    logo: `${base}logos/reserve-me-logo.svg`,
    date: '2021 - 2022',
    location: 'Yerevan, Armenia',
    tags: ['React Native', 'TypeScript'],
    role: 'Frontend Engineer',
    description:
      'Restaurant table booking. Browse venues, view layouts, choose table/time, and book. Admin tools for floor plans and reservation management.',
    bullets: [
      'Venue browsing and table selection.',
      'Admin floor plans and reservation management.',
    ],
    badges: ['demo'],
  },
  // —— Commercial Web Platforms ——
  {
    title: 'MooMovesYou',
    category: 'commercial-web',
    date: '2022 - 2024',
    location: 'Yerevan, Armenia',
    tags: ['React', 'NestJS', 'TypeScript'],
    role: 'Full-Stack Engineer',
    description:
      'Moving / relocation platform. Customer website + partner app + admin dashboard + NestJS API connecting customers, movers/truckers, and internal operations.',
    bullets: [
      'Customer and partner web apps.',
      'Admin dashboard and API integration.',
    ],
    links: [{ type: 'website', label: 'Website', href: 'https://moomovesyou.com/' }],
  },
  {
    title: 'Postcards',
    category: 'commercial-web',
    date: '2022 - 2023',
    location: 'Yerevan, Armenia',
    tags: ['React', 'TypeScript'],
    role: 'Frontend Engineer',
    description:
      'Print e-commerce platform. Order print products (postcards, business cards, EDDM), upload/customize artwork, proofs, payments, and fulfillment/shipping workflows.',
    bullets: [
      'Product catalog and customization.',
      'Proofs, payments, and fulfillment.',
    ],
  },
  {
    title: 'Sigma',
    category: 'commercial-web',
    logo: `${base}logos/sigma-logo.svg`,
    date: '2020 - 2022',
    location: 'Yerevan, Armenia',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    role: 'Full-Stack Engineer',
    description:
      'Luxury marketplace (Farfetch-style). Product catalog, discovery, checkout flows, and admin operations for an e-commerce marketplace.',
    bullets: [
      'Real-time chat, secure payments, and dynamic search.',
      'Performance and UX improvements across the platform.',
    ],
    badges: ['demo'],
    demoGif: `${base}gif/sigma-sinclair-demo.gif`,
  },
  {
    title: 'TicketShield',
    category: 'commercial-web',
    logo: `${base}logos/ticket-shield-logo.svg`,
    date: '2021 - 2022',
    location: 'Yerevan, Armenia',
    tags: ['React', 'TypeScript'],
    role: 'Frontend Engineer',
    description:
      'Law practice web app (traffic / DUI / defense). Client intake and case workflows tailored for a legal services website.',
    bullets: [
      'Client intake and case management.',
      'Legal workflow automation.',
    ],
    links: [{ type: 'website', label: 'Website', href: 'https://www.ticketshield.com/' }],
  },
  {
    title: 'TeeSwap',
    category: 'commercial-web',
    logo: `${base}logos/tee-swap-logo.png`,
    date: '2022 - 2023',
    location: 'Yerevan, Armenia',
    tags: ['React', 'Node.js', 'TypeScript'],
    role: 'Full-Stack Engineer',
    description:
      'Reciprocal tee-time booking platform. Web apps for members and clubs + admin dashboard, backed by a Node.js/TypeScript API.',
    bullets: [
      'Member and club web apps.',
      'Admin dashboard and API.',
    ],
    links: [{ type: 'website', label: 'Website', href: 'https://theteeswap.com/' }],
  },
  {
    title: 'GiftReggies',
    category: 'commercial-web',
    logo: `${base}logos/gift-reggies-logo.webp`,
    date: '2021 - 2022',
    location: 'Yerevan, Armenia',
    tags: ['React', 'TypeScript'],
    role: 'Frontend Engineer',
    description:
      'Wishlist / gift registry app. Public profile URL, wish items (price/link/image), cart/checkout so others can purchase or contribute.',
    bullets: [
      'Public profiles and wish items.',
      'Cart and checkout for contributors.',
    ],
  },
  {
    title: 'Unico',
    category: 'commercial-web',
    logo: `${base}logos/unico-logo.svg`,
    date: '2020 - 2021',
    location: 'Yerevan, Armenia',
    tags: ['React', 'TypeScript', 'Fabric.js', 'Canvas'],
    role: 'Frontend Engineer',
    description:
      'Custom sneaker e-commerce. Configure sneakers (materials/colors), checkout, and admin management for products, orders, and labels.',
    bullets: [
      'Canvas-based customization and real-time preview.',
      'Export and order flow integration.',
    ],
    badges: ['demo'],
    demoGif: `${base}gif/unico-demo.gif`,
  },
  {
    title: 'Vendo',
    category: 'commercial-web',
    date: '2022 - 2023',
    location: 'Yerevan, Armenia',
    tags: ['Next.js', 'TypeScript'],
    role: 'Full-Stack Engineer',
    description:
      'Marketplace (Next.js). Buy/sell platform with profiles, cart/checkout, payments, and marketplace flows.',
    bullets: [
      'Profiles and product listings.',
      'Cart, checkout, and payments.',
    ],
  },
  // —— Personal Projects ——
  {
    title: 'solar-system-app',
    category: 'personal',
    date: '2024',
    location: '—',
    tags: ['React', 'React Three Fiber', 'Zustand', 'TypeScript', 'Vite'],
    description:
      '3D Solar System in the browser: planets, textures, moons, orbits, constellations, and space effects (starfield, Milky Way, bloom).',
    bullets: [
      '3D planets, moons, and orbits.',
      'Constellations and space effects.',
    ],
    links: [{ type: 'github', label: 'GitHub', href: 'https://github.com/albertshkhyan/3d-portfolio-solar-system-' }],
  },
  {
    title: 'codegapper-playground',
    category: 'personal',
    date: '2024',
    location: '—',
    tags: ['TypeScript'],
    description:
      'Interactive JS learning tool — generates fill-in-the-blanks exercises from your code via AST parsing.',
    bullets: ['AST-based exercise generation.', 'Interactive code editing.'],
    links: [{ type: 'github', label: 'GitHub', href: 'https://github.com/albertshkhyan/codegapper-playground' }],
  },
  {
    title: 'code-explainer-ai',
    category: 'personal',
    date: '2024',
    location: '—',
    tags: ['TypeScript'],
    description:
      'AI developer tool that explains code inside the editor (structured comments), including line-by-line explanations and complexity notes.',
    bullets: ['Line-by-line code explanations.', 'Complexity notes.'],
    links: [{ type: 'github', label: 'GitHub', href: 'https://github.com/albertshkhyan/code-explainer-ai' }],
  },
  {
    title: 'telegram-lite-frontend',
    category: 'personal',
    date: '2023',
    location: '—',
    tags: ['React', 'TypeScript', 'Socket.io', 'Tailwind CSS'],
    description:
      'Real-time chat UI with auth + messaging UX (infinite scroll, optimistic updates).',
    bullets: ['Real-time messaging.', 'Auth and optimistic updates.'],
    links: [{ type: 'github', label: 'GitHub', href: 'https://github.com/albertshkhyan/telegram-lite-frontend' }],
  },
  {
    title: 'telegram-lite-backend',
    category: 'personal',
    date: '2023',
    location: '—',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.io'],
    description:
      'Backend for real-time chat: WebSocket messaging + REST APIs + auth.',
    bullets: ['WebSocket and REST APIs.', 'Auth and persistence.'],
    links: [{ type: 'github', label: 'GitHub', href: 'https://github.com/albertshkhyan/telegram-lite-backend' }],
  },
  {
    title: 'offline-issues-tracker',
    category: 'personal',
    date: '2023',
    location: '—',
    tags: ['React Native', 'Expo', 'TypeScript'],
    description:
      'Offline-first React Native tracker: works without internet, syncs changes when connection returns (optimistic UX + persistence).',
    bullets: ['Offline-first with sync.', 'Optimistic updates.'],
    links: [{ type: 'github', label: 'GitHub', href: 'https://github.com/albertshkhyan/offline-issues-tracker' }],
  },
  {
    title: 'binance-clone',
    category: 'personal',
    date: '2023',
    location: '—',
    tags: ['React Native', 'Expo', 'TypeScript'],
    description:
      'Binance-inspired mobile UI focused on animations and market-data style screens.',
    bullets: ['Market data UI.', 'Animations and charts.'],
    links: [{ type: 'github', label: 'GitHub', href: 'https://github.com/albertshkhyan/binance-clone' }],
  },
  {
    title: 'my-fits-demo',
    category: 'personal',
    date: '2023',
    location: '—',
    tags: ['SwiftUI'],
    description:
      'iOS SwiftUI wardrobe app demo: organize clothes, style boards, closet value, wishlist + animated stats.',
    bullets: ['Closet organization.', 'Style boards and stats.'],
    links: [{ type: 'github', label: 'GitHub', href: 'https://github.com/albertshkhyan/my-fits-demo' }],
  },
  {
    title: 'nestjs-s3-upload-api',
    category: 'personal',
    date: '2023',
    location: '—',
    tags: ['NestJS', 'TypeScript', 'AWS S3', 'Swagger', 'JWT'],
    description:
      'Production-style NestJS API for pre-signed S3 uploads, JWT auth, and Swagger docs.',
    bullets: ['Pre-signed S3 uploads.', 'JWT and Swagger.'],
    links: [{ type: 'github', label: 'GitHub', href: 'https://github.com/albertshkhyan/nestjs-s3-upload-api' }],
  },
  {
    title: '2017-teaching-roadmap',
    category: 'personal',
    date: '2017',
    location: '—',
    tags: ['HTML'],
    description:
      'Teaching materials + lesson roadmap (used as a map for student lessons).',
    bullets: ['Lesson roadmap and materials.'],
    links: [{ type: 'github', label: 'GitHub', href: 'https://github.com/albertshkhyan/2017-teaching-roadmap' }],
  },
];
