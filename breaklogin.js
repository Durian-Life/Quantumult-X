/************************************
> 应用名称：咸鱼之王
> 脚本作者：Durian-Life
> 更新时间：2024-02-24
> 作用：突破7天登录限制，永久登录
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️

          
[rewrite_local]
^https:\/\/comb-platform\.hortorgames\.com\/comb-login-server\/api\/v1\/login\/check\? url script-response-body https://raw.githubusercontent.com/Durian-Life/Quantumult-X/refs/heads/master/breaklogin.js

[mitm]
comb-platform.hortorgames.com
/************************************

var body = $response.body;
var obj = JSON.parse(body);

obj['data'] = true;
body = JSON.stringify(obj);

console.log(body);

$done(body);
