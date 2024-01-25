import{i as c,a as w,S as L}from"./assets/vendor-89feecc5.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function u(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=u(e);fetch(e.href,a)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("loader-container"),l=document.getElementById("searchForm"),u=document.getElementById("searchInput"),i=document.getElementById("gallery"),e=document.getElementById("loadMoreButton"),a="41901564-aceebb7c9fdd08ac794ac72d8";let o=1,p=0,m="";d(n),e.style.display="none",l.addEventListener("submit",async function(s){s.preventDefault(),o=1,e.style.display="none";const r=u.value.trim();if(r===""){c.error({title:"Error",message:"Please enter a search term"}),d(n);return}m=r,g(n);try{await y(m)}finally{d(n)}});async function y(s){try{const r=await w.get("https://pixabay.com/api/",{params:{key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:o}});p=r.data.totalHits,r.data.hits.length===0?c.error({title:"Error",message:"No images found for the provided search term"}):v(r.data.hits),o*40>=p?(e.style.display="none",c.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})):e.style.display="block"}catch{c.error({title:"Error",message:"Failed to fetch images. Please try again later."})}}e.addEventListener("click",async function(){o++,await y(m),h()});function h(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy(0,s*2)}function g(s){s&&(s.style.display="block")}function d(s){s&&(s.style.display="none")}function v(s){if(i.innerHTML="",s.length===0){c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}),d();return}s.forEach(t=>{const f=document.createElement("div");f.className="gallery-item",f.innerHTML=`
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
      `,i.appendChild(f)}),new L(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}});
//# sourceMappingURL=commonHelpers.js.map
