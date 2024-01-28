import{i as p,a as v,S as w}from"./assets/vendor-89feecc5.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("loader-container"),l=document.getElementById("searchForm"),c=document.getElementById("searchInput"),i=document.getElementById("gallery"),e=document.getElementById("loadMoreButton"),s="41901564-aceebb7c9fdd08ac794ac72d8";let o=1,m=0,d="";u(n),e.style.display="none",l.addEventListener("submit",async function(a){a.preventDefault(),o=1,e.style.display="none";const r=c.value.trim();if(r===""){p.error({title:"Error",message:"Please enter a search term"}),u(n);return}d=r,h(n);try{await f(d)}finally{u(n)}});async function f(a){try{const r=await v.get("https://pixabay.com/api/",{params:{key:s,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:o}});m=r.data.totalHits,o===1&&(i.innerHTML=""),r.data.hits.length===0?p.error({title:"Error",message:"No images found for the provided search term"}):(g(r.data.hits),o*40>=m?e.style.display="none":e.style.display="block",y())}catch{p.error({title:"Error",message:"Failed to fetch images. Please try again later."})}}e.addEventListener("click",async function(){o++,await f(d)});function y(){const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}function h(a){a&&(a.style.display="block")}function u(a){a&&(a.style.display="none")}function g(a){const r=a.map(t=>`
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
      `).join("");i.insertAdjacentHTML("beforeend",r),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}});
//# sourceMappingURL=commonHelpers.js.map
