import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import Publications from '../views/Publications';
import NotFound from '../views/NotFound';
import Projects from '../views/Projects';
import Teachings from '../views/Teachings';
import Slides from '../views/Slides';

const routes = [
    {
        path: '/',
        redirect: { name: 'Home' }
    },
    {
        name: 'Home',
        path: '/portfolio/',
        component: Home,
    }, {
        name: 'Projects',
        path: '/portfolio/projects',
        component: Projects,
    }, {
        name: 'Publications',
        path: '/portfolio/publications',
        component: Publications,
    }, {
        name: 'Teachings',
        path: '/portfolio/teachings',
        component: Teachings,
    }, {
        name: 'Slides',
        path: '/portfolio/slides',
        component: Slides,
    }, {
        path: '/portfolio/:catchAll(.*)',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
