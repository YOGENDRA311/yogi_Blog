/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
    getPostIdParam();
}
const getPostIdParam =()=>{
    const queryString = window.location.search;
    const urlParam = new URLSearchParams(queryString);
    return urlParam.get("id");
}

const getPost = () => {
    // CODE GOES HERE
    const postId = getPostIdParam();
    const  url = `${API_URL}${postId}`
    fetch(url,{
        method:'GET'
    }).then((response)=>{
        return response.json()
    }).then((data)=>{
        buildPost(data);
    })
}

const buildPost = (data) => {
    const postDate = new Date(parseInt(data.added_date)).toString();
    const postImage = `${API_BASE_URL}${data.post_image}`;
    document.querySelector("header").style.backgroundImage = `url(${postImage})`
    document.getElementById("indivisual-post-title").innerText = data.title;
    document.getElementById("indivisual-post-date").innerText = `Published on ${postDate}`;
    document.getElementById("indivisual-post-content").innerText = data.content;
    // HINT: Convert the date number to a Date string 
}

