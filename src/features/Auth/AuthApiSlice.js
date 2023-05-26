import { storeToken, storeUserDetails } from "../../Component/Help";
import { apiRequest } from "../ApiRequest/apiRequest";
import { userLoggedIn } from "./authSlice";

export const authApiSlice = apiRequest.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newData) => ({
        url: "/create-user",
        method: "POST",
        body: newData,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }),
      invalidatesTags: ["Auth"],
    }),
    loginUser: builder.mutation({
      query: (newData) => {
        return {
          url: "/login-user",
          method: "POST",
          body: newData,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          storeToken(result?.data?.access_token);
          storeUserDetails(result?.data?.user);
          dispatch(
            userLoggedIn({
              access_token: result?.data.access_token,
              user: result?.data.user,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
      invalidatesTags: ["Auth"],
    }),
    userDetails: builder.query({
      query: (access_token) => {
        return {
          url: `/myprofile`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      providesTags: [""],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useUserDetailsQuery,
} = authApiSlice;
