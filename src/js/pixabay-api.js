import axios from "axios";

const baseUrl = "https://pixabay.com/api/";


export const fetchImgByQuery = (seaechQuery,currentPage) =>{
    const paramsUrl=({
        params:{
            key:"48264629-b593a4428d313ae96204c3007",
            q:seaechQuery,
            image_type:'photo',
            orientation:'horizontal',
            safesearch:true,
            per_page:15,
            page:currentPage,
        }
    });



    return axios.get(baseUrl,paramsUrl)
};