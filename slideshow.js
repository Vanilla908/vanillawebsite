
let Art_Pictures = document.getElementById("Art_Pictures")
let Animation_videos = document.getElementById("Animation_Videos_slideshow")

const animations = ["https://www.youtube.com/embed/wW8wHlN1UDQ",
"https://www.youtube.com/embed/CZ0C7Zbr4zw",
"https://www.youtube.com/embed/9shxBFVc1P8",
"https://www.youtube.com/embed/3CajJ_Usuk4",
"https://www.youtube.com/embed/T7neVSJ23JM",
"https://www.youtube.com/embed/DEItxa5qWTM",
"https://www.youtube.com/embed/znHNmzcwhHA",
"https://www.youtube.com/embed/t-XtV1ZkD2s",
"https://www.youtube.com/embed/6uyld7UHYpg",
"https://www.youtube.com/embed/FJqKE9sDxb8",
"https://www.youtube.com/embed/8Xl7Od4xQWQ",


]

const numofvids=animations.length;
let animationIndex = 0;

const images = [
    "https://yt3.ggpht.com/SgTxw57WEqpNCjymqoo6_mIov7G3uufO4iIhiExUzzEJfprMKxdRL-YXzbklHucP-xSGuie3P-l6",
"https://yt3.ggpht.com/5NkET6M_bpNHw5J9leh96m5Ao8XxmP_0MlOT37YMss_DJM5YgIk1iYnLF2OBx7kOAwYDxzCm1ZGIOMw",
    "https://yt3.ggpht.com/N3FqR8KWWEqz6Tf30QJBnfIRCAI7N1FCsXJxfmx6vVPNDA6WGMXEOfd1tZSv7uZbXwzQKCvAP2g2",
    "https://yt3.ggpht.com/ezFEfPFmZkyoG1FjfFaxJvH1IGacRuKn8mibBSZf1KKT2ThhaSGKtSKMHeANQn0RxuowGYGA3RjuQg",
    "https://yt3.ggpht.com/92fBDoCcUneam4U7X_2-TxCE7uEiCz2ZsG9GDyeancXxUap5uWM2ouGG7-tMSoqFVBpYoNhMW_2c",
    "https://yt3.ggpht.com/t1Z08TJfnzdltGazOcJ1I1JTUr52Ja2HF_lvoFk4q1-VWZvGtFsdHslQ00DhRfuJWJMP7AXSb6M8",
    "https://yt3.ggpht.com/Iq5tSv1OsvZykxjmJEOPf7kSSw6am0MN2QLOKk1aHMdm04mgWra60vJn0cTtxtHSOjxfg7hCkJcZgg",
    "https://yt3.ggpht.com/pKDi0bO5ZKmJIE9q6qWUDjKuD1PWTK2T6_-sgBKhIqZZrlvvkl9tAULA7cB39Qq5BbghNrzm2dCOww",
    "https://yt3.ggpht.com/N8SyQt614Jgrd3s8cRYxBoAimfrpM0p6j3kMg9OoCEgODNbOldXe5ZptQdJ1-wBqNjIScMODwXhK4A",
    "https://yt3.ggpht.com/yvPAXxee5gN-SiXDV5iisX-9jYuthlX3QFJ6y5HxIDN9KcAgcqzLwHo13vc6z9TYkTPmRsVlUcVzTt0",
    "https://yt3.ggpht.com/4V4zIlppGkbzvP102bccxXSi6KbP5TxAaWAbR0BYpqHewpzJgAyQjdwMJtnEMkmT54hIuhsryd9xcQ",
    "https://yt3.ggpht.com/NzeP8zKaYvlj_uvQqLNRYb_3a-PDfUHiuSSsuIOTH6i53t9C0ZQE203Xovjp-0Jv9Z1u3I82eiQP",
    "https://yt3.ggpht.com/QJHHrZXlZyfXl6SJkfOTlWizRwZA8g8_znzihQYQXQn9txBsraZYztjafbS68mnEQpyQsM23UCee5g",
    "https://yt3.ggpht.com/RLX8xrGpOLPkgFxjFuRR73thklHVYyrghQmr0vtwC4ebAE37Js1ZhOhA1eLxK3W7VygNelNn-kuLLQ",
    "https://yt3.ggpht.com/ixCTQiCdw4krEUFQsDEx9pCCIlt9LzNZXt0KsqP2RK5w4TbpWbfCq8lpAyQk3dsksFs3PDw0y6mXAQ",
    "https://yt3.ggpht.com/_QwMGtpraTf_Zn8nD80KQ7r-V2E-IUEeyLc27hzOC3plG4feol0WpvK5tbs7BSt60a3b0Drzx_XU",
    "https://yt3.ggpht.com/5qPQOxKyeCbM6rrJBP8o_NkDswqjXC8RzVjL__0wnx5jBtC57iVMfQgIF13jmRbOEf7RLR3Z-b8kxkE=s1600-rw-nd-v1",
    "https://yt3.ggpht.com/5dg8vOdvLGKFa2HZg8Mw-vu7vjvX9z7OsuwQMTDs7iiiGV9hUWDFAx6p723U1CanyhXx_peuSqjmOg",
    "https://yt3.ggpht.com/iANoKkNLK77qRNL_vZGnkLhhUIEKf_roZcKKJjtyaUgjHmRk_lYeIimlTSe25Ze4t3VdEsq2ttLrBQ",
    "https://yt3.ggpht.com/FMk5umuWE1Ns0mfEbNjMSAriW5KKS3an4vIy7Cuoe6VeM-EMlcviwonE3h_AXlqlFocUJSSdQWlslg=s1600-rw-nd-v1",
    "https://yt3.ggpht.com/-sDaT2XXldQ6rzYK9KWR4lCTdtj10G-s-oylS37SN2zazfEwJxoC422yuh0z9907n081-Rr06kCNEA=s1600-rw-nd-v1",
    "https://yt3.ggpht.com/GnKuBPAULPQETVmfvU7AhYNxCNXH4iBu5AJhCHQ3RrH4B8muQNfjHXkimkvkaD6meIdO5oqUIHnRJw",
    "https://yt3.ggpht.com/VT_DBcYkLmeZFmwfPT3y1GBpQfkAzivQs6NyoHqC2AveBE-gIcGxLmGHtrEEht-wiMuTWqAog374tA",
    "https://yt3.ggpht.com/XG42GXrvFhwH4rZfW-25g5jyRkoVzIANTuo8YtwSAUy_QK8fA-0moGCL7ObCNFqNnU77KeoyBK3Q",
    "https://art.ngfiles.com/medium_views/5704000/5704261_791832_thevanillalog_untitled-5704261.8ee5c9483a035fd2760554c2e161d8ea.webp?f1715904316",
    "https://yt3.ggpht.com/fjs4zdrrIlZgQXSlLFU7uOHS-pEpbnpaVkaH3OU56ixkg0mMIaeMJ9C3ZOv6Ohky16q5veg7eY1M",
    "https://yt3.ggpht.com/331AwtVExxlCydMsTtgpSmbe3zZqM0SJg-a-xOuiIbKBZ4RU3GWjSMuIKLIDpRc0APsIzGqeRJe6",
    "https://yt3.ggpht.com/Uhzwe04oWcmXMEw3945xCYrz2ZUX0-Kzd9E0HjqrtVoOrLT2Q2kGFRN85N4m4WCbN6kcBHpKXFL5rg",
    "https://yt3.ggpht.com/EyGJ0BgOs30pgEe1Df2GNw2LGx7VgOiNx1_U7SMnRi-aI9LwY0QnUFS6AJtHg2SpYAHC22v4h5e3yQ",
    "https://yt3.ggpht.com/MKqzCAjYm6sHqi2HXxBt3v_GQgAKQyTejYoBtyHcueZE5rqqycS7wJMuWvEEmGRuloj1Aj_g297-",
    "https://yt3.ggpht.com/opzFIzBkF_SbEvrPp85z2YE20eAK3zKehvdsgvtZG-O46cHH3AHBtCooqz-HSRNJ6-qCY8t-QjYV",
    "https://yt3.ggpht.com/xVe_sLCoXelDddycPdDQ4A96u1JINLd6daNmNmYNEgicpISqmlE58VVpg4l_K7F-PshaIFqu3Cv4eQ",
    //Start putting new image links here!!
    ]
