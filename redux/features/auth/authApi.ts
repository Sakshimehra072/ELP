import {apiSlice} from "../api/apiSlice"; 
import  { userLoggedIn, userLoggedOut, userRegistration } from "./authSlice";

type RegistrationResponse = {
    message: string;
    activationToken: string;     
}
type RegistrationData = {}

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<RegistrationResponse,RegistrationData>({
            query: (data) => ({
                url: "registration",
                method: "POST",
                body: data,
                credentials: "include" as const,
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const result = await queryFulfilled;
                    dispatch(
                        userRegistration({
                            token: result.data.activationToken,                            
                        })
                    ); 
                } catch (error: any) {                    
                    console.log(error);
                }
            }
        }),
        activation: builder.mutation({
            query: ({activation_token, activation_code}) => ({
                url:"activate-user",
                method:"POST",
                body:{
                    activation_token,
                    activation_code
                },                
            }),
        }), 

        // Login Authentication (manually)

        login: builder.mutation({
            query:({email,password}) => ({
                url:"login",
                method:"POST",
                body:{
                    email,
                    password
                },
                Credentials: "include" as const,
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken, 
                            user: result.data.user,                           
                        })
                    ); 
                } catch (error: any) {                    
                    console.log(error);
                }
            }
        }),

        // Social Authentication (login with google)

        socialAuth: builder.mutation({
            query:({email,name,avatar}) => ({
                url:"social-auth",
                method:"POST",
                body:{
                    email,
                   name,
                   avatar,
                },
                Credentials: "include" as const,
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken, 
                            user: result.data.user,                           
                        })
                    ); 
                } catch (error: any) {                    
                    console.log(error);
                }
            },
        }),

// Logout authentication

        logOut: builder.query({
            query:() => ({
                url:"logout",
                method:"GET",
                Credentials: "include" as const,
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    dispatch(
                        userLoggedOut()
                    ); 
                } catch (error: any) {                    
                    console.log(error);
                }
            },
        }),
    }),
}); 
                                                                                                                                                                                                                         
export const {useRegisterMutation, 
    useActivationMutation, 
    useLoginMutation, 
    useSocialAuthMutation, 
    useLogOutQuery
} = authApi;