
layui.use('laydate', function(){
  var laydate = layui.laydate;
  

  laydate.render({
    elem: '#dateselect'
    ,range: true
    ,min: '1970-1-1'
    ,max: 0
    ,change: function(value, date){
      layer.alert('你选择的日期是：' + value + '<br><br>获得的对象是' + JSON.stringify(date));
    }
  });
});

layui.use(['laypage', 'layer'], function(){
  var laypage = layui.laypage
  ,layer = layui.layer;
  //只显示上一页、下一页
  laypage.render({
    elem: 'pagechange'
    ,count: 100
    ,first: false
    ,last: false
    ,theme: '#4286f4'
    ,jump: function(obj, first){
      if(!first){
        layer.msg('第 '+ obj.curr +' 页');
      }
    }
  });
});