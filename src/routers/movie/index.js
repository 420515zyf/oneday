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
            path: '/movie/comingsoon/detail/:id',
            name: 'comingsoonDetail',
            components: {
                default: () => import('../../components/ComingSoon/index.vue'),
                detail: () => import('../../views/Movie/detail.vue')
            }
        },
        {
            path: '/movie/nowplaying',
            component: () => import('../../components/NowPlaying/index.vue')
        },
        {
            path: '/movie/nowplaying/detail/:id',
            name: 'nowplayingDetail',
            components: {
                default: () => import('../../components/NowPlaying/index.vue'),
                detail: () => import('../../views/Movie/detail.vue')
            }
        },
        {
            path: '/movie/search',
            component: () => import('../../components/Search/index.vue')
        }
    ],
}