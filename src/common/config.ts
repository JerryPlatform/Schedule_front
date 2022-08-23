interface Server {
  ip: string,
  port: number
}

interface DevServer {
  [key: string]: Server
}

const devServer: DevServer = {
  JSM: {
    ip: '192.168.20.87',
    port: 8084
  }
};

const useServer: string = "JSM";

export const API_URL =
  useServer !== ''
  ? `http://${devServer[useServer].ip}:${devServer[useServer].port}/`
  : process.env.API
