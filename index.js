import{a as w,S,i as f}from"./assets/vendor-3h0fHshV.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))y(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&y(m)}).observe(document,{childList:!0,subtree:!0});function d(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function y(r){if(r.ep)return;r.ep=!0;const s=d(r);fetch(r.href,s)}})();const E="https://pixabay.com/api/",g=(t,e)=>{const d={params:{key:"48264629-b593a4428d313ae96204c3007",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}};return w.get(E,d)},M=t=>`
        <li class ='card'>
    <a class = 'gallery-link' href = '${t.largeImageURL}'>
        <img 
            class = 'card__image'
            src='${t.webformatURL}' 
            alt='${t.tags}'>

            <div class = 'stats'>
                <p class = 'stats-item'>Likes ${t.likes}</p>
                <p class = 'stats-item'>Views ${t.views}</p>
                <p class = 'stats-item'>Comments ${t.comments}</p>
                <p class = 'stats-item'>Downloads ${t.downloads}</p>
            </div>
      
<a/>
    </li>
    `,u=function(t){return t.hits.map(e=>M(e)).join("")},o=function(t,e){return t.classList.add(e)},p=function(t,e){return t.classList.remove(e)},v=function(){return new S(".gallery a")},L=function(t){return Math.ceil(t.totalHits/15)},b=document.querySelector(".form"),i=document.querySelector(".gallery"),l=document.querySelector(".js-loader"),a=document.querySelector(".js-load-more-btn"),h=document.querySelector(".not-found");let n=1,c="";const P=async t=>{try{if(t.preventDefault(),p(l,"visually-hidden"),o(h,"visually-hidden"),i.innerHTML="",c=t.currentTarget.elements.input.value.trim(),c===""){f.error({title:"Error",message:"Please enter your search query"}),o(l,"visually-hidden");return}n=1,o(a,"visually-hidden");const{data:e}=await g(c,n);if(e.total===0){f.error({title:"Error",message:"Please enter another search query"}),o(l,"visually-hidden"),p(h,"visually-hidden"),i.innerHTML="",b.reset();return}L(e)>1&&(p(a,"visually-hidden"),a.addEventListener("click",q)),u(e),o(l,"visually-hidden"),i.innerHTML=u(e),v()}catch(e){console.log(e)}};b.addEventListener("submit",P);const q=async t=>{try{n++;const{data:e}=await g(c,n);u(e),i.insertAdjacentHTML("beforeend",u(e)),v(),scrollBy({top:1100,behavior:"smooth"}),n===L(e)&&(o(a,"visually-hidden"),a.removeEventListener("click",q))}catch(e){console.log(e)}};
//# sourceMappingURL=index.js.map
