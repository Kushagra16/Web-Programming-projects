"use strict";

var refPosts=new Firebase("https://infx598h.firebaseio.com/posts");
var currentUser;
var divPosts=document.querySelector("#posts");

function appendPost(post){
    var p=post.val();
    var divPost=document.createElement("div");
    divPost.textContent=p.body;
    divPosts.appendChild(divPost);
}

function renderPosts(posts){
   // console.log(posts.val());
   divPosts.innerHTML="";
   posts.forEach(appendPost);
}

function onAuthChange(authData){
    currentUser=authData;
    if(null==currentUser){
        refPosts.authWithOAuthRedirect("github",function(err){
           console.error(err); 
        });
    }
    else{
        //get last 100 posts and call renderPosts
        //when the data comes back from the server
        refPosts.limitToLast(100).on("value",renderPosts);
    }
}

refPosts.onAuth(onAuthChange);