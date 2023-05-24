import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseURL = `${process.env.REACT_APP_BASE_URL}/api/v1`;
export const apiRequest = createApi({
  reducerPath: "apiRequest",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseURL,
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
