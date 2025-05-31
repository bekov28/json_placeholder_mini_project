window.addEventListener("DOMContentLoaded", () => {
  const postsWrapper = document.querySelector(".posts");

  const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

  //GET METHOD
  fetch(BASE_URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json()) //Parses JSON from the response to object
    .then((data) => {
      data.forEach((item, index) => {
        const postEl = document.createElement("div");
        postEl.classList.add("post");
        postEl.innerHTML += `
        <h4><b>#${index + 1}.</b>${item.title}</h4>
          <p>${item.body}</p>
        `;
        postsWrapper.append(postEl);
      });
    })
    .catch(() => {
      const errorEl = document.createElement("div");
      errorEl.classList.add("error");
      errorEl.textContent = "Something went wrong";
      postsWrapper.append(errorEl);
    });

  //POST METHOD
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form); //returns object kind of data
    const object = {}; //save the data to an object
    formData.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object); //need to send data in json format when using POST method

    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: json,
    })
      .then((res) => res.json()) //converting to object
      .then((data) => {
        form.reset();
        const postEl = document.createElement("div");
        postEl.classList.add("post");
        postEl.innerHTML += `
        <h4><b>#${data.id}.</b>${data.title}</h4>
          <p>${data.body}</p>
        `;
        postsWrapper.append(postEl);
      })
      .catch((err) => console.log(err));
  });

  //LocalStorage
  const form2 = document.querySelector("form");

  form2.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form2); //returns object kind of data

    const object2 = {}; //save the data to an object

    formData.forEach((value, key) => {
      object2[key] = value;
    });

    const posts = [];
    posts.push(object2);
    
    
  });
});
