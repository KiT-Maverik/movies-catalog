# Movie Catalog
An example app showcasing API-related functional and boilerplates.

### Project setup
1. Create a copy of `.env.example`, name it `.env`
2. Run script `server:start`
3. Run script `app:start`

### Highlights
##### Mock server
Primitive mock server implemented to simulate data flow, and provide production-like basis for frontend features.

##### Tanstack Query
TanStack Query simplifies data fetching by handling caching, synchronization, and background updates automatically. It improves performance by reducing unnecessary network requests through caching and only refetching stale data.

##### Skeleton loaders
UI has implemented skeleton loaders, intended to enhance user experience during content loading. Instead of showing a blank screen or a loading spinner, skeleton loaders display placeholder elements that resemble the structure of the content being loaded.

##### Contract-driven development
Contract-driven development (CDD) is a software development approach where the interaction between services or components is defined by formal contracts, typically using specifications like (Zod schemas in this particular case). These contracts outline the expected inputs, outputs, and behaviors of each service, ensuring clear communication and integration between components before implementation begins. On the frontend, contracts serve as a single source of truth for various entities: types, form and API validations, integration tests basis.

This approach helps avoid miscommunication, ensures consistency between teams, and allows parallel development by having the contract act as a source of truth.

Contracts are supported by comprehensive API integration test set, named "Contract validation".
