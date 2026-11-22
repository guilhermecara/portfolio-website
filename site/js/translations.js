"use strict";

const translations = {
    EN: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        "hero.greeting": "Hi, I'm",
        "hero.role": "Software Developer & Cybersecurity Student.",
        "hero.description": "I build full-stack applications and architect secure Linux infrastructure. Whether I am developing software, deploying containerized SIEM environments, or competing in CTFs, my focus is on bridging efficient code with practical defense.",
        "hero.about": "About me",
        "hero.projects": "My projects",
        "hero.cvView": "View CV",

        "about.title": "About me",
        "about.city": "Based in Québec City, Canada",
        "about.interest": "Cybersecurity & Full-Stack Development",
        "about.education": "DEC in Computer Science — Cégep de Sainte-Foy (Expected 2027)",
        "about.description": "I'm a second-year Computer Science student and peer tutor at Cégep de Sainte-Foy with a focus on software engineering and defensive security. My path started in my teens when I built a Roblox game that reached over 3 million visits, teaching me early on how to architect and scale systems for thousands of concurrent players. Today, I develop full-stack applications in C#, Java, C++, and Node.js while building hands-on security labs, competing in CTFs, and holding both ISC2 CC and Microsoft Azure Fundamentals (AZ-900) certifications. Outside of tech, I train in Brazilian Jiu-Jitsu, work on my own car, and play guitar, bass, and drums.",
        "about.keyskills": "Key Skills",
        "about.credentials": "Certifications & Achievements",
        "about.unitedCTF": "9e place : UnitedCTF 2026 et 30e place : UnitedCTF 2025 (1re place au Cégep de Sainte-Foy)",
        "about.ben10": "\"Ben 10 Cosmic Storm\" (Roblox): 3M+ visits, 4K+ concurrent",

        "skills.cyber": "Cybersecurity",

        "projects.title": "My projects",
        "projects.ben10description": "A multiplayer Roblox game reaching 3M+ visits and 4K+ concurrent players. Built core gameplay systems including combat, progression, and server-side anti-cheat validation.",
        "projects.cdiscordDescription": "A lightweight, cross-platform Terminal User Interface (TUI) for Discord built with Node.js and blessed. Lets users navigate servers, read channels, and chat directly from Linux and Windows terminals in a ~2 MB footprint.",
        "projects.guifotosDescription": "An open-source, self-hosted alternative to Google Photos focused on privacy and simplicity. Built with C#/.NET and Docker to provide private family photo storage and sharing.",
        "projects.milkgrubDescription": "A custom GRUB2 bootloader theme inspired by the visual novel \"Milk outside a bag of milk\", adapted with a cohesive blue palette for Linux dual-boot setups.",
        "projects.homelabTitle": "Personal Homelab Infrastructure",
        "projects.homelabDescription": "A self-hosted Debian server powering this portfolio and personal media services. Features automated CI/CD via a self-hosted GitHub Actions runner, Docker and Nginx reverse proxies, and remote administration over a Tailscale mesh VPN.",
        "projects.siemTitle": "Wazuh SIEM Lab",
        "projects.siemDescription": "A containerized Wazuh SIEM environment built for log ingestion, endpoint telemetry, and detection engineering. Includes real-time File Integrity Monitoring (FIM with auditd) across Linux and Windows VMs over Tailscale and active attack simulations.",

        "contact.title": "Contact me",
        "contact.description": "I'm actively looking for software development and cybersecurity internship opportunities. Whether you have a role in mind, a project to collaborate on, or just want to connect, feel free to reach out!",

        "footer.rights": '© <span id="copyright-year"></span> Guilherme Cardoso de Araujo. All Rights Reserved.'
    },
    FR: {
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.projects": "Projets",
        "nav.contact": "Contact",

        "hero.greeting": "Bonjour, je suis",
        "hero.role": "Développeur logiciel & Étudiant en cybersécurité.",
        "hero.description": "Je conçois des applications full-stack robustes et des infrastructures Linux sécurisées. Qu'il s'agisse de développement logiciel, de déploiement d'environnements SIEM conteneurisés ou de compétitions CTF, je cherche toujours à allier code performant et défense rigoureuse.",
        "hero.about": "À propos de moi",
        "hero.projects": "Mes projets",
        "hero.cvView": "Voir le CV",

        "about.title": "À propos de moi",
        "about.city": "Basé à Québec, Canada",
        "about.interest": "Cybersécurité & Développement full-stack",
        "about.education": "DEC en Techniques de l'informatique — Cégep de Sainte-Foy (Fin prévue : 2027)",
        "about.description": "Étudiant de deuxième année en Techniques de l'informatique et tuteur par les pairs au Cégep de Sainte-Foy, je me spécialise en développement logiciel et en sécurité défensive. Mon parcours a débuté à l'adolescence avec la création d'un jeu Roblox ayant cumulé plus de 3 millions de visites, ce qui m'a appris très tôt à concevoir et faire évoluer des systèmes pour des milliers de joueurs simultanés. Aujourd'hui, je développe des applications en C#, Java, C++ et Node.js tout en montant des laboratoires de sécurité, en participant à des CTF et en détenant les certifications ISC2 CC et Microsoft Azure Fundamentals (AZ-900). En dehors de l'informatique, je pratique le jiu-jitsu brésilien, la mécanique automobile et la musique (guitare, basse et batterie).",
        "about.keyskills": "Compétences clés",
        "about.credentials": "Certifications et réalisations",
        "about.unitedCTF": "9th Place: UnitedCTF 2026 & 30th Place: UnitedCTF 2025 (1st at Cégep de Sainte-Foy)",
        "about.ben10": "« Ben 10 Cosmic Storm » (Roblox) : plus de 3 M de visites, 4 000+ joueurs simultanés",

        "skills.cyber": "Cybersécurité",

        "projects.title": "Mes projets",
        "projects.ben10description": "Jeu multijoueur sur Roblox ayant atteint plus de 3 millions de visites et 4 000 joueurs simultanés. Développement des systèmes de combat, de progression et de validation anti-triche côté serveur.",
        "projects.cdiscordDescription": "Interface utilisateur en terminal (TUI) légère et multiplateforme pour Discord, conçue avec Node.js et blessed. Permet de naviguer sur les serveurs et de discuter depuis un terminal Linux ou Windows avec une empreinte d'environ 2 Mo.",
        "projects.guifotosDescription": "Alternative open-source et auto-hébergée à Google Photos axée sur la confidentialité et la simplicité. Développée en C#/.NET et Docker pour le stockage et le partage sécurisé de photos familiales.",
        "projects.milkgrubDescription": "Thème personnalisé pour le chargeur d'amorçage GRUB2 inspiré du roman visuel « Milk outside a bag of milk », adapté avec une palette bleue pour les environnements Linux en double amorçage.",
        "projects.homelabTitle": "Infrastructure Homelab Personnelle",
        "projects.homelabDescription": "Serveur Linux Debian auto-hébergé propulsant ce portfolio et mes services multimédias. Intègre un pipeline CI/CD automatisé via un exécuteur GitHub Actions auto-hébergé, des conteneurs Docker derrière Nginx et une administration à distance via un réseau maillé Tailscale.",
        "projects.siemTitle": "Laboratoire SIEM Wazuh",
        "projects.siemDescription": "Environnement SIEM conteneurisé déployé avec Wazuh pour l'ingestion de journaux, la télémétrie des postes et l'ingénierie de détection. Inclut la surveillance d'intégrité des fichiers en temps réel (FIM avec auditd) sur des VM Linux et Windows via Tailscale ainsi que des simulations d'attaques.",

        "contact.title": "Me contacter",
        "contact.description": "Je suis actuellement à la recherche d'opportunités de stage en développement logiciel ou en cybersécurité. Que vous ayez une offre de stage, un projet à discuter ou simplement envie d'échanger, n'hésitez pas à m'écrire !",

        "footer.rights": '© <span id="copyright-year"></span> Guilherme Cardoso de Araujo. Tous droits réservés.'
    }
};

function getInitialLanguage() {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    return navigator.language.toLowerCase().startsWith("fr") ? "FR" : "EN";
}

function applyLanguage(lang) {
    if (!translations[lang]) return;

    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang.toLowerCase();

    const currentLangEl = document.getElementById("current-lang");
    if (currentLangEl) {
        currentLangEl.textContent = lang;
    }

    document.querySelectorAll("[data-lang]").forEach(item => {
        item.classList.toggle("active", item.dataset.lang === lang);
    });

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    const yearEl = document.getElementById("copyright-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

document.querySelectorAll("[data-lang]").forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        applyLanguage(this.dataset.lang);
    });
});

applyLanguage(getInitialLanguage());