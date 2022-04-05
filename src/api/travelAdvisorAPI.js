import axios from "axios";

 export const getPlacesData = async(type,sw,ne) => {
     try {
         const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
             params: {
                 bl_latitude: sw.lat,
                 bl_longitude: sw.lng,
                 tr_longitude: ne.lng,
                 tr_latitude: ne.lat,
             },
                 headers: {
                     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                     'X-RapidAPI-Key': 'AIzaSyDMzy5Ie5ORmgWvPDI_QNkuY3C9IXRBA8c',
             }
         })
             return data;
         }catch(error)
         {
             console.log(error)
         }
     }
export const getWeatherData = async (lat, lng) => {
    try {
        if (lat && lng) {
            const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
                params: { lat, lon: lng },
                headers: {
                    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
                },
            });

            return data;
        }
    } catch (error) {
        console.log(error);
    }
};