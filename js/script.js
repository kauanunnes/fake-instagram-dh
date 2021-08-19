const btnMore = document.querySelector("#more");
let card = document.querySelector(".card");
let main = document.querySelector("main");

btnMore.addEventListener("mouseover", () => {
  btnMore.style.cursor = 'pointer'
})

btnMore.addEventListener("click", () => {
  let newCard = card.cloneNode(true);
  main.insertBefore(newCard, btnMore);

  let likes = document.createElement("b");
  likes.innerHTML = "1 likes";

  let imgLikes = document.createElement("img");
  imgLikes.setAttribute("src", "/img/icons/heart.svg");
  imgLikes.setAttribute("width", "24px");
  imgLikes.setAttribute("onclick", `handleClickLikeBtn(this);`);

  console.log(imgLikes);

  let divLikes = document.createElement("div");
  divLikes.className = "likes";

  divLikes.appendChild(imgLikes);
  divLikes.appendChild(likes);

  let item = newCard.getElementsByClassName("card-itens")[0].childNodes[1];
  let node = newCard.getElementsByClassName("card-itens")[0];

  node.replaceChild(divLikes, item);

  console.log(newCard.getElementsByClassName("card-itens")[0].childNodes[1]);
});

function handleClickLikeBtn(e) {
  let qtdLikes;
  let btnLike = e;
  let like = e.getAttribute("src") === "/img/red-heart.png" ? true : false;
  const qtdLikesElement = e.nextElementSibling;
  qtdLikes = qtdLikesElement.innerHTML.split(" ")[0];
  if (!like) {
    btnLike.setAttribute("src", "/img/red-heart.png");
    like = !like;
    qtdLikes++;
  } else {
    btnLike.setAttribute("src", "/img/icons/heart.svg");
    like = !like;
    qtdLikes--;
  }
  qtdLikesElement.innerHTML = qtdLikes + " likes";
}

document.querySelector("form").addEventListener("mouseover", (e) => {
  let field = e.currentTarget;
  field.style.cssText = "box-shadow: 0px 1px 3px black";
});

document.querySelector("form").addEventListener("mouseout", (e) => {
  let field = e.currentTarget;
  field.style.cssText = "box-shadow: none";
});
