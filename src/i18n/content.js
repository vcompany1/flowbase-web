// All visible text for the site, one object per language.
// To change a text, edit it here; the page layout lives in src/components/Page.astro.

export const APP_URL = 'https://flowbase-erp.vercel.app/';
export const CV_URL = 'https://vcompany1.github.io/vcompany/';
export const LINKEDIN_URL = 'https://linkedin.com/in/victorcompany/';
export const EMAIL = 'vcompany1@gmail.com';
export const WHATSAPP_NUMBER = '41772141958'; // international format, no + or spaces
export const WHATSAPP_DISPLAY = '+41 77 214 19 58';

export const languages = [
  { code: 'en', label: 'EN', path: '/' },
  { code: 'de', label: 'DE', path: '/de/' },
  { code: 'es', label: 'ES', path: '/es/' },
];

// Status keys used by the roadmap: live | started | planned
const roadmapItems = {
  en: [
    { name: 'BaseLine', desc: 'ERP and MRP core: purchasing, production, stock and sales', status: 'live' },
    { name: 'MES', desc: 'Shop-floor execution: storage locations, machines and operations', status: 'started' },
    { name: 'Lean', desc: 'Digital kanban, visual management and standard work', status: 'planned' },
    { name: 'APS', desc: 'Production scheduling against real capacity', status: 'planned' },
    { name: 'CMMS', desc: 'Preventive and corrective maintenance', status: 'planned' },
    { name: 'Quality', desc: 'Inspections, non-conformities and corrective actions', status: 'planned' },
    { name: 'IMS & Sustainability', desc: 'ISO 9001 and 14001 management, environmental indicators', status: 'planned' },
  ],
  de: [
    { name: 'BaseLine', desc: 'ERP- und MRP-Kern: Einkauf, Produktion, Lager und Verkauf', status: 'live' },
    { name: 'MES', desc: 'Fertigungssteuerung: Lagerorte, Maschinen und Arbeitsgänge', status: 'started' },
    { name: 'Lean', desc: 'Digitales Kanban, visuelles Management und Standardarbeit', status: 'planned' },
    { name: 'APS', desc: 'Produktionsplanung gegen reale Kapazität', status: 'planned' },
    { name: 'CMMS', desc: 'Vorbeugende und korrigierende Instandhaltung', status: 'planned' },
    { name: 'Qualität', desc: 'Prüfungen, Abweichungen und Korrekturmassnahmen', status: 'planned' },
    { name: 'IMS & Nachhaltigkeit', desc: 'Managementsystem nach ISO 9001 und 14001, Umweltkennzahlen', status: 'planned' },
  ],
  es: [
    { name: 'BaseLine', desc: 'Núcleo ERP y MRP: compras, producción, stock y ventas', status: 'live' },
    { name: 'MES', desc: 'Ejecución en planta: ubicaciones, máquinas y operaciones', status: 'started' },
    { name: 'Lean', desc: 'Kanban digital, gestión visual y trabajo estándar', status: 'planned' },
    { name: 'APS', desc: 'Planificación de la producción contra capacidad real', status: 'planned' },
    { name: 'CMMS', desc: 'Mantenimiento preventivo y correctivo', status: 'planned' },
    { name: 'Calidad', desc: 'Inspecciones, no conformidades y acciones correctivas', status: 'planned' },
    { name: 'IMS y Sostenibilidad', desc: 'Gestión ISO 9001 y 14001, indicadores ambientales', status: 'planned' },
  ],
};

