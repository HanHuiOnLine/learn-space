let fs = require('fs');

let files = fs.readdirSync(__dirname + '/controllers');

let js_files = files.filter((f) => {
    return f.endsWith('.js')
});

for (let f of js_files) {
    console.log(`process controller: ${f}`);
    let mapping = require(__dirname + '/controllers/' + f);
    for (let url in mapping) {
        if (url.startsWith('GET ')) {
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: get ${path}`);
        } else if (url.startsWith('POST')) {
            let path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}