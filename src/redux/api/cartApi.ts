import { baseApi } from "./baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addToCart: build.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        data,
      }),
      invalidatesTags: ["cart"],
    }),
  
  }),
});

export const { useAddToCartMutation } = productApi;
