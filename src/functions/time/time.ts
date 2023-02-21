import { builder, Handler } from "@netlify/functions";

const myHandler: Handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
    },
    body: JSON.stringify({ now: new Date().toString() }),
  };
};

// Wrap our Netlify function as an On-Demand-Builder
export const handler = builder(myHandler);
