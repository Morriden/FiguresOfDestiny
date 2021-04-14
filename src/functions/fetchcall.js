export const getLocations = () => {
    return fetch('http://localhost:7890/api/v1/locations/')
        .then(res => res.json())
        // .then(res => console.log(res))
};
