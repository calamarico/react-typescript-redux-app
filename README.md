# React + Typescript + Redux Example
## Environment Setup
This is a React + Typescript + Webpack + Babel application. For the backend API mock, I used `json-server` and a json-server middlewatre called `json-server-auth` to have a simple JWT authentication.
So, the first clone the repo, and install npm packages:
```sh
$ npm install
```
Now, you can start this React app and the json server running the script:
```sh
$ npm start
```

### About testing...

I only created the test setup with `jest` and I used `react-test-renderer` package, because I only made one basic and single spec.

###  About styles...

I didn't make things complicated, and I used `css` directly. Apart of that, I have used `reactstrap` for styled form components, and `ag-grid-react` for the tables.

### About code-quality and formatting...
I used `ESlint` to check code-quality based on my understanding on what is better and not. And I used `Prettier` for the best format code, obviously I used prettier in the way to not conflict with 'Eslint' (you can see what I talking about if you see in the `package.json` the `prettier` script flags I used).
Both are installed locally and there are two scripts to excute them in the `package.json`.
Run linter:
```sh
$ npm run lint
```
Run prettier:
```sh
$ npm run prettier
```
In my opinion, the linter script it should be executed in pre-commit.

### About Authentication...
The `db.json` file has all the mocked data necessary, due to I used `json-server-auth` you are not going to see the password for the users I have registered. You can register a new user of course, but here you have the user/password for the Login:
```
user: admin@taxdown.com
pasword: 12345
```
