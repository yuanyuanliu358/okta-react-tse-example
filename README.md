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
Setup Okta Dev Account
If you have Okta dev account run okta login;
Otherwise, install okta cli and run okta register to sign up for a new account.

## Step 3:
Create an OIDC app in Okta org:
- run`okta apps create`. Select the default app name, or change it as you see fit. Choose Single-Page App and press Enter.

- Change the Redirect URI to http://localhost:3000/login/callback and accept the default Logout Redirect URI of http://localhost:3000.

- The Okta CLI will create an OIDC Single-Page App in your Okta Org. It will add the redirect URIs you specified and grant access to the Everyone group. It will also add a trusted origin for http://localhost:3000. You will see output like the following when it's finished:
```
Okta application configuration:
Issuer:    https://dev-133337.okta.com/oauth2/default
Client ID: 0oab8eb55Kb9jdMIr5d6
```
## Step 4: 
Start the trusted auth server on a local port:
- Get a secret key from your thoughtspot cloud(go to develop->security settings->edit->Trusted authentication);
- Go to https://github.com/thoughtspot/node-token-auth-server-example ,follow the instruction.

# Step 5: 
Start the server, run: `npm start`

# Referencing
https://github.com/oktadev/okta-react-node-example

