// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarCommunity = {
  community: [
    {
      type: 'doc',
      id: 'README',
      label: 'Overview',
    },

    {
      type: 'doc',
      id: 'mission-vision',
    },
    {
      type: 'doc',
      id: 'CONTRIBUTOR_LADDER',
    },
    {
      type: 'doc',
      id: 'community-members',
      label: 'Members',
    },
    {
      type: 'category',
      label: 'Charters',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'governance-charter',
        },
        {
          type: 'doc',
          id: 'tech-committee-charter',
        },
      ],
    },
    {
      type: 'doc',
      id: 'interested-parties',
    },
    {
      type: 'doc',
      id: 'ADOPTERS',
      label: 'Adopters',
    },
    {
      type: 'doc',
      id: 'branding-guidelines',
    },
    {
      type: 'doc',
      id: 'SECURITY',
    },
  ],
};

module.exports = sidebarCommunity;
