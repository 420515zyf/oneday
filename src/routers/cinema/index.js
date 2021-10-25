export default {
    path: '/cinema',
    component: () => import('../../views/Cinema/index.vue'),
    children: [
        { path: "/cinema", redirect: '/cinema/cilist' },
        {
            path: '/cinema/cilist',
            component: () => import('../../components/Cilist/index.vue')
        }
    ]
}