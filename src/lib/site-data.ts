export const BRAND = {
  name: "Hdesign",
  owner: "Mohamed Nassik",
  city: "Casablanca",
  country: "Maroc",
  tagline: "Infographiste, webdesigner & développeur freelance",
  phoneDesign: "+212 675 33 73 18",
  phoneDev: "+212 660 59 48 46",
  whatsapp: "212660594846",
  email: "contact@hdesign.ma",
};

export const NAV_LINKS = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "À propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
] as const;

export const STATS = [
  { value: "10", label: "ans d'expérience" },
  { value: "1", label: "interlocuteur unique" },
  { value: "100+", label: "projets livrés" },
  { value: "48h", label: "premiers visuels" },
];

export type ServiceCategory = "Identité visuelle" | "Impression" | "Site web";

export type Service = {
  slug: string;
  category: ServiceCategory;
  title: string;
  short: string;
  image: string;
  description: string;
  features: string[];
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "identite-visuelle",
    category: "Identité visuelle",
    title: "Identité visuelle",
    short: "Logo, charte graphique et image de marque stratégique, de la conception au suivi.",
    image: "https://hdesign.ma/style/images/art/Identit%C3%A9-de-Marque.jpg",
    description:
      "Une marque forte se reconnaît en un coup d'œil. Je conçois des identités visuelles cohérentes — logo, palette, typographie, ton — qui traduisent votre positionnement et restent lisibles sur tous vos supports, du print au digital.",
    features: [
      "Recherche de positionnement et benchmark concurrentiel",
      "Création de logo et déclinaisons (couleur, monochrome, favicon)",
      "Charte graphique complète (couleurs, typographies, usages)",
      "Déclinaison sur les supports de communication existants",
      "Accompagnement dans la durée pour garder une image cohérente",
    ],
    deliverables: ["Logo & déclinaisons", "Charte graphique (PDF)", "Fichiers sources", "Guide d'usage"],
  },
  {
    slug: "design-web",
    category: "Site web",
    title: "Design web & développement",
    short: "Sites vitrines, e-commerce et applications sur mesure : rapides, responsives, référencés.",
    image: "https://hdesign.ma/style/images/art/Design%20Web.jpg",
    description:
      "Un site qui charge vite, s'affiche parfaitement sur mobile et donne envie de rester. Je m'occupe de la conception graphique et du développement, pour un site qui vous ressemble et qui convertit vos visiteurs en clients.",
    features: [
      "Site vitrine, e-commerce ou plateforme sur mesure",
      "Design responsive pensé mobile-first",
      "Développement front-end moderne et performant",
      "Bonnes pratiques SEO dès la conception",
      "Formation à la prise en main et maintenance possible",
    ],
    deliverables: ["Maquettes", "Site en ligne", "Accès administrateur", "Documentation"],
  },
  {
    slug: "print-packaging",
    category: "Impression",
    title: "Print & packaging",
    short: "Affiches, brochures, catalogues, étiquettes et packaging prêts pour l'impression.",
    image: "https://hdesign.ma/style/images/art/Print%20Design.jpg",
    description:
      "Du flyer événementiel au packaging de série, chaque support imprimé est préparé avec un fichier propre, aux bonnes normes d'impression, prêt à partir chez votre imprimeur — ou je m'occupe du suivi de fabrication pour vous.",
    features: [
      "Affiches, flyers, brochures et catalogues",
      "Packaging et étiquettes pour produits alimentaires et cosmétiques",
      "Cartes de visite et supports corporate",
      "Panneaux publicitaires et habillage événementiel",
      "Suivi de fabrication avec vos imprimeurs",
    ],
    deliverables: ["Fichiers prêts à imprimer", "Bon à tirer", "Suivi de fabrication"],
  },
];

