import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login'
import home from '../components/common/home'
import notFound from '../pages/not-found'
import dashboard from '../pages/Dashboard'
import BaseTable from '../pages/BaseTable.vue'
import Upload from '../pages/Upload.vue'

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
                    component: dashboard,
                    meta: {title: '系统首页'}
                },
                {
                    path: '/table',
                    component: BaseTable,
                    meta: {title: '基础表格'}
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: Upload,
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
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard
        }

    ]
})
