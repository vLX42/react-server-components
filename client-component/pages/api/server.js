export default function handler(req, res) {
  const {
    query: { props },
  } = req;

  var fs = require("fs");

  fs.readFile(`_data/${props}.md`, "utf8", function (err, data) {
    if (err) throw err;
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ data: data, name: props }));
  });
}
