import{i as c,a as v,S as w}from"./assets/vendor-89feecc5.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=d(e);fetch(e.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("loader-container"),l=document.getElementById("searchForm"),d=document.getElementById("searchInput"),i=document.getElementById("gallery"),e=document.getElementById("loadMoreButton"),s="41901564-aceebb7c9fdd08ac794ac72d8";let r=1,m=0,u="";p(n),e.style.display="none",l.addEventListener("submit",async function(a){a.preventDefault(),r=1,e.style.display="none";const o=d.value.trim();if(o===""){c.error({title:"Error",message:"Please enter a search term"}),p(n);return}u=o,h(n);try{await f(u)}finally{p(n)}});async function f(a){try{const o=await v.get("https://pixabay.com/api/",{params:{key:s,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:r}});m=o.data.totalHits,o.data.hits.length===0?(c.error({title:"Error",message:"No images found for the provided search term"}),i.innerHTML=""):g(o.data.hits),r*40>=m?(e.style.display="none",c.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})):e.style.display="block"}catch{c.error({title:"Error",message:"Failed to fetch images. Please try again later."})}}e.addEventListener("click",async function(){r++,await f(u),y()});function y(){const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy(0,a*2)}function h(a){a&&(a.style.display="block")}function p(a){a&&(a.style.display="none")}function g(a){const o=a.map(t=>`
         <div class="gallery-item">
      <a href="${t.largeImageURL}" data-lightbox="gallery" data-title="Likes: ${t.likes}, Views: ${t.views}, Comments: ${t.comments}, Downloads: ${t.downloads}">
          <img src="${t.webformatURL}" alt="${t.tags}" data-src="${t.largeImageURL}" data-caption="Likes: ${t.likes}, Views: ${t.views}, Comments: ${t.comments}, Downloads: ${t.downloads}">
        </a>
        <div class="image-stats">
      <div class="stat-item">
        <p class="stat-label">Likes:</p>
        <p class="stat-value">${t.likes}</p>
      </div>
      <div class="stat-item">
        <p class="stat-label">Views:</p>
        <p class="stat-value">${t.views}</p>
      </div>
      <div class="stat-item">
        <p class="stat-label">Comments:</p>
        <p class="stat-value">${t.comments}</p>
      </div>
      <div class="stat-item">
        <p class="stat-label">Downloads:</p>
        <p class="stat-value">${t.downloads}</p>
      </div>
    </div>
    </div>
      `).join("");i.insertAdjacentHTML("beforeend",o),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}});
//# sourceMappingURL=commonHelpers.js.map
