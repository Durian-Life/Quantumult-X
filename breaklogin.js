var body = $response.body;
var obj = JSON.parse(body);

obj['data'] = true;
body = JSON.stringify(obj);

console.log(body);

$done(body);
