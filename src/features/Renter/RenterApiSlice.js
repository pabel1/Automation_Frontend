import { apiRequest } from "../ApiRequest/apiRequest";

export const RenterApiSlice = apiRequest.injectEndpoints({
  endpoints: (builder) => ({
    allRenter: builder.query({
      query: (newData) => {
        const { access_token } = newData || {};
        return {
          url: "/all-user",
          method: "GET",
          body: newData,
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["renter"],
    }),
  }),
});

export const { useAllRenterQuery } = RenterApiSlice;
