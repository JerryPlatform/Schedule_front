interface Server {
  ip: string,
  port: number
}

interface DevServer {
  [key: string]: Server
}

const devServer: DevServer = {
  JSM_MAC: {
    ip: '192.168.20.87',
    port: 8000
  },
  JSM_CORP: {
    ip: '192.168.15.240',
    port: 8000
  },
  JSM_SAMSUNG: {
    ip: '172.30.1.23',
    port: 8000
  }
};

const useServer: string = "";

export const API_URL =
  useServer !== ''
  ? `http://${devServer[useServer].ip}:${devServer[useServer].port}/`
  : `https://jerryplatform.dev:8001/`
