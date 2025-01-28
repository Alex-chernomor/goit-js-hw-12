import SimpleLightbox from "simplelightbox";

export const createGalleryCard = imgInfo =>{
    return `
        <li class ='card'>
    <a class = 'gallery-link' href = '${imgInfo.largeImageURL}'>
        <img 
            class = 'card__image'
            src='${imgInfo.webformatURL}' 
            alt='${imgInfo.tags}'>

            <div class = 'stats'>
                <p class = 'stats-item'>Likes ${imgInfo.likes}</p>
                <p class = 'stats-item'>Views ${imgInfo.views}</p>
                <p class = 'stats-item'>Comments ${imgInfo.comments}</p>
                <p class = 'stats-item'>Downloads ${imgInfo.downloads}</p>
            </div>
      
<a/>
    </li>
    `
};

export const createGalleryTemplate = function(elem){
   return elem.hits.map(el=>createGalleryCard(el)).join('');
}

export const addClass = function(elem, className){
    return elem.classList.add(className)
};

export const removeClass = function(elem, className){
    return elem.classList.remove(className)
};

export const simpleBox = function(){
    return new SimpleLightbox('.gallery a');
};

export const totalPages = function(elem){
  return Math.ceil(elem.totalHits / 15)
}

export const createLoader = function(){
    return '<div class="js-load-more loader"></div>'
}