export default function handler(req, res) {
  const {
    query: { props },
  } = req;

  let url = "https://raw.githubusercontent.com/facebook/react/master/README.md";
  switch (props) {
    case "World":
      url =
        "https://raw.githubusercontent.com/facebook/create-react-app/master/README.md";
      break;
    default:
      break;
  }
  
  fetch(url).then(function (response) {
    return response.text().then(function (text) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ data: text, name: props }));
    });
  });
}