export type Project = {
  slug: string;
  name: string;
  category: ServiceCategory;
  text: string;
  description: string;
  highlights: string[];
  cover: string;
  gallery: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "amayya",
    name: "Amayya",
    category: "Impression",
    text: "Boulanger, pâtissier, chocolatier et glacier à Casablanca. Identité, packaging et campagnes print.",
    description:
      "Amayya réunit boulangerie, pâtisserie, chocolaterie et glacier sous une même adresse à Casablanca. L'enjeu : une identité gourmande et élégante, déclinée sur un packaging varié et des supports publicitaires cohérents.",
    highlights: ["Création du logo", "Packaging plateaux & coffrets", "Brochure 3 volets", "Panneau publicitaire"],
    cover: "https://hdesign.ma/style/images/art/slider%20amaya.jpg",
    gallery: [
      "https://hdesign.ma/style/images/art/logo-amaya.jpg",
      "https://hdesign.ma/style/images/art/packaging-plateaux.jpg",
      "https://hdesign.ma/style/images/art/brochure-3-volets.jpg",
      "https://hdesign.ma/style/images/art/panneau-publicitaire-amayya.jpg",
    ],
  },
  {
    slug: "femme-du-maroc",
    name: "Femme du Maroc",
    category: "Identité visuelle",
    text: "Magazine féminin et organisateur de l'événement Caftan : affiches, habillage et supports digitaux.",
    description:
      "Magazine féminin de référence et organisateur de l'événement Caftan, Femme du Maroc avait besoin d'une communication visuelle forte pour son événement phare, cohérente entre affichage, digital et présence sur les réseaux.",
    highlights: ["Affiche événementielle Caftan", "Habillage réseaux sociaux", "Kiosque & panneau publicitaire"],
    cover: "https://hdesign.ma/style/images/art/flyer--facebook.jpg",
    gallery: [
      "https://hdesign.ma/style/images/art/affiche-entierer-caftan-2013.jpg",
      "https://hdesign.ma/style/images/art/blog-caftan2016-791x960.jpg",
      "https://hdesign.ma/style/images/art/FDM.png",
      "https://hdesign.ma/style/images/art/panneau-publicitaire-kiosque.jpg",
    ],
  },
  {
    slug: "speak-up",
    name: "Speak Up",
    category: "Impression",
    text: "Centre d'apprentissage de l'anglais : logo, affiches événementielles et panneaux publicitaires.",
    description:
      "Centre d'apprentissage de l'anglais pour enfants et adultes. Le besoin : une identité dynamique et rassurante, capable de parler aussi bien aux parents qu'aux plus jeunes élèves, déclinée sur des campagnes d'affichage.",
    highlights: ["Création du logo", "Affiche A3 événementielle", "Campagne \"Anglais for Kids\""],
    cover: "https://hdesign.ma/style/images/art/slider%20speak%20up.png",
    gallery: [
      "https://hdesign.ma/style/images/art/logo-speakup1.jpg",
      "https://hdesign.ma/style/images/art/affiche-A3-evenement.jpg",
      "https://hdesign.ma/style/images/art/affiche-speakup-anglais-for-kids.jpg",
      "https://hdesign.ma/style/images/art/panneau-publicitaire-anglais-kids.jpg",
    ],
  },
  {
    slug: "luno-business",
    name: "Luno Business",
    category: "Identité visuelle",
    text: "Import-export de produits alimentaires à Casablanca : identité, carte de visite, catalogue et magazine.",
    description:
      "Société d'import-export de produits alimentaires basée à Casablanca. Objectif : une image professionnelle et internationale, du logo jusqu'aux supports commerciaux utilisés face aux partenaires et distributeurs.",
    highlights: ["Identité de marque", "Carte de visite", "Catalogue produits", "Magazine corporate"],
    cover: "https://hdesign.ma/style/images/art/page-couverteur.jpg",
    gallery: [
      "https://hdesign.ma/style/images/art/logo-luno%20(2).jpg",
      "https://hdesign.ma/style/images/art/carte-visite.jpg",
      "https://hdesign.ma/style/images/art/catalogue.jpg",
      "https://hdesign.ma/style/images/art/creation-magazine.jpg",
    ],
  },
  {
    slug: "art-glass",
    name: "Art Glass",
    category: "Site web",
    text: "Fabricant de vitrages isolants à Casablanca depuis 2010 : site web et communication publicitaire.",
    description:
      "Fabricant de vitrages isolants basé à Casablanca. Le site devait présenter clairement le savoir-faire technique et les gammes de produits, avec une communication publicitaire cohérente en soutien.",
    highlights: ["Conception du site web", "Communication publicitaire", "Présentation des gammes produits"],
    cover: "https://hdesign.ma/style/images/art/pub-hdesign-art-glass.jpg",
    gallery: [
      "https://hdesign.ma/style/images/art/creation-site-web.jpg",
      "https://hdesign.ma/style/images/art/site-web-art.jpg",
    ],
  },
  {
    slug: "goldin",
    name: "Goldin",
    category: "Site web",
    text: "Premier portail de bijouterie, joaillerie et horlogerie au Maroc : plateforme desktop et mobile.",
    description:
      "Portail dédié à la bijouterie, la joaillerie et l'horlogerie au Maroc. Un projet de plateforme complet, pensé desktop et mobile, avec une exigence particulière sur la mise en valeur visuelle des produits.",
    highlights: ["Conception UX/UI", "Développement desktop & mobile", "Mise en valeur des produits"],
    cover: "https://hdesign.ma/style/images/art/slider-hdesign.jpg",
    gallery: [
      "https://hdesign.ma/style/images/art/creation-site-web%20(2).jpg",
      "https://hdesign.ma/style/images/art/site-web-goldin.jpg",
      "https://hdesign.ma/style/images/art/site-web-portable-goldin.jpg",
    ],
  },
  {
    slug: "douceurs-du-maroc",
    name: "Les Douceurs du Maroc",
    category: "Impression",
    text: "Produits du terroir marocain en ligne : étiquettes, affiches et déclinaisons packaging.",
    description:
      "Marque de produits du terroir marocain vendus en ligne. Chaque référence (miel, amlou, épices...) a sa propre étiquette, avec une cohérence visuelle d'ensemble qui renforce la reconnaissance de la marque en rayon comme à l'écran.",
    highlights: ["Étiquettes produits", "Déclinaisons packaging", "Affiche saisonnière (Ftour)"],
    cover: "https://hdesign.ma/style/images/art/slider-les-etiquette-huile-miel.jpg",
    gallery: [
      "https://hdesign.ma/style/images/art/etiquette-amlou.jpg",
      "https://hdesign.ma/style/images/art/miel-caroubier.jpg",
      "https://hdesign.ma/style/images/art/etiquette-epices.jpg",
      "https://hdesign.ma/style/images/art/affiche-ftour.jpg",
    ],
  },
];

