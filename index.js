import{a as q,S as w,i as d}from"./assets/vendor-CSTHH2rc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))h(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const y of s.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&h(y)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function h(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const M="https://pixabay.com/api/",g=(e,t)=>{const o={params:{key:"48264629-b593a4428d313ae96204c3007",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}};return q.get(M,o)},E=e=>`
        <li class ='card'>
    <a class = 'gallery-link' href = '${e.largeImageURL}'>
        <img 
            class = 'card__image'
            src='${e.webformatURL}' 
            alt='${e.tags}'>

            <div class = 'stats'>
                <p class = 'stats-item'>Likes ${e.likes}</p>
                <p class = 'stats-item'>Views ${e.views}</p>
                <p class = 'stats-item'>Comments ${e.comments}</p>
                <p class = 'stats-item'>Downloads ${e.downloads}</p>
            </div>
      
<a/>
    </li>
    `,m=function(e){return e.hits.map(t=>E(t)).join("")},a=function(e,t){return e.classList.add(t)},f=function(e,t){return e.classList.remove(t)},p=function(e){return Math.ceil(e.totalHits/15)},T=function(){return'<div class="js-load-more loader"></div>'},L=document.querySelector(".form"),n=document.querySelector(".gallery"),l=document.querySelector(".js-load-more-btn"),v=document.querySelector(".not-found"),c=document.querySelector(".js-loader");let i=1,u="";const b=new w(".gallery a"),j=async e=>{try{if(e.preventDefault(),f(c,"visually-hidden"),a(v,"visually-hidden"),n.innerHTML="",u=e.currentTarget.elements.input.value.trim(),u===""){d.error({title:"Error",message:"Please enter your search query"}),a(c,"visually-hidden");return}i=1,a(l,"visually-hidden");const{data:t}=await g(u,i);if(t.total===0){d.error({title:"Error",message:"Please enter another search query"}),a(c,"visually-hidden"),f(v,"visually-hidden"),n.innerHTML="",L.reset();return}p(t)>1&&(f(l,"visually-hidden"),l.addEventListener("click",S)),p(t)===1&&d.info({title:"Sorry",message:"We're sorry, but you've reached the end of search results."}),m(t),a(c,"visually-hidden"),n.innerHTML=m(t),b.refresh()}catch(t){console.log(t)}};L.addEventListener("submit",j);const S=async e=>{n.insertAdjacentHTML("beforeend",T());const t=document.querySelector(".js-load-more");try{i++;const{data:o}=await g(u,i);m(o),t.remove(),n.insertAdjacentHTML("beforeend",m(o)),scrollBy({top:1100,behavior:"smooth"}),i===p(o)&&(a(l,"visually-hidden"),console.log("s"),l.removeEventListener("click",S),d.info({title:"Sorry",message:"We're sorry, but you've reached the end of search results."})),b.refresh()}catch(o){console.log(o)}};
//# sourceMappingURL=index.js.map
