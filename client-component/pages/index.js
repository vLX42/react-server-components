import React, { useEffect, useState } from "react";
import RenderMarkdown from "../components/RenderMarkdown";

const Message = (props) => {
  const [data, dataSet] = useState(undefined);

  useEffect(() => {
    async function fetchAPI(file) {
      let response = await fetch("/api/server?props=" + encodeURIComponent(file))
      response = await response.json()
      dataSet(response)
    }

    fetchAPI(props.name)

  }, []);

  return data ? <RenderMarkdown data={data.data} name={data.name}/> : <div>Loading...</div>;
};

const Index = () => {
  return (
    <div className="grid gap-4 grid-cols-2">
      <Message name="World" />
      <Message name="Server" />
    </div>
  );
};

export default Index;
