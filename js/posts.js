function display(posts) {
    const postsAsHtml = posts.map((post) => {
      console.log(post);  
      let card = "<div class='post'>";
      card = card + "<h3 class='title'>" + post.title + "</h3>";
      card = card + "<div class='description'>" + post.body + "</div>"
      card = card + "</div>";

      return card;
    });
    document.getElementById('posts').innerHTML = postsAsHtml;
}

async function readPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    display(data);
}



/* soit utiliser la methode async function ou celle-ci dessous 
function readPosts() {
    console.log("fichier chargé");

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((data) => display(data));
}
*/