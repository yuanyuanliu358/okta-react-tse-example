# okta-react-tse-example
This project is a demo of how to use thoughtspot embeded everywhere with okta SAML. 
- Currently it contains: SAML login with okta, prefetch of thoughtSpot static assets, list of liveboards.


# Installation
```
git clone git@github.com:yuanyuanliu358/okta-react-tse-example.git
cd okta-react-tes-example
npm i
```

Start the trusted auth server on a local port:
- Get a secret key from your thoughtspot cloud(go to develop->security settings->edit->Trusted authentication);
- Go to https://github.com/thoughtspot/node-token-auth-server-example ,follow the instruction.


Add localhost URL http://localhost:3000 to your thoughtspot host CORS whitelist domain, CSP visual embed hosts, CSP connect-src domains

Then start the server, specify the authType, and run: 
```
REACT_APP_OKTA_CLIENT_ID=0oa8ogmr69jbJC5RN5d7  REACT_APP_OKTA_ORG_URL=https://dev-91100500.okta.com REACT_APP_AUTH_TYPE='TrustedAuth' npm start
```

# Referencing
https://github.com/oktadev/okta-react-node-example
https://developers.thoughtspot.com/docs/?pageid=introduction


