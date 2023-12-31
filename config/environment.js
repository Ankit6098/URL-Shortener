const development = {
    name: "development",
  
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: "http://localhost:8001/user/oauth2callback",
  
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GITHUB_CALLBACK_URL: "http://localhost:8001/user/auth/github/callback",
  
    mongoDbUrl: process.env.mongoDbUrl,
  };
  
  const production = {
    name: "production",
  
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: "https://urlshort.ankithub.me/user/oauth2callback",
  
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GITHUB_CALLBACK_URL: "https://urlshort.ankithub.me/user/auth/github/callback",
  
    mongoDbUrl: process.env.mongoDbUrl,
  };
  
  module.exports = production;
  