import{a as v,i as u,S}from"./assets/vendor-B6jJ9_I0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const m=s=>{const{webformatURL:t,largeImageURL:i,tags:a,likes:e,views:o,comments:l,downloads:b}=s;return`<li class="gallery-card">
            <a href=${i} class="gallery-link">
              <img class="gallery-img" src=${t} alt='s${a}'>
            </a>

          <ul class="description">
            <li class="description-item">
              <p class="descriotion-text">Likes<span class="descriotion-span">${e}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Views<span class="descriotion-span">${o}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Comments<span class="descriotion-span">${l}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Downloads<span class="descriotion-span">${b}</</span></p>
            </li>
          </ul>
          </li>`},h=(s,t)=>{const i={params:{key:"48274046-7613a5ba2ef136dbd50664a67",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:100,page:t}};return v.get("https://pixabay.com/api/",i)},d=document.querySelector(".js-gallery"),r=document.querySelector(".loader-container"),n=document.querySelector(".load-btn-js"),g=document.querySelector(".js-seach-form");r.style.display="none";let c=1,p="",y=0;u.settings({position:"topRight",theme:"dark",backgroundColor:"#ef4040",timeout:2e3});const f=new S(".js-gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:400}),q=async s=>{try{if(s.preventDefault(),d.innerHTML="",r.style.display="block",p=s.currentTarget.elements.user_query.value.trim(),p===""){u.info({message:"Please feel this field!"}),r.style.display="none";return}c=1,n.classList.add("is-hidden");const{data:t}=await h(p,c);if(r.style.display="none",t.total===0){u.info({message:"Sorry, there are no images matching your search query. Please try again!"}),d.innerHTML="",g.reset();return}y=Math.ceil(t.totalHits/t.hits.length),y>1&&(n.classList.remove("is-hidden"),n.addEventListener("click",L));const i=t.hits.map(a=>m(a)).join("");d.innerHTML=i,f.refresh()}catch(t){r.style.display="none",console.log(t)}};g.addEventListener("submit",q);const L=async()=>{try{n.classList.add("is-hidden"),c++,r.style.display="block";const{data:s}=await h(p,c);r.style.display="none";const t=s.hits.map(a=>m(a)).join("");d.insertAdjacentHTML("beforeend",t),f.refresh(),n.classList.remove("is-hidden");const i=document.querySelector(".gallery-card:last-child").getBoundingClientRect().height;scrollBy({top:i*2,behavior:"smooth"}),y=Math.ceil(s.totalHits/s.hits.length),c===y&&(u.info({message:"We're sorry, but you've reached the end of search results."}),n.classList.add("is-hidden"),n.removeEventListener("click",L))}catch(s){r.style.display="none",console.log(s)}};
//# sourceMappingURL=index.js.map
