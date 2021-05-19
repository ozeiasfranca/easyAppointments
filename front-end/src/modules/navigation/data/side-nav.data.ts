import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'NÚCLEO',
        items: ['dashboard'],
    },
    {
        text: 'INTERFACE',
        items: ['layouts', 'pages'],
    },
    {
        text: 'ADICIONE',
        items: ['charts', 'tables'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Painel Geral',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Navegação Estática',
                link: '/dashboard/static',
            },
            {
                text: 'Navegação Light',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Páginas',
        submenu: [
            {
                text: 'Autenticação',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Registro',
                        link: '/auth/register',
                    },
                    {
                        text: 'Esqueceu a senha',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Erro',
                submenu: [
                    {
                        text: '401',
                        link: '/error/401',
                    },
                    {
                        text: '404',
                        link: '/error/404',
                    },
                    {
                        text: '500',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Gráficos',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Tabelas',
        link: '/tables',
    },
};
