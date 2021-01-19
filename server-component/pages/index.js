import React, { Suspense } from "react";
import { useServerResponse } from "../lib/Cache.client";

const Message = (props) => {
  if (process.browser) {
    const response = useServerResponse(props);
    return response.readRoot();
  }
  return <h1>Server render</h1>;
};

const Index = () => (
  <Suspense fallback={<div>Loading...</div>}>

      <div className="grid gap-4 grid-cols-2">
        <Message name="World" />
        <Message name="Server" />
      </div>
    </Suspense>
);

export default Index;
