

(function() {
let imgEl = document.querySelector("img");
imgEl.onmouseover = function() {
    // let imgHovrAtr = imgEl.getAttribute("data-hover");
    // console.log(imgHovrAtr);
    imgEl.setAttribute("src",imgEl.getAttribute("data-hover"));
    
};


})();


// <div class="content">
//       <section class="explain">
//         <p>When hovering over the image, change its source attribute to the value specified in the "data-hover"
//           attribute.</p>
//       </section>
//       <section class="material">
//         <figure>
//           <img src="../../_shared/img/kiss.svg" alt="Kiss?" data-hover="../../_shared/img/kiss-wink-heart.svg" />
//         </figure>
//       </section>
//     </div>