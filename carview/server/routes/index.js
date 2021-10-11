var express = require('express');
var router = express.Router();
var axios = require('axios');
const config = require('../config/config');
const language = require('../public/js/language')
var qs = require('qs');
const client = require('../services/redis')

/**
 * 回调
 */
router.get('/callback/sso', async function(req, res, next) {
  if(req.query.code == null){
    res.redirect(config.context + '/not-found');
  }
  var resquest_body = {
    grantType:'authorization_code',
    code: req.query.code
  };
  let clientInfo = await axios.get(`${config.auth_center}/clients/${config.clientId}`).then(response => {
    return response.data.response;
  }).catch(error => {
    console.log(error.response)
    let result = {}
    return null
  })
  let authorization = Buffer.from(`${clientInfo.clientId}:${clientInfo.clientSecret}`).toString('base64')
  let data = await axios.post(config.auth_center + '/token',qs.stringify(resquest_body),
      {headers: {'Content-Type':'application/x-www-form-urlencoded',
          'Authorization': `Basic ${authorization}`}}
  ).then(function (response) {
    return response.data.response
  }).catch(function (error) {
    console.log(error.response)
    let result = {}
    return null
  })
  if(data == null){
    return res.redirect(config.context + '/not-found');
  }
  var idToken = data.idToken.split('.');
  var playload = idToken[1];
  var b = new Buffer(playload, 'base64');
  var decode_playload = JSON.parse(b.toString());
  req.session.userinfo = decode_playload;
  req.session.accessToken = data.accessToken
  req.session.idToken = data.idToken
  let json = {
    userId:decode_playload.sub,
    userName:decode_playload.name,
    accessToken:data.accessToken,
    idToken:req.session.idToken,
    title: 'handlebars demo'
  }
  let url = config.context + '/#/dashboard';
  res.redirect(url);
  // res.cookie('idToken', data.idToken, {path:'/',httpOnly:true,maxAge:3600});
  // res.render('index', json);
});
router.get('/callback/ssologout', function(req, res, next) {
  if (req.query.sid && req.query.iss) {
    //如果query中有sid和iss这两个参数，则是通知登出
    let sessionId = req.query.sid;
    for(var key in req.cookies){
      if ("JSESSIONID" === key || config.session_name === key) {
        res.cookie(key, '', {path: '/', httpOnly: true, maxAge: 0});
      }
    }
    delete req.session;
    res.send({logout:true});
    return;
  } else {
    // 正常登出
    for(var key in req.cookies){
      if ("JSESSIONID" === key || config.session_name === key) {
        res.cookie(key, '', {path: '/', httpOnly: true, maxAge: 0});
      }
    }
    delete req.session;
    res.redirect(config.context + '#/login');
  }
});
module.exports = router;
