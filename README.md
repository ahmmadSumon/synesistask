This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Implementation Overview

- **Search Functionality**: Users can search for blog posts based on their titles or content. The search is case-insensitive and updates as the user types.
- **Infinite Scroll**: The blog list loads more posts as the user scrolls down. The data is fetched in chunks (10 posts per request).
- **Go Back Option**: When no search results are found, a "Go back" button allows the user to return to the list of all posts without triggering a new fetch.
- **Fetching Data**: The app uses the `jsonplaceholder.typicode.com` API to fetch blog data (mock API). The data is fetched as needed to ensure smooth performance.
- **React & Next.js**: Built with React and Next.js for client-side rendering, and the `InfiniteScroll` component is used to handle the infinite scroll functionality.

## Features
- **Infinite Scroll**: As the user scrolls, new blog posts are loaded without refreshing the page.
- **Search**: Filter blog posts based on the title or content.
- **Error Handling**: Displays a "No results found" message when the search yields no results.
- **Go Back**: The "Go back" button resets the search and shows all blog posts again.

## Assumptions & Decisions

- **Data Source**: Used `jsonplaceholder.typicode.com`, a free API for mock data, to simulate fetching real blog data.
- **Pagination**: Data is fetched in chunks of 10 posts at a time. This is controlled by the `page` parameter, and the API automatically limits the number of results.
- **State Management**: React’s `useState` and `useEffect` hooks are used for state management and handling side effects like fetching data.
- **Component Structure**: The project is divided into smaller, reusable components like `BlogCard`, `SearchBar`, and the main `Posts` component that handles the infinite scroll and search functionality.

## Requirements

To run this project, ensure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x)

## Running the Project Locally

### 1. Clone the Repository
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
