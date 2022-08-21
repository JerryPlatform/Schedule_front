interface Server {
  ip: string,
  port: number
}

interface DevServer {
  [key: string]: Server
}

const devServer: DevServer = {
  JSM: {
    ip: '172.30.1.91',
    port: 8084
  }
};

const useServer: string = "";

export const API_URL =
  useServer !== ''
  ? `http://${devServer[useServer].ip}:${devServer[useServer].port}/`
  : process.env.API
