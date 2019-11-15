

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    
    let i=0;
    console.log(i);
    function next(){
        if (i<4) {
        imgAtr.setAttribute("src", gallery[++i]);
        console.log(i);
        }   else {
            i=0;
            console.log(i);
            imgAtr.setAttribute("src", gallery[i]);
        }   
    };  
    
    let imgAtr = document.querySelector("img");
    document.querySelector("#next").addEventListener("click",function(){
        // let imgAtr = document.querySelector("src");
        next();
    })


// trying a different "if" way
// eureka, works too but remove first console.log(i)
    let g=0;
    function next2() {
        imgAtr.setAttribute("src",gallery[g]);
        if(g==gallery.length-1) {
            console.log(g);
            g=0;
        }   else {
            console.log(g);
            g++;
        }
    }
    
})();






// { <div class="content">
// <section class="explain">
//   <p>When you click the button, change the source of the image to the next one listed in the
//     <strong>gallery</strong> array.</p>
// </section>
// <section class="material">
//   <figure>
//     <img src="../../_shared/img/bell.svg" alt="Carousel" />
//   </figure>
//   <div class="actions">
//     <button type="button" id="next">Next image</button>
//   </div>
// </section>
// </div> }
