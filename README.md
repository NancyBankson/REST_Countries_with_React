# React Project with Frontend Mentor Challenge

## Overview

For this project, I refactored my previous Frontend Mentor Project with React.  This project is an educational website that fetched data on countries from an API and displayed that information.  This project was based on a Frontend Mentor challenge, REST Countries API with color theme switcher.  The challenge can be found here: https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca.  The project utilized React and included the use of React hooks such as useState, useEffect, and useContext as well as custom hooks.  Context was used to avoid prop drilling.  React Router was also used to navigate to country detail pages.  The custom hook, useFetch was used to fetch the data from the REST Countries API.  The home page displays basic information for each country and allows the user to search for countries and filter by region.  When a country is clicked, the user is taken to a detail page.  From the display page, border country buttons were included so that the user could click and display information on the border countries.  The project also required light modes and dark modes that could be toggled.  These modes were saved in local storage so that the page would load with the user's preferred theme.

The project was deployed and can be accessed at http://restcountrieswithreactproject.netlify.app

## Features

Implementation of this project was similar to the React Advanced assessment: 

1. State Management & Data Fetching

  - Use the useState and useEffect hooks to fetch and display data from the API.
  - Your application should manage loading and error states gracefully, displaying appropriate UI indicators to the user (e.g., a loading spinner, an error message).

2. Custom Hooks

You must create and implement at least two custom hooks:

  - useFetch (or similar): A generic custom hook for handling data fetching logic. It should manage the data, loading state, and error state. This hook will be used throughout your application to communicate with the API.
  - useLocalStorage: A custom hook to synchronize a piece of state with the browser’s localStorage. This will be used to persist the user’s list of favorite recipes.

3. Global State with Context API

  - Create a SearchContext to manage the user’s search and filters.
  - Create ThemeContext to store and distribute dark and light modes.

4. Routing

Your application must include the following pages and routing logic:

  - Home Page (/):
    - Displays cards for each country with basic information.
    - Allows search by country name.
    - Allows filtering of countries by region.

  - Detail Page (/country/[country.name.common]):
    - A dynamic route that fetches and displays the multiple details for selected country.
    - Border countries are listed as clickable buttons.

5. Components & UI

  - Create reusable, well-styled components (e.g., CountryCard, Headerbar, Searchbar, Spinner, ErrorMessage).
  - The application should be visually appealing and responsive. Use of a CSS framework, CSS-in-JS, or CSS Modules is up to you.

## Tools

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Vite
- React Router

To Run this React application, follow the following steps in the terminal:
npm create vite@latest
cd task-dashboard
npm install
npm run dev

## Reflection

After completing two skill based assessments using React, this project went smoothly.  I chose to refactor the REST Country App I did as a previous project.  I preferred this project because it was a bit more challenging than the other projects, but some of the work was already done, such as the CSS.  I found that this project was easier to do in React than vanilla TypeScript, HTML, and CSS.  The hooks, context, and React Router tools helped to make this project a success without much trouble.  Thanks to my class for helping me with a last minute type error. 