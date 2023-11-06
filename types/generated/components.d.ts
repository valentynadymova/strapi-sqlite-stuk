import type { Schema, Attribute } from '@strapi/strapi';

export interface AdvantagesAdvantages extends Schema.Component {
  collectionName: 'components_advantages_advantages';
  info: {
    displayName: 'Advantage';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    description: Attribute.Text;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'advantages.advantages': AdvantagesAdvantages;
    }
  }
}
