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
  }
};

const useServer: string = "";

export const API_URL =
  useServer !== ''
  ? `http://${devServer[useServer].ip}:${devServer[useServer].port}/`
  : `http://schedule-openapi.jerryplatform.dev/`
