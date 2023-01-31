let images = document.querySelectorAll(".menuDiv img")
let info = document.querySelectorAll(".infoDiv")
console.log(info);
function imgFunc(){
    for (let i = 0; i < images.length; i++) {
        const elem = images[i];
        elem.addEventListener("click",function(e){
            
            let img = images[0];
            let inf = info[0]
            while(img ){
                if(img.tagName == "IMG" ){
                    img.style.borderBottom = "none"
                    img.style.filter = "blur(1px)"
                }
                img = img.nextSibling
            }
            while(inf){
                if(inf.tagName == "DIV"){
                    inf.style.display = "none"
                    inf.style.filter = "blur 5px"
                }
                inf = inf.nextSibling
            }
            this.style.borderBottom  = "5px solid white"
            this.style.filter = "blur(0px)"

            info[i].style.display = "flex"
            info[i].style.transition = "1s"
            info[i].style.filter = "blur(5px)"

            setTimeout(() => {
                info[i].style.transition = "1.5s"
                info[i].style.filter = "blur(0px)"
            }, 0,5);
        })
    }
}
imgFunc()
