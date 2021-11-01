export default {
    path: '/movie',
    component: () => import('../../views/Movie/index.vue'),
    children: [
        { path: '/movie', redirect: '/movie/city' },
        {
            path: '/movie/city',
            component: () => import('../../components/City/index.vue')
        },
        {
            path: '/movie/comingsoon/:id',
            component: () => import('../../components/ComingSoon/index.vue'),
            name: 'comingSoon'
        },
        {
            path: '/movie/detail/:id',
            name: 'detail',
            components: {
                detail: () => import('../../views/Movie/detail.vue')
            }
        },
        {
            path: '/movie/nowplaying',
            component: () => import('../../components/NowPlaying/index.vue')
        },
        {
            path: '/movie/search',
            component: () => import('../../components/Search/index.vue')
        }
    ],
}