const numofpics = images.length;
let i = 0;

var modal = document.getElementById('imageModal');
var modalImage = document.getElementById('modalImage');
var closeBtn = document.getElementsByClassName('close')[0];
var prevBtn = document.getElementsByClassName('prev')[0];
var nextBtn = document.getElementsByClassName('next')[0];
var popupImage = document.getElementsByClassName('popup-image');

function animationSlideRight(){
    if (animationIndex < numofvids-1){
        animationIndex+= 1;
        Animation_videos.src = animations[animationIndex]
        console.log(Animation_videos.src)
    }
    else if (i==numofvids-1){
        animationIndex = numofvids-1;
        Animation_videos.src = animations[animationIndex]
        console.log(animationIndex)
    }
    console.log(i);
}

function animationSlideLeft(){
    if (animationIndex > 0){
        animationIndex-= 1;
        Animation_videos.src = animations[animationIndex]
        console.log(Animation_videos.src)
    }
    else if (i==0){
        animationIndex = 0;
        Animation_videos.src = animations[animationIndex]
        console.log(animationIndex)
    }
    console.log(i);
}
function slideLeft(){
    if (i > 0){
    i = i - 1;
    Art_Pictures.innerHTML = `<img src= ${images[i]} id= "generated_image" onclick="showModal(` + i +`)">`
    }
    else if (i==0){
    i = 0;
    Art_Pictures.innerHTML = `<img src= ${images[i]} id= "generated_image" onclick="showModal(` + i +`)">`
    }
    console.log(i);
}

