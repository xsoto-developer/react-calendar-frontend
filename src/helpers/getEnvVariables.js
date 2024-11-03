// export const getEnvVariable = () => {
//     import.meta.env;
//     return {
//         ...import.meta.env
//     }
// }

export const getEnvVariable = () => {
    // import.meta.env;
    // console.log(import.meta.env.VITE_API_URL); 
    // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4"); 
    // console.log(process.env.VITE_API_URL); 
    // console.log("*********************************************************"); 
    // console.log(import.meta.env); 
    
    return {
        // ...import.meta.env
        //VITE_API_URL: process.env.VITE_API_URL//import.meta.env.VITE_API_URL,
        //VITE_API_URL: import.meta.env.VITE_API_URL,
        VITE_API_URL: import.meta.env.VITE_API_URL,
    };
};
