## UP42 Mini-Mart

A mini web application that simulates a marketplace where you can use credits to buy data products.

Built with Javascript(ES6) and ReactJs.
For demo, visit https://radiant-medovik-b514c3.netlify.app

## Features

- View a list of data products with displayed credits
- Add/remove product to/from cart
- Buy products in cart using available credits

## Technologies used

- ReactJs: for handling our single-page applications's user interface(view layer)
- Typescript: for static/strong typing
- [`MaterialUI`](https://mui.com/): a comprehensive React UI tools
- [`http-proxy-middleware`](https://www.npmjs.com/package/http-proxy-middleware): for providing a proxy middleware for our api
- SCSS: for better css styling approach

## Implementation process

- Architecture: Package-By-Feature
- Server-side data storage: [`React-query v4`](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)
- Client-side data storage: [`LocalStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

The whole process of building this React App involves the following stages:-

1. Design/ Planning
2. Building a static version of the app
3. Setting up API and configuring proxy for API
4. Configuring state & data flow
5. Testing

#### 1. The Design/Planning stage

Firstly, this stage involves designing a wire-frame prototype of how the UI would look like depending the simplicity or complexity of the app. The second part is to divide the UI into separate components in the correct hierarchy. Ideally, I needed to divide the components in such a way that one component only has a single functionality. I also needed to account for component re-usability Eg. components for displaying error messages or app loading state.
Since the app is thought to be a basic one, I had three(3) top level components in mind for the UI design:

- Navigation component: a statically positioned layout consisting of 3 elements/sections.
  - Site logo section
  - Total credits display section
  - Cart Icon button section: displays cart button(opens up cart drawer when clicked) with badge(showing the count of products in the cart drawer component)
- Products component: a view showing the list of products gotten from the API. A product displayed would consist of:
  - Product hosted image
  - Product description section showing display name and credits
  - Add to cart button
- Cart Component: a view showing products to buy added to the shopping cart. It consists of:

  - Cart item list section with remove button
  - Total credits section with button to buy products

    <div><img src="https://i.ibb.co/8bL21p8/Screenshot-2022-08-16-at-11-52-39.png" alt="Screenshot-2022-08-16-at-11-52-39" border="0" /></div>

#### 2. Building a static version of the app

This stage is just about building the folder structure(see image below), creating the components, adding styling, populating the components with mock data. I created the components using a top to down approach - starting with bigger encapsulating one to smaller(least) ones. <br>
For me, main objective in this stage was to build the structure of the app and seeing how it would look like with real data, without having to worry about handling data and interactivity yet.

  <div><img src="https://i.ibb.co/D7CfVXF/Screenshot-2022-08-16-at-13-03-07.png" alt="Screenshot-2022-08-16-at-13-03-07" border="0" /></div>

#### 3. Setting up API and configuring proxy for API

In this stage, I setup my api logic to retrieve list of products from the specified hosted backend. However, due to cors issue from the backend api, I had to, in addition, setup a proxy configuration using `http-proxy-middleware` package. <br />
The process involved adding a `setupProxy.js` file inside the `src` directory and properly configure the middleware code to handle context(`/marketplace/blocks`) and target(`https://api.up42.com`) url of our hosted api. With this approach, we are still able to proxy different or multiple apis endpoints.

<div><img src="https://i.ibb.co/yqRKfq0/Screenshot-2022-08-16-at-15-53-49.png" alt="Screenshot-2022-08-16-at-15-53-49" border="0" /></div>

#### 4. Configuring state & data flow

In this stage, I had to figure out the data flow and required minimal state of the app. There are basically 2 global states that an application encapsulates. These are:

- Server-side state: these are state or data from the server cached within the application. I used react-query package to handle this for me - from the server loading and error states to server data caching on the application.
- Client-side state: these are client state/data globally(across the app) or locally(within a component) available within the application. For instance, local state inside a component or global state accessible across app tree hierarchy using data management entities like Redux, react context or localStorage. <br />
  For the purposes of this mini project and since there is only one GET API(no PUT or DELETE), I decided to use localStorage which provides a temporary database for storing and accessing data saved across browser sessions.

  > I considered implementing a useLocalStorage hook I could reuse within the app for easy and clean access to globally stored data. <br /> I also considered placing top level data inside the top level component - i.e App.jsx - so I could easily pass common data across to lower level components - i.e Navbar, cartDrawer and Products - that needed it.

  `Please Note: It is very important to isolate certain functionalities like api calls, local functions, local states, within components that only require or are affected by it. For instance, api call to fetch all products done on the Products component`

#### 5. Testing

Testing basically helps you spot bugs on time. The more tests I write, the more confidence I have with my code. There are a few types/categories of testing code or an apps functionality. They include end-to-end, integration, unit tests, etc. They image below shows an example of a unit(component) test I wrote.

<div><img src="https://iili.io/gx5n9f.md.png" alt="gx5n9f.md.png" border="0"></div><br /><div target='_blank' href='https://freeimage.host/'></div>

## Installation

1. Install [`node`](https://nodejs.org/en/download/), version 6 or greater

2. Clone the repo and cd into it

   ```
   git clone https://github.com/chykehyman/mini-mart.git
   cd mini-mart
   ```

3. Install all dependencies

   ```
   npm install
   ```

4. Start the app

   ```
   npm start
   ```

5. Open running application

   ```
   http://localhost:3000/ or the specified url from the terminal
   ```

## Testing

> - `npm test`

## Author

- **Chinwoke Hyginus** -Software Developer and Soccer freak.
