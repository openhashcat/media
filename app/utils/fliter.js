const websites = [{
  tag: 'github',
  regex: 'github'
}, {
  tag: '微信',
  regex: 'weixin'
}, {
  tag: '豆瓣',
  regex: 'douban'
}, {
  tag: '简书',
  regex: 'jianshu'
}, {
  tag: '掘金',
  regex: 'juejin'
}, {
  tag: 'Medium',
  regex: 'medium'
}, {
  tag: 'Reddit',
  regex: 'reddit'
}, {
  tag: 'Twitter',
  regex: 'twitter'
}, {
  tag: 'Facebook',
  regex: 'facebook'
}]

export default function fliter(url) {
  let flag = 0;
  for (let i in websites) {
    let patt = websites[i];
    if (url.match(new RegExp(patt.tag))) {
      flag = 1;
      return patt.tag;
    }
  }

  if (flag == 0) {
    return '';
  }
}
