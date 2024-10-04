// 初始化开始时间
var startTime = new Date('2022-01-01'); // 这里替换为你的开始时间

// 更新显示时间的函数
function updateTime() {
  var now = new Date();
  var diff = now - startTime;
  var seconds = Math.floor(diff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var weeks = Math.floor(days / 7);
  var months = Math.floor(weeks / 4); // 假设每个月大约有4周
  var years = Math.floor(months / 12);

  // 更新显示
  document.getElementById('love').innerHTML =
    "我们在一起已经:<br>" +
    years + "年" +
    (months % 12) + "个月" +
    (weeks % 4) + "周" +
    (days % 7) + "天" +
    (hours % 24) + "小时" +
    (minutes % 60) + "分钟" +
    (seconds % 60) + "秒";
}

// 每1000毫秒（1秒）更新一次时间
setInterval(updateTime, 1000);

// 首次调用函数以初始化页面
updateTime();