export const content = {
  en: {
    meta: {
      title: 'FlowBase: ERP and MRP for small manufacturers',
      description:
        'FlowBase connects purchasing, production, stock by lot, sales and invoicing for small manufacturers. Try the live demo, no sign-up needed.',
    },
    nav: { product: 'What it covers', roadmap: 'Roadmap', about: 'About', contact: 'Contact', demo: 'Try the demo', language: 'Language', skip: 'Skip to content' },
    hero: {
      title: 'From purchase order to invoice, in one flow.',
      lead:
        'FlowBase is an ERP and MRP for small manufacturers. Purchasing, bills of materials, production, stock by lot, sales and invoicing work as one connected system, and it already runs a food business in Basel every day.',
      ctaDemo: 'Try the live demo',
      ctaMore: 'See what it covers',
      ctaContact: 'Get in touch',
      demoNote:
        'No sign-up. On the login screen, choose Demo to explore AlpenWerk Möbel GmbH, a sample Swiss furniture maker, for 15 minutes. Everything you change is reset afterwards.',
    },
    flow: {
      caption:
        'One customer order, followed end to end. Each document links to the one before it, so any lot can be traced back to its supplier.',
      rows: [
        { label: 'Purchase order', code: 'PO-2410-018', detail: '120 m² oak veneer' },
        { label: 'Goods receipt', code: 'RM-241014-03', detail: 'Lot booked to stock' },
        { label: 'Production', code: 'PR-2410-044', detail: '24 dining chairs' },
        { label: 'Delivery note', code: 'DN-2410-052', detail: 'Lots recorded per line' },
        { label: 'Invoice', code: 'INV-2410-031', detail: 'CHF 6,480.00' },
      ],
    },
    covers: {
      title: 'What FlowBase covers today',
      intro: 'Grouped the way material moves through a company: it comes in, gets transformed, goes out, and everything is kept under control.',
      groups: [
        {
          name: 'Buy',
          items: [
            'Suppliers, with several sources per item',
            'Purchase orders, goods receipts and supplier invoices',
            'Partial payments and open balances',
          ],
        },
        {
          name: 'Make',
          items: [
            'Multi-level bills of materials',
            'Material requirements that net the stock you already have',
            'Production orders that consume lots first in, first out',
            'Scrap and rejects recorded where they happen',
          ],
        },
        {
          name: 'Sell',
          items: [
            'Sales orders, delivery notes and invoices, including partial deliveries',
            'Customer payments and outstanding balance',
            'PDF documents in each company’s language',
            'Customer portal for delivery notes and invoices (pilot)',
          ],
        },
        {
          name: 'Control',
          items: [
            'Inventory by lot, storage location and expiry date',
            'Stock adjustments and incidents with full history',
            'Several companies on one platform, each fully isolated',
            'Interface in English, German and Spanish',
          ],
        },
      ],
    },
    story: {
      title: 'Built on a real production floor',
      body: [
        'FlowBase started as a spreadsheet for planning tortilla production at Española, a small food business in Basel. It grew into a web application that now runs that business: orders, batches, lots, delivery notes and invoices.',
        'From there it was generalised for discrete manufacturing and stress-tested with a sample furniture maker, built from six months of simulated operations. A second sample company, a textile producer, is being built now to validate new features.',
      ],
      facts: [
        { title: 'In daily use', text: 'Española’s purchasing, production and invoicing run on FlowBase.' },
        { title: 'Tested on industry', text: 'Six months of simulated operations at AlpenWerk exposed the gaps that were fixed next.' },
        { title: 'Built with method', text: 'Every change is specified in writing first, tested against the database, and checked in the browser before it ships.' },
      ],
      stack: 'React, Vite and Supabase (PostgreSQL). Designed and built by one person, with AI as a development partner.',
    },
    roadmap: {
      title: 'Where it’s going',
      intro:
        'The aim is to put Lean management within reach of any small company. BaseLine, the core, is live; the next modules build on the same data.',
      status: { live: 'Live', started: 'In progress', planned: 'Planned' },
      items: roadmapItems.en,
    },
    about: {
      title: 'Who builds it',
      name: 'Víctor Company',
      role: 'Mechanical engineer, Lean and operational excellence, Basel',
      body: [
        'I have spent more than ten years improving how products flow: in Mango’s supply chain, running my own restaurant, and leading Lean and the integrated management system at Liberdúplex, a book printer in Barcelona, where I was product owner for its MES and planning digitalisation.',
        'FlowBase is the tool I would have wanted on those floors: simple enough for a small company, and built around flow.',
      ],
      open: 'Open to Operational Excellence and Lean roles in the Basel region.',
      cv: 'Read my full CV',
      linkedin: 'LinkedIn',
    },
    projects: {
      title: 'Other projects',
      items: [
        { name: 'Española', text: 'Homemade Spanish tortilla, made in Basel. Its production runs on FlowBase.', url: 'https://espanola.ch', link: 'espanola.ch' },
        { name: 'Paella Basel', text: 'Valencian paella, cooked live at events around Basel.', url: 'https://paellabasel.ch', link: 'paellabasel.ch' },
      ],
    },
    contact: {
      title: 'Get in touch',
      text: 'Questions about FlowBase, a guided walkthrough of the demo, or a role? Write by email or WhatsApp, whichever suits you.',
      email: 'Send an email',
      whatsapp: 'Message on WhatsApp',
      whatsappText: 'Hi Víctor, I’m writing about FlowBase.',
    },
    footer: {
      text: 'FlowBase is a project by Víctor Company, Basel.',
      app: 'Open FlowBase',
    },
  },

  de: {
    meta: {
      title: 'FlowBase: ERP und MRP für kleine Produktionsbetriebe',
      description:
        'FlowBase verbindet Einkauf, Produktion, Lager nach Charge, Verkauf und Rechnungen für kleine Produktionsbetriebe. Live-Demo ohne Anmeldung.',
    },
    nav: { product: 'Funktionen', roadmap: 'Roadmap', about: 'Über mich', contact: 'Kontakt', demo: 'Demo testen', language: 'Sprache', skip: 'Zum Inhalt springen' },
    hero: {
      title: 'Von der Bestellung bis zur Rechnung, in einem Fluss.',
      lead:
        'FlowBase ist ein ERP und MRP für kleine Produktionsbetriebe. Einkauf, Stücklisten, Produktion, Lager nach Charge, Verkauf und Rechnungen arbeiten als ein verbundenes System, und es steuert bereits täglich einen Lebensmittelbetrieb in Basel.',
      ctaDemo: 'Live-Demo testen',
      ctaMore: 'Funktionen ansehen',
      ctaContact: 'Kontakt aufnehmen',
      demoNote:
        'Ohne Anmeldung. Wählen Sie im Login Demo und erkunden Sie 15 Minuten lang AlpenWerk Möbel GmbH, einen fiktiven Schweizer Möbelhersteller. Alle Änderungen werden danach zurückgesetzt.',
    },
    flow: {
      caption:
        'Ein Kundenauftrag, von Anfang bis Ende verfolgt. Jedes Dokument verweist auf das vorherige, so lässt sich jede Charge bis zum Lieferanten zurückverfolgen.',
      rows: [
        { label: 'Bestellung', code: 'PO-2410-018', detail: '120 m² Eichenfurnier' },
        { label: 'Wareneingang', code: 'RM-241014-03', detail: 'Charge eingelagert' },
        { label: 'Produktion', code: 'PR-2410-044', detail: '24 Esszimmerstühle' },
        { label: 'Lieferschein', code: 'DN-2410-052', detail: 'Chargen pro Position' },
        { label: 'Rechnung', code: 'INV-2410-031', detail: 'CHF 6’480.00' },
      ],
    },
    covers: {
      title: 'Was FlowBase heute abdeckt',
      intro: 'Gegliedert nach dem Weg des Materials durch den Betrieb: Es kommt herein, wird verarbeitet, geht hinaus, und alles bleibt unter Kontrolle.',
      groups: [
        {
          name: 'Einkaufen',
          items: [
            'Lieferanten, mit mehreren Bezugsquellen pro Artikel',
            'Bestellungen, Wareneingänge und Lieferantenrechnungen',
            'Teilzahlungen und offene Salden',
          ],
        },
        {
          name: 'Produzieren',
          items: [
            'Mehrstufige Stücklisten',
            'Materialbedarf mit Verrechnung des vorhandenen Bestands',
            'Fertigungsaufträge mit Chargenverbrauch nach FIFO',
            'Ausschuss und Reklamationen dort erfasst, wo sie entstehen',
          ],
        },
        {
          name: 'Verkaufen',
          items: [
            'Aufträge, Lieferscheine und Rechnungen, auch Teillieferungen',
            'Zahlungseingänge und offene Posten',
            'PDF-Dokumente in der Sprache jedes Unternehmens',
            'Kundenportal für Lieferscheine und Rechnungen (Pilot)',
          ],
        },
        {
          name: 'Kontrollieren',
          items: [
            'Bestand nach Charge, Lagerort und Verfallsdatum',
            'Bestandskorrekturen und Vorfälle mit vollständiger Historie',
            'Mehrere Unternehmen auf einer Plattform, jedes vollständig getrennt',
            'Oberfläche auf Deutsch, Englisch und Spanisch',
          ],
        },
      ],
    },
    story: {
      title: 'Entstanden in einer echten Produktion',
      body: [
        'FlowBase begann als Tabelle zur Planung der Tortilla-Produktion bei Española, einem kleinen Lebensmittelbetrieb in Basel. Daraus wurde eine Webanwendung, die diesen Betrieb heute steuert: Aufträge, Chargen, Lieferscheine und Rechnungen.',
        'Danach wurde es für die Stückfertigung verallgemeinert und mit einem fiktiven Möbelhersteller getestet, aufgebaut aus sechs Monaten simuliertem Betrieb. Ein zweites Beispielunternehmen, ein Textilproduzent, entsteht gerade, um neue Funktionen zu prüfen.',
      ],
      facts: [
        { title: 'Im täglichen Einsatz', text: 'Einkauf, Produktion und Rechnungen von Española laufen über FlowBase.' },
        { title: 'Industriell getestet', text: 'Sechs Monate simulierter Betrieb bei AlpenWerk zeigten die Lücken, die danach geschlossen wurden.' },
        { title: 'Mit Methode gebaut', text: 'Jede Änderung wird zuerst schriftlich spezifiziert, gegen die Datenbank getestet und im Browser geprüft, bevor sie live geht.' },
      ],
      stack: 'React, Vite und Supabase (PostgreSQL). Konzipiert und gebaut von einer Person, mit KI als Entwicklungspartner.',
    },
    roadmap: {
      title: 'Wohin es geht',
      intro:
        'Ziel ist, Lean Management für jedes kleine Unternehmen erreichbar zu machen. BaseLine, der Kern, ist live; die nächsten Module bauen auf denselben Daten auf.',
      status: { live: 'Live', started: 'In Arbeit', planned: 'Geplant' },
      items: roadmapItems.de,
    },
    about: {
      title: 'Wer es baut',
      name: 'Víctor Company',
      role: 'Maschinenbauingenieur, Lean und Operational Excellence, Basel',
      body: [
        'Seit über zehn Jahren verbessere ich, wie Produkte fliessen: in der Supply Chain von Mango, als Inhaber eines eigenen Restaurants und als Verantwortlicher für Lean und das integrierte Managementsystem bei Liberdúplex, einer Buchdruckerei in Barcelona, wo ich Product Owner für MES und die Digitalisierung der Planung war.',
        'FlowBase ist das Werkzeug, das ich mir damals gewünscht hätte: einfach genug für ein kleines Unternehmen und um den Fluss herum gebaut.',
      ],
      open: 'Offen für Stellen in Operational Excellence und Lean in der Region Basel.',
      cv: 'Zum vollständigen Lebenslauf',
      linkedin: 'LinkedIn',
    },
    projects: {
      title: 'Weitere Projekte',
      items: [
        { name: 'Española', text: 'Hausgemachte spanische Tortilla aus Basel. Die Produktion läuft über FlowBase.', url: 'https://espanola.ch', link: 'espanola.ch' },
        { name: 'Paella Basel', text: 'Valencianische Paella, live gekocht an Anlässen in und um Basel.', url: 'https://paellabasel.ch', link: 'paellabasel.ch' },
      ],
    },
    contact: {
      title: 'Kontakt',
      text: 'Fragen zu FlowBase, eine geführte Tour durch die Demo oder eine Stelle? Schreiben Sie per E-Mail oder WhatsApp, wie es Ihnen lieber ist.',
      email: 'E-Mail schreiben',
      whatsapp: 'Über WhatsApp schreiben',
      whatsappText: 'Hallo Víctor, ich schreibe Ihnen wegen FlowBase.',
    },
    footer: {
      text: 'FlowBase ist ein Projekt von Víctor Company, Basel.',
      app: 'FlowBase öffnen',
    },
  },

  es: {
    meta: {
      title: 'FlowBase: ERP y MRP para pequeños fabricantes',
      description:
        'FlowBase conecta compras, producción, stock por lote, ventas y facturación para pequeños fabricantes. Prueba la demo en vivo, sin registro.',
    },
    nav: { product: 'Qué cubre', roadmap: 'Roadmap', about: 'Sobre mí', contact: 'Contacto', demo: 'Probar la demo', language: 'Idioma', skip: 'Saltar al contenido' },
    hero: {
      title: 'Del pedido de compra a la factura, en un solo flujo.',
      lead:
        'FlowBase es un ERP y MRP para pequeños fabricantes. Compras, listas de materiales, producción, stock por lote, ventas y facturación funcionan como un único sistema conectado, y ya gestiona cada día un negocio de alimentación en Basilea.',
      ctaDemo: 'Probar la demo en vivo',
      ctaMore: 'Ver qué cubre',
      ctaContact: 'Contactar',
      demoNote:
        'Sin registro. En la pantalla de acceso, elige Demo para explorar durante 15 minutos AlpenWerk Möbel GmbH, un fabricante suizo de muebles de ejemplo. Todo lo que cambies se restablece al terminar.',
    },
    flow: {
      caption:
        'Un pedido de cliente, seguido de principio a fin. Cada documento enlaza con el anterior, así que cualquier lote se puede rastrear hasta su proveedor.',
      rows: [
        { label: 'Pedido de compra', code: 'PO-2410-018', detail: '120 m² de chapa de roble' },
        { label: 'Recepción', code: 'RM-241014-03', detail: 'Lote dado de alta en stock' },
        { label: 'Producción', code: 'PR-2410-044', detail: '24 sillas de comedor' },
        { label: 'Albarán', code: 'DN-2410-052', detail: 'Lotes registrados por línea' },
        { label: 'Factura', code: 'INV-2410-031', detail: 'CHF 6.480,00' },
      ],
    },
    covers: {
      title: 'Qué cubre FlowBase hoy',
      intro: 'Agrupado según cómo se mueve el material por la empresa: entra, se transforma, sale, y todo queda bajo control.',
      groups: [
        {
          name: 'Comprar',
          items: [
            'Proveedores, con varias fuentes por artículo',
            'Pedidos, albaranes y facturas de compra',
            'Pagos parciales y saldos pendientes',
          ],
        },
        {
          name: 'Producir',
          items: [
            'Listas de materiales multinivel',
            'Necesidades de material que descuentan el stock que ya tienes',
            'Órdenes de producción que consumen lotes por FIFO',
            'Mermas y rechazos registrados donde ocurren',
          ],
        },
        {
          name: 'Vender',
          items: [
            'Pedidos, albaranes y facturas de venta, también entregas parciales',
            'Cobros y saldo pendiente',
            'Documentos PDF en el idioma de cada empresa',
            'Portal de cliente para albaranes y facturas (piloto)',
          ],
        },
        {
          name: 'Controlar',
          items: [
            'Inventario por lote, ubicación y fecha de caducidad',
            'Ajustes de stock e incidencias con historial completo',
            'Varias empresas en una plataforma, cada una totalmente aislada',
            'Interfaz en español, inglés y alemán',
          ],
        },
      ],
    },
    story: {
      title: 'Nacido en una producción real',
      body: [
        'FlowBase empezó como una hoja de cálculo para planificar la producción de tortillas de Española, un pequeño negocio de alimentación en Basilea. Creció hasta convertirse en una aplicación web que hoy gestiona ese negocio: pedidos, tandas, lotes, albaranes y facturas.',
        'Después se generalizó para la fabricación discreta y se puso a prueba con un fabricante de muebles de ejemplo, construido a partir de seis meses de operación simulada. Ahora se está construyendo una segunda empresa de ejemplo, un productor textil, para validar las nuevas funciones.',
      ],
      facts: [
        { title: 'En uso diario', text: 'Las compras, la producción y la facturación de Española funcionan con FlowBase.' },
        { title: 'Probado en industria', text: 'Seis meses de operación simulada en AlpenWerk sacaron a la luz los huecos que se cerraron después.' },
        { title: 'Construido con método', text: 'Cada cambio se especifica primero por escrito, se prueba contra la base de datos y se comprueba en el navegador antes de publicarse.' },
      ],
      stack: 'React, Vite y Supabase (PostgreSQL). Diseñado y construido por una sola persona, con la IA como compañera de desarrollo.',
    },
    roadmap: {
      title: 'Hacia dónde va',
      intro:
        'El objetivo es poner la gestión Lean al alcance de cualquier pyme. BaseLine, el núcleo, ya está en producción; los siguientes módulos se construyen sobre los mismos datos.',
      status: { live: 'En producción', started: 'En desarrollo', planned: 'Previsto' },
      items: roadmapItems.es,
    },
    about: {
      title: 'Quién lo construye',
      name: 'Víctor Company',
      role: 'Ingeniero mecánico, Lean y excelencia operacional, Basilea',
      body: [
        'Llevo más de diez años mejorando cómo fluyen los productos: en la cadena de suministro de Mango, al frente de mi propio restaurante y liderando Lean y el sistema de gestión integrado en Liberdúplex, una imprenta de libros de Barcelona, donde fui product owner de su MES y de la digitalización de la planificación.',
        'FlowBase es la herramienta que me habría gustado tener entonces: lo bastante sencilla para una pyme y construida alrededor del flujo.',
      ],
      open: 'Abierto a puestos de Excelencia Operacional y Lean en la región de Basilea.',
      cv: 'Ver mi CV completo',
      linkedin: 'LinkedIn',
    },
    projects: {
      title: 'Otros proyectos',
      items: [
        { name: 'Española', text: 'Tortilla española casera, hecha en Basilea. Su producción funciona con FlowBase.', url: 'https://espanola.ch', link: 'espanola.ch' },
        { name: 'Paella Basel', text: 'Paella valenciana cocinada en directo en eventos de Basilea.', url: 'https://paellabasel.ch', link: 'paellabasel.ch' },
      ],
    },
    contact: {
      title: 'Contacto',
      text: '¿Preguntas sobre FlowBase, una visita guiada por la demo o un puesto? Escríbeme por correo o por WhatsApp, como prefieras.',
      email: 'Enviar un correo',
      whatsapp: 'Escribir por WhatsApp',
      whatsappText: 'Hola Víctor, te escribo por FlowBase.',
    },
    footer: {
      text: 'FlowBase es un proyecto de Víctor Company, Basilea.',
      app: 'Abrir FlowBase',
    },
  },
};
