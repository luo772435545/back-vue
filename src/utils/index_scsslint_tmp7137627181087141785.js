export default {
  /**
   * 获取host
   * */
  getHost (url = document.location.href) {
    if (url.indexOf('http://') != -1 || url.indexOf('https://') != -1) {
      var reg = new RegExp('^(http:\/\/|https:\/\/)(.*?)(\/|$)');
      return url.match(reg)[0].slice(-1) == '/' ? url.match(reg)[0].slice(0, -1) : url.match(reg)[0];
    } else {
      return url.split('/')[0];
    }
  },
  /**
   *获取url地址参数 可获取中文
   *@param {string}
   *@return {string}
   * */
  getUrlParam (key) {
    var url = window.location.search;
    var reg = new RegExp("(^|&)" + key + "=(.*)?(&|$)");
    var result = url.substr(1).match(reg);//去除?号
    return result ? decodeURIComponent(result[2]) : null;
  }
};
