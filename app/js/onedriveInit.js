const loginRequest = {
  scopes: ["User.Read"],
};

const config = {
  auth: {
    clientId: "552df354-9bd1-47ff-bc63-6ccb6147396f",
    authority: "https://login.microsoftonline.com/consumers",
    redirectUri: "https://onedrive.live.com",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case msal.LogLevel.Error:
            console.error(message);
            return;
          case msal.LogLevel.Info:
            console.info(message);
            return;
          case msal.LogLevel.Verbose:
            console.debug(message);
            return;
          case msal.LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

const myMSALObj = new msal.PublicClientApplication(config)

export default {
  signIn() {
    myMSALObj
      .loginPopup(loginRequest)
      .catch((error) => {
        console.error(error);
      });
  },
  init() {
    const buttonSignIn = document.getElementById("btnSignInOneDrive");
    buttonSignIn.addEventListener("click", this.signIn);
  },
};
