import axios from "axios";

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



 export const getPlacesData = async(sw,ne) => {
     try {
         const {data: {data}} = await axios.get(URL, {
                 params: {
                     bl_latitude: sw.lat,
                     tr_latitude: ne.lat,
                     bl_longitude:sw.lng,
                     tr_longitude:ne.lng,
                 },
                 headers: {
                     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                     'X-RapidAPI-Key': '9af1d94a2bmsh8e4e6dd4c57d0d2p108bfdjsn56a966b22d7a'
             }
         })
             return data;
         }catch(error)
         {
             console.log(error)
         }
     }
