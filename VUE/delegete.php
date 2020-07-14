<?php
    //代理脚本
    //接收前端传来的参数
    $data = $_GET['data'];
    //请求www.b.com 把获取的内容响应给前端
    echo file_get_contents('http://www.b.com?data={$data}');

