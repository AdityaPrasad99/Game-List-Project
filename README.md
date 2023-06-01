# React Game List Project

This is a React project that displays a list of games and their brief information using Material-UI, Tailwind, and axios.

## Demo

A live demo of the project is available [here](https://ad-games.netlify.app/).

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.

```bash
$ git clone https://github.com/AdityaPrasad99/Game-List-Project
$ cd react-game-list-project
```

3. Install the project dependencies using npm or yarn.

```bash
$ npm install
```

or

```bash
$ yarn install
```

4. Create a `.env` file in the project root directory and add the following environment variables:

```
REACT_APP_RAPIDAPI_HOST=free-to-play-games-database.p.rapidapi.com
REACT_APP_RAPIDAPI_KEY=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your API key. This project uses an API to fetch the list of games. You can obtain an API key by signing up on the game data provider's website.

5. Start the development server.

```bash
$ npm start
```

or

```bash
$ yarn start
```

This command will start the development server and open the project in your default browser. If it doesn't open automatically, you can access it at [http://localhost:3000](http://localhost:3000).

## Features

- Fetches a list of games from the API.
- Displays game information using Material-UI Cards.
- Allows users to view brief details of each game.
- Responsive design using Tailwind CSS.

## Folder Structure

The project structure is as follows:

```
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Card.js
│   │   └── ...
│   ├── services
│   │   └── api.js
│   ├── App.js
│   └── ...
├── .env
└── ...
```

- The `public` folder contains the HTML file and other static assets.
- The `src` folder contains the React components, services, and the main App.js file.
- The `components` folder holds the reusable components for the project, such as Card.js for displaying game information.
- The `services` folder contains the API service file (api.js) for fetching game data from the API.

Feel free to explore and modify the project structure to suit your needs.

## Contributing

Contributions to this project are welcome. If you find any issues or have ideas for improvements, please create a new issue or submit a pull request.
