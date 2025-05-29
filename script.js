window.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode1.com/posts", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json()) //convertinf to JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("ERROR", err);
    })
    .finally(() => console.log('FINALLY'))
});
