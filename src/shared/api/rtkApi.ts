// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
// import type { Pokemon } from './consts';

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: __API_URL__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (token) {
                headers.set('Authorization', token);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<any, string>({
            query: (name) => `pokemon/${name}`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = rtkApi;
