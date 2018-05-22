var fs = require("fs");
fs.readFile("data.json", "utf8", function (err, data) {
    var test = JSON.parse(data);

    for (var i = 0, l = test.length; i < l; i++) {
        test[i].x = test[i].x + 30;
        test[i].y = test[i].y + 50;        
    }
    console.log(test);

    var t = JSON.stringify(test);
    fs.writeFileSync("aa.json", t);
})