var express = require('express');
var router = express.Router();
var axios = require('axios');
const config = require('../config/config');
const language = require('../public/js/language')
var qs = require('qs');
const client = require('../services/redis')

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
