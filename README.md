
# Hosted link of the App

The App is hosted using [Netlify](https://www.netlify.com/)

hosted link of app  -  [https://terriblytinytales-akshay.netlify.app/](https://terriblytinytales-akshay.netlify.app/)


# Abstract

The App isn't developed using Create React App framework. The App is developed from scratch by installing and configuring various packages like parcel, react, react-dom, tailwindcss and postcss. Haven't used Create React App framework because we are developing a small App (profile page) so, our App don't require many packages but Create React App downloads many packages which we do not require in our App.

To manage and execute packages in our App, [npm](https://www.npmjs.com/) is used.

## Packages used

Parcel - used [Parcel](https://parceljs.org/) as bundler because it is Zero Configuration Tool , so powerful and easy to use

React , ReactDOM - used React and ReactDOM as a package, React uses Virtual DOM(is a js representation of actual DOM) and Reconciliation(reconciliation uses diffing algorithm for finding the difference between two virtual DOMs and updates the UI with least number of changes possible) for making website faster and reactive. React uses Virtual DOM and Reconciliation in an interesting way to manage the UI in the most efficient way possible

tailwindcss , postcss - used [tailwindcss](https://tailwindcss.com/) for styling as it is easier to style using taiwindcss beacuse we just need to add class names for styling and the predefined classes will handle the styling behind the scenes. Writing media queries is also a piece of cake using tailwindcss. Postcss is like sub-dependency, to make tailwindcss work we need postcss, it is like babel for css that means, as babel transpiles js, postcss transpiles css

## Development flow of App

1) Created a folder for the App

2) Created index.html and index.css, basic html is provided and a root is created in html 
    - linked index.css to index.html

3) Initialised npm by running the command 
    - npm init
    - It initialises the npm in our App, package.json file is created and configured it
    - package.json file has the meta data about the App and it has all info about the dependencies and sub-dependencies

4) Installed Parcel(as bundler) as dev dependency using the command
    - npm i -D parcel 
    - "-D" is a flag which specifies to install parcel as dev dependency
    - this creates the package-lock.json for tracking the versions and maintain consistency of the dependencies and sub-dependencies of the App
    - added scripts in package.json to run the app with ease
        - start : "parcel index.html"
        - build : "parcel build index.html"        
        
5) Installed React, ReactDOM using the following commands
    - npm i react
    - npm i react-dom

6) Created an App.js file in src folder which is entry point to the root in index.html
    - linked App.js to index.html where type of script is specified as module in index.html to enable imports and exports (<script type="module" src="./src/App.js"></script>)
    - imported React, ReactDOM in App.js, created root, App component and rendered App component to root

7) Installed tailwind and post css as dev dependency using following command
    - npm i -D tailwindcss postcss
    - initialised tailwindcss using command
        - npx tailwindcss init
        - this creates a config file of tailwindcss named tailwind.config.js
    - created a file .postcssrc and configured postcss

8) Hardcoded the profile data in JSON format in constants.js file

9) Developed all the components

## Hardcoded data 

Hardcoded the profile data in JSON format in constants.js file in src folder

## Components

1) App component
        - it is the entry point to the root of html
        - returned three components from it which provide the whole UI of the App, those three components are
            - Header component
            - Profile component
            - Posts component            

2) Header component
        - it defines the header of the App
        - it consists of a logo, a text and a button
        - this is simple component

3) Profile component
        - it provides the info and bio of creator like profile picture, name, followers, following etc
        - divided it into two divs one is for cover picture and other is for info and bio part

4) Posts component
        - firstly it shows the number of posts 
        - then used a new component PostCard for making code modular and reusable
        - then imported the JSON data from constants.js, used PostCard component to iterate over the JSON data and render UI for every post the JSON data consist. 
    
5) PostCard component 
        - this takes the data of the each post and returns the JSX for the post
        - this is used by Posts component to render all the posts
        - this is used to develop the design of the post


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:1234](http://localhost:1234) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!




