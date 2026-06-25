"use strict";

const translations = {
    EN: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        "hero.greeting": "Hi, I'm",
        "hero.role": "Defensive Security Specialist & Software Developer.",
        "hero.description": " I build robust, full-stack applications and architect secure infrastructure. Whether I am developing useful software, hardening Linux environments, or competing in CTFs, my focus is always on bridging the gap between efficient code and impenetrable defense. ",
        "hero.about": "About me",
        "hero.projects": "My projects",
        "hero.cvView": "View CV",

        "about.title": "About me",
        "about.city": "Based in Quebec City, Canada.",
        "about.age": '<span id="age-value"></span> years old.',
        "about.interest": "Cybersecurity / Full-Stack Development",
        "about.education": "DEC in Informatics - Expected Graduation: Summer 2028",
        "about.description": " Hi, I'm Guilherme Cardoso de Araujo, a student in the Techniques de l’informatique program at Cégep de Sainte-Foy. I have a deep passion for software development, video games, and a rapidly growing expertise in cybersecurity. My technical journey began in my teens when I developed a Roblox project that amassed over 3 million visits, teaching me early on how to build and scale interactive experiences for massive audiences. Today, I build robust applications using C#, Node.js, and PostgreSQL, while also achieving cybersecurity milestones like earning my ISC2 CC certification, participating in CTF competitions, and preparing for the CompTIA Security+. Beyond the screen, I am always seeking new ways to push my limits, whether I am training in Brazilian Jiu-Jitsu, flying model airplanes, or playing the guitar, bass, and drums. I am eager to bring my versatile technical background and disciplined problem-solving mindset to ambitious, high-impact projects in software and security. My biggest asset is surely my never-ending curiosity to learn and improve myself. ",
        "about.keyskills": "Key Skills",
        "about.credentials": "Certifications and Achievements",
        "about.unitedCTF": "1st Place: UnitedCTF 2025 (Cégep de Ste-Foy)",
        "about.ben10": "\"Ben 10 Cosmic Storm\" (Roblox): 3M+ visits, 4K+ concurrent",

        "projects.title": "My projects",
        "projects.ben10description": " A fully-featured Roblox game reaching 3M+ visits and 4K+ concurrent players. Built complete game systems including combat, progression, and server-side anti-cheat logic.",
        "projects.cdiscordDescription": " A lightweight, cross-platform Terminal User Interface for Discord built with Node.js and the blessed library. It allows users to navigate servers, read channels, and chat directly from Linux and Windows terminals without the overhead of a heavy desktop client. It is only a mere 2 megabytes, compared to the heavy Discord client. ",
        "projects.guifotosDescription": " An open-source, self-hosted alternative to Google Photos designed with simplicity and privacy in mind. Built to provide a secure environment for family photo storage and sharing using a containerized backend. ",
        "projects.milkgrubDescription": " A custom GRUB bootloader theme inspired by the visual novel \"Milk outside a bag of milk\", modified with a blue color palette. Designed for Linux users who want a cohesive, personalized UI aesthetic from the moment their system boots. ",
        "projects.homelabTitle": "Personal Homelab Infrastructure",
        "projects.homelabDescription": " A custom self-hosted Linux server environment that actively hosts this portfolio site alongside personal media services. Features a Suwayomi instance for manga hosting and a dedicated public-facing server for game clips, utilizing Cloudflare as a secure reverse proxy. The entire infrastructure is managed remotely via a Tailscale private VPN mesh.",
    
        "contact.title": "Contact me",
        "contact.description": " I'm currently open to internship opportunities and exciting collaborations. Whether you have a project in mind or just want to say hi, my inbox is always open! ",

        "footer.rights": '© Copyright Guilherme Cardoso de Araujo <span id="copyright-year"></span>. All Rights Reserved',
    },
    FR: {
        "nav.home": "Accueil",
        "nav.about": "À propos de moi",
        "nav.projects": "Projets",
        "nav.contact": "Contact",

        "hero.greeting": "Salut, je suis",
        "hero.role": "Spécialiste en sécurité défensive et développeur logiciel.",
        "hero.description": "Je développe des applications « full-stack » robustes et je conçois des infrastructures sécurisées. Que ce soit en développant des logiciels utiles, en renforçant la sécurité d’environnements Linux ou en participant à des CTF, mon objectif est toujours de concilier un code efficace et une défense impénétrable.",
        "hero.about": "À propos de moi",
        "hero.projects": "Mes projets",
        "hero.cvView": "Voir le CV",

        "about.title": "À propos de moi",
        "about.city": "Situé à la ville de Québec, au Canada.",
        "about.age": '<span id="age-value"></span> ans',
        "about.interest": "Cybersécurité / Développement full-stack",
        "about.education": "DEC en informatique - Obtention prévue : été 2028",
        "about.description": " Bonjour, je m’appelle Guilherme Cardoso de Araujo, et je suis étudiant dans le programme « Techniques de l’informatique » au Cégep de Sainte-Foy. Je suis passionné par le développement logiciel et les jeux vidéo, et j’acquiers rapidement une expertise croissante en cybersécurité. Mon parcours technique a débuté à l’adolescence, lorsque j’ai développé un projet sur Roblox qui a enregistré plus de 3 millions de visites, ce qui m’a permis d’apprendre très tôt à créer et à adapter des expériences interactives destinées à un large public. Aujourd’hui, je développe des applications robustes à l’aide de C#, Node.js et PostgreSQL, tout en franchissant des étapes importantes en matière de cybersécurité, comme l’obtention de ma certification ISC2 CC, la participation à des concours CTF et la préparation à l’examen CompTIA Security+. Au-delà de l’écran, je cherche constamment de nouvelles façons de repousser mes limites, que ce soit en m’entraînant au jiu-jitsu brésilien, en pilotant des modèles réduits d’avions ou en jouant de la guitare, de la basse et de la batterie. Je suis impatient de mettre mon expérience technique polyvalente et mon esprit rigoureux de résolution de problèmes au service de projets ambitieux et à fort impact dans les domaines du logiciel et de la sécurité. Mon plus grand atout est sans aucun doute ma curiosité insatiable d’apprendre et de m’améliorer. ",
        "about.keyskills": "Compétences clés",
        "about.credentials": "Certifications et réalisations",
        "about.unitedCTF": "1re place : UnitedCTF 2025 (Cégep de Sainte-Foy)",
        "about.ben10": "« Ben 10 Cosmic Storm » (Roblox) : plus de 3 millions de visites, plus de 4 000 utilisateurs simultanés",

        "projects.title": "Mes projets",
        "projects.ben10description": "Un jeu Roblox complet ayant atteint plus de 3 millions de visites et 4 000 joueurs simultanés. Développement de systèmes de jeu complets, incluant le combat, la progression et la logique anti-triche côté serveur.",
        "projects.cdiscordDescription": "Une interface utilisateur de terminal (TUI) légère et multiplateforme pour Discord, développée avec Node.js et la bibliothèque blessed. Elle permet de naviguer sur les serveurs, de lire les salons et de discuter directement depuis les terminaux Linux et Windows, sans la lourdeur du client de bureau classique. L'application pèse à peine 2 mégaoctets, contrastant avec le client Discord officiel.",
        "projects.guifotosDescription": "Une alternative open-source et auto-hébergée à Google Photos, conçue en mettant l'accent sur la simplicité et la confidentialité. Développée pour offrir un environnement sécurisé pour le stockage et le partage de photos de famille, s'appuyant sur un backend conteneurisé.",
        "projects.milkgrubDescription": "Un thème personnalisé pour le chargeur d'amorçage GRUB, inspiré du visual novel \"Milk outside a bag of milk\" et modifié avec une palette de couleurs bleutées. Conçu pour les utilisateurs Linux souhaitant une interface esthétique, cohérente et personnalisée dès le démarrage de leur système.",
        "projects.homelabTitle": "Infrastructure Homelab Personnelle",
        "projects.homelabDescription": "Un environnement de serveurs Linux auto-hébergé sur mesure qui héberge activement ce portfolio ainsi que des services multimédias personnels. Il comprend une instance Suwayomi pour la lecture de mangas et un serveur public dédié pour des clips vidéo de jeux, utilisant Cloudflare comme reverse proxy sécurisé. L'ensemble de l'infrastructure est géré à distance via un réseau VPN privé maillé (mesh) Tailscale.",

        "contact.title": "Contactez-moi",
        "contact.description": "Je suis actuellement à l'écoute d'opportunités de stage et de collaborations. Que vous ayez un projet en tête ou que vous souhaitiez simplement dire bonjour, ma boîte mail est toujours ouverte !",

        "footer.rights": "© Copyright Guilherme Cardoso de Araujo 2026. Tous droits réservés."
    }
}

let currentLang = localStorage.getItem("lang") || "EN";
const birthday = new Date("2006-12-23");
const age = calculateYearsAmount(birthday,new Date())

function applyLanguage (lang){
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.getElementById('current-lang').textContent = lang;

    let textsToTranslate = document.querySelectorAll('[data-i18n]');

    textsToTranslate.forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]){
            element.innerHTML = translations[lang][key];
        }
    });
    
    document.getElementById('age-value').textContent = age;
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
}


document.querySelectorAll('[data-lang]').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        applyLanguage(this.dataset.lang);
    });
});

function calculateYearsAmount(startDateStr, endDateStr) {
    const start = new Date(startDateStr);
    const end = new Date(endDateStr);
    
    let years = end.getFullYear() - start.getFullYear();
    
    const monthDiff = end.getMonth() - start.getMonth();
    const dayDiff = end.getDate() - start.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        years--;
    }
    
    return years;
}

document.getElementById("")

applyLanguage(currentLang);