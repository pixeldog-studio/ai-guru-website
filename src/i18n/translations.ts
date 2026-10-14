export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.chat': 'Chat',
    'nav.browse': 'Browse',

    // CTAs
    'cta.chatAndBrowse': 'Chat & Browse',
    'cta.getStarted': 'Get Started',
    'cta.learnMore': 'Learn More',
    'cta.readMore': 'Read More',
    'cta.startChatting': 'Start chatting',
    'cta.subscribe': 'Subscribe',
    'cta.getHustlrr': 'Get Hustlrr for free',
    'cta.downloadApp': 'Download free app',
    'cta.contactUs': 'Contact us',
    'cta.getGuide': 'Get guide',

    // Hero
    'hero.tagline': 'Chat & Browse with the Best AI Models',
    'hero.title': 'Chat and browse with the best AI models',
    'hero.subtitle':
      'Choose your AI model, ask anything, and get answers about any page you visit',

    // Models
    'models.title': 'All the top AI models in one app',
    'models.subtitle':
      'Instantly switch models on the same conversation and see how each AI explains, writes, and reasons differently',
    'models.poweredBy': 'Powered by',

    // Features
    'features.title': 'Why Hustlrr?',
    'features.browsing.title': 'Chat with AI on any webpage',
    'features.browsing.description':
      'Open any site inside Hustlrr and ask your AI about the page instantly',
    'features.multiModel.title': 'Multi-Model Access',
    'features.multiModel.description':
      'Use GPT-6, Claude, Gemini, Grok, and more — all from one place.',
    'features.askAnything.title': 'Ask anything, do everything',
    'features.askAnything.description':
      'Chat, create, analyze, and solve tasks using text, images, videos, and documents.',
    'features.privacy.title': 'Private by design, with full control',
    'features.privacy.description':
      'You decide exactly how each model uses your information. Switch between providers and share only what you choose for each question.',
    'features.simple.title': 'One Subscription',
    'features.simple.description':
      'Stop juggling multiple AI subscriptions. Get everything in one plan.',
    'features.workflows.title': 'AI Workflows',
    'features.workflows.description':
      'Chain models together for complex tasks that single models can\'t handle.',

    // Testimonials
    'testimonials.title': 'What people are saying about Hustlrr',
    'testimonials.disclaimer':
      'A sampling of reviews from our most satisfied customers. For all our reviews, check out the App Store',

    // Support
    'support.title': 'Human support',
    'support.description':
      'Real people answer your questions. No bots. Our team answers your questions and helps you get the most out of Hustlrr.',
    'privacy.dataTitle': 'Your data stays yours',
    'privacy.dataDescription':
      'Your conversations live only in your encrypted iCloud. Nothing is stored on our servers, and we can\'t access your chats.',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Insights on AI models, productivity, and workflows',
    'blog.readTime': 'min read',
    'blog.publishedOn': 'Published on',
    'blog.backToBlog': 'Back to Blog',

    // Newsletter
    'newsletter.title': 'Master prompt writing with our free guide',
    'newsletter.subtitle':
      'Write prompts that AI responds to more accurately',
    'newsletter.placeholder': 'name@email.com',
    'newsletter.button': 'Get guide',
    'newsletter.consent':
      'By tapping Get Guide, you accept our Terms of Use and Privacy Policy.',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.product': 'Product',
    'footer.legal': 'Legal',
    'footer.company': 'Company',
    'footer.privacy': 'Privacy Policies',
    'footer.service': 'Terms of Service',
    'footer.imprint': 'Imprint',

    // Badges
    'badge.appStore': '4.9 on the App Store',
    'badge.europe': 'Built in Europe',

    // Landing pages
    'landing.success.title': 'Success!',
    'landing.success.message':
      'Your email has been confirmed. Welcome to the Hustlrr community!',
    'landing.dl.title': 'Download Ready',
    'landing.dl.message': 'Your download is ready. Check your email for the link.',
    'landing.business.title': 'Business Inquiry Received',
    'landing.business.message':
      'Thank you for your interest. We\'ll get back to you shortly.',

    // Navigation — new
    'nav.features': 'Features',

    // Feature pages
    'featurePage.multiModel.title': 'All Top AI Models in One App',
    'featurePage.multiModel.description':
      'Use GPT-6, Claude, Gemini, Grok, and more from a single subscription. Compare answers side by side and switch models mid-conversation.',
    'featurePage.multiModel.heroHeadline': 'Every AI model you need, one app',
    'featurePage.multiModel.heroLead':
      'Stop paying for separate subscriptions. Hustlrr gives you GPT-6, Claude, Gemini, Grok, DeepSeek, and Mistral in one place.',
    'featurePage.multiModel.problemTitle': 'The problem with single-model apps',
    'featurePage.multiModel.problemText':
      'Each AI model has strengths. GPT-6 excels at creative writing. Claude is great at analysis. Gemini handles multimodal tasks. Why lock yourself into one?',
    'featurePage.multiModel.howTitle': 'How it works',
    'featurePage.multiModel.howStep1Title': 'Pick your model',
    'featurePage.multiModel.howStep1Text':
      'Choose from GPT-6, Claude, Gemini, Grok, DeepSeek, or Mistral before every message.',
    'featurePage.multiModel.howStep2Title': 'Switch mid-conversation',
    'featurePage.multiModel.howStep2Text':
      'Change models in the same thread to compare answers or get a second opinion.',
    'featurePage.multiModel.howStep3Title': 'One subscription',
    'featurePage.multiModel.howStep3Text':
      'No separate accounts. No separate billing. Everything is included in one Hustlrr plan.',

    'featurePage.webBrowsing.title': 'Chat with AI on Any Webpage',
    'featurePage.webBrowsing.description':
      'Browse any website inside Hustlrr and ask your AI to summarize, explain, or answer questions about the page you are viewing.',
    'featurePage.webBrowsing.heroHeadline': 'Browse the web with AI by your side',
    'featurePage.webBrowsing.heroLead':
      'Open any webpage inside Hustlrr. Ask questions, get summaries, and extract information without switching apps.',
    'featurePage.webBrowsing.problemTitle': 'Copy-paste is not a workflow',
    'featurePage.webBrowsing.problemText':
      'Reading a long article? Researching a topic? Copying text into a separate AI chat breaks your flow. Hustlrr puts the AI right next to the page.',
    'featurePage.webBrowsing.howTitle': 'How it works',
    'featurePage.webBrowsing.howStep1Title': 'Open any URL',
    'featurePage.webBrowsing.howStep1Text':
      'Type or paste a URL into Hustlrr\'s built-in browser. The page loads directly inside the app.',
    'featurePage.webBrowsing.howStep2Title': 'Ask about the page',
    'featurePage.webBrowsing.howStep2Text':
      'The AI reads the page content and can summarize it, answer questions, extract data, or translate it.',
    'featurePage.webBrowsing.howStep3Title': 'Stay in context',
    'featurePage.webBrowsing.howStep3Text':
      'Navigate between pages while your AI conversation follows along. No re-pasting needed.',

    // Comparison pages
    'compare.table.caption': 'Hustlrr vs {competitor} feature comparison',
    'compare.table.feature': 'Feature',
    'compare.table.yes': 'Yes',
    'compare.table.no': 'No',
    'compare.table.limited': 'Limited',
    'compare.verdict': 'The verdict',
    'compare.faq.title': 'Frequently asked questions',

    'compare.vsChatGPT.title': 'Hustlrr vs ChatGPT',
    'compare.vsChatGPT.description':
      'Compare Hustlrr and ChatGPT side by side. See which AI chat app offers more models, web browsing, and privacy on iPhone.',
    'compare.vsChatGPT.heroHeadline': 'Hustlrr vs ChatGPT — which AI chat app is better for iPhone?',
    'compare.vsChatGPT.heroLead':
      'ChatGPT gives you one model. Hustlrr gives you GPT-6, Claude, Gemini, Grok, and more in a single app.',
    'compare.vsChatGPT.diff1Title': 'Multiple models vs one',
    'compare.vsChatGPT.diff1Text':
      'ChatGPT locks you into OpenAI models. Hustlrr lets you switch between GPT-6, Claude, Gemini, and others in the same conversation.',
    'compare.vsChatGPT.diff2Title': 'Built-in web browsing',
    'compare.vsChatGPT.diff2Text':
      'Both apps can browse the web, but Hustlrr lets you open any page inside the app and chat about it with any AI model.',
    'compare.vsChatGPT.diff3Title': 'Privacy-first',
    'compare.vsChatGPT.diff3Text':
      'Hustlrr stores conversations in your encrypted iCloud. No server-side storage. No training on your data.',
    'compare.vsChatGPT.verdictText':
      'If you only need GPT, ChatGPT works fine. If you want the freedom to use multiple AI models, browse the web with AI, and keep your data private, Hustlrr is the better choice.',
    'compare.vsChatGPT.faq1Question': 'Can I use GPT-6 in Hustlrr?',
    'compare.vsChatGPT.faq1Answer': 'Yes. Hustlrr includes GPT-6 alongside Claude, Gemini, Grok, and other leading models.',
    'compare.vsChatGPT.faq2Question': 'Is Hustlrr free?',
    'compare.vsChatGPT.faq2Answer': 'Hustlrr offers a free tier. Premium plans unlock higher usage limits and all models.',
    'compare.vsChatGPT.faq3Question': 'Does Hustlrr work on Mac?',
    'compare.vsChatGPT.faq3Answer': 'Yes. Hustlrr is available on iPhone, iPad, and Mac.',

    'compare.vsClaude.title': 'Hustlrr vs Claude',
    'compare.vsClaude.description':
      'Compare Hustlrr and the Claude app. See why a multi-model AI chat app gives you more flexibility on iPhone.',
    'compare.vsClaude.heroHeadline': 'Hustlrr vs Claude — why limit yourself to one AI model?',
    'compare.vsClaude.heroLead':
      'The Claude app gives you Anthropic\'s models. Hustlrr gives you Claude plus GPT-6, Gemini, Grok, and more.',
    'compare.vsClaude.diff1Title': 'Claude plus everything else',
    'compare.vsClaude.diff1Text':
      'Love Claude? Use it inside Hustlrr. But when you need a different perspective, switch to GPT-6, Gemini, or Grok without leaving the app.',
    'compare.vsClaude.diff2Title': 'Web browsing built in',
    'compare.vsClaude.diff2Text':
      'The Claude app does not include a built-in browser. Hustlrr lets you open any page and chat about it with any model.',
    'compare.vsClaude.diff3Title': 'iCloud-only storage',
    'compare.vsClaude.diff3Text':
      'Both apps respect privacy, but Hustlrr goes further — conversations never touch our servers. Everything stays in your encrypted iCloud.',
    'compare.vsClaude.verdictText':
      'If Claude is the only model you need, the official Claude app is a great choice. If you want Claude and GPT-6, Gemini, Grok, and web browsing in one app, Hustlrr gives you that flexibility.',
    'compare.vsClaude.faq1Question': 'Can I use Claude in Hustlrr?',
    'compare.vsClaude.faq1Answer': 'Yes. Hustlrr includes Claude alongside GPT-6, Gemini, Grok, and other models.',
    'compare.vsClaude.faq2Question': 'Which app has better privacy?',
    'compare.vsClaude.faq2Answer': 'Both take privacy seriously. Hustlrr stores everything in your encrypted iCloud with zero server-side storage.',
    'compare.vsClaude.faq3Question': 'Is Hustlrr available in Europe?',
    'compare.vsClaude.faq3Answer': 'Yes. Hustlrr is built in Europe and available worldwide on the App Store.',

    // Shared feature/compare page strings
    'page.learnMore': 'Learn more',
    'page.breadcrumb.home': 'Home',
    'page.breadcrumb.features': 'Features',
    'page.breadcrumb.compare': 'Compare',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.blog': 'Blog',
    'nav.chat': 'Chat',
    'nav.browse': 'Browse',

    // CTAs
    'cta.chatAndBrowse': 'Chat & Browse',
    'cta.getStarted': 'Jetzt starten',
    'cta.learnMore': 'Mehr erfahren',
    'cta.readMore': 'Weiterlesen',
    'cta.startChatting': 'Jetzt chatten',
    'cta.subscribe': 'Abonnieren',
    'cta.getHustlrr': 'Hustlrr kostenlos holen',
    'cta.downloadApp': 'Kostenlose App laden',
    'cta.contactUs': 'Kontakt',
    'cta.getGuide': 'Guide holen',

    // Hero
    'hero.tagline': 'Chatten & Browsen mit den besten KI-Modellen',
    'hero.title': 'Chatten und browsen mit den besten KI-Modellen',
    'hero.subtitle':
      'Wähle dein KI-Modell, frage alles und erhalte Antworten zu jeder Seite, die du besuchst',

    // Models
    'models.title': 'Alle Top-KI-Modelle in einer App',
    'models.subtitle':
      'Wechsle sofort zwischen Modellen im selben Gespräch und sieh, wie jede KI unterschiedlich erklärt, schreibt und denkt',
    'models.poweredBy': 'Unterstützt von',

    // Features
    'features.title': 'Warum Hustlrr?',
    'features.browsing.title': 'Chatte mit KI auf jeder Webseite',
    'features.browsing.description':
      'Öffne jede Seite in Hustlrr und frage deine KI sofort über die Seite',
    'features.multiModel.title': 'Multi-Modell-Zugang',
    'features.multiModel.description':
      'Nutze GPT-6, Claude, Gemini, Grok und mehr — alles an einem Ort.',
    'features.askAnything.title': 'Frage alles, erledige alles',
    'features.askAnything.description':
      'Chatte, erstelle, analysiere und löse Aufgaben mit Text, Bildern, Videos und Dokumenten.',
    'features.privacy.title': 'Privat by Design, mit voller Kontrolle',
    'features.privacy.description':
      'Du entscheidest genau, wie jedes Modell deine Informationen nutzt. Wechsle zwischen Anbietern und teile nur, was du für jede Frage wählst.',
    'features.simple.title': 'Ein Abonnement',
    'features.simple.description':
      'Schluss mit mehreren KI-Abos. Alles in einem Plan.',
    'features.workflows.title': 'KI-Workflows',
    'features.workflows.description':
      'Kombiniere Modelle für komplexe Aufgaben, die einzelne Modelle nicht bewältigen.',

    // Testimonials
    'testimonials.title': 'Was andere über Hustlrr sagen',
    'testimonials.disclaimer':
      'Eine Auswahl von Bewertungen unserer zufriedensten Kunden. Alle Bewertungen findest du im App Store',

    // Support
    'support.title': 'Menschlicher Support',
    'support.description':
      'Echte Menschen beantworten deine Fragen. Keine Bots. Unser Team beantwortet deine Fragen und hilft dir, das Beste aus Hustlrr herauszuholen.',
    'privacy.dataTitle': 'Deine Daten gehören dir',
    'privacy.dataDescription':
      'Deine Gespräche leben nur in deinem verschlüsselten iCloud. Nichts wird auf unseren Servern gespeichert, und wir können nicht auf deine Chats zugreifen.',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Einblicke in KI-Modelle, Produktivität und Workflows',
    'blog.readTime': 'Min. Lesezeit',
    'blog.publishedOn': 'Veröffentlicht am',
    'blog.backToBlog': 'Zurück zum Blog',

    // Newsletter
    'newsletter.title': 'Meistere Prompt-Writing mit unserem kostenlosen Guide',
    'newsletter.subtitle':
      'Schreibe Prompts, auf die KI genauer antwortet',
    'newsletter.placeholder': 'name@email.com',
    'newsletter.button': 'Guide holen',
    'newsletter.consent':
      'Mit dem Klick auf Guide holen akzeptierst du unsere Nutzungsbedingungen und Datenschutzrichtlinie.',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.product': 'Produkt',
    'footer.legal': 'Rechtliches',
    'footer.company': 'Unternehmen',
    'footer.privacy': 'Datenschutz',
    'footer.service': 'Nutzungsbedingungen',
    'footer.imprint': 'Impressum',

    // Badges
    'badge.appStore': '4,9 im App Store',
    'badge.europe': 'Made in Europe',

    // Landing pages
    'landing.success.title': 'Erfolg!',
    'landing.success.message':
      'Deine E-Mail wurde bestätigt. Willkommen in der Hustlrr-Community!',
    'landing.dl.title': 'Download bereit',
    'landing.dl.message':
      'Dein Download ist bereit. Prüfe deine E-Mail für den Link.',
    'landing.business.title': 'Geschäftsanfrage erhalten',
    'landing.business.message':
      'Vielen Dank für dein Interesse. Wir melden uns in Kürze.',

    // Navigation — new
    'nav.features': 'Funktionen',

    // Feature pages
    'featurePage.multiModel.title': 'Alle Top-KI-Modelle in einer App',
    'featurePage.multiModel.description':
      'Nutze GPT-6, Claude, Gemini, Grok und mehr mit einem einzigen Abo. Vergleiche Antworten und wechsle Modelle mitten im Gespräch.',
    'featurePage.multiModel.heroHeadline': 'Jedes KI-Modell, das du brauchst, in einer App',
    'featurePage.multiModel.heroLead':
      'Schluss mit separaten Abos. Hustlrr gibt dir GPT-6, Claude, Gemini, Grok, DeepSeek und Mistral an einem Ort.',
    'featurePage.multiModel.problemTitle': 'Das Problem mit Einzel-Modell-Apps',
    'featurePage.multiModel.problemText':
      'Jedes KI-Modell hat Stärken. GPT-6 glänzt beim kreativen Schreiben. Claude bei der Analyse. Gemini bei multimodalen Aufgaben. Warum sich auf eines festlegen?',
    'featurePage.multiModel.howTitle': 'So funktioniert es',
    'featurePage.multiModel.howStep1Title': 'Modell wählen',
    'featurePage.multiModel.howStep1Text':
      'Wähle vor jeder Nachricht zwischen GPT-6, Claude, Gemini, Grok, DeepSeek oder Mistral.',
    'featurePage.multiModel.howStep2Title': 'Im Gespräch wechseln',
    'featurePage.multiModel.howStep2Text':
      'Wechsle das Modell im selben Thread, um Antworten zu vergleichen oder eine zweite Meinung zu erhalten.',
    'featurePage.multiModel.howStep3Title': 'Ein Abo',
    'featurePage.multiModel.howStep3Text':
      'Keine separaten Konten. Keine getrennte Abrechnung. Alles in einem Hustlrr-Plan.',

    'featurePage.webBrowsing.title': 'Chatte mit KI auf jeder Webseite',
    'featurePage.webBrowsing.description':
      'Öffne jede Website in Hustlrr und frage deine KI, die Seite zusammenzufassen, zu erklären oder Fragen dazu zu beantworten.',
    'featurePage.webBrowsing.heroHeadline': 'Surfe mit KI an deiner Seite',
    'featurePage.webBrowsing.heroLead':
      'Öffne jede Webseite in Hustlrr. Stelle Fragen, erhalte Zusammenfassungen und extrahiere Informationen ohne App-Wechsel.',
    'featurePage.webBrowsing.problemTitle': 'Copy-Paste ist kein Workflow',
    'featurePage.webBrowsing.problemText':
      'Einen langen Artikel lesen? Ein Thema recherchieren? Text in einen separaten KI-Chat kopieren unterbricht deinen Flow. Hustlrr bringt die KI direkt auf die Seite.',
    'featurePage.webBrowsing.howTitle': 'So funktioniert es',
    'featurePage.webBrowsing.howStep1Title': 'URL öffnen',
    'featurePage.webBrowsing.howStep1Text':
      'Tippe oder füge eine URL in Hustlrrs integrierten Browser ein. Die Seite wird direkt in der App geladen.',
    'featurePage.webBrowsing.howStep2Title': 'Über die Seite fragen',
    'featurePage.webBrowsing.howStep2Text':
      'Die KI liest den Seiteninhalt und kann zusammenfassen, Fragen beantworten, Daten extrahieren oder übersetzen.',
    'featurePage.webBrowsing.howStep3Title': 'Im Kontext bleiben',
    'featurePage.webBrowsing.howStep3Text':
      'Navigiere zwischen Seiten, während dein KI-Gespräch folgt. Kein erneutes Einfügen nötig.',

    // Comparison pages
    'compare.table.caption': 'Hustlrr vs {competitor} Funktionsvergleich',
    'compare.table.feature': 'Funktion',
    'compare.table.yes': 'Ja',
    'compare.table.no': 'Nein',
    'compare.table.limited': 'Eingeschränkt',
    'compare.verdict': 'Das Fazit',
    'compare.faq.title': 'Häufig gestellte Fragen',

    'compare.vsChatGPT.title': 'Hustlrr vs ChatGPT',
    'compare.vsChatGPT.description':
      'Vergleiche Hustlrr und ChatGPT Seite an Seite. Welche KI-Chat-App bietet mehr Modelle, Web-Browsing und Datenschutz auf dem iPhone?',
    'compare.vsChatGPT.heroHeadline': 'Hustlrr vs ChatGPT — welche KI-Chat-App ist besser fürs iPhone?',
    'compare.vsChatGPT.heroLead':
      'ChatGPT bietet dir ein Modell. Hustlrr gibt dir GPT-6, Claude, Gemini, Grok und mehr in einer App.',
    'compare.vsChatGPT.diff1Title': 'Mehrere Modelle statt einem',
    'compare.vsChatGPT.diff1Text':
      'ChatGPT beschränkt dich auf OpenAI-Modelle. Hustlrr lässt dich zwischen GPT-6, Claude, Gemini und anderen im selben Gespräch wechseln.',
    'compare.vsChatGPT.diff2Title': 'Integriertes Web-Browsing',
    'compare.vsChatGPT.diff2Text':
      'Beide Apps können im Web surfen, aber Hustlrr öffnet jede Seite direkt in der App — und du chattest mit jedem KI-Modell darüber.',
    'compare.vsChatGPT.diff3Title': 'Privacy-first',
    'compare.vsChatGPT.diff3Text':
      'Hustlrr speichert Gespräche in deinem verschlüsselten iCloud. Kein serverseitiger Speicher. Kein Training mit deinen Daten.',
    'compare.vsChatGPT.verdictText':
      'Wenn du nur GPT brauchst, funktioniert ChatGPT gut. Wenn du mehrere KI-Modelle nutzen, mit KI im Web browsen und deine Daten schützen willst, ist Hustlrr die bessere Wahl.',
    'compare.vsChatGPT.faq1Question': 'Kann ich GPT-6 in Hustlrr nutzen?',
    'compare.vsChatGPT.faq1Answer': 'Ja. Hustlrr bietet GPT-6 neben Claude, Gemini, Grok und weiteren Modellen.',
    'compare.vsChatGPT.faq2Question': 'Ist Hustlrr kostenlos?',
    'compare.vsChatGPT.faq2Answer': 'Hustlrr bietet eine kostenlose Stufe. Premium-Pläne schalten höhere Limits und alle Modelle frei.',
    'compare.vsChatGPT.faq3Question': 'Funktioniert Hustlrr auf dem Mac?',
    'compare.vsChatGPT.faq3Answer': 'Ja. Hustlrr ist auf iPhone, iPad und Mac verfügbar.',

    'compare.vsClaude.title': 'Hustlrr vs Claude',
    'compare.vsClaude.description':
      'Vergleiche Hustlrr und die Claude-App. Warum eine Multi-Modell-KI-App dir mehr Flexibilität auf dem iPhone bietet.',
    'compare.vsClaude.heroHeadline': 'Hustlrr vs Claude — warum sich auf ein KI-Modell beschränken?',
    'compare.vsClaude.heroLead':
      'Die Claude-App gibt dir Anthropics Modelle. Hustlrr gibt dir Claude plus GPT-6, Gemini, Grok und mehr.',
    'compare.vsClaude.diff1Title': 'Claude plus alles andere',
    'compare.vsClaude.diff1Text':
      'Du liebst Claude? Nutze es in Hustlrr. Wenn du eine andere Perspektive brauchst, wechsle zu GPT-6, Gemini oder Grok, ohne die App zu verlassen.',
    'compare.vsClaude.diff2Title': 'Web-Browsing integriert',
    'compare.vsClaude.diff2Text':
      'Die Claude-App hat keinen integrierten Browser. Hustlrr öffnet jede Seite und du chattest mit jedem Modell darüber.',
    'compare.vsClaude.diff3Title': 'Nur iCloud-Speicher',
    'compare.vsClaude.diff3Text':
      'Beide Apps respektieren Datenschutz, aber Hustlrr geht weiter — Gespräche berühren nie unsere Server. Alles bleibt in deinem verschlüsselten iCloud.',
    'compare.vsClaude.verdictText':
      'Wenn Claude das einzige Modell ist, das du brauchst, ist die offizielle Claude-App eine gute Wahl. Wenn du Claude und GPT-6, Gemini, Grok und Web-Browsing in einer App willst, gibt Hustlrr dir diese Flexibilität.',
    'compare.vsClaude.faq1Question': 'Kann ich Claude in Hustlrr nutzen?',
    'compare.vsClaude.faq1Answer': 'Ja. Hustlrr bietet Claude neben GPT-6, Gemini, Grok und weiteren Modellen.',
    'compare.vsClaude.faq2Question': 'Welche App hat besseren Datenschutz?',
    'compare.vsClaude.faq2Answer': 'Beide nehmen Datenschutz ernst. Hustlrr speichert alles in deinem verschlüsselten iCloud ohne serverseitige Speicherung.',
    'compare.vsClaude.faq3Question': 'Ist Hustlrr in Europa verfügbar?',
    'compare.vsClaude.faq3Answer': 'Ja. Hustlrr wird in Europa entwickelt und ist weltweit im App Store verfügbar.',

    // Shared feature/compare page strings
    'page.learnMore': 'Mehr erfahren',
    'page.breadcrumb.home': 'Startseite',
    'page.breadcrumb.features': 'Funktionen',
    'page.breadcrumb.compare': 'Vergleich',
  },
} as const;

export type TranslationKey = keyof (typeof translations)['en'];
