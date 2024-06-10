function renderPost(post, postsContainer) {
  try{
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    postsContainer.appendChild(postDiv);
  } catch(err) {
    
  }
}



function fetchPosts(url, postsContainer, errorMessage) {

  // Call the `fetch` function with argument `url` to fetch the data from the url. To this function call chain a 'then' function to check the `response`.
  fetch(url)
    .then(response => {
      // Inside the `then` function define an arrow function to check `if` a bad response gets returned from the url (`response.ok`).
    
      // If the response if not okay throw the `Error` ""Network response was not ok"".
      if (!response.ok) {
        throw new Error("Network response was not ok")
      } else {
        //Else, if `response` is okay, return the json formatted response (`response.json()`).
        return response.json()
      }
    })
    // Chain on another `then` function to check the  `posts`. Use an arrow function to display all `posts` to the console.
    .then(posts => {
      // Use the `forEach` function on `posts` with argument equal to `post`. Define an arrow function to run the function `renderPost`.
      //The `renderPost` function takes in the `post` as the first argument and `postsContainer` as the second argument.
      return posts.forEach(post => renderPost(post, postsContainer));
    })
    .catch(error => {
      // Finally, chain on a `catch` block to catch any `error`. Define an arrow function to run the `renderPost` function with `errorMessage` and `postsContainer` as its arguments.
    
      // Also, use `console.error` with arguments  "There has been a problem with your fetch operation:" and `error`.
      renderPost(errorMessage, postsContainer)
      console.error(`There has been a problem with your fetch operation: ${error}`)
    })






}
if (typeof module !== "undefined") {
  module.exports = { renderPost, fetchPosts };
}
