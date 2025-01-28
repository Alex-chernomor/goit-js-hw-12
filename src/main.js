import { fetchImgByQuery } from "./js/pixabay-api";
import { createGalleryTemplate} from "./js/render-functions";
import { addClass } from "./js/render-functions";
import { removeClass } from "./js/render-functions";
import iziToast from "izitoast";
import { simpleBox } from "./js/render-functions";
import { totalPages } from "./js/render-functions";
import { createLoader } from "./js/render-functions";

const formEl = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.js-load-more-btn');
const notFound = document.querySelector('.not-found');
const loader = document.querySelector('.js-loader');


let page = 1;
let inputValue ='';


simpleBox();

const searchSubmit = async e =>{
    try {
        e.preventDefault();
        removeClass(loader,'visually-hidden');
        addClass(notFound,'visually-hidden');
        galleryEl.innerHTML = ''
        inputValue = e.currentTarget.elements.input.value.trim();
         
          if ( inputValue === ''){
             iziToast.error({
                  title:'Error',
                  message:'Please enter your search query'
             })
            addClass(loader,'visually-hidden');
             
             return;
          };

          page = 1
          
          addClass(loadMoreBtn,'visually-hidden');
          
          const {data} = await fetchImgByQuery(inputValue,page);
          
          
          if (data.total === 0) {
                iziToast.error({
                  title:'Error',
                  message:'Please enter another search query'
             });
             addClass(loader,'visually-hidden')
             removeClass(notFound,'visually-hidden');
            galleryEl.innerHTML = '';
            formEl.reset();
            return;
          }

          if(totalPages(data) > 1){
            removeClass(loadMoreBtn,'visually-hidden');
            
            loadMoreBtn.addEventListener('click', onLoadMoreBtnClick)
          };
          if (totalPages(data)===1) {
            iziToast.info({
              title:'Sorry',
              message:`We're sorry, but you've reached the end of search results.`
         });
          }

           createGalleryTemplate(data);
           addClass(loader,'visually-hidden');
           galleryEl.innerHTML = createGalleryTemplate(data);
           simpleBox().refresh();

    } catch (error) {
        console.log(error);
        
}
    
};

formEl.addEventListener('submit', searchSubmit);

const onLoadMoreBtnClick = async event => {
  galleryEl.insertAdjacentHTML('beforeend',createLoader());
  const ulLoader = document.querySelector('.js-load-more')
    try {
      page++
      const { data } = await fetchImgByQuery(inputValue,page);

      createGalleryTemplate(data);
      ulLoader.remove();
      galleryEl.insertAdjacentHTML('beforeend',  createGalleryTemplate(data));
     
  
     scrollBy({
      top:1100,
      behavior: "smooth",
    })
      if (page === totalPages(data)) {
        
        addClass(loadMoreBtn,'visually-hidden');
        console.log("s");
        
        loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
        
            iziToast.info({
                title:'Sorry',
                message:`We're sorry, but you've reached the end of search results.`
           });
          }
          simpleBox().refresh();
    } catch (err) {
      console.log(err);
    }
  };