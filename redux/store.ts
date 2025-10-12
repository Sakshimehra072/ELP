// 'use client'
// import { configureStore } from "@reduxjs/toolkit"
// import { apiSlice } from "./features/api/apiSlice"
// import authSlice from "./features/auth/authSlice"
// // import {} from "./features/api/apiSlice";


// export const store = configureStore({
//     reducer: {
//         [apiSlice.reducerPath]: apiSlice.reducer,
//         auth: authSlice
//     },
//     devTools: false,
//     middleware: (getDefaultMiddleware) => 
//       getDefaultMiddleware().concat(apiSlice.middleware),
// });

// // Infer RootState & AppDispatch
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// // Call the load user token function on every page load
// const initializeApp = async () => {
//     await store.dispatch(
//         apiSlice.endpoints.refreshToken.initiate({}, {forceRefetch: true })
//     );

//     await store.dispatch(
//         apiSlice.endpoints.loadUser.initiate({}, { forceRefetch : true })
//     );
// };
 
// initializeApp(); 

'use client'
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer RootState & AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// ✅ DO NOT call initializeApp here in store.ts
// Instead, call it in a client-side component after the app loads
export const initializeApp = async () => {
  try {
    await store.dispatch(
      apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true })
    );
    await store.dispatch(
      apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true })
    );
  } catch (err) {
    console.error("App initialization failed:", err);
  }
};
