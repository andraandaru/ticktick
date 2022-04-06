# TickTick.IO - Simple Ticketing Tool App

TickTick.IO - A Simple Ticketing Tool

## The Project Use

1. ReactJS (Create React App) with Typescript [https://create-react-app.dev/](https://create-react-app.dev/)
2. Tailwind CSS [https://tailwindcss.com/](https://tailwindcss.com/)
3. Headless UI [https://headlessui.dev/](https://headlessui.dev/)
4. React Beautiful DND [https://github.com/atlassian/react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
5. Axios [https://axios-http.com/](https://axios-http.com/)
6. React Router DOM [https://reactrouter.com/](https://reactrouter.com/)
7. React Toastify [https://fkhadra.github.io/react-toastify/introduction/](https://fkhadra.github.io/react-toastify/introduction/)

# Getting Started

To get started running the project locally, please follow the steps below.

First, clone the repository.

```bash
git clone https://github.com/andraandaru/ticktick.git
```

Then, install dependencies and fetch data to your local machine. **Note that the project use Yarn, not npm.**

```bash
cd ticktick
yarn install
```

Then, create environment variable by create a **.env.local** file in the root of project and insert the following format

```env
REACT_APP_API_BASE_URL=YOUR_API_BASE_URL
```

Notes: YOUR_API_BASE_URL === https://xxxxxx.mockapi.io

Notes: Change YOUR_API_BASE_URL with API Base URL that you can get it from [https://mockapi.io](https://mockapi.io)

Notes: You can also clone from [https://mockapi.io/clone/624af96344505084bc49c394](https://mockapi.io/clone/624af96344505084bc49c394)

Finally, run the development server.

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
