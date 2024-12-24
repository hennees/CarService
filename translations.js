function translate(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}

const translations = {
    en: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        pricing: 'Pricing',
        contact: 'Contact'
    },
    de: {
        home: 'Startseite',
        about: 'Über uns',
        services: 'Dienstleistungen',
        pricing: 'Preise',
        contact: 'Kontakt'
    },
    sl: {
        home: 'Domov',
        about: 'O nas',
        services: 'Storitve',
        pricing: 'Cenik',
        contact: 'Kontakt'
    },
    it: {
        home: 'Home',
        about: 'Chi siamo',
        services: 'Servizi',
        pricing: 'Prezzi',
        contact: 'Contatto'
    },
    es: {
        home: 'Inicio',
        about: 'Acerca de',
        services: 'Servicios',
        pricing: 'Precios',
        contact: 'Contacto'
    },
    fr: {
        home: 'Accueil',
        about: 'À propos',
        services: 'Services',
        pricing: 'Tarifs',
        contact: 'Contact'
    },
    zh: {
        home: '首页',
        about: '关于我们',
        services: '服务',
        pricing: '价格',
        contact: '联系'
    }
};