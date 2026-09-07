const fs = require('fs');
const p = 'd:/AIProject/capPlatform/output/prototype/index.html';
const s = fs.readFileSync(p, 'utf8');
const re = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g;
let m, i = 0, err = 0;
while ((m = re.exec(s))) {
  i++;
  try { new Function(m[1]); } catch (e) { err++; console.log('block' + i + ' ERROR: ' + e.message); }
}
console.log(err ? ('JS FAIL ' + err + '/' + i) : ('JS ALL OK blocks=' + i));
for (const k of ['PLATFORM_APPS', "app.component('P28All'", "app.component('P28',", 'P28ApplyApi', 'P28All']) {
  console.log(k, (s.split(k).length - 1));
}
