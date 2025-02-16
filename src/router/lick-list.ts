// import { type EssentialLinkProps } from '../components/EssentialLink.vue';
export interface EssentialLinkProps {
   title: string;
   caption?: string;
   link?: string;
   icon?: string;
};

export const linksList: EssentialLinkProps[] = [
   {
      title: 'Typography',
      caption: 'Types of typography',
      icon: 'las la-font',
      link: 'typography',
   },
   {
      title: 'Flex',
      caption: 'Flex ',
      icon: 'las la-border-all',
      link: 'flex',
   },
   {
      title: 'Docs',
      caption: 'quasar.dev',
      icon: 'las la-graduation-cap',
      link: 'https://quasar.dev'
   },
   {
      title: 'Quasar Awesome',
      caption: 'Community Quasar projects',
      icon: 'lab la-gratipay',
      link: 'https://awesome.quasar.dev'
   },
   {
      title: 'Dialogs',
      caption: 'Dialogs ',
      icon: 'las la-comment-dots',
      link: 'dialogs',
   }
];