# React Project with Frontend Mentor Challenge

## Overview

For this project, I refactored my previous Frontend Mentor Project with React.  This project is an educational website that fetched data on countries from an API and displayed that information.  This project was based on a Frontend Mentor challenge, REST Countries API with color theme switcher.  The challenge can be found here: https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca.  The project utilized React and included the use of React hooks such as useState, useEffect, and useContext as well as custom hooks.  Context was used to avoid prop drilling.  React Router was also used to navigate to country detail pages.  The custom hook, useFetch was used to fetch the data from the REST Countries API.  The home page displays basic information for each country and allows the user to search for countries and filter by region.  When a country is clicked, the user is taken to a detail page.  From the display page, border country buttons were included so that the user could click and display information on the border countries.  The project also required light modes and dark modes that could be toggled.  These modes were saved in local storage so that the page would load with the user's preferred theme.

The project was deployed and can be accessed at https://nancybankson.github.io/REST_Countries_with_React.

## Features

Implementation of this project required: 

1. State Management & Data Fetching

  - Use the useState and useEffect hooks to fetch and display data from the API.
  - Your application should manage loading and error states gracefully, displaying appropriate UI indicators to the user (e.g., a loading spinner, an error message).

2. Custom Hooks

You must create and implement at least two custom hooks:

  - useFetch (or similar): A generic custom hook for handling data fetching logic. It should manage the data, loading state, and error state. This hook will be used throughout your application to communicate with the API.
  - useLocalStorage: A custom hook to synchronize a piece of state with the browser’s localStorage. This will be used to persist the user’s list of favorite recipes.

3. Global State with Context API

  - Create a FavoritesContext to manage the user’s list of favorite recipes globally.
  - The context must provide:
    - A list of favorite recipe IDs.
    - A function to add a recipe to favorites.
    - A function to remove a recipe from favorites.
    A function to check if a recipe is already in favorites.
  - This context should use your useLocalStorage hook internally to persist the favorites list across browser sessions.

4. Routing

Your application must include the following pages and routing logic:

  - Home Page (/):
    - Displays a grid or list of all available recipe categories fetched from the API.
    - Each category should be a link that navigates to its respective category page.

  - Category Page (/category/[categoryName]):
    - A dynamic route that displays all recipes belonging to the category specified in the URL (e.g., /category/Seafood).
    - Each recipe shown should be a link to its detailed recipe page.

  - Recipe Detail Page (/recipe/[recipeId]):
    - A dynamic route that fetches and displays the full details for a single recipe (image, ingredients, instructions, etc.).
    - This page must include a button to “Add to Favorites” or “Remove from Favorites”. The button’s state and action should be handled by your FavoritesContext.

  - Favorites Page (/favorites):
    - Displays a list of all recipes that the user has marked as a favorite.
    - If the user has no favorites, this page should display a message prompting them to browse and add some.

  - Search Functionality:
    - A search bar, likely in a shared Navbar, that allows users to search for recipes by name.
    - Submitting a search should navigate the user to a search results page (e.g., /search?query=Arrabiata). This page will display the results of the search query.

5. Components & UI

  - Create reusable, well-styled components (e.g., RecipeCard, Navbar, Spinner, ErrorMessage).
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

This project required numerous hours to complete.  I encountered a number of challenges while writing the code.  The first was dealing with the API requirement to limit fetches to 10 fields.  I was able to fetch all the data needed for the detail page in one fetch, but because the border countries were given in codes, rather than country name, I had to also fetch codes and country names.  The API did not give the data for the Frontend Mentor challenge in a straight-forward manner.  For names and flags I had to extract the necessary data from objects within the object properties.  For some I was able to make interfaces to use in the class properties, but for others, I had to extract values using the Object.values method.  My classmates, Ervin, Hasna, and Rivathi helped me include the Object.values method.  There were also challenges with the display.  Some needed comma separated lists.  To display these lists, I had to write for loops to create a string with comma and space separations.  Once I had all the code written in TypeScript and the data was displaying properly, I had to spend a significant amount of time making the style correct.  At first, I tried using Bootstrap grid to make the pages responsive, but Bootstrap caused other problems, such as making the input and select elements stretch across the screen.  Since I wasn't able to override the CSS, I abandoned using Bootstrap grid and used regular flex-box.  Bootstrap was helpful for making the cards on the first page.  The dark mode and light mode options also created a challenge.  It was easy to change the elements written in the HTML file, but for elements created dynamically, it was more challenging.
The project was fun, but took a long time to complete.  I enjoyed the hours I spent on the TypeScript portion and found overcoming challenges satisfying, but found the many hours I spent on CSS quite frustrating.