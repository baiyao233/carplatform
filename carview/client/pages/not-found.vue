<template>
    <div>
        <div class="error-page">
            <div class="error-page-inner">
                <img src="/leading-end/images/bulb.png" class="error-left"/>
                <div class="error-right">
                    <img src="/leading-end/images/error.png"/>
                    <p class="error-cn">您当前访问的页面不存在！</p>
                    <p class="error-en">The page you are currently accessing does not exist</p>
                    <a href="/leading-end" class="error-btn">返回首页</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'notFound',
    }
</script>
<style scoped src="@/assets/css/not-found.css">

</style>