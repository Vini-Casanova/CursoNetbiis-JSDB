async function getPosts(params) {
    const response  = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response.url+"   "+response.status)
    const data = await response.json();
    return data;
}

async function getPostsById(params) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/{id}", params);
    console.log(response.url+"   "+response.status)
    const data = await response.json();
    return data;
}

async function getCommentsByPost(params) {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/'+params,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

async function createPost(params) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            tile: params.tile,
            body: params.body,
            userId: params.userId
        }
    })
    
}

getPosts().then( posts => {
    console.log(posts);
})

getPostsById(1).then( posts => {
    console.log(posts);
})

getCommentsByPost(1).then( comments => {
    console.log(comments);
})