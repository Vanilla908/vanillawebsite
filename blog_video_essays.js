let Animation_videos = document.getElementById("Animation_Videos_slideshow")

const animations = ["https://www.youtube.com/embed/ScDrYrE-zyc",
"https://www.youtube.com/embed/YHbxgVtGykI",
"https://www.youtube.com/embed/2ua4Xiq_0jY",
"https://www.youtube.com/embed/z3jkT6kqdTo",
"https://www.youtube.com/embed/F3621EReS40"
]

const numofvids=animations.length;
let animationIndex = 0;
//for getting recent blog date
var recent_blog_date= document.getElementById("recent_blog_date").innerHTML
var recent_post = document.getElementById("recent_post").innerHTML

function videoEssaySlideRight(){
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

function videoEssaySlideLeft(){
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

//transfers latest blog post to homepage
window.addEventListener('load', () => {
    localStorage.setItem('recent_blog_date',recent_blog_date);
    localStorage.setItem('recent_post',recent_post);
    console.log(recent_post)
})