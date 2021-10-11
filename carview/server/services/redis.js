/**
 * redis service
 */
var config = require('../config/config');
var redis = require('redis');
var RDS_PORT = config.redis_port; //端口号
var RDS_HOST = config.redis_host; //服务器IP
// var RDS_PWD = config.redis_password;//密码
// var RDS_OPTS = {
//     // auth_pass: RDS_PWD
//   }, //设置项
client = redis.createClient(RDS_PORT, RDS_HOST);
client.on('ready', function(res) {
  console.log('redis ready');
});
client.on('error', function(res) {
  // console.log("redis connection error!!!");
	try{
		client.on('ready', function(res) {
      console.log("ready reconnection successfully");
		});
	}catch(e){

	}
});
// client.auth(RDS_PWD, function() {
//   console.log('通过认证');
// });

module.exports = client;
