import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

export const productApi = createApi({
    reducerPath: 'productApi',
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        getProducts: builder.query<Product[], null>({ query: () => 'products' }),
        getProductById: builder.query<Product, { id: string }>({ query: ({ id }) => `products/${id}` }),
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
