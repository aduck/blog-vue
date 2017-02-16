export default function(time,opts){
  var opts=opts || {}
  // 计算零时区的时间戳
  var date=new Date()
  var offset=date.getTimezoneOffset()*60*1000
  var zoneDate=new Date(time).getTime()+offset

  // 根据给定时区计算时间戳
  var timeZone=opts.timeZone || 8
  var times=zoneDate+timeZone*60*60*1000
  var timeDate=new Date(times)

  // 根据格式输出
  var days=['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
  var Y=timeDate.getFullYear()
  var M=timeDate.getMonth()+1
  var D=timeDate.getDate()
  var day=days[timeDate.getDay()]
  var h=timeDate.getHours()
  var m=timeDate.getMinutes()
  var s=timeDate.getSeconds()

  var format=opts.format || 'YY-MM-DD hh:mm'
  var dateStr=format
    .replace(/YY/,Y)
    .replace(/MM/,M)
    .replace(/DD/,D)
    .replace(/hh/,h)
    .replace(/mm/,m)
    .replace(/ss/,s)
    .replace(/d/,day)
  return dateStr
}