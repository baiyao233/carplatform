/**
 * log4js config
 */
var path = require('path');
var log4js = require('log4js');
var config = require(path.join(__dirname,'config'));
// log format layout
var logLayout = {
  type: "pattern",
  pattern: "%[[%c]-[%d{yyyy-MM-dd hh:mm:ss}]-[%p]%] %m"
};
var log4jsConfig = {
  appenders:{
    console: { type: 'stdout',
    layout: logLayout
    },
    dateFile:{
      type: 'dateFile',
      filename: path.join(__dirname,'../logs/'+config.context+'.log'),
      alwaysIncludePattern: false,
      keepFileExt:true,
      layout:logLayout
    }
  },
  categories:{
    default: { appenders: [], level: 'ALL' }
  }
};
//log_type日志输出类型( all:日期文件和控制台，dateFile:日期文件，console：控制台)
if(config.log_type !='all'){
  log4jsConfig.categories.default.appenders.push(config.log_type);
}else{
  log4jsConfig.categories.default.appenders = Object.keys(log4jsConfig.appenders);
}
log4js.configure(log4jsConfig);

exports.logger = log4js.getLogger(config.context);
exports.log4js = log4js;
