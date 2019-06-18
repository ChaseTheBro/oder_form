
layui.use('laydate', function(){
  var laydate = layui.laydate;
  

  laydate.render({
    elem: '#dateselect'
    ,range: true
    ,min: '1970-1-1'
    ,max: 0
    ,change: function(value, date){
      //layer.alert('你选择的日期是：' + value + '<br><br>获得的对象是' + JSON.stringify(date));
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

layui.use('layer', function(){
  var $ = layui.jquery, layer = layui.layer;

  var active = {
    offset: function(othis){      
      layer.prompt({title: '请输入支付密码', formType: 1}, 
      
      function(pass, index){
        layer.close(index);
        if(/^\d+$/.test(pass) && pass.length == 6){
          layer.msg('密码'+ pass);
        }
        else{
          layer.msg('密码应该是6位纯数字');
        }
      });
    }
  };
  
  $('#layerDemo .layui-btnjj').on('click', function(){
    var othis = $(this), method = othis.data('method');
    active[method] ? active[method].call(this, othis) : '';
  });
  
});