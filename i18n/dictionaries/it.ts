import type { Dictionary } from "@/i18n/dictionaries/en";
import type { FeatureKey } from "@/config/pricing.config";

export const it: Dictionary = {
  meta: {
    home: {
      title: "IPTVGO | Abbonamento Streaming e IPTV Premium con AI 2026",
      description:
        "IPTVGO è la piattaforma di streaming basata sull'AI: oltre 25.000 canali live e più di 140.000 film e serie in 4K, attivazione immediata e ogni dispositivo supportato. Scopri il miglior abbonamento IPTVGO.",
    },
    pricing: {
      title: "Piani di Abbonamento e Prezzi IPTVGO",
      description:
        "Scegli il tuo abbonamento IPTVGO — Bronze, Gold, Platinum o Exclusive. Streaming 4K, oltre 25.000 canali, attivazione immediata e un selettore di connessioni in tempo reale.",
    },
    faq: {
      title: "FAQ IPTVGO — Risposte su App, Player e Configurazione",
      description:
        "Tutto su IPTVGO: come funzionano l'app e il player, i dispositivi supportati, i tempi di attivazione, la qualità e l'assistenza. Le tue domande su IPTVGO trovano risposta.",
    },
    installation: {
      title: "Installazione IPTVGO — Configura su Qualsiasi Dispositivo",
      description:
        "Installazione IPTVGO passo dopo passo per Smart TV, Fire TV Stick, Android, Apple TV, MAG e altro. Inizia a guardare in pochi minuti.",
    },
    contact: {
      title: "Contatta IPTVGO — Assistenza 24/7",
      description: "Parla con il team IPTVGO 24/7 su WhatsApp. Aiuto rapido e cordiale per configurazione, piani e qualsiasi altra cosa.",
    },
    blog: {
      title: "Blog IPTVGO — Guide e Consigli sullo Streaming",
      description: "Guide, confronti e consigli dal team IPTVGO su streaming, dispositivi e come sfruttare al meglio il tuo abbonamento.",
    },
    privacy: {
      title: "Informativa sulla Privacy di IPTVGO",
      description: "Come IPTVGO raccoglie, utilizza e protegge i tuoi dati. Leggi l'Informativa sulla Privacy di IPTVGO su dati di contatto, messaggi WhatsApp e i tuoi diritti.",
    },
    refund: {
      title: "Politica di Rimborso di IPTVGO",
      description: "La Politica di Rimborso di IPTVGO: idoneità, finestra di rimborso, come richiedere un rimborso via WhatsApp e le esclusioni applicabili.",
    },
    terms: {
      title: "Termini di Servizio di IPTVGO",
      description: "I Termini di Servizio per l'utilizzo di IPTVGO — account, uso accettabile, responsabilità e modifiche al servizio.",
    },
    dmca: {
      title: "Politica DMCA di IPTVGO",
      description: "La Politica DMCA di IPTVGO che spiega il nostro ruolo di rivenditore, la procedura di notifica per la rimozione, le contro-notifiche e come contattarci.",
    },
  },

  nav: {
    links: [
      { label: "Home", href: "" },
      { label: "Perché IPTVGO", href: "#why" },
      { label: "Esperienza", href: "#experience" },
      { label: "Prezzi", href: "#pricing" },
      { label: "Installazione", href: "/installation" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
    getStarted: "Inizia Ora",
    support: "Assistenza su WhatsApp",
  },

  hero: {
    badge: "Piattaforma di Streaming basata sull'AI",
    titleTop: "Lo streaming, reinventato.",
    titleAurora: "Benvenuto su IPTVGO.",
    subtitle:
      "Oltre 25.000 canali live e più di 140.000 film e serie in 4K nitidissimo — organizzati in modo intelligente, attivati all'istante e splendidi su ogni schermo. Questo è IPTVGO.",
    ctaPrimary: "Inizia a Guardare",
    ctaSecondary: "Vedi i Piani",
    liveLabel: "In diretta ora",
    dashboard: {
      title: "IPTVGO Control",
      uptime: "Tempo di attività del sistema",
      streams: "Stream attivi",
      quality: "Qualità media",
      now: "In riproduzione ora",
    },
    stats: [
      { value: "25,000+", label: "Canali Live" },
      { value: "140,000+", label: "Film e Serie" },
      { value: "99.9%", label: "Tempo di attività" },
      { value: "4K", label: "Ultra-HD" },
    ],
  },

  why: {
    eyebrow: "Perché IPTVGO",
    title: "Perché milioni di persone scelgono IPTVGO",
    subtitle: "Prestazioni che senti, affidabilità di cui ti puoi fidare e un'esperienza pensata su misura per te.",
    cards: [
      { title: "Prestazioni fulminee", text: "Server anti-freeze e bitrate adattivo mantengono ogni stream fluido — anche nelle ore di punta delle grandi serate calcistiche." },
      { title: "Vera nitidezza 4K", text: "Autentico Ultra-HD, FHD e HD con dettagli nitidi e colori ricchi, non compromessi in upscaling." },
      { title: "Attivazione immediata", text: "Ordina e inizia a guardare in pochi minuti. Il tuo accesso viene consegnato non appena sei pronto." },
      { title: "Ogni dispositivo", text: "Smart TV, Fire TV, Android, Apple TV, MAG, telefono e computer — configura una volta, guarda ovunque." },
      { title: "Assistenza umana, 24/7", text: "Un team reale su WhatsApp a qualsiasi ora, dalla prima configurazione a qualsiasi domanda tu abbia." },
      { title: "Stabilità solidissima", text: "99,9% di uptime garantito da un'infrastruttura ridondante, così l'immagine non cade mai quando conta." },
    ],
  },

  coverage: {
    eyebrow: "Copertura Globale",
    title: "Una piattaforma, portata mondiale",
    subtitle: "Server distribuiti in tutti i continenti garantiscono uno streaming a bassa latenza ovunque tu sia.",
    note: "Attivo in",
    countriesLabel: "paesi",
    regions: [
      { name: "Regno Unito", tag: "Regione principale" },
      { name: "Europa", tag: "Bassa latenza" },
      { name: "Nord America", tag: "HD e 4K" },
      { name: "Medio Oriente", tag: "Copertura totale" },
      { name: "Asia-Pacifico", tag: "In espansione" },
      { name: "Africa", tag: "In crescita" },
    ],
  },

  experience: {
    eyebrow: "Esperienza di Streaming",
    title: "IPTVGO vs. l'IPTV comune",
    subtitle: "Scopri perché l'esperienza gioca in un altro campionato.",
    colA: "IPTVGO",
    colB: "IPTV comune",
    rows: [
      { feature: "Streaming 4K anti-freeze", a: "Sì", b: "Raro / buffering" },
      { feature: "Libreria organizzata dall'AI", a: "Sì", b: "No" },
      { feature: "Attivazione immediata", a: "Minuti", b: "Ore / giorni" },
      { feature: "Tutti i dispositivi supportati", a: "Sì", b: "Limitato" },
      { feature: "Assistenza umana 24/7", a: "Sì", b: "Lenta / assente" },
      { feature: "Uptime del 99,9%", a: "Sì", b: "Instabile" },
    ],
  },

  devices: {
    eyebrow: "Compatibilità Dispositivi",
    title: "Splendido su ogni schermo",
    subtitle: "IPTVGO si adatta a qualunque cosa tu usi per guardare — nessun hardware aggiuntivo richiesto.",
    list: ["Smart TV", "Android TV", "Fire TV Stick", "Apple TV", "MAG Box", "Windows", "macOS", "iPhone", "Android"],
  },

  ai: {
    eyebrow: "Raccomandazioni AI",
    title: "La tua serata, curata dall'AI",
    subtitle: "IPTVGO impara ciò che ami e ti propone la cosa giusta da guardare — all'istante.",
    features: [
      { title: "Scelte intelligenti", text: "Suggerimenti personalizzati tra TV live, film e serie." },
      { title: "Continua a guardare", text: "Riprendi esattamente da dove avevi lasciato su qualsiasi dispositivo." },
      { title: "Di tendenza vicino a te", text: "Scopri cosa va forte nella tua regione stasera." },
    ],
    picksLabel: "Le scelte AI di stasera",
  },

  stories: {
    eyebrow: "Storie di Successo",
    title: "Amato dagli spettatori ovunque",
    subtitle: "Parole autentiche dalla community IPTVGO.",
    testimonials: [
      { name: "James Whitfield", city: "London, UK", rating: 5, text: "IPTVGO è di un altro livello. L'ho configurato sul mio Fire TV Stick in pochi minuti e lo sport in 4K è impeccabile — mai un buffering." },
      { name: "Sofia Ricci", city: "Milan, IT", rating: 5, text: "L'interfaccia sembra una vera app di streaming, non un servizio IPTV. Le scelte dell'AI sono davvero utili e l'immagine è splendida." },
      { name: "Lucas Moreau", city: "Lyon, FR", rating: 5, text: "Attivazione immediata, libreria enorme e un'assistenza che risponde davvero su WhatsApp in pochi minuti. Esattamente ciò che speravo." },
      { name: "Emma Clarke", city: "Manchester, UK", rating: 5, text: "Sono passato dal mio vecchio provider e non mi sono più voltato indietro. Solidissimo su ogni dispositivo di casa." },
      { name: "Giulia Bianchi", city: "Rome, IT", rating: 5, text: "Film, serie e canali internazionali tutti in una qualità straordinaria. La migliore decisione di abbonamento IPTVGO che abbia mai preso." },
      { name: "Chloé Dubois", city: "Paris, FR", rating: 5, text: "Elegante, veloce e affidabile. Funziona e basta, ogni singola sera. Consigliatissimo." },
    ],
  },

  pricing: {
    eyebrow: "Prezzi",
    title: "Scegli il tuo piano IPTVGO",
    subtitle: "Prezzi trasparenti, nessun costo nascosto. Usa il selettore + / − per impostare le connessioni simultanee — il prezzo si aggiorna automaticamente.",
    badgePopular: "Più Popolare",
    badgeValue: "Miglior Valore",
    per: "per",
    monthsTemplate: "{n} Mesi",
    bonusTemplate: "+{n} Mesi Gratis",
    connection: "connessione",
    connections: "connessioni",
    addConnection: "Aggiungi connessione",
    removeConnection: "Rimuovi connessione",
    connectionNote: "Prima connessione a prezzo pieno · ogni aggiuntiva 15% più economica",
    save: "risparmi",
    order: "Inizia Ora",
    footnote: "Checkout rapido e sicuro via WhatsApp. I tuoi dati vengono consegnati all'istante dopo l'acquisto.",
    orderTemplate: "Ciao IPTVGO! Vorrei il piano {plan} ({duration}) con {conns} {unit} per {price}. Inviatemi i prossimi passaggi, per favore.",
    features: {
      liveChannels: "Oltre 25.000 canali TV live",
      moviesSeries: "Libreria di film e serie",
      quality4k: "Qualità 4K / FHD / HD",
      international: "Canali internazionali",
      adult: "Adulti 18+ (opzionale)",
      netflixPrime: "Contenuti Netflix e Prime",
      epg: "Guida TV (EPG)",
      instantActivation: "Attivazione immediata",
      allDevices: "Compatibile con tutti i dispositivi",
      support247: "Assistenza 24/7",
      stableServers: "Server stabili",
    } as Record<FeatureKey, string>,
  },

  installation: {
    eyebrow: "Installazione",
    title: "Operativo in quattro passaggi",
    subtitle: "Nessuna competenza tecnica necessaria — la maggior parte delle persone guarda in meno di cinque minuti.",
    steps: [
      { title: "Scegli il tuo piano", text: "Scegli l'abbonamento IPTVGO più adatto a te e completa il checkout in sicurezza via WhatsApp." },
      { title: "Ottieni accesso immediato", text: "Ricevi le tue credenziali e i dettagli di configurazione in pochi minuti, direttamente nella tua chat." },
      { title: "Installa l'app", text: "Aggiungi il player consigliato sul tuo dispositivo — Smart TV, Fire TV, telefono o computer." },
      { title: "Inizia lo streaming", text: "Accedi, lascia caricare la guida e goditi subito TV live, film e serie in 4K." },
    ],
  },

  showcase: {
    eyebrow: "Contenuti Premium",
    title: "Tutto ciò che vale la pena guardare",
    subtitle: "Film, sport, bambini, documentari e canali internazionali — tutto in un unico posto.",
    tabs: { movies: "Film", sport: "Sport", kids: "Bambini", docs: "Documentari", intl: "Internazionali" },
    sport: ["Premier League", "Champions League", "Formula 1", "NBA e NFL", "Tornei del Grande Slam", "Boxe e UFC", "Cricket", "Golf"],
    kids: ["Disney Channel", "Nickelodeon", "Cartoon Network", "Boomerang", "CBeebies", "Baby TV", "PBS Kids", "Disney Junior"],
    docs: ["National Geographic", "Discovery", "BBC Earth", "History", "Nat Geo Wild", "Science", "Curiosity", "PBS"],
    intl: ["Canali UK", "Italia Canali", "France TV", "USA Networks", "Arabi", "España", "Deutschland", "Türkçe"],
    countLabel: "Oltre 140.000 titoli — aggiornati ogni giorno",
    cta: "Ottieni Accesso",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Domande su IPTVGO, con risposta",
    subtitle: "L'essenziale a colpo d'occhio. Ancora curioso? Il nostro team è a un messaggio di distanza, 24/7.",
    viewAll: "Vedi tutte le FAQ",
    items: [
      { q: "Cos'è IPTVGO?", a: "IPTVGO è una piattaforma di streaming premium basata sull'AI che offre oltre 25.000 canali live e più di 140.000 film e serie fino al 4K via internet — senza parabola né cavo, su qualsiasi dispositivo." },
      { q: "Come funzionano l'app e il player IPTVGO?", a: "Dopo l'acquisto ricevi le tue credenziali. Inseriscile nel player IPTVGO consigliato sul tuo dispositivo e l'intera lista canali, l'EPG e la libreria on-demand si caricano automaticamente." },
      { q: "Quanto è veloce l'attivazione?", a: "L'attivazione è immediata — la maggior parte dei clienti riceve i propri dati e inizia a guardare pochi minuti dopo l'ordine." },
      { q: "Quali dispositivi sono supportati?", a: "IPTVGO funziona su Smart TV (Samsung, LG), Fire TV Stick, Android TV, Apple TV, box MAG, iPhone, iPad, telefoni Android e computer Windows / macOS." },
      { q: "Che qualità di streaming posso aspettarmi?", a: "Vero 4K, Full HD e HD con tecnologia anti-freeze per una riproduzione fluida, anche durante lo sport in diretta nelle ore di punta." },
      { q: "C'è un selettore di connessioni?", a: "Sì. Ogni piano ti consente di aggiungere connessioni simultanee con il selettore + / − e il prezzo si aggiorna automaticamente — ogni connessione extra costa il 15% in meno." },
      { q: "Qual è il miglior abbonamento IPTVGO?", a: "Gold è il nostro piano più popolare per il suo equilibrio tra valore e mesi bonus, mentre Exclusive offre la libreria più ampia e la durata più lunga per il miglior valore sul lungo periodo." },
      { q: "Offrite assistenza?", a: "Sì — assistenza umana e cordiale 24/7 via WhatsApp, dall'installazione a qualsiasi domanda lungo il percorso." },
      { q: "Posso usare IPTVGO su più dispositivi contemporaneamente?", a: "Sì. Usa il selettore di connessioni su qualsiasi piano per aggiungere connessioni simultanee — ogni piano consente di guardare su più dispositivi allo stesso tempo, e ogni connessione extra costa il 15% in meno della prima." },
      { q: "Di che velocità internet ho bisogno?", a: "Consigliamo circa 25 Mbps per un 4K fluido e circa 10 Mbps per l'HD. Più della velocità pura, è la stabilità della connessione ciò che conta di più per una riproduzione senza buffering." },
      { q: "Come si paga ed è sicuro?", a: "Il checkout si completa tramite WhatsApp e i tuoi dati vengono consegnati all'istante una volta confermato il pagamento. Il processo è sicuro, semplice e gestito dal nostro team dall'inizio alla fine." },
      { q: "Posso ottenere un rimborso?", a: "Sì — consulta la nostra Politica di Rimborso per tutti i dettagli. I rimborsi sono disponibili entro la finestra indicata se non riusciamo a far funzionare il servizio per te." },
      { q: "Tenete aggiornata la lista dei canali?", a: "Sì. La nostra lista canali e la libreria VOD vengono aggiornate continuamente, quindi nuovi canali, film e serie vengono aggiunti regolarmente senza alcun intervento da parte tua." },
    ],
  },

  blog: {
    eyebrow: "Dal Blog",
    title: "Guide e consigli sullo streaming",
    subtitle: "Ottieni di più da IPTVGO con le guide pratiche del nostro team.",
    readMore: "Leggi di più",
    viewAll: "Vedi tutti gli articoli",
    posts: [
      {
        slug: "what-is-iptvgo-2026-guide",
        title: "Cos'è IPTVGO? La guida completa 2026",
        excerpt: "Come funziona IPTVGO, cosa ottieni e perché sembra più un'app di streaming moderna che un tradizionale servizio IPTV.",
        category: "Guida",
        date: "2026-06-20",
        readingTime: "7 min",
        cover: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=65",
        content: `## Cos'è IPTVGO?\n\n**IPTVGO** è una piattaforma di streaming premium basata sull'AI che offre TV live, film e serie via internet — senza parabola satellitare né decoder via cavo.\n\n## Cosa ottieni\n\n- Oltre 25.000 canali live\n- Più di 140.000 film e serie\n- Vera qualità 4K / FHD / HD\n- Ogni dispositivo supportato\n\n## Perché è diverso\n\nA differenza dell'IPTV comune, IPTVGO organizza la tua libreria in modo intelligente, si attiva all'istante e appare splendido su ogni schermo.\n\n## Come iniziare\n\nScegli un piano, completa il checkout via WhatsApp, ricevi i tuoi dati in pochi minuti e inizia a guardare.`,
      },
      {
        slug: "best-iptvgo-subscription-how-to-choose",
        title: "Miglior abbonamento IPTVGO: come scegliere",
        excerpt: "Bronze, Gold, Platinum o Exclusive? Una spiegazione chiara per aiutarti a scegliere il piano IPTVGO giusto.",
        category: "Confronto",
        date: "2026-06-06",
        readingTime: "6 min",
        cover: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=65",
        content: `## Scegliere il tuo piano\n\nOgni **abbonamento IPTVGO** include lo stesso nucleo di streaming premium — la differenza è la durata, la dimensione della libreria e il valore.\n\n### Bronze\nPerfetto per provare IPTVGO per 12 mesi.\n\n### Gold — il più popolare\n15 mesi più 3 gratis, il miglior equilibrio complessivo.\n\n### Platinum\nDi più su tutto, per gli spettatori più assidui.\n\n### Exclusive — miglior valore\nLa libreria più ampia e la durata più lunga.\n\n## Il selettore di connessioni\n\nAggiungi connessioni simultanee su qualsiasi piano — ognuna in più costa il 15% in meno.`,
      },
      {
        slug: "iptvgo-installation-any-device",
        title: "Installazione IPTVGO su qualsiasi dispositivo",
        excerpt: "Una semplice guida passo dopo passo all'installazione di IPTVGO per Smart TV, Fire TV Stick, telefoni e altro.",
        category: "Installazione",
        date: "2026-05-22",
        readingTime: "6 min",
        cover: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=65",
        content: `## Installazione IPTVGO\n\nConfigurare **IPTVGO** richiede solo pochi minuti su qualsiasi dispositivo.\n\n## Smart TV\n\nInstalla un player compatibile dallo store della tua TV, inserisci i tuoi dati e carica la guida.\n\n## Fire TV Stick\n\nInstalla il player tramite Downloader, accedi e goditi il 4K.\n\n## Telefono e computer\n\nAggiungi l'app, accedi e inizia a guardare all'istante.\n\n## Serve una mano?\n\nIl nostro team è su WhatsApp 24/7 per aiutarti nella configurazione.`,
      },
    ],
  },

  finalCta: {
    title: "Il futuro dello streaming è qui",
    subtitle: "Unisciti a decine di migliaia di spettatori su IPTVGO. Attivazione immediata, qualità 4K e assistenza 24/7 — inizia stasera.",
    primary: "Scegli il Tuo Piano",
    secondary: "Parla con Noi",
  },

  footer: {
    tagline: "IPTVGO — la piattaforma di streaming basata sull'AI. Oltre 25.000 canali e più di 140.000 titoli in 4K, su ogni dispositivo.",
    supportCta: "Assistenza su WhatsApp",
    availability: "Disponibile 24/7 · rispondiamo in pochi minuti",
    cols: {
      product: { title: "Prodotto", links: [
        { label: "Prezzi", href: "#pricing" },
        { label: "Installazione", href: "/installation" },
        { label: "FAQ", href: "/faq" },
        { label: "Blog", href: "/blog" },
      ]},
      company: { title: "Azienda", links: [
        { label: "Contatti", href: "/contact" },
        { label: "Assistenza", href: "/contact" },
      ]},
      legal: { title: "Note Legali", links: [
        { label: "Informativa sulla Privacy", href: "/privacy" },
        { label: "Politica di Rimborso", href: "/refund" },
        { label: "Termini di Servizio", href: "/terms" },
        { label: "DMCA", href: "/dmca" },
      ]},
    },
    rights: "Tutti i diritti riservati.",
  },

  legal: {
    updated: "Ultimo aggiornamento: luglio 2026",
    privacy: {
      title: "Informativa sulla Privacy",
      intro:
        "La presente Informativa sulla Privacy spiega quali informazioni IPTVGO raccoglie, come le utilizziamo e quali scelte hai a disposizione. Manteniamo la raccolta dei dati al minimo necessario per fornire il nostro servizio e rispondere alle tue richieste.",
      sections: [
        { heading: "Chi siamo", body: "IPTVGO è un rivenditore di accessi a servizi di streaming di terze parti. Quando in questa informativa parliamo di “noi” o “IPTVGO”, intendiamo il team che gestisce questo sito web e il nostro canale di assistenza WhatsApp." },
        { heading: "Informazioni che raccogliamo", body: "Raccogliamo i dati che scegli di condividere con noi quando ci contatti — di norma il tuo nome, il numero WhatsApp o l'indirizzo email e il contenuto dei messaggi che invii. Non è richiesta la creazione di un account su questo sito e non raccogliamo consapevolmente informazioni personali sensibili." },
        { heading: "Come utilizziamo le tue informazioni", body: "Utilizziamo le tue informazioni esclusivamente per rispondere alle tue richieste, fornire e attivare il tuo abbonamento, offrire assistenza ed elaborare eventuali richieste di rimborso. Possiamo inoltre usarle per inviarti istruzioni di configurazione e aggiornamenti relativi al servizio." },
        { heading: "Condivisione e vendita", body: "Non vendiamo i tuoi dati personali e non li condividiamo con terze parti per le loro finalità di marketing. Possiamo condividere dati limitati con i nostri fornitori a monte solo ove necessario per attivare o mantenere il tuo accesso." },
        { heading: "Conservazione e sicurezza dei dati", body: "Conserviamo i tuoi dati solo per il tempo necessario a fornire assistenza e soddisfare le nostre esigenze di archiviazione, dopodiché vengono eliminati. Applichiamo misure ragionevoli per proteggere le informazioni in nostro possesso." },
        { heading: "I tuoi diritti e i contatti", body: "Puoi chiederci di accedere, correggere o eliminare le informazioni che deteniamo su di te. Per inoltrare una richiesta o porre una domanda su questa informativa, contattaci su WhatsApp e ti risponderemo prontamente." },
      ],
    },
    refund: {
      title: "Politica di Rimborso",
      intro:
        "Vogliamo che tu sia soddisfatto di IPTVGO. La presente Politica di Rimborso stabilisce quando è disponibile un rimborso, come richiederlo e le situazioni che esulano dalla nostra garanzia.",
      sections: [
        { heading: "Finestra di idoneità", body: "Puoi richiedere un rimborso entro la finestra indicata dalla data di acquisto se non riusciamo a far funzionare correttamente il servizio sul tuo dispositivo dopo una ragionevole assistenza tecnica con il nostro team." },
        { heading: "Come richiedere un rimborso", body: "Per richiedere un rimborso, scrivici su WhatsApp indicando i dettagli del tuo ordine e una breve descrizione del problema. Ti chiediamo di concedere al nostro team una giusta possibilità di risolvere prima il problema, poiché la maggior parte delle difficoltà si risolve rapidamente." },
        { heading: "Come vengono emessi i rimborsi", body: "I rimborsi approvati vengono restituiti, ove possibile, con il metodo di pagamento originale. I tempi di elaborazione dipendono dal tuo fornitore di pagamento e sono al di fuori del nostro controllo diretto." },
        { heading: "Esclusioni", body: "I rimborsi non sono disponibili quando il servizio funziona come descritto ma hai cambiato idea dopo un uso prolungato, quando i problemi sono causati dalla tua connessione internet o dal tuo hardware, o quando i dati di accesso sono stati condivisi con altri." },
        { heading: "Contatti", body: "Se hai domande sulla tua idoneità o sullo stato di una richiesta, contattaci su WhatsApp e saremo lieti di aiutarti." },
      ],
    },
    terms: {
      title: "Termini di Servizio",
      intro:
        "I presenti Termini di Servizio regolano l'uso del sito web e dell'abbonamento IPTVGO. Acquistando o utilizzando il nostro servizio accetti questi termini; se non li accetti, ti preghiamo di non utilizzare il servizio.",
      sections: [
        { heading: "Uso del servizio", body: "IPTVGO fornisce l'accesso a contenuti di streaming di terze parti esclusivamente per uso personale e non commerciale. Accetti di utilizzare il servizio in conformità con questi termini e con tutte le leggi applicabili nella tua località." },
        { heading: "Account e accesso", body: "I tuoi dati di accesso sono personali e non devono essere condivisi, rivenduti o pubblicati. Sei responsabile della riservatezza dei tuoi dati e di tutte le attività che avvengono tramite il tuo accesso." },
        { heading: "Uso accettabile", body: "Accetti di non utilizzare impropriamente il servizio, di non tentare di aggirare i limiti tecnici e di non usarlo per scopi illeciti. Possiamo sospendere o revocare senza preavviso l'accesso che violi questi termini." },
        { heading: "Disponibilità e responsabilità", body: "Puntiamo a un'elevata disponibilità ma non garantiamo un servizio ininterrotto, poiché l'erogazione dipende da reti di terze parti e dalla tua connessione. Nella misura massima consentita dalla legge, la nostra responsabilità è limitata all'importo pagato per il tuo abbonamento in corso." },
        { heading: "Modifiche al servizio e ai termini", body: "Possiamo aggiornare di volta in volta i nostri piani, le funzionalità e questi termini. L'uso continuato del servizio dopo l'entrata in vigore delle modifiche implica l'accettazione dei termini aggiornati." },
        { heading: "Contatti", body: "Se hai domande su questi termini, contatta il nostro team su WhatsApp." },
      ],
    },
    dmca: {
      title: "Politica DMCA",
      intro:
        "IPTVGO rispetta i diritti di proprietà intellettuale altrui. La presente politica spiega il nostro ruolo e come i titolari dei diritti possono inviare una notifica riguardo a contenuti che ritengono lesivi.",
      sections: [
        { heading: "Il nostro ruolo", body: "IPTVGO opera come rivenditore e aggregatore di accessi a streaming di terze parti. Non ospitiamo, archiviamo o controlliamo direttamente i contenuti sottostanti e inoltriamo le notifiche valide ai fornitori a monte competenti." },
        { heading: "Invio di una notifica", body: "Se sei titolare di diritti e ritieni che un contenuto accessibile tramite il servizio violi i tuoi diritti, inviaci una notifica scritta che identifichi l'opera in questione, il materiale interessato e i tuoi dati di contatto, insieme a una dichiarazione in buona fede della violazione." },
        { heading: "La nostra risposta", body: "Alla ricezione di una notifica valida e completa, agiremo prontamente per inoltrarla al fornitore appropriato e per adottare le misure ragionevoli a nostra disposizione in risposta." },
        { heading: "Contro-notifica", body: "Se ritieni che il materiale sia stato identificato per errore, puoi inviare una contro-notifica con i tuoi dati di contatto, l'identificazione del materiale e una dichiarazione resa in buona fede. Inoltreremo le contro-notifiche valide al reclamante originario." },
        { heading: "Contatti", body: "Per inviare una notifica o una contro-notifica, o per porre una domanda su questa politica, contattaci su WhatsApp e indirizzeremo la tua richiesta nel posto giusto." },
      ],
    },
  },

  country: {
    eyebrow: "IPTVGO Italia",
    flag: "🇮🇹",
    fullName: "l'Italia",
    h1: "IPTVGO Italia",
    tagline: "la piattaforma di streaming AI premium per l'Italia",
    intro:
      "IPTVGO Italia porta oltre 25.000 canali live e più di 140.000 film e serie agli spettatori di tutta Italia in 4K nitidissimo — con attivazione immediata, ogni dispositivo supportato e assistenza 24 ore su 24.",
    citiesLabel: "Scelto dagli spettatori in tutta",
    cities: ["Milano", "Roma", "Napoli", "Torino", "Bologna", "Firenze", "Palermo", "Genova"],
    whyHeading: "Perché gli spettatori italiani scelgono IPTVGO",
    localPoints: [
      { title: "Tutti i canali italiani", text: "Rai, Mediaset, Sky, DAZN e tutti i principali canali italiani, oltre ai preferiti internazionali." },
      { title: "Serie A in diretta in 4K", text: "Ogni giornata in splendido Ultra-HD con stabilità anti-freeze." },
      { title: "Pronto in pochi minuti", text: "Funziona su Fire TV Stick, Smart TV, telefono o portatile — nessun tecnico necessario." },
      { title: "Assistenza in italiano", text: "Un team reale su WhatsApp a qualsiasi ora." },
    ],
    otherLabel: "Disponibile anche per",
  },

  common: {
    live: "In diretta",
    language: "Lingua",
    home: "Home",
  },
};
