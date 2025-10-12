// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
// import { userLoggedIn } from "../auth/authSlice";

// export const apiSlice = createApi({
//     reducerPath: "api",
//     baseQuery: fetchBaseQuery({
//         baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
//         credentials: "include", // Required to send cookies

//     }),

 

//     endpoints: (builder) => ({
//         refreshToken :builder.query({
//             query: (data) => ({
//                 url:"refresh",
//                 method:"GET",
//                 credentials: "include" as const,
//             }),
//         }),
//         loadUser: builder.query({
//             query: (data) => ({
//                 url: "me",
//                 method: "GET",
//                 credentials: "include" as const
//             }),
//             async onQueryStarted(arg, { queryFulfilled, dispatch }) {
//                 try {
//                     const result = await queryFulfilled;
//                     dispatch(
//                         userLoggedIn({
//                             accessToken: result.data.accessToken,
//                             user: result.data.user,
//                         })
//                     );
//                 } catch (error: any) {
//                     console.log(error)
//                 }
//             },
//         })
//     }),
   
// });

// export const {useRefreshTokenQuery, useLoadUserQuery} = apiSlice;  


// // ==========================================================================================

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../auth/authSlice";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
        credentials: "include",  // Keep for cookies (e.g., refresh token)
        // prepareHeaders: (headers, { getState }) => {
        //     // Inject accessToken from Redux state (set by userLoggedIn)
        //     const token = (getState() as RootState).auth.accessToken;  // Adjust path to your auth slice
        //     if (token) {
        //         headers.set('authorization', `Bearer ${token}`);
        //     }
        //     return headers;
        // },
    }),
    endpoints: (builder) => ({
        refreshToken: builder.query({
            query: () => ({  // No data arg needed
                url: "refresh",
                method: "GET",
                credentials: "include" as const,
            }),
        }),
        loadUser: builder.query({
            query: () => ({  // No data arg needed
                url: "me",
                method: "GET",
                credentials: "include" as const
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (error: any) {
                    // Better error handling: Only log if not auth error (e.g., 400/401)
                    if (error?.error?.status !== 401 && error?.error?.status !== 400) {
                        console.error("Load user error:", error);
                    }
                    // Optionally dispatch logout on auth error
                }
            },
        })
    }),
});

export const { useRefreshTokenQuery, useLoadUserQuery } = apiSlice;
