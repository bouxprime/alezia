import { reactive } from 'vue';

export const eventBus = reactive({
  items: [
    { image: require('@/assets/tom1.png'), name: 'Ana Páris', role: 'Responsable Administrative', description: 'Ana est responsable de la supervision de toutes les fonctions administratives de l\'organisation.', currentProject: 'Refonte du système RH interne', skills: 'Administration, Gestion, RH', experience: '10 ans d\'expérience dans des rôles administratifs' },
    { image: require('@/assets/tom1.png'), name: 'John Doe', role: 'Responsable Marketing', description: 'John dirige l\'équipe marketing et développe des stratégies pour accroître la notoriété de la marque.', currentProject: 'Lancement d\'une nouvelle gamme de produits', skills: 'Marketing, Stratégie, Branding', experience: '12 ans d\'expérience en marketing' },
    { image: require('@/assets/tom1.png'), name: 'Jane Smith', role: 'Responsable des Ventes', description: 'Jane supervise l\'équipe des ventes et travaille à atteindre les objectifs de vente.', currentProject: 'Expansion sur de nouveaux marchés', skills: 'Ventes, Négociation, Recherche de marché', experience: '8 ans d\'expérience en vente' },
    { image: require('@/assets/tom1.png'), name: 'Paul White', role: 'Responsable RH', description: 'Paul est en charge des ressources humaines et des relations avec les employés.', currentProject: 'Mise en place de nouvelles politiques RH', skills: 'RH, Relations avec les employés, Recrutement', experience: '9 ans d\'expérience en RH' },
    { image: require('@/assets/tom1.png'), name: 'Eva Green', role: 'Responsable Design', description: 'Eva dirige l\'équipe de design et travaille sur la conception de produits et le branding.', currentProject: 'Conception de la nouvelle interface utilisateur pour l\'application', skills: 'Design, UI/UX, Branding', experience: '11 ans d\'expérience en design' },
    { image: require('@/assets/tom1.png'), name: 'George Black', role: 'Responsable IT', description: 'George supervise le département informatique et gère les ressources technologiques.', currentProject: 'Mise à niveau de l\'infrastructure réseau', skills: 'IT, Réseautique, Sécurité', experience: '15 ans d\'expérience en IT' },
    { image: require('@/assets/tom1.png'), name: 'Anna Brown', role: 'Responsable Financier', description: 'Anna gère les aspects financiers de l\'entreprise.', currentProject: 'Audit financier et conformité', skills: 'Finance, Comptabilité, Audit', experience: '13 ans d\'expérience en finance' },
    { image: require('@/assets/tom1.png'), name: 'Mike Blue', role: 'Responsable Support', description: 'Mike dirige l\'équipe de support client et assure la satisfaction des clients.', currentProject: 'Mise en œuvre d\'un nouveau système de ticketing', skills: 'Support client, CRM, Communication', experience: '7 ans d\'expérience en support client' }
  ],
  news: [
    { image: 'blog1.png', title: 'Alezia remporte le prix de l\'innovation 2023', description: 'Nous sommes fiers d\'annoncer qu\'Alezia a remporté le prix de l\'innovation technologique pour notre dernière solution VoIP.' },
    { image: 'blog2.png', title: 'Nouvelle collaboration avec TechCorp', description: 'Alezia s\'associe à TechCorp pour développer des solutions de communication avancées pour les entreprises.' },
    { image: 'blog3.png', title: 'Interview de notre CEO par Le Monde', description: 'Découvrez l\'interview exclusive de notre CEO, parlant des tendances futures en matière de sécurité informatique.' },
    { image: 'blog4.png', title: 'Alezia étend ses opérations en Europe', description: 'Nous sommes ravis d\'annoncer l\'ouverture de nouveaux bureaux en Allemagne et en Espagne.' },
    { image: 'blog1.png', title: 'Séminaire sur la cybersécurité', description: 'Participez à notre séminaire exclusif sur la cybersécurité et apprenez comment protéger votre entreprise contre les menaces en ligne.' },
    { image: 'blog2.png', title: 'Lancement d\'une nouvelle plateforme de support client', description: 'Découvrez notre nouvelle plateforme de support client conçue pour offrir une assistance rapide et efficace.' },
    { image: 'blog3.png', title: 'Histoire de réussite : Optimisation des coûts IT pour XYZ Corp', description: 'Découvrez comment nous avons aidé XYZ Corp à réduire ses coûts informatiques tout en améliorant l\'efficacité opérationnelle.' },
    { image: 'blog4.png', title: 'Webinaire sur l\'avenir de la VoIP', description: 'Rejoignez-nous pour un webinaire sur les dernières tendances et innovations en matière de téléphonie VoIP.' },
    { image: 'blog1.png', title: 'Programme de mentorat pour startups', description: 'Alezia lance un nouveau programme de mentorat pour soutenir les startups technologiques émergentes.' },
  ]
});
