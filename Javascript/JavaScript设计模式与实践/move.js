var tween = (function(){
  return {
    // t-开始后已经进行的时长；b-初始位置；c-结束位置；d-总时长
    liner:function(t, b, c, d){
      return c*t/d + b;
    },
    ease:function(t, b, c, d){
      return c*(t /=d)*t + b;
    },
    strongEaseIn:function(t, b, c, d){
      return c*(t /=d)*t*t*t*t + b;
    },
    strongEaseOut:function(t, b, c, d){
      return c*((t = t / d - 1)*t*t*t*t + 1) + b;
    },
    sinEaseIn:function(t, b, c, d){
      return c * (t /= d) * t * t + b;
    },
    sinEaseOut:function(t, b, c, d){
      return c * ((t = t / d - 1) * t * t + 1 ) + b;
    },
  }
})()