export * from "./api.client";

// Constants
export * from "./constants/query-keys.constants";
export * from "./constants/endpoints.constats";

// Mutations
export * from "./mutations/useDeleteMovieMutation";
export * from "./mutations/useUpdateMovieMutation";

// Queries
export * from "./queries/movies/useGetMovieByIdQuery";
export * from "./queries/movies/useGetMoviesListQuery";

// ===============
// || Contracts ||
// ===============

// Movies
export * from "./contracts/movie/endpoints/deleteMovie.contract";
export * from "./contracts/movie/endpoints/getMovieById.contract";
export * from "./contracts/movie/endpoints/updateMovie.contract";
export * from "./contracts/movie/endpoints/getMoviesList.contract";
export * from "./contracts/movie/entities/entities";

// Utility
export * from "./contracts/utility/endpoints/notFound.contract";
export * from "./contracts/utility/entities/generic";
