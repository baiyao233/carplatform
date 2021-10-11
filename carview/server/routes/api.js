var express = require('express');
var router = express.Router();
var axios = require('axios');
const config = require('../config/config');
const language = require('../public/js/language')
var qs = require('qs');
const client = require('../services/redis')
/**
 * 用户登录
 */
router.get('/login', function (req, res, next) {
    let url = `${config.back_service}/users/login?username=${req.query.username}&password=${req.query.password}`;
    axios.get(url).then(response => {
        res.status(response.status).send(response.data);
        req.session = response.data
    }).catch(e => {
        res.status(500).send({errorInfo: language.error_500})
    })
});
/**
 * 政务一体化单点登录
 */
router.get('/govco/login', function (req, res, next) {
    let url = config.uis_url +
        '/oauth2/authorize?scope=openid user_info_resource-basic-r&response_type=code&state='+new Date().getTime()+'&redirect_uri='
        + config.callback + '&client_id=' + config.clientId;
    res.redirect(url);
});
/**
 * 获取用户信息
 */
router.get('/userInfo', function (req, res, next) {
    res.status(200).send(req.session.userinfo);
});
/**
 * 退出登录
 */
router.get('/logout', function(req, res, next) {
    var url = config.uis_url + "/logout?state=1234567&id_token_hint=" + req.session.idToken
        + "&post_logout_redirect_uri=" + config.logoutUrl;
    // req.session.userinfo = null;
    // req.session.accessToken = null
    // req.session.idToken  = null
    res.redirect(url);
});
/**
 * 获取用户列表
 */
router.get('/users/all', function (req, res, next) {
    let pageSize = req.query.pageSize;
    let pageNum = req.query.pageNum;
    let username = req.query.username;
    let url = ''
    if (username == '' || username == "undefined") {
        url = `${config.back_service}/users/all?pageSize=${pageSize}&pageNum=${pageNum}`;
    } else {
        url = `${config.back_service}/users/all?pageSize=${pageSize}&pageNum=${pageNum}&username=${username}`;
    }
    axios.get(url).then(response => {
        res.status(response.status).send(response.data);
    }).catch(e => {
        res.status(500).send({errorInfo: language.error_500})
    })
});
/**
 * 修改用户
 */
router.put('/users/update/:id', function (req, res, next) {
    let url = `${config.back_service}/users/update/${req.params.id}`;
    axios.put(url,req.body).then(response => {
        res.status(response.status).send(response.data);
    }).catch(e => {
        res.status(500).send({errorInfo: language.error_500})
    })
});
/**
 * 删除用户
 */
router.delete('/users/del/:id', function (req, res, next) {
    let url = `${config.back_service}/users/del/${req.params.id}`;
    axios.delete(url).then(response => {
        res.status(response.status).send(response.data);
    }).catch(e => {
        res.status(500).send({errorInfo: language.error_500})
    })
});
/**
 * 新增用户
 */
router.post('/users', function (req, res, next) {
    let url = `${config.back_service}/users`;
    axios.post(url,req.body).then(response => {
        res.status(response.status).send(response.data);
    }).catch(e => {
        res.status(500).send({errorInfo: language.error_500})
    })
});

module.exports = router;
