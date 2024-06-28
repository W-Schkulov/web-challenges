console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
const postContainer = document.createElement("article");
postContainer.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent =
  " Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
postContainer.appendChild(postContent);

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");
postContainer.appendChild(postFooter);

const usernameSpan = document.createElement("span");
usernameSpan.classList.add("post__username");
usernameSpan.textContent = "@username";
postFooter.appendChild(usernameSpan);

const postButton = document.createElement("button");
postButton.classList.add("post__button");
postButton.textContent = "♥ Like";
postButton.addEventListener("click", handleLikeButtonClick);
postFooter.appendChild(postButton);

document.body.appendChild(postContainer);

// Use document.createElement() and append another social media post to the body.
