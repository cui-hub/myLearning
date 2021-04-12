console.log('hello')

// CSR 客户端渲染代码
$.ajax({
  url:'/api/list',
  success(result){
    let html = '<ul>';
    result.data.forEach(value => {
      html += `<li>${value}</li>`
    });
    html += '</ul>'
    document.getElementById('list').innerHTML = html
    console.log(result)
  }
})