

let successImg = document.querySelectorAll(".success-img"); 
    successImg.forEach(img => {
        img.addEventListener("mouseover", (e) => {
            TweenMax.to(e.target,.4, {transform:'scale(1.07)'});
        });
                img.addEventListener("mouseout",(e) => {
                    TweenMax.to(e.target,.4, {transform:'scale(1)' });
        })
    });

let keylog = ""
    window.addEventListener('keydown', (e) => keylog += e.key);
        console.log(keylog);