# De Blå Helte Website - Technical Documentation

This document provides technical details for developers working on the De Blå Helte website. It outlines the project structure, technologies used, and key development considerations.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Coding Conventions](#coding-conventions)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Run Locally](#run-locally)

## Project Overview

This project is the redesigned and developed website for De Blå Helte, a cleaning company in Esbjerg, Denmark. The website is built using a JAMstack approach, leveraging a headless CMS (Sanity), a React framework (Next.js), and a serverless deployment platform (Vercel).

## Technology Stack

- **Sanity:** Headless CMS for content management.
- **Next.js:** React framework for building performant and scalable web applications.
- **Vercel:** Hosting platform optimized for JAMstack deployments.
- **GitHub:** Version control system for collaboration and code management.
- **TypeScript:** Programming language for type safety and improved code maintainability.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **GROQ:** Sanity's query language for fetching and filtering content.

## Project Structure

The project follows a structured folder hierarchy to organize the codebase effectively:

- **src/app/**: Contains the main application logic and entry points.
- **src/components/**: Contains reusable UI components.
- **src/sanity/**: Contains configurations and utilities for interacting with the Sanity CMS.

## Development Workflow

1. **Branching:** Create a new branch for each feature or bug fix.
2. **Development:** Develop and test your code on your branch.
3. **Commits:** Commit your changes with clear and descriptive messages.
4. **Pull Request:** Create a pull request to merge your branch into the main branch.
5. **Review:** Code review and approval by other developers.
6. **Merge:** Merging is done only by the owner of the repo.
7. **Deployment:** Vercel automatically deploys the updated code to production.

## Coding Conventions

- **Follow the Airbnb JavaScript Style Guide:** Use a linter (e.g., ESLint) to enforce consistent code style.
- **Write clear and concise code:** Use meaningful variable and function names.
- **Add comments to explain complex logic:** Document your code for future maintainability.
- **Use TypeScript effectively:** Leverage type annotations for better code organization and error prevention.
- **File Naming:** Use kebab-case for file names to maintain consistency and readability.

## Deployment

The website is automatically deployed to Vercel upon merging changes to the `main` or `staging` branch. Vercel handles the build process and serves the website.

## Environment Variables

Sensitive information, such as API keys and database credentials, are stored as environment variables in the Vercel project settings.

## API Documentation

- **Sanity Content Delivery API:** Used to fetch content from the Sanity Content Lake. Refer to the [Sanity documentation](https://www.sanity.io/docs/content-delivery-api) for details on GROQ queries and API usage.
- **Sanity Image API:** Used for image optimization and transformations. See the [Sanity Image API documentation](https://www.sanity.io/docs/image-api) for details.
- **Sanity Live Content API:** Used for real-time content updates. Refer to the [Sanity Live Content API documentation](https://www.sanity.io/docs/live-content-api) for details.

## Run Locally

1. Add a `.env.local` file in the root directory with the following environment variables: `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_READ_TOKEN`, and `NEXT_PUBLIC_SANITY_PROJECT_ID`.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.
