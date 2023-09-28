const portConfig = { hostname: '0.0.0.0', port: 7777 };

const handleRequest = async (request) => {
  return new Response('Hello world!');
};

Deno.serve(portConfig, handleRequest);
