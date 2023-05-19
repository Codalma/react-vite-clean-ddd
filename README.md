# React TS template with Vite and clean DDD structure.

## Table of Contents

- [Description](#description),
- [Prerequisites](#prerequisites),
- [Features](#features),
- [Commands](#commands),
- [Structure](#structure),
- [Environment variables](#environment-variables).


## Description
Hello there ✌️

This project originally started as a template for my own UI projects, where I wanted to implement SOLID principles with a Clean Domain-Driven Design (DDD) architecture.

Now, I'm excited to share it with you, hoping that it may be of help like others developers inspired me. 🚀

It reflects my efforts to embrace best practices and create a clean and modular codebase.

Please keep in mind that this project is a continuous work in progress, and I'm constantly seeking ways to improve and refine it.

Your feedback and contributions are welcome and appreciated. 🙏

Thank you for considering my template.


## Prerequisites
- Node.js (>=18.0.0),
- NPM (>=8.0.0) or Yarn (>=1.22.0)

## Features

- **Type checking**: using [TypeScript](https://www.typescriptlang.org/) and [PropTypes](https://www.npmjs.com/package/prop-types),
- **Testing**: with [Jest](https://jestjs.io/fr/), [Testing library](https://testing-library.com/) and [Cypress](https://www.cypress.io/),
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io),
- **Components**: using [React](https://fr.reactjs.org/),
- **Routing**: using [React Router Dom](https://reactrouter.com/en/main),
- **PreProcessing**: with [Sass](https://sass-lang.com/),
- **Icons**: with [FontAwesome](https://fontawesome.com),
- **Environment variables**: using [Dotenv](https://github.com/motdotla/dotenv) and [Cross-env](https://github.com/kentcdodds/cross-env#readme),
- **Git hooks**: with [Husky](https://github.com/typicode/husky),
- **Dependency management**: using [NPM](https://www.npmjs.com/),
- **Continuous integration**: using [CircleCi](https://circleci.com/),
- **Containerization** : using [Docker](https://www.docker.com/).

## Commands
### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm run start
```

### Building

```bash
npm run build
```

### Testing

```bash
# run all tests
npm run test

# run all tests with coverage
npm run test:coverage
```

### Running with Docker

```bash
# run the app in development mode
npm run docker:dev

# run the app in production mode
npm run docker:prod

# run all tests
npm run docker:test
```

### Linting

```bash
# run ESLint
npm run lint

# run prettier
npm run prettier

# fix prettier errors
yarn prettier:fix
```

## Structure
``` 
src/
|-- __mocks__/              # Mock implementations for testing purposes
|-- __tests__/              # Test files and test suites

|-- application/            # Contains the use cases and business logic of the application
|   |-- interfaces/             # Interfaces for use cases and application services
|   |-- mappers/                # Mappers to convert data between different layers
|   |-- services/               # Application services for business logic
|   |-- useCases/               # Use cases (business scenarios)

|-- domain/                 # Contains entities, interfaces, exceptions, repositories, and domain services
|   |-- entities/               # Domain entities
|   |-- exceptions/             # Domain-specific exceptions
|   |-- interfaces/             # Domain interfaces
|   |-- repositories/           # Repository interfaces (data access)
|   |-- services/               # Domain services
|   |-- value-objects/          # Value objects

|-- infrastructure/         # Contains infrastructure-related code and implementations
|   |-- api/                    # API-related code
|   |-- interfaces/             # Interfaces for infrastructure components
|   |-- libraries/              # Third-party libraries and integrations
|   |-- repositories/           # Repository implementations (data access)
|   |-- services/               # Infrastructure services
|   |-- utils/                  # Utility functions and modules

|-- presentation/           # Contains presentation layer components
|   |-- assets/                 # Asset files
|   |   |-- icons/              # Icons used in the interface
|   |   |-- images/             # Images used in the interface
|   |   |-- fonts/              # Fonts used in the interface
|   |-- elements/               # React-specific elements
|   |   |-- pages/              # Page components
|   |   |-- hooks/              # Reusable hooks
|   |   |-- components/         # Reusable components
|   |   |-- layouts/            # Components composition
|   |-- styles/             # Global and application-specific styles
|   |   |-- abstracts/          # Abstract styles (variables, mixins, functions, etc.)
|   |   |-- base/               # Base styles (reset, typography, etc.)
|   |   |-- components/         # Styles specific to reusable components
|   |   |-- layout/             # Layout styles (header, footer, etc.)
|   |   |-- pages/              # Styles specific to application pages
|   |   |-- themes/             # Styles for themes or design variations
|   |   |-- vendors/            # Third-party library styles
|   |   |-- main.scss           # Main entry point to import all Sass files

|-- App.tsx                 # Root component of the React application. 
|-- Index.tsx               # Entry point for the React application. 

```

# Environment variables
```bash
# PORTS
DEV_PORT=3000 # The local port number used for development environment
TEST_PORT=3000 # The local port number used for test environment
PROD_PORT=80 # The local port number used for production environment

# DOCKER CONFIGURATION
IMAGE_NAME=image-name
CONTAINER_NAME=container-name

DEV_IMAGE_NAME=dev-image-name # The name of the Docker image used in development environment
TEST_IMAGE_NAME=test-image-name # The name of the Docker image used in test environment
PROD_IMAGE_NAME=prod-image-name # The name of the Docker image used in production environment

DEV_CONTAINER_NAME=dev-container-name # The name of the Docker container used in development environment
TEST_CONTAINER_NAME=test-container-name # The name of the Docker container used in test environment
PROD_CONTAINER_NAME=prod-container-name # The name of the Docker container used in production environment

DEV_EXPOSED_PORT=3000 # The port number that the Docker container will listen on
TEST_EXPOSED_PORT=3000 # The port number that the Docker container will listen on
PROD_EXPOSED_PORT=80 # The port number that the Docker container will listen on
```
