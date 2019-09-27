# INSTALLMENTS

A small full stack application base only on JavaScript to show a final amount from a value splitted by a given value.

_Example:_
```json
# request payload
{
  "amount": 1000.00,
  "times": 2
}

# response
{
  "data": 500.00
}
```

The application is splitted in 2 folders, **server** and **client** representing respectively the backend and frontend.

#### Backend
A simple express application using es6

#### Frontend
A VueJS SPA application

### Requirements

- NodeJS: 10+

### Running
```bash
npm install # the postinstall script hook will take care of installing frontend dependencies

npm run build # build the app for production

npm run start
```

You can see the application running at [http://localhost:5000](http://localhost:5000)


### Tests
You can run the tests by execution test scripts from client and root folder

```bash
# root folder
npm run test:all # npm run test:all-coverage|unit|integration

# client folder
cd client

npm run test:unit
npm run test:e2e
```
