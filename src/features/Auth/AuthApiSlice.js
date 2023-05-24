import { apiRequest } from "../ApiRequest/apiRequest";

export const authApiSlice = apiRequest.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newData) => ({
        url: "/user-registation",
        method: "POST",
        body: newData,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }),
      invalidatesTags: ["Auth"],
    }),
    loginUser: builder.mutation({
      query: (newData) => ({
        url: "/login",
        method: "POST",
        body: newData,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = authApiSlice;
