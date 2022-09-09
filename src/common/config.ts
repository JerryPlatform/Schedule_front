interface Server {
  ip: string,
  port: number
}

interface DevServer {
  [key: string]: Server
}

const devServer: DevServer = {
  JSM1: {
    ip: '192.168.20.87',
    port: 8084
  },
  JSM2: {
    ip: '192.168.20.95',
    port: 8084
  },
  JSM3: {
    ip: '172.30.1.23',
    port: 8000
  }
};

const useServer: string = "JSM3";

export const API_URL =
  useServer !== ''
  ? `http://${devServer[useServer].ip}:${devServer[useServer].port}/`
  : `https://jerryplatform.dev:8001/`
