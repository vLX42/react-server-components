import React from "react";
import { join } from "path";
import { pipeToNodeWritable } from "react-server-dom-webpack/writer.node.server";
import RenderMarkdown from "../../components/RenderMarkdown";
class Writer {
  constructor() {
    this.buffer = [];
    this.result;
    this.handlers = {};
  }
  write(s) {
    this.buffer.push(s.toString());
  }
  end() {
    const handlers = this.handlers.done;
    if (handlers) {
      handlers.forEach((fn) => {
        fn(this.buffer.join());
      });
    }
  }
  on(event, fn) {
    const chain = (this.handlers[event] = this.handlers[event] || []);
    chain.push(fn);
  }
}

export default function handler(req, res) {
  const {
    query: { props },
  } = req;

  const writer = new Writer();

  return new Promise((resolve, reject) => {
    writer.on("done", (result) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/text");
      res.setHeader("X-Props", JSON.stringify(props));
      res.end(result);
      resolve();
      // resolve({
      //     statusCode: 200,
      //     body: result,
      //     headers: {'Content-Type': 'application/text', 'X-Props': JSON.stringify(props)}
    });
    var fs = require("fs");
    const _props = JSON.parse(props);

    let url = "https://raw.githubusercontent.com/facebook/react/master/README.md";
    switch (_props.name) {
      case "World":
        url =
          "https://raw.githubusercontent.com/facebook/create-react-app/master/README.md";
        break;
      default:
        break;
    }
    fetch(url).then(function (response) {
      return response.text().then(function (text) {
        pipeToNodeWritable(
            React.createElement(RenderMarkdown, {
              name: _props.name,
              data: text,
            }),
            writer,
            {}
          );
      });
    });
  });
}
