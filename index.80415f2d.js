!function(){var e="https://api.thecatapi.com/v1",n="live_3s7JZ4STcvSL9dBQOcjhg30hWd64Bsgf9AZ6igcITdbP1dgq8Oe4wP5LDZmwvg19";function t(t){return fetch("".concat(e,"/images/search?breed_ids=").concat(t),{headers:{"x-api-key":n}}).then((function(e){if(e.ok)return e.json();throw new Error(e.status)}))}var c=document.querySelector(".breed-select"),a=document.querySelector(".cat-info"),i=document.querySelector(".loader"),s=document.querySelector(".error");function r(){s.classList.remove("is-hidden"),c.classList.add("is-hidden")}s.classList.add("is-hidden"),fetch("".concat(e,"/breeds"),{headers:{"x-api_key":n}}).then((function(e){if(e.ok)return e.json();throw new Error(e.status)})).then((function(e){i.classList.replace("loader","is-hidden");var n=e.map((function(e){var n=e.name,t=e.id;return"<option value=".concat(t,">").concat(n,"</option>")}));c.insertAdjacentHTML("beforeend",n),c.classList.remove("is-hidden")})).catch(r),c.addEventListener("change",(function(e){i.classList.replace("is-hidden","loader"),a.classList.add("is-hidden"),t(e.target.value).then((function(e){var n=e[0],t=n.url,c=n.breeds[0],s=c.name,r=c.description,d=c.temperament;a.innerHTML="\n            <img src='".concat(t,"' alt='{name}' width=\"400\"/>\n            <div class='box'>\n                <h2>").concat(s,"</h2>\n                <p>").concat(r,"</p>\n                <p>").concat(d,"</p>\n            </div>\n        "),a.classList.remove("is-hidden"),i.classList.add("is-hidden")})).catch(r)}))}();
//# sourceMappingURL=index.80415f2d.js.map