export const REFERENCES: [string, string][] = [
  ["ahlan", "https://hdesign.ma/style/images/art/ahlan-card.jpg"],
  ["amayya", "https://hdesign.ma/style/images/art/amayya.jpg"],
  ["Femme du Maroc", "https://hdesign.ma/style/images/art/fdm.jpg"],
  ["Ghita Chraibi", "https://hdesign.ma/style/images/art/ghita-chraibi.jpg"],
  ["GPS Fan", "https://hdesign.ma/style/images/art/gps-fan.jpg"],
  ["Iklil", "https://hdesign.ma/style/images/art/iklil.jpg"],
  ["Les Douceurs du Maroc", "https://hdesign.ma/style/images/art/les-douceurs-du-maroc.jpg"],
  ["Les Jardins du Rif", "https://hdesign.ma/style/images/art/les-jardins-du-rif.jpg"],
  ["Luno Business", "https://hdesign.ma/style/images/art/luno-business.jpg"],
  ["Olivart Art Gallery", "https://hdesign.ma/style/images/art/olivart-art-gallery.jpg"],
  ["Opes Cosmetics", "https://hdesign.ma/style/images/art/opes-cosmetics.jpg"],
  ["SerTV", "https://hdesign.ma/style/images/art/sertv.jpg"],
];

export const PROCESS_STEPS = [
  {
    title: "Brief",
    text: "On échange sur votre besoin, votre marché et vos objectifs pour cadrer le projet et son budget.",
  },
  {
    title: "Concept",
    text: "Vous recevez les premiers visuels sous 48h : pistes créatives, arborescence ou maquettes selon le projet.",
  },
  {
    title: "Réalisation",
    text: "Le concept validé est affiné et développé jusqu'au rendu final, avec des allers-retours réguliers.",
  },
  {
    title: "Livraison",
    text: "Vous recevez tous les fichiers sources, prêts à l'emploi, avec un accompagnement pour la mise en œuvre.",
  },
];

export const VALUES = [
  {
    title: "Interlocuteur unique",
    text: "Du brief à la mise en ligne, vous échangez avec une seule personne qui connaît votre projet de A à Z.",
  },
  {
    title: "Réactivité",
    text: "Premiers visuels sous 48h et retours rapides à chaque étape, pour ne jamais perdre le rythme.",
  },
  {
    title: "Sur-mesure",
    text: "Chaque identité, chaque site est pensé pour votre marque — pas de template générique recyclé.",
  },
  {
    title: "Accompagnement",
    text: "Au-delà de la livraison, un suivi dans la durée pour garder une image cohérente sur tous vos supports.",
  },
];

export const FAQ = [
  {
    question: "Quels sont les délais habituels ?",
    answer:
      "Les premières pistes créatives arrivent sous 48h. Le délai total dépend du projet : quelques jours pour un support print simple, 2 à 6 semaines pour une identité complète ou un site web sur mesure.",
  },
  {
    question: "Comment se passe la facturation ?",
    answer:
      "Chaque projet fait l'objet d'un devis détaillé avant démarrage, avec un acompte au lancement et le solde à la livraison. Les tarifs dépendent de la nature et de l'ampleur du projet.",
  },
  {
    question: "Travaillez-vous en dehors de Casablanca ?",
    answer:
      "Oui. Basé à Casablanca, j'interviens dans tout le Maroc et à l'international — la majorité des échanges se font à distance (téléphone, WhatsApp, visio).",
  },
  {
    question: "Combien de révisions sont incluses ?",
    answer:
      "Un nombre de séries de révisions raisonnable est inclus à chaque étape clé, précisé dans le devis, pour affiner le concept jusqu'à ce qu'il corresponde exactement à vos attentes.",
  },
  {
    question: "Puis-je vous confier uniquement le design ou uniquement le développement ?",
    answer:
      "Oui, les deux compétences sont complémentaires mais indépendantes : vous pouvez me confier uniquement l'identité visuelle, uniquement le développement d'un site déjà maquetté, ou l'ensemble du projet.",
  },
];
