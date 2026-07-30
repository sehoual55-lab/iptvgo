import type { FeatureKey } from "@/config/pricing.config";

export const en = {
  meta: {
    home: {
      title: "IPTVGO | AI-Powered Premium Streaming & IPTV Subscription 2026",
      description:
        "IPTVGO is the AI-powered streaming platform: 25,000+ live channels and 140,000+ movies & series in 4K, instant activation and every device supported. Discover the best IPTVGO subscription.",
    },
    pricing: {
      title: "IPTVGO Subscription Plans & Pricing",
      description:
        "Choose your IPTVGO subscription — Bronze, Gold, Platinum or Exclusive. 4K streaming, 25,000+ channels, instant activation and a live connection selector.",
    },
    faq: {
      title: "IPTVGO FAQ — Answers About the App, Player & Setup",
      description:
        "Everything about IPTVGO: how the app and player work, supported devices, activation time, quality and support. Your IPTVGO questions answered.",
    },
    installation: {
      title: "IPTVGO Installation — Set Up on Any Device",
      description:
        "Step-by-step IPTVGO installation for Smart TV, Fire TV Stick, Android, Apple TV, MAG and more. Get streaming in minutes.",
    },
    contact: {
      title: "Contact IPTVGO — 24/7 Support",
      description: "Talk to the IPTVGO team 24/7 on WhatsApp. Fast, friendly help with setup, plans and anything else.",
    },
    blog: {
      title: "IPTVGO Blog — Streaming Guides & Tips",
      description: "Guides, comparisons and tips from the IPTVGO team on streaming, devices, and getting the most from your subscription.",
    },
    privacy: {
      title: "IPTVGO Privacy Policy",
      description: "How IPTVGO collects, uses and protects your data. Read the IPTVGO Privacy Policy covering contact details, WhatsApp messages and your rights.",
    },
    refund: {
      title: "IPTVGO Refund Policy",
      description: "The IPTVGO Refund Policy: eligibility, the refund window, how to request a refund via WhatsApp and the exclusions that apply.",
    },
    terms: {
      title: "IPTVGO Terms of Service",
      description: "The Terms of Service for using IPTVGO — accounts, acceptable use, liability and changes to the service.",
    },
    dmca: {
      title: "IPTVGO DMCA Policy",
      description: "The IPTVGO DMCA Policy explaining our role as a reseller, the takedown notice procedure, counter-notices and how to contact us.",
    },
  },

  nav: {
    links: [
      { label: "Home", href: "" },
      { label: "Why IPTVGO", href: "#why" },
      { label: "Experience", href: "#experience" },
      { label: "Pricing", href: "#pricing" },
      { label: "Installation", href: "/installation" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
    getStarted: "Get Started",
    support: "Support on WhatsApp",
  },

  hero: {
    badge: "AI-Powered Streaming Platform",
    titleTop: "Streaming, reimagined.",
    titleAurora: "Welcome to IPTVGO.",
    subtitle:
      "25,000+ live channels and 140,000+ movies & series in razor-sharp 4K — intelligently organised, instantly activated, and beautiful on every screen. This is IPTVGO.",
    ctaPrimary: "Start Watching",
    ctaSecondary: "See Plans",
    liveLabel: "Live now",
    dashboard: {
      title: "IPTVGO Control",
      uptime: "System uptime",
      streams: "Active streams",
      quality: "Avg. quality",
      now: "Now streaming",
    },
    stats: [
      { value: "25,000+", label: "Live Channels" },
      { value: "140,000+", label: "Movies & Series" },
      { value: "99.9%", label: "Uptime" },
      { value: "4K", label: "Ultra-HD" },
    ],
  },

  why: {
    eyebrow: "Why IPTVGO",
    title: "Why millions choose IPTVGO",
    subtitle: "Performance you can feel, reliability you can trust, and an experience designed around you.",
    cards: [
      { title: "Blazing performance", text: "Anti-freeze servers and adaptive bitrate keep every stream smooth — even at peak time on the biggest match nights." },
      { title: "True 4K clarity", text: "Real Ultra-HD, FHD and HD with crisp detail and rich colour, not upscaled compromises." },
      { title: "Instant activation", text: "Order and start watching within minutes. Your access is delivered the moment you're ready." },
      { title: "Every device", text: "Smart TV, Fire TV, Android, Apple TV, MAG, phone and computer — set up once, watch anywhere." },
      { title: "Human support, 24/7", text: "A real team on WhatsApp around the clock, from first setup to any question you have." },
      { title: "Rock-solid stability", text: "99.9% uptime backed by redundant infrastructure, so the picture never drops when it matters." },
    ],
  },

  coverage: {
    eyebrow: "Global Coverage",
    title: "One platform, worldwide reach",
    subtitle: "Distributed servers across continents deliver low-latency streaming wherever you are.",
    note: "Live across",
    countriesLabel: "countries",
    regions: [
      { name: "United Kingdom", tag: "Home region" },
      { name: "Europe", tag: "Low latency" },
      { name: "North America", tag: "HD & 4K" },
      { name: "Middle East", tag: "Full coverage" },
      { name: "Asia-Pacific", tag: "Expanding" },
      { name: "Africa", tag: "Growing" },
    ],
  },

  experience: {
    eyebrow: "Streaming Experience",
    title: "IPTVGO vs. ordinary IPTV",
    subtitle: "See why the experience is in a different league.",
    colA: "IPTVGO",
    colB: "Ordinary IPTV",
    rows: [
      { feature: "4K anti-freeze streaming", a: "Yes", b: "Rare / buffering" },
      { feature: "AI-organised library", a: "Yes", b: "No" },
      { feature: "Instant activation", a: "Minutes", b: "Hours / days" },
      { feature: "All devices supported", a: "Yes", b: "Limited" },
      { feature: "24/7 human support", a: "Yes", b: "Slow / none" },
      { feature: "99.9% uptime", a: "Yes", b: "Unstable" },
    ],
  },

  devices: {
    eyebrow: "Device Compatibility",
    title: "Beautiful on every screen",
    subtitle: "IPTVGO adapts to whatever you watch on — no extra hardware required.",
    list: ["Smart TV", "Android TV", "Fire TV Stick", "Apple TV", "MAG Box", "Windows", "macOS", "iPhone", "Android"],
  },

  ai: {
    eyebrow: "AI Recommendations",
    title: "Your night in, curated by AI",
    subtitle: "IPTVGO learns what you love and surfaces the right thing to watch — instantly.",
    features: [
      { title: "Smart picks", text: "Personalised suggestions across live TV, films and series." },
      { title: "Continue watching", text: "Pick up exactly where you left off on any device." },
      { title: "Trending near you", text: "See what's hot in your region tonight." },
    ],
    picksLabel: "Tonight's AI picks",
  },

  stories: {
    eyebrow: "Success Stories",
    title: "Loved by viewers everywhere",
    subtitle: "Real words from the IPTVGO community.",
    testimonials: [
      { name: "James Whitfield", city: "London, UK", rating: 5, text: "IPTVGO is on another level. Set it up on my Fire TV Stick in minutes and the 4K sport is flawless — no buffering, ever." },
      { name: "Sofia Ricci", city: "Milan, IT", rating: 5, text: "The interface feels like a real streaming app, not an IPTV service. The AI picks are genuinely useful and the picture is stunning." },
      { name: "Lucas Moreau", city: "Lyon, FR", rating: 5, text: "Instant activation, huge library and support that actually replies on WhatsApp within minutes. Exactly what I hoped for." },
      { name: "Emma Clarke", city: "Manchester, UK", rating: 5, text: "Switched from my old provider and never looked back. Rock solid on every device in the house." },
      { name: "Giulia Bianchi", city: "Rome, IT", rating: 5, text: "Films, series and international channels all in stunning quality. The best IPTVGO subscription decision I've made." },
      { name: "Chloé Dubois", city: "Paris, FR", rating: 5, text: "Elegant, fast and reliable. It just works, every single evening. Highly recommend." },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    title: "Choose your IPTVGO plan",
    subtitle: "Transparent pricing, no hidden fees. Use the + / − selector to set simultaneous connections — the price updates automatically.",
    badgePopular: "Most Popular",
    badgeValue: "Best Value",
    per: "for",
    monthsTemplate: "{n} Months",
    bonusTemplate: "+{n} Months Free",
    connection: "connection",
    connections: "connections",
    addConnection: "Add connection",
    removeConnection: "Remove connection",
    connectionNote: "First connection at full price · each additional 15% cheaper",
    save: "save",
    order: "Get Started",
    footnote: "Fast, secure checkout via WhatsApp. Your details are delivered instantly after purchase.",
    orderTemplate: "Hi IPTVGO! I'd like the {plan} plan ({duration}) with {conns} {unit} for {price}. Please send me the next steps.",
    features: {
      liveChannels: "25,000+ Live TV channels",
      moviesSeries: "Movies & series library",
      quality4k: "4K / FHD / HD quality",
      international: "International channels",
      adult: "Adult 18+ (optional)",
      netflixPrime: "Netflix & Prime content",
      epg: "TV Guide (EPG)",
      instantActivation: "Instant activation",
      allDevices: "Compatible with all devices",
      support247: "24/7 support",
      stableServers: "Stable servers",
    } as Record<FeatureKey, string>,
  },

  installation: {
    eyebrow: "Installation",
    title: "Up and running in four steps",
    subtitle: "No technical skills needed — most people are watching in under five minutes.",
    steps: [
      { title: "Choose your plan", text: "Pick the IPTVGO subscription that fits you and checkout securely via WhatsApp." },
      { title: "Get instant access", text: "Receive your login and setup details within minutes, straight to your chat." },
      { title: "Install the app", text: "Add the recommended player on your device — Smart TV, Fire TV, phone or computer." },
      { title: "Start streaming", text: "Sign in, let the guide load and enjoy 4K live TV, films and series right away." },
    ],
  },

  showcase: {
    eyebrow: "Premium Content",
    title: "Everything worth watching",
    subtitle: "Movies, sport, kids, documentaries and international channels — all in one place.",
    tabs: { movies: "Movies", sport: "Sport", kids: "Kids", docs: "Documentaries", intl: "International" },
    sport: ["Premier League", "Champions League", "Formula 1", "NBA & NFL", "Tennis Majors", "Boxing & UFC", "Cricket", "Golf"],
    kids: ["Disney Channel", "Nickelodeon", "Cartoon Network", "Boomerang", "CBeebies", "Baby TV", "PBS Kids", "Disney Junior"],
    docs: ["National Geographic", "Discovery", "BBC Earth", "History", "Nat Geo Wild", "Science", "Curiosity", "PBS"],
    intl: ["UK Channels", "Italia Canali", "France TV", "USA Networks", "Arabic", "España", "Deutschland", "Türkçe"],
    countLabel: "140,000+ titles — updated daily",
    cta: "Get Access",
  },

  faq: {
    eyebrow: "FAQ",
    title: "IPTVGO questions, answered",
    subtitle: "The essentials at a glance. Still curious? Our team is one message away, 24/7.",
    viewAll: "View all FAQs",
    items: [
      { q: "What is IPTVGO?", a: "IPTVGO is a premium, AI-powered streaming platform delivering 25,000+ live channels and 140,000+ movies & series in up to 4K over the internet — no dish or cable required, on any device." },
      { q: "How does the IPTVGO app and player work?", a: "After purchase you receive your login details. Add them to the recommended IPTVGO player on your device, and the full channel list, EPG and on-demand library load automatically." },
      { q: "How fast is activation?", a: "Activation is instant — most customers receive their details and start watching within a few minutes of ordering." },
      { q: "Which devices are supported?", a: "IPTVGO works on Smart TV (Samsung, LG), Fire TV Stick, Android TV, Apple TV, MAG boxes, iPhone, iPad, Android phones and Windows / macOS computers." },
      { q: "What streaming quality can I expect?", a: "Real 4K, Full HD and HD with anti-freeze technology for smooth playback, even during peak-time live sport." },
      { q: "Is there a connection selector?", a: "Yes. Every plan lets you add simultaneous connections with the + / − selector, and the price updates automatically — each extra connection is 15% cheaper." },
      { q: "Which is the best IPTVGO subscription?", a: "Gold is our most popular plan for its balance of value and bonus months, while Exclusive offers the largest library and longest term for the best long-run value." },
      { q: "Do you offer support?", a: "Yes — friendly human support 24/7 via WhatsApp, from installation to any question along the way." },
      { q: "Can I use IPTVGO on multiple devices at once?", a: "Yes. Use the connection selector on any plan to add simultaneous connections — each plan supports watching on several devices at the same time, and every extra connection is 15% cheaper than the first." },
      { q: "What internet speed do I need?", a: "We recommend around 25 Mbps for smooth 4K and roughly 10 Mbps for HD. More than raw speed, a stable connection is what matters most for buffer-free playback." },
      { q: "How do I pay and is it secure?", a: "Checkout is completed over WhatsApp and your details are delivered instantly once payment is confirmed. The process is secure, simple and handled by our team from start to finish." },
      { q: "Can I get a refund?", a: "Yes — please see our Refund Policy for the full details. Refunds are available within the stated window if we are unable to get the service working for you." },
      { q: "Do you keep the channel list updated?", a: "Yes. Our channel line-up and VOD library are updated continuously, so new channels, films and series are added regularly without any action on your part." },
    ],
  },

  blog: {
    eyebrow: "From the Blog",
    title: "Guides & streaming tips",
    subtitle: "Get more from IPTVGO with practical guides from our team.",
    readMore: "Read more",
    viewAll: "View all articles",
    posts: [
      {
        slug: "what-is-iptvgo-2026-guide",
        title: "What is IPTVGO? The complete 2026 guide",
        excerpt: "How IPTVGO works, what you get, and why it feels more like a modern streaming app than a traditional IPTV service.",
        category: "Guide",
        date: "2026-06-20",
        readingTime: "7 min",
        cover: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=65",
        content: `## What is IPTVGO?\n\n**IPTVGO** is a premium, AI-powered streaming platform that delivers live TV, films and series over the internet — no satellite dish or cable box required.\n\n## What you get\n\n- 25,000+ live channels\n- 140,000+ movies & series\n- Real 4K / FHD / HD quality\n- Every device supported\n\n## Why it feels different\n\nUnlike ordinary IPTV, IPTVGO organises your library intelligently, activates instantly and looks beautiful on every screen.\n\n## Getting started\n\nChoose a plan, checkout via WhatsApp, receive your details in minutes and start watching.`,
      },
      {
        slug: "best-iptvgo-subscription-how-to-choose",
        title: "Best IPTVGO subscription: how to choose",
        excerpt: "Bronze, Gold, Platinum or Exclusive? A clear breakdown to help you pick the right IPTVGO plan.",
        category: "Comparison",
        date: "2026-06-06",
        readingTime: "6 min",
        cover: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=65",
        content: `## Choosing your plan\n\nEvery **IPTVGO subscription** includes the same premium streaming core — the difference is duration, library size and value.\n\n### Bronze\nGreat for trying IPTVGO over 12 months.\n\n### Gold — most popular\n15 months plus 3 free, the best all-round balance.\n\n### Platinum\nMore of everything for committed viewers.\n\n### Exclusive — best value\nThe largest library and the longest term.\n\n## The connection selector\n\nAdd simultaneous connections on any plan — each extra one is 15% cheaper.`,
      },
      {
        slug: "iptvgo-installation-any-device",
        title: "IPTVGO installation on any device",
        excerpt: "A simple, step-by-step IPTVGO installation guide for Smart TV, Fire TV Stick, phones and more.",
        category: "Installation",
        date: "2026-05-22",
        readingTime: "6 min",
        cover: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=65",
        content: `## IPTVGO installation\n\nSetting up **IPTVGO** takes just a few minutes on any device.\n\n## Smart TV\n\nInstall a compatible player from your TV store, enter your details and load the guide.\n\n## Fire TV Stick\n\nInstall the player via Downloader, sign in and enjoy 4K.\n\n## Phone & computer\n\nAdd the app, log in and start streaming instantly.\n\n## Need a hand?\n\nOur team is on WhatsApp 24/7 to help you set up.`,
      },
    ],
  },

  finalCta: {
    title: "The future of streaming is here",
    subtitle: "Join tens of thousands of viewers on IPTVGO. Instant activation, 4K quality and 24/7 support — start tonight.",
    primary: "Choose Your Plan",
    secondary: "Talk to Us",
  },

  footer: {
    tagline: "IPTVGO — the AI-powered streaming platform. 25,000+ channels and 140,000+ titles in 4K, on every device.",
    supportCta: "Support on WhatsApp",
    availability: "Available 24/7 · reply within minutes",
    cols: {
      product: { title: "Product", links: [
        { label: "Pricing", href: "#pricing" },
        { label: "Installation", href: "/installation" },
        { label: "FAQ", href: "/faq" },
        { label: "Blog", href: "/blog" },
      ]},
      company: { title: "Company", links: [
        { label: "Contact", href: "/contact" },
        { label: "Support", href: "/contact" },
      ]},
      legal: { title: "Legal", links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Refund Policy", href: "/refund" },
        { label: "Terms of Service", href: "/terms" },
        { label: "DMCA", href: "/dmca" },
      ]},
    },
    rights: "All rights reserved.",
  },

  legal: {
    updated: "Last updated: July 2026",
    privacy: {
      title: "Privacy Policy",
      intro:
        "This Privacy Policy explains what information IPTVGO collects, how we use it and the choices you have. We keep data collection to the minimum needed to provide our service and to answer your enquiries.",
      sections: [
        { heading: "Who we are", body: "IPTVGO is a reseller of third-party streaming access. When we refer to “we”, “us” or “IPTVGO” in this policy, we mean the team operating this website and our WhatsApp support channel." },
        { heading: "Information we collect", body: "We collect the details you choose to share with us when you contact us — typically your name, WhatsApp number or email address, and the content of the messages you send. We do not require you to create an account on this website, and we do not knowingly collect sensitive personal information." },
        { heading: "How we use your information", body: "We use your information solely to respond to your enquiries, deliver and activate your subscription, provide support and process any refund request. We may also use it to send you setup instructions and service-related updates." },
        { heading: "Sharing and selling", body: "We do not sell your personal data, and we do not share it with third parties for their own marketing. We may share limited details with our upstream providers only where necessary to activate or maintain your access." },
        { heading: "Data retention and security", body: "We keep your details only for as long as needed to provide support and meet our record-keeping needs, after which they are deleted. We apply reasonable safeguards to protect the information in our care." },
        { heading: "Your rights and contact", body: "You may ask us to access, correct or delete the information we hold about you. To make a request or ask a question about this policy, contact us on WhatsApp and we will respond promptly." },
      ],
    },
    refund: {
      title: "Refund Policy",
      intro:
        "We want you to be satisfied with IPTVGO. This Refund Policy sets out when a refund is available, how to request one and the situations that fall outside our guarantee.",
      sections: [
        { heading: "Eligibility window", body: "You may request a refund within the stated window from the date of purchase if we are unable to get the service working correctly on your device after reasonable troubleshooting with our support team." },
        { heading: "How to request a refund", body: "To request a refund, message us on WhatsApp with your order details and a short description of the problem. Please allow our team a fair opportunity to resolve the issue first, as most problems are fixed quickly." },
        { heading: "How refunds are issued", body: "Approved refunds are returned using the original payment method where possible. Processing times depend on your payment provider and are outside our direct control." },
        { heading: "Exclusions", body: "Refunds are not available where the service works as described but you have changed your mind after extensive use, where issues are caused by your own internet connection or hardware, or where account details have been shared with others." },
        { heading: "Contact", body: "If you have any questions about your eligibility or the status of a request, contact us on WhatsApp and we will be glad to help." },
      ],
    },
    terms: {
      title: "Terms of Service",
      intro:
        "These Terms of Service govern your use of the IPTVGO website and subscription. By purchasing or using our service you agree to these terms; if you do not agree, please do not use the service.",
      sections: [
        { heading: "Use of the service", body: "IPTVGO provides access to third-party streaming content for personal, non-commercial use only. You agree to use the service in line with these terms and all applicable laws in your location." },
        { heading: "Accounts and access", body: "Your access details are personal to you and must not be shared, resold or published. You are responsible for keeping your details confidential and for all activity that takes place through your access." },
        { heading: "Acceptable use", body: "You agree not to misuse the service, attempt to circumvent technical limits, or use it for any unlawful purpose. We may suspend or terminate access that breaches these terms without notice." },
        { heading: "Availability and liability", body: "We aim for high availability but do not guarantee uninterrupted service, as delivery depends on third-party networks and your own connection. To the fullest extent permitted by law, our liability is limited to the amount you paid for your current subscription." },
        { heading: "Changes to the service and terms", body: "We may update our plans, features and these terms from time to time. Continued use of the service after changes take effect means you accept the updated terms." },
        { heading: "Contact", body: "If you have questions about these terms, contact our team on WhatsApp." },
      ],
    },
    dmca: {
      title: "DMCA Policy",
      intro:
        "IPTVGO respects the intellectual property rights of others. This policy explains our role and how rights holders can submit a notice regarding content they believe is infringing.",
      sections: [
        { heading: "Our role", body: "IPTVGO operates as a reseller and aggregator of third-party streaming access. We do not host, store or control the underlying content ourselves, and we pass valid notices to the relevant upstream providers." },
        { heading: "Submitting a notice", body: "If you are a rights holder and believe content accessible through the service infringes your rights, please send us a written notice identifying the work concerned, the material in question and your contact details, together with a good-faith statement of infringement." },
        { heading: "Our response", body: "On receiving a valid and complete notice, we will act promptly to forward it to the appropriate provider and to take reasonable steps available to us in response." },
        { heading: "Counter-notice", body: "If you believe material was identified in error, you may submit a counter-notice with your contact details, identification of the material and a statement made in good faith. We will forward valid counter-notices to the original complainant." },
        { heading: "Contact", body: "To submit a notice or counter-notice, or to ask a question about this policy, contact us on WhatsApp and we will direct your request to the right place." },
      ],
    },
  },

  country: {
    eyebrow: "IPTVGO United Kingdom",
    flag: "🇬🇧",
    fullName: "the United Kingdom",
    h1: "IPTVGO UK",
    tagline: "Britain's premium AI streaming platform",
    intro:
      "IPTVGO UK brings 25,000+ live channels and 140,000+ films & series to viewers across the United Kingdom in razor-sharp 4K — with instant activation, every device supported and round-the-clock support.",
    citiesLabel: "Trusted by viewers across",
    cities: ["London", "Manchester", "Birmingham", "Glasgow", "Leeds", "Liverpool", "Edinburgh", "Bristol"],
    whyHeading: "Why UK viewers choose IPTVGO",
    localPoints: [
      { title: "All the UK channels", text: "BBC, ITV, Sky, BT Sport and every major British channel, plus international favourites." },
      { title: "Live Premier League in 4K", text: "Every match night in stunning Ultra-HD with anti-freeze stability." },
      { title: "Set up in minutes", text: "Works on your Fire TV Stick, Smart TV, phone or laptop — no engineer required." },
      { title: "UK-friendly support", text: "A real team on WhatsApp around the clock, in English." },
    ],
    otherLabel: "Also available for",
  },

  common: {
    live: "Live",
    language: "Language",
    home: "Home",
  },
};

export type Dictionary = typeof en;
