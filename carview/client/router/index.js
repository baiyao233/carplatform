import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login'
import home from '../components/common/home'
import notFound from '../pages/not-found'
import dashboard from '../pages/Dashboard'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            component: dashboard
        },
        {
            path: '/',
            component: home,
            meta: {title: '自述文件'},
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard.vue'),
                    meta: {title: '系统首页'}
                },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../pages/BaseTable.vue'),
                    meta: {title: '基础表格'}
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../pages/Upload.vue'),
                    meta: {title: '文件上传'}
                }
            ]
        },
        {
            path: '*',
            name: 'notFound',
            component: notFound
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }

    ]
})
