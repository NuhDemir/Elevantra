// config/config.js
export const config = {
  port: process.env.PORT || 3000,
  apiKeys: {
    jobApi: process.env.API_KEY || "demo-api-key",
  },
  externalApis: {
    jobApiUrl: "https://api.example.com/jobs",
  },
};
