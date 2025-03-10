import{a as f,S as p,i as a}from"./assets/vendor-GVvh3lz8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const h="https://pixabay.com/api/",m="49208240-98906b06c81b1fd858a2b8a19";function y(i){return f.get(h,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits.length===0?[]:t.data.hits).catch(t=>{throw console.error("Error fetching images:",t),t})}const u=document.querySelector(".gallery-list"),d=document.querySelector(".loader-wrapper");function g(i){const t=i.map(r=>{const s=r.tags.split(", ").slice(0,4).join(", ");return`<li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
          <img 
            class="gallery-image" 
            src= "${r.webformatURL}"
            alt= "${s}"
          />
      </a>
       <div class="image-info">
          <div class="info-titles">
          <h4>Likes</h4>
          <p>${r.likes}</p>
          </div>
          <div class="info-titles">
          <h4>Views</h4>
          <p>${r.views}</p>
          </div>
          <div class="info-titles">
          <h4>Comments</h4>
          <p>${r.comments}</p>
           </div>
          <div class="info-titles">
          <h4>Downloads</h4>
          <p>${r.downloads}</p>                 
          </div>
        </div>
  </li>`}).join("");u.insertAdjacentHTML("beforeend",t)}function v(){u.innerHTML=""}function L(){d.style.display="block"}function l(){d.style.display="none"}const w=document.querySelector(".search-form");document.querySelector(".search-btn");const c=document.querySelector(".form-input");let b=new p(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,nav:!0,animationSlide:!0,scrollZoom:!1});w.addEventListener("submit",i=>{i.preventDefault();const t=c.value.trim();if(t===""){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}v(),L(),y(t).then(r=>{if(l(),r.length===0){a.warning({title:"No results",message:"No images found, try another query!",position:"topRight"});return}g(r),b.refresh(),c.value=""}).catch(r=>{l(),a.error({title:"Error",message:"Something went wrong! Try again later.",position:"topRight"})})});
//# sourceMappingURL=index.js.map
