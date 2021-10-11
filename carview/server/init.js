/**
 * Apollo 配置初始化
 */
const fs = require('fs');
const path = require('path');
const apollo = require('node-apollo');
const axios = require('axios')

// 配置文件路径
const configFileLocation = path.join(__dirname,"config/config.js");

// Apollo相关配置

const apollo_config = { 
    configServerUrl: '',
    appId: '',//对应项目的appId
    clusterName: 'default',
    namespaceName: 'application'
};

// 获取配置并写入本地文件
apollo.remoteConfigServiceFromCache(apollo_config)
.then(res => {
	console.log("get meta data from " + apollo_config.configServerUrl + ":\n" + JSON.stringify(res, null, 4));
	let configFileData = "const config = "+JSON.stringify(res, null, 4)+"\nmodule.exports = config;";
	fs.writeFile(configFileLocation, configFileData, function(err){})
})
.catch(err => {
	console.error(err);
}).done;