export default {
    path: '/movie',
    component: () => import('../../views/Movie/index.vue'),
    children: [
        { path: '/movie', redirect: 'comingsoon' },
        {
            path: 'city',
            component: () => import('../../components/City/index.vue')
        },
        {
            path: 'comingsoon',
            component: () => import('../../components/ComingSoon/index.vue')
        },
        {
            path: 'nowplaying',
            component: () => import('../../components/NowPlaying/index.vue')
        },
        {
            path: 'search',
            component: () => import('../../components/Search/index.vue')
        }
    ],
}