function slideRight(){
    if (i < numofpics-1){
        i = i + 1;
    Art_Pictures.innerHTML = `<img src= ${images[i]} id= "generated_image" onclick="showModal(` + i +`)">`
    }
    else if (i==numofpics-1){
        i = numofpics-1;
        Art_Pictures.innerHTML = `<img src= ${images[i]} id= "generated_image" onclick="showModal(` + i +`)">`
    }
    console.log(i);
}

function showpicture(picture_index){
    i=picture_index
    Art_Pictures.innerHTML = `<img src= ${images[i]} id= "generated_image">`
}
/*Art_Pictures.innerHTML = `<img src= ${images[0]}>`*/
console.log(numofpics)


//For Image pop up
//this function allows you to add image links at the start of the array by finding the link in the array and getting its index
function getIndex(imgSource){
    console.log("functioning")
    imageCollection = images.length
    for (Link=0; Link<imageCollection; Link++){
        if (imgSource == images[Link]){
            showModal(Link);
        }
    }
}
// Function to open modal and display clicked image
function showModal(index) {
modal.style.display = "block";
currentIndex = index;
modalImage.src = images[currentIndex];
}

// Loop through all images and add click event listener
for (let i = 0; i < images.length; i++) {
images[i].onclick = function() {
showModal(i);
}
}

// Close modal on close button click
closeBtn.onclick = function() {
modal.style.display = "none";
}

// Navigate to the previous image
prevBtn.onclick = function() {
currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
modalImage.src = images[currentIndex];
}

// Navigate to the next image
nextBtn.onclick = function() {
currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
modalImage.src = images[currentIndex];

if(modalImage.style.height<100){
    modalImage.style.height=200
}
console.log(modalImage.style.height)
}


