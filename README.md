# okta-react-tse-example
This project is a demo of how to use thoughtspot embeded everywhere with okta SAML. 
- Currently it contains: SAML login with okta, prefetch of thoughtSpot static assets, list of liveboards.


# Installation

## Step 1: 
run following commands, to get a copy of okta-react-tse-example on your local:
```
git clone https://github.com/yuanyuanliu358/okta-react-tse-example
cd okta-react-tes-example
```
## Step 2: 
Start the trusted auth server on a local port:
- Get a secret key from your thoughtspot cloud(go to develop->security settings->edit->Trusted authentication);
- Go to https://github.com/thoughtspot/node-token-auth-server-example ,follow the instruction.

# Step 3: 
Start the server, run: 
```
REACT_APP_OKTA_CLIENT_ID=0oa8ogmr69jbJC5RN5d7  REACT_APP_OKTA_ORG_URL=https://dev-91100500.okta.com URL=http://localhost:3000 npm start
```

# Referencing
https://github.com/oktadev/okta-react-node-example
