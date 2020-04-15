const variables = {
    development: {
        googleApiKey: 'AIzaSyAVZajeQVvB5gHAVHiRqLKZ-FjdQhEdA3I'
    },
    production: {
        googleApiKey: 'AIzaSyAVZajeQVvB5gHAVHiRqLKZ-FjdQhEdA3I'
    }
};
 
const getEnvVariables = () => {
    if (__DEV__) {
        return variables.development; // return this if in development mode
    }
    return variables.production; // otherwise, return this
};
 
export default getEnvVariables; // export a reference to the function