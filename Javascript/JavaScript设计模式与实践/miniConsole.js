var miniConsole = (function(){
  var consoleWindow = document.createElement('div');
  consoleWindow.style.width = 200 + 'px';
  consoleWindow.style.height = 400 + 'px';
  consoleWindow.style.position ='fixed';
  consoleWindow.style.top = 50 + '%';
  consoleWindow.style.left = 50 + '%';
  consoleWindow.style.transform = 'translate(-50%, -50%)';
  consoleWindow.style.backgroundColor = 'gray';
  document.body.appendChild(consoleWindow);
  return {
    log:function(){
      var div = document.createElement('div');
      div.style.backgroundColor = 'pink';
      div.innerHTML = Array.prototype.join.call(arguments);
      consoleWindow.appendChild(div);
    }
  }
})();