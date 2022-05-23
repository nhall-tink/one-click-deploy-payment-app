# One Click Deploy Payments App
This is the web app that can be deployed to Heroku.

# How to deploy a version of this app
To initate a deployment of this repo, use the one-click-deploy-payments-microsite repo.


# How to develop
This app is based off the tink-link-web-payment-example.

## Installation

Running this example application requires `CLIENT_ID` and `CLIENT_SECRET`, retrievable in the [Tink Console](https://console.tink.com) after signing up for a developer account.

1. Install dependencies

```
yarn
```

2. Set your client identifier and client secret as environment variables. this can be done using the .env file found in the root of this project.

3. Run client and server in terminal separately

```
yarn start:client
yarn start:server
```

The client app is available at `http://localhost:3000`. The server is running at `http://localhost:8080`.

## Resources

For more information about initiate payments with Tink Link please visit [our documentation page](https://docs.tink.com/resources/payments/start-payment).
