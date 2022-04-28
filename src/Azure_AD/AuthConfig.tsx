export const msalConfig = {
    auth: {
      clientId: "6793a12b-ce6f-44a4-9627-e11b7ab1d8df",
      authority: "https://login.microsoftonline.com/13ee1f99-2c19-4ffe-8479-7229725bc499", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3001",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
  };