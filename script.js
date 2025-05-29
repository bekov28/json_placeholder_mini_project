window.addEventListener("DOMContentLoaded", () => {
  const postsWrapper = document.querySelector(".posts");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json()) //Parses JSON from the response to object
    .then((data) => {
      data.forEach((item, index) => {
        const post = document.createElement("div");
        post.classList.add("post");
        post.innerHTML += `
        <h4><b>#${index + 1}.</b>${item.title}</h4>
          <p>${item.body}</p>
        `;
        postsWrapper.append(post);
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
    })
    .finally(() => console.log("FINALLY"));
});
