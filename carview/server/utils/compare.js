require('handlebars').registerHelper('compare', function(left, operator, right,
  options) {
  if (arguments.length < 3) {
    throw new Error('Handlerbars Helper "compare" needs 2 parameters');
  }
  var operators = {
    '==': function(l, r) {
      return l == r;
    },
    '===': function(l, r) {
      return l === r;
    },
    '!=': function(l, r) {
      return l != r;
    },
    '!==': function(l, r) {
      return l !== r;
    },
    '<': function(l, r) {
      return l < r;
    },
    '>': function(l, r) {
      return l > r;
    },
    '<=': function(l, r) {
      return l <= r;
    },
    '>=': function(l, r) {
      return l >= r;
    },
    'typeof': function(l, r) {
      return typeof l == r;
    },
    'contains': function(l, r) {
      if (!l) {
        return false;
      }
      var s = l.indexOf(r);
      if (s != -1) {
        return true;
      } else {
        return false;
      }
    },
    'or': function(l, r) {

      if (l.length > 0) {
        console.log(l);
        return true;
      }
      if (r) {
        console.log(r);
        return true;
      }
      return false;
    }
  };

  if (!operators[operator]) {
    throw new Error(
      'Handlerbars Helper "compare" doesn\'t know the operator ' +
      operator);
  }

  var result = operators[operator](left, right);

  if (result) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }

});

require('handlebars').registerHelper('toJSON', function(object) {
  return new require('handlebars').SafeString(JSON.stringify(object));
});
require('handlebars').registerHelper('timeFormat', function(timestr) {
  var nowtime = new Date(timestr);

  return timeFormat("yyyy-MM-dd", nowtime);
});

var timeFormat = function(fmt, date) { //author: meizz
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1
      .length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" +
        o[k]).substr(("" + o[k]).length)));
  return fmt;
}
