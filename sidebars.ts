import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🏛️ Introduction',
      items: [
        '🏛️intro/intro',
        '🏛️intro/historique',
        '🏛️intro/presentation',
      ],
    },
    {
      type: 'category',
      label: '💻 Développement de la Domus sur Logiciels',
      items: [
        '💻developpement/💻developpement',
        '💻developpement/logiciels_utilises',
        '💻developpement/methodologie_conception',
      ],
    },
    {
      type: 'category',
      label: '🔨 La Conception de la Domus dans Minecraft',
      items: [
        '🔨 La Conception de la Domus dans Minecraft/🔨 La Conception de la Domus dans Minecraft',
        '🔨 La Conception de la Domus dans Minecraft/planification_inspiration',
        '🔨 La Conception de la Domus dans Minecraft/choix_materiaux',
        '🔨 La Conception de la Domus dans Minecraft/etapes_construction',
      ],
    },
    // Déplacer cette catégorie en bas
    {
      type: 'category',
      label: '🏠 Description des Pièces de la Domus',
      items: [
        'description_pieces/description_pieces',
        'description_pieces/atrium',
        'description_pieces/cubiculum',
        'description_pieces/hortus',
        'description_pieces/triclinium',
      ],
    },
  ],
};

export default sidebars;
