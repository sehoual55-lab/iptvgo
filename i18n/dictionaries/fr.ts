import type { Dictionary } from "@/i18n/dictionaries/en";
import type { FeatureKey } from "@/config/pricing.config";

export const fr: Dictionary = {
  meta: {
    home: {
      title: "IPTVGO | Abonnement Streaming et IPTV Premium par IA 2026",
      description:
        "IPTVGO est la plateforme de streaming propulsée par l'IA : plus de 25 000 chaînes en direct et plus de 140 000 films et séries en 4K, activation instantanée et tous les appareils pris en charge. Découvrez le meilleur abonnement IPTVGO.",
    },
    pricing: {
      title: "Formules d'Abonnement et Tarifs IPTVGO",
      description:
        "Choisissez votre abonnement IPTVGO — Bronze, Gold, Platinum ou Exclusive. Streaming 4K, plus de 25 000 chaînes, activation instantanée et un sélecteur de connexions en temps réel.",
    },
    faq: {
      title: "FAQ IPTVGO — Réponses sur l'Application, le Lecteur et l'Installation",
      description:
        "Tout sur IPTVGO : comment fonctionnent l'application et le lecteur, les appareils compatibles, le délai d'activation, la qualité et l'assistance. Vos questions sur IPTVGO trouvent une réponse.",
    },
    installation: {
      title: "Installation IPTVGO — Configurez sur N'importe Quel Appareil",
      description:
        "Installation IPTVGO étape par étape pour Smart TV, Fire TV Stick, Android, Apple TV, MAG et plus encore. Commencez à regarder en quelques minutes.",
    },
    contact: {
      title: "Contactez IPTVGO — Assistance 24/7",
      description: "Échangez avec l'équipe IPTVGO 24/7 sur WhatsApp. Une aide rapide et chaleureuse pour l'installation, les formules et tout le reste.",
    },
    blog: {
      title: "Blog IPTVGO — Guides et Astuces de Streaming",
      description: "Guides, comparatifs et astuces de l'équipe IPTVGO sur le streaming, les appareils et comment tirer le meilleur de votre abonnement.",
    },
    privacy: {
      title: "Politique de Confidentialité IPTVGO",
      description: "Comment IPTVGO collecte, utilise et protège vos données. Lisez la Politique de Confidentialité d'IPTVGO couvrant les coordonnées, les messages WhatsApp et vos droits.",
    },
    refund: {
      title: "Politique de Remboursement IPTVGO",
      description: "La Politique de Remboursement d'IPTVGO : éligibilité, délai de remboursement, comment demander un remboursement via WhatsApp et les exclusions applicables.",
    },
    terms: {
      title: "Conditions d'Utilisation IPTVGO",
      description: "Les Conditions d'Utilisation d'IPTVGO — comptes, usage acceptable, responsabilité et modifications du service.",
    },
    dmca: {
      title: "Politique DMCA IPTVGO",
      description: "La Politique DMCA d'IPTVGO expliquant notre rôle de revendeur, la procédure de notification de retrait, les contre-notifications et comment nous contacter.",
    },
  },

  nav: {
    links: [
      { label: "Accueil", href: "" },
      { label: "Pourquoi IPTVGO", href: "#why" },
      { label: "Expérience", href: "#experience" },
      { label: "Tarifs", href: "#pricing" },
      { label: "Installation", href: "/installation" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
    getStarted: "Commencer",
    support: "Assistance sur WhatsApp",
  },

  hero: {
    badge: "Plateforme de streaming propulsée par l'IA",
    titleTop: "Le streaming, réinventé.",
    titleAurora: "Bienvenue sur IPTVGO.",
    subtitle:
      "Plus de 25 000 chaînes en direct et plus de 140 000 films et séries en 4K ultra-net — organisés intelligemment, activés instantanément et superbes sur chaque écran. Voici IPTVGO.",
    ctaPrimary: "Commencer à Regarder",
    ctaSecondary: "Voir les Formules",
    liveLabel: "En direct maintenant",
    dashboard: {
      title: "IPTVGO Control",
      uptime: "Disponibilité du système",
      streams: "Flux actifs",
      quality: "Qualité moyenne",
      now: "En cours de diffusion",
    },
    stats: [
      { value: "25,000+", label: "Chaînes en direct" },
      { value: "140,000+", label: "Films et Séries" },
      { value: "99.9%", label: "Disponibilité" },
      { value: "4K", label: "Ultra-HD" },
    ],
  },

  why: {
    eyebrow: "Pourquoi IPTVGO",
    title: "Pourquoi des millions de personnes choisissent IPTVGO",
    subtitle: "Des performances qui se ressentent, une fiabilité de confiance et une expérience conçue autour de vous.",
    cards: [
      { title: "Performances fulgurantes", text: "Des serveurs anti-freeze et un débit adaptatif gardent chaque flux fluide — même aux heures de pointe lors des grandes soirées de match." },
      { title: "Vraie netteté 4K", text: "Du véritable Ultra-HD, FHD et HD avec des détails précis et des couleurs riches, sans compromis d'upscaling." },
      { title: "Activation instantanée", text: "Commandez et commencez à regarder en quelques minutes. Votre accès est livré dès que vous êtes prêt." },
      { title: "Tous les appareils", text: "Smart TV, Fire TV, Android, Apple TV, MAG, téléphone et ordinateur — configurez une fois, regardez partout." },
      { title: "Assistance humaine, 24/7", text: "Une vraie équipe sur WhatsApp à toute heure, de la première installation à la moindre question." },
      { title: "Stabilité à toute épreuve", text: "99,9 % de disponibilité grâce à une infrastructure redondante, pour que l'image ne lâche jamais au moment crucial." },
    ],
  },

  coverage: {
    eyebrow: "Couverture Mondiale",
    title: "Une plateforme, une portée mondiale",
    subtitle: "Des serveurs répartis sur tous les continents offrent un streaming à faible latence où que vous soyez.",
    note: "Actif dans",
    countriesLabel: "pays",
    regions: [
      { name: "Royaume-Uni", tag: "Région principale" },
      { name: "Europe", tag: "Faible latence" },
      { name: "Amérique du Nord", tag: "HD et 4K" },
      { name: "Moyen-Orient", tag: "Couverture totale" },
      { name: "Asie-Pacifique", tag: "En expansion" },
      { name: "Afrique", tag: "En croissance" },
    ],
  },

  experience: {
    eyebrow: "Expérience de Streaming",
    title: "IPTVGO vs. l'IPTV ordinaire",
    subtitle: "Découvrez pourquoi l'expérience joue dans une autre catégorie.",
    colA: "IPTVGO",
    colB: "IPTV ordinaire",
    rows: [
      { feature: "Streaming 4K anti-freeze", a: "Oui", b: "Rare / mise en mémoire tampon" },
      { feature: "Bibliothèque organisée par IA", a: "Oui", b: "Non" },
      { feature: "Activation instantanée", a: "Minutes", b: "Heures / jours" },
      { feature: "Tous les appareils pris en charge", a: "Oui", b: "Limité" },
      { feature: "Assistance humaine 24/7", a: "Oui", b: "Lente / inexistante" },
      { feature: "99,9 % de disponibilité", a: "Oui", b: "Instable" },
    ],
  },

  devices: {
    eyebrow: "Compatibilité des Appareils",
    title: "Superbe sur chaque écran",
    subtitle: "IPTVGO s'adapte à tout ce sur quoi vous regardez — aucun matériel supplémentaire requis.",
    list: ["Smart TV", "Android TV", "Fire TV Stick", "Apple TV", "MAG Box", "Windows", "macOS", "iPhone", "Android"],
  },

  ai: {
    eyebrow: "Recommandations IA",
    title: "Votre soirée, sélectionnée par l'IA",
    subtitle: "IPTVGO apprend ce que vous aimez et fait remonter le bon programme à regarder — instantanément.",
    features: [
      { title: "Suggestions intelligentes", text: "Des recommandations personnalisées parmi la TV en direct, les films et les séries." },
      { title: "Reprendre la lecture", text: "Reprenez exactement là où vous vous étiez arrêté sur n'importe quel appareil." },
      { title: "Tendances près de chez vous", text: "Découvrez ce qui cartonne dans votre région ce soir." },
    ],
    picksLabel: "Les sélections IA de ce soir",
  },

  stories: {
    eyebrow: "Témoignages",
    title: "Plébiscité par les spectateurs partout",
    subtitle: "De vrais mots de la communauté IPTVGO.",
    testimonials: [
      { name: "James Whitfield", city: "London, UK", rating: 5, text: "IPTVGO est d'un tout autre niveau. Configuré sur mon Fire TV Stick en quelques minutes et le sport en 4K est irréprochable — jamais de coupure." },
      { name: "Sofia Ricci", city: "Milan, IT", rating: 5, text: "L'interface ressemble à une vraie application de streaming, pas à un service IPTV. Les sélections de l'IA sont vraiment utiles et l'image est superbe." },
      { name: "Lucas Moreau", city: "Lyon, FR", rating: 5, text: "Activation instantanée, immense bibliothèque et une assistance qui répond vraiment sur WhatsApp en quelques minutes. Exactement ce que j'espérais." },
      { name: "Emma Clarke", city: "Manchester, UK", rating: 5, text: "J'ai quitté mon ancien fournisseur et je ne suis jamais revenu en arrière. D'une solidité à toute épreuve sur chaque appareil de la maison." },
      { name: "Giulia Bianchi", city: "Rome, IT", rating: 5, text: "Films, séries et chaînes internationales, tous dans une qualité époustouflante. La meilleure décision d'abonnement IPTVGO que j'aie prise." },
      { name: "Chloé Dubois", city: "Paris, FR", rating: 5, text: "Élégant, rapide et fiable. Ça fonctionne, tout simplement, chaque soir. Je recommande vivement." },
    ],
  },

  pricing: {
    eyebrow: "Tarifs",
    title: "Choisissez votre formule IPTVGO",
    subtitle: "Des tarifs transparents, sans frais cachés. Utilisez le sélecteur + / − pour définir les connexions simultanées — le prix se met à jour automatiquement.",
    badgePopular: "Le Plus Populaire",
    badgeValue: "Meilleur Rapport Qualité-Prix",
    per: "pour",
    monthsTemplate: "{n} Mois",
    bonusTemplate: "+{n} Mois Offerts",
    connection: "connexion",
    connections: "connexions",
    addConnection: "Ajouter une connexion",
    removeConnection: "Retirer une connexion",
    connectionNote: "Première connexion au prix fort · chaque connexion supplémentaire 15 % moins chère",
    save: "économisez",
    order: "Commencer",
    footnote: "Paiement rapide et sécurisé via WhatsApp. Vos identifiants sont livrés instantanément après l'achat.",
    orderTemplate: "Bonjour IPTVGO ! Je souhaite la formule {plan} ({duration}) avec {conns} {unit} pour {price}. Merci de m'envoyer les prochaines étapes.",
    features: {
      liveChannels: "Plus de 25 000 chaînes TV en direct",
      moviesSeries: "Bibliothèque de films et séries",
      quality4k: "Qualité 4K / FHD / HD",
      international: "Chaînes internationales",
      adult: "Adulte 18+ (en option)",
      netflixPrime: "Contenus Netflix et Prime",
      epg: "Guide TV (EPG)",
      instantActivation: "Activation instantanée",
      allDevices: "Compatible avec tous les appareils",
      support247: "Assistance 24/7",
      stableServers: "Serveurs stables",
    } as Record<FeatureKey, string>,
  },

  installation: {
    eyebrow: "Installation",
    title: "Opérationnel en quatre étapes",
    subtitle: "Aucune compétence technique requise — la plupart des gens regardent en moins de cinq minutes.",
    steps: [
      { title: "Choisissez votre formule", text: "Sélectionnez l'abonnement IPTVGO qui vous convient et réglez en toute sécurité via WhatsApp." },
      { title: "Obtenez un accès instantané", text: "Recevez vos identifiants et les détails d'installation en quelques minutes, directement dans votre discussion." },
      { title: "Installez l'application", text: "Ajoutez le lecteur recommandé sur votre appareil — Smart TV, Fire TV, téléphone ou ordinateur." },
      { title: "Commencez le streaming", text: "Connectez-vous, laissez le guide se charger et profitez tout de suite de la TV en direct, des films et des séries en 4K." },
    ],
  },

  showcase: {
    eyebrow: "Contenus Premium",
    title: "Tout ce qui vaut la peine d'être regardé",
    subtitle: "Films, sport, enfants, documentaires et chaînes internationales — le tout au même endroit.",
    tabs: { movies: "Films", sport: "Sport", kids: "Enfants", docs: "Documentaires", intl: "International" },
    sport: ["Premier League", "Ligue des Champions", "Formule 1", "NBA et NFL", "Tournois du Grand Chelem", "Boxe et UFC", "Cricket", "Golf"],
    kids: ["Disney Channel", "Nickelodeon", "Cartoon Network", "Boomerang", "CBeebies", "Baby TV", "PBS Kids", "Disney Junior"],
    docs: ["National Geographic", "Discovery", "BBC Earth", "History", "Nat Geo Wild", "Science", "Curiosity", "PBS"],
    intl: ["Chaînes UK", "Italia Canali", "France TV", "USA Networks", "Arabe", "España", "Deutschland", "Türkçe"],
    countLabel: "Plus de 140 000 titres — mis à jour chaque jour",
    cta: "Obtenir l'Accès",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Vos questions sur IPTVGO, éclaircies",
    subtitle: "L'essentiel en un coup d'œil. Encore curieux ? Notre équipe est à un message près, 24/7.",
    viewAll: "Voir toutes les FAQ",
    items: [
      { q: "Qu'est-ce qu'IPTVGO ?", a: "IPTVGO est une plateforme de streaming premium propulsée par l'IA qui propose plus de 25 000 chaînes en direct et plus de 140 000 films et séries jusqu'en 4K via internet — sans parabole ni câble, sur n'importe quel appareil." },
      { q: "Comment fonctionnent l'application et le lecteur IPTVGO ?", a: "Après l'achat, vous recevez vos identifiants. Ajoutez-les au lecteur IPTVGO recommandé sur votre appareil et la liste complète des chaînes, l'EPG et la bibliothèque à la demande se chargent automatiquement." },
      { q: "L'activation est-elle rapide ?", a: "L'activation est instantanée — la plupart des clients reçoivent leurs identifiants et commencent à regarder quelques minutes après leur commande." },
      { q: "Quels appareils sont pris en charge ?", a: "IPTVGO fonctionne sur Smart TV (Samsung, LG), Fire TV Stick, Android TV, Apple TV, boîtiers MAG, iPhone, iPad, téléphones Android et ordinateurs Windows / macOS." },
      { q: "À quelle qualité de streaming puis-je m'attendre ?", a: "Du vrai 4K, du Full HD et du HD avec une technologie anti-freeze pour une lecture fluide, même pendant le sport en direct aux heures de pointe." },
      { q: "Y a-t-il un sélecteur de connexions ?", a: "Oui. Chaque formule vous permet d'ajouter des connexions simultanées avec le sélecteur + / − et le prix se met à jour automatiquement — chaque connexion supplémentaire est 15 % moins chère." },
      { q: "Quel est le meilleur abonnement IPTVGO ?", a: "Gold est notre formule la plus populaire pour son équilibre entre valeur et mois offerts, tandis qu'Exclusive propose la plus grande bibliothèque et la plus longue durée pour le meilleur rapport sur le long terme." },
      { q: "Proposez-vous une assistance ?", a: "Oui — une assistance humaine et chaleureuse 24/7 via WhatsApp, de l'installation à la moindre question en cours de route." },
      { q: "Puis-je utiliser IPTVGO sur plusieurs appareils à la fois ?", a: "Oui. Utilisez le sélecteur de connexions sur n'importe quelle formule pour ajouter des connexions simultanées — chaque formule permet de regarder sur plusieurs appareils en même temps, et chaque connexion supplémentaire est 15 % moins chère que la première." },
      { q: "De quel débit internet ai-je besoin ?", a: "Nous recommandons environ 25 Mbps pour un 4K fluide et environ 10 Mbps pour la HD. Plus que le débit brut, c'est la stabilité de la connexion qui compte le plus pour une lecture sans mise en mémoire tampon." },
      { q: "Comment payer et est-ce sécurisé ?", a: "Le paiement se finalise via WhatsApp et vos identifiants sont livrés instantanément une fois le paiement confirmé. Le processus est sécurisé, simple et pris en charge par notre équipe du début à la fin." },
      { q: "Puis-je obtenir un remboursement ?", a: "Oui — veuillez consulter notre Politique de Remboursement pour tous les détails. Les remboursements sont possibles dans le délai indiqué si nous ne parvenons pas à faire fonctionner le service pour vous." },
      { q: "Maintenez-vous la liste des chaînes à jour ?", a: "Oui. Notre grille de chaînes et notre bibliothèque VOD sont mises à jour en continu ; de nouvelles chaînes, de nouveaux films et de nouvelles séries sont donc ajoutés régulièrement sans aucune action de votre part." },
    ],
  },

  blog: {
    eyebrow: "Du Blog",
    title: "Guides et astuces de streaming",
    subtitle: "Tirez le meilleur d'IPTVGO grâce aux guides pratiques de notre équipe.",
    readMore: "Lire la suite",
    viewAll: "Voir tous les articles",
    posts: [
      {
        slug: "what-is-iptvgo-2026-guide",
        title: "Qu'est-ce qu'IPTVGO ? Le guide complet 2026",
        excerpt: "Comment fonctionne IPTVGO, ce que vous obtenez et pourquoi cela ressemble davantage à une application de streaming moderne qu'à un service IPTV traditionnel.",
        category: "Guide",
        date: "2026-06-20",
        readingTime: "7 min",
        cover: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=65",
        content: `## Qu'est-ce qu'IPTVGO ?\n\n**IPTVGO** est une plateforme de streaming premium propulsée par l'IA qui diffuse la TV en direct, les films et les séries via internet — sans parabole satellite ni décodeur câble.\n\n## Ce que vous obtenez\n\n- Plus de 25 000 chaînes en direct\n- Plus de 140 000 films et séries\n- Une vraie qualité 4K / FHD / HD\n- Tous les appareils pris en charge\n\n## Pourquoi c'est différent\n\nContrairement à l'IPTV ordinaire, IPTVGO organise votre bibliothèque intelligemment, s'active instantanément et s'affiche superbement sur chaque écran.\n\n## Pour commencer\n\nChoisissez une formule, réglez via WhatsApp, recevez vos identifiants en quelques minutes et commencez à regarder.`,
      },
      {
        slug: "best-iptvgo-subscription-how-to-choose",
        title: "Meilleur abonnement IPTVGO : comment choisir",
        excerpt: "Bronze, Gold, Platinum ou Exclusive ? Un décryptage clair pour vous aider à choisir la bonne formule IPTVGO.",
        category: "Comparatif",
        date: "2026-06-06",
        readingTime: "6 min",
        cover: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=65",
        content: `## Choisir votre formule\n\nChaque **abonnement IPTVGO** inclut le même socle de streaming premium — la différence tient à la durée, à la taille de la bibliothèque et à la valeur.\n\n### Bronze\nIdéal pour essayer IPTVGO pendant 12 mois.\n\n### Gold — le plus populaire\n15 mois plus 3 offerts, le meilleur équilibre global.\n\n### Platinum\nPlus de tout, pour les spectateurs assidus.\n\n### Exclusive — meilleur rapport qualité-prix\nLa plus grande bibliothèque et la plus longue durée.\n\n## Le sélecteur de connexions\n\nAjoutez des connexions simultanées sur n'importe quelle formule — chaque connexion supplémentaire est 15 % moins chère.`,
      },
      {
        slug: "iptvgo-installation-any-device",
        title: "Installation d'IPTVGO sur n'importe quel appareil",
        excerpt: "Un guide d'installation IPTVGO simple, étape par étape, pour Smart TV, Fire TV Stick, téléphones et plus encore.",
        category: "Installation",
        date: "2026-05-22",
        readingTime: "6 min",
        cover: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=65",
        content: `## Installation d'IPTVGO\n\nConfigurer **IPTVGO** ne prend que quelques minutes sur n'importe quel appareil.\n\n## Smart TV\n\nInstallez un lecteur compatible depuis le store de votre TV, saisissez vos identifiants et chargez le guide.\n\n## Fire TV Stick\n\nInstallez le lecteur via Downloader, connectez-vous et profitez du 4K.\n\n## Téléphone et ordinateur\n\nAjoutez l'application, connectez-vous et commencez à regarder instantanément.\n\n## Besoin d'aide ?\n\nNotre équipe est sur WhatsApp 24/7 pour vous aider à l'installation.`,
      },
    ],
  },

  finalCta: {
    title: "L'avenir du streaming est là",
    subtitle: "Rejoignez des dizaines de milliers de spectateurs sur IPTVGO. Activation instantanée, qualité 4K et assistance 24/7 — commencez ce soir.",
    primary: "Choisir Votre Formule",
    secondary: "Nous Contacter",
  },

  footer: {
    tagline: "IPTVGO — la plateforme de streaming propulsée par l'IA. Plus de 25 000 chaînes et plus de 140 000 titres en 4K, sur chaque appareil.",
    supportCta: "Assistance sur WhatsApp",
    availability: "Disponible 24/7 · réponse en quelques minutes",
    cols: {
      product: { title: "Produit", links: [
        { label: "Tarifs", href: "#pricing" },
        { label: "Installation", href: "/installation" },
        { label: "FAQ", href: "/faq" },
        { label: "Blog", href: "/blog" },
      ]},
      company: { title: "Entreprise", links: [
        { label: "Contact", href: "/contact" },
        { label: "Assistance", href: "/contact" },
      ]},
      legal: { title: "Mentions Légales", links: [
        { label: "Politique de Confidentialité", href: "/privacy" },
        { label: "Politique de Remboursement", href: "/refund" },
        { label: "Conditions d'Utilisation", href: "/terms" },
        { label: "DMCA", href: "/dmca" },
      ]},
    },
    rights: "Tous droits réservés.",
  },

  legal: {
    updated: "Dernière mise à jour : juillet 2026",
    privacy: {
      title: "Politique de Confidentialité",
      intro:
        "La présente Politique de Confidentialité explique quelles informations IPTVGO collecte, comment nous les utilisons et les choix dont vous disposez. Nous limitons la collecte de données au strict nécessaire pour fournir notre service et répondre à vos demandes.",
      sections: [
        { heading: "Qui nous sommes", body: "IPTVGO est un revendeur d'accès à des services de streaming tiers. Lorsque nous employons « nous » ou « IPTVGO » dans cette politique, nous désignons l'équipe qui exploite ce site web et notre canal d'assistance WhatsApp." },
        { heading: "Informations que nous collectons", body: "Nous collectons les informations que vous choisissez de partager avec nous lorsque vous nous contactez — généralement votre nom, votre numéro WhatsApp ou votre adresse e-mail, et le contenu des messages que vous envoyez. La création d'un compte sur ce site n'est pas requise et nous ne collectons pas sciemment d'informations personnelles sensibles." },
        { heading: "Comment nous utilisons vos informations", body: "Nous utilisons vos informations uniquement pour répondre à vos demandes, fournir et activer votre abonnement, offrir une assistance et traiter toute demande de remboursement. Nous pouvons également les utiliser pour vous envoyer des instructions d'installation et des informations relatives au service." },
        { heading: "Partage et vente", body: "Nous ne vendons pas vos données personnelles et ne les partageons pas avec des tiers à des fins de marketing qui leur seraient propres. Nous pouvons partager des informations limitées avec nos fournisseurs en amont uniquement lorsque cela est nécessaire pour activer ou maintenir votre accès." },
        { heading: "Conservation et sécurité des données", body: "Nous conservons vos informations uniquement le temps nécessaire pour fournir une assistance et répondre à nos besoins d'archivage, après quoi elles sont supprimées. Nous appliquons des mesures raisonnables pour protéger les informations dont nous avons la charge." },
        { heading: "Vos droits et contact", body: "Vous pouvez nous demander d'accéder aux informations que nous détenons à votre sujet, de les corriger ou de les supprimer. Pour formuler une demande ou poser une question sur cette politique, contactez-nous sur WhatsApp et nous vous répondrons rapidement." },
      ],
    },
    refund: {
      title: "Politique de Remboursement",
      intro:
        "Nous voulons que vous soyez satisfait d'IPTVGO. La présente Politique de Remboursement précise quand un remboursement est possible, comment le demander et les situations qui sortent du cadre de notre garantie.",
      sections: [
        { heading: "Délai d'éligibilité", body: "Vous pouvez demander un remboursement dans le délai indiqué à compter de la date d'achat si nous ne parvenons pas à faire fonctionner correctement le service sur votre appareil après un dépannage raisonnable avec notre équipe d'assistance." },
        { heading: "Comment demander un remboursement", body: "Pour demander un remboursement, écrivez-nous sur WhatsApp en indiquant les détails de votre commande et une brève description du problème. Merci de laisser à notre équipe une réelle possibilité de résoudre d'abord le problème, car la plupart des difficultés sont réglées rapidement." },
        { heading: "Comment les remboursements sont effectués", body: "Les remboursements approuvés sont effectués, dans la mesure du possible, via le moyen de paiement d'origine. Les délais de traitement dépendent de votre prestataire de paiement et échappent à notre contrôle direct." },
        { heading: "Exclusions", body: "Les remboursements ne sont pas possibles lorsque le service fonctionne comme décrit mais que vous avez changé d'avis après un usage prolongé, lorsque les problèmes proviennent de votre propre connexion internet ou de votre matériel, ou lorsque les identifiants ont été partagés avec des tiers." },
        { heading: "Contact", body: "Si vous avez des questions sur votre éligibilité ou sur l'état d'une demande, contactez-nous sur WhatsApp et nous serons ravis de vous aider." },
      ],
    },
    terms: {
      title: "Conditions d'Utilisation",
      intro:
        "Les présentes Conditions d'Utilisation régissent votre utilisation du site web et de l'abonnement IPTVGO. En achetant ou en utilisant notre service, vous acceptez ces conditions ; si vous ne les acceptez pas, veuillez ne pas utiliser le service.",
      sections: [
        { heading: "Utilisation du service", body: "IPTVGO fournit un accès à des contenus de streaming tiers pour un usage personnel et non commercial uniquement. Vous acceptez d'utiliser le service conformément à ces conditions et à toutes les lois applicables dans votre région." },
        { heading: "Comptes et accès", body: "Vos identifiants d'accès vous sont personnels et ne doivent pas être partagés, revendus ou publiés. Vous êtes responsable de la confidentialité de vos identifiants et de toute activité effectuée via votre accès." },
        { heading: "Usage acceptable", body: "Vous acceptez de ne pas faire un usage abusif du service, de ne pas tenter de contourner les limites techniques et de ne pas l'utiliser à des fins illicites. Nous pouvons suspendre ou résilier sans préavis un accès qui enfreint ces conditions." },
        { heading: "Disponibilité et responsabilité", body: "Nous visons une haute disponibilité mais ne garantissons pas un service ininterrompu, car la diffusion dépend de réseaux tiers et de votre propre connexion. Dans toute la mesure permise par la loi, notre responsabilité est limitée au montant que vous avez payé pour votre abonnement en cours." },
        { heading: "Modifications du service et des conditions", body: "Nous pouvons mettre à jour nos formules, nos fonctionnalités et ces conditions de temps à autre. La poursuite de l'utilisation du service après l'entrée en vigueur des modifications vaut acceptation des conditions mises à jour." },
        { heading: "Contact", body: "Si vous avez des questions sur ces conditions, contactez notre équipe sur WhatsApp." },
      ],
    },
    dmca: {
      title: "Politique DMCA",
      intro:
        "IPTVGO respecte les droits de propriété intellectuelle d'autrui. La présente politique explique notre rôle et la manière dont les titulaires de droits peuvent soumettre une notification concernant un contenu qu'ils estiment contrefaisant.",
      sections: [
        { heading: "Notre rôle", body: "IPTVGO agit en tant que revendeur et agrégateur d'accès à du streaming tiers. Nous n'hébergeons, ne stockons ni ne contrôlons nous-mêmes les contenus sous-jacents, et nous transmettons les notifications valables aux fournisseurs en amont concernés." },
        { heading: "Soumettre une notification", body: "Si vous êtes titulaire de droits et estimez qu'un contenu accessible via le service porte atteinte à vos droits, envoyez-nous une notification écrite identifiant l'œuvre concernée, le contenu en question et vos coordonnées, accompagnée d'une déclaration de bonne foi attestant de l'atteinte." },
        { heading: "Notre réponse", body: "Dès réception d'une notification valable et complète, nous agirons promptement pour la transmettre au fournisseur approprié et pour prendre les mesures raisonnables à notre disposition en réponse." },
        { heading: "Contre-notification", body: "Si vous estimez qu'un contenu a été identifié par erreur, vous pouvez soumettre une contre-notification comportant vos coordonnées, l'identification du contenu et une déclaration faite de bonne foi. Nous transmettrons les contre-notifications valables au plaignant initial." },
        { heading: "Contact", body: "Pour soumettre une notification ou une contre-notification, ou pour poser une question sur cette politique, contactez-nous sur WhatsApp et nous orienterons votre demande vers le bon interlocuteur." },
      ],
    },
  },

  country: {
    eyebrow: "IPTVGO France",
    flag: "🇫🇷",
    fullName: "la France",
    h1: "IPTVGO France",
    tagline: "la plateforme de streaming IA premium pour la France",
    intro:
      "IPTVGO France propose plus de 25 000 chaînes en direct et plus de 140 000 films et séries aux téléspectateurs de toute la France en 4K ultra-net — avec activation instantanée, tous les appareils pris en charge et une assistance 24 h/24.",
    citiesLabel: "Adopté par les téléspectateurs dans toute",
    cities: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Lille", "Bordeaux", "Nantes"],
    whyHeading: "Pourquoi les téléspectateurs français choisissent IPTVGO",
    localPoints: [
      { title: "Toutes les chaînes françaises", text: "TF1, Canal+, beIN Sports, RMC et toutes les grandes chaînes françaises, plus les favoris internationaux." },
      { title: "Ligue 1 en direct en 4K", text: "Chaque soirée en superbe Ultra-HD avec une stabilité anti-freeze." },
      { title: "Prêt en quelques minutes", text: "Fonctionne sur Fire TV Stick, Smart TV, téléphone ou ordinateur — aucun technicien requis." },
      { title: "Assistance en français", text: "Une vraie équipe sur WhatsApp à toute heure." },
    ],
    otherLabel: "Également disponible pour",
  },

  common: {
    live: "En direct",
    language: "Langue",
    home: "Accueil",
  },
};
