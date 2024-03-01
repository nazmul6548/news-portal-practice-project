const callMyApi = async () => {
  const myUrl = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const res = await myUrl.json();
  const storeObject = res.data.news_category;
  // console.log(storeObject);
  myValue(storeObject);
};

const myValue = (data) => {
//   console.log(data.category_name);

  const itemsContainer = document.getElementById("category-bar-container");
  data.forEach((element) => {
    // console.log(element);
    const a = element.category_name;
    // console.log(a);
    const div = document.createElement("div");
    div.classList.add("category-bar");
    div.innerHTML = `<button class="bg-gray">${a}</button>`;
    itemsContainer.appendChild(div);
  });
};
const loadNews = async() => {
    const myUrl = await fetch('https://openapi.programming-hero.com/api/news/category/{category_id}');
    const res = await myUrl.json();
    console.log(res.data);
    
    const cardSet = document.getElementById('news-container');
    res.data.forEach((items) => {
        console.log(items);
        const div = document.createElement('div');
        div.className=`flex bg-gray-300 mt-5  m-auto w-[500px] h-auto`;
        // div.style.display = 'flex';
        // div.style.alignItems = 'center';
        div.innerHTML =`
        <figure><img  src="${items.image_url}" alt="Movie" class=""/></figure>
        <div class="card-body">
          <h2 class="card-title">${items.title}</h2>
          <p>${items.details.slice(0,150)}</p>
          <div class="card-actions ">
          <button class="btn btn-primary">Watch</button>
          </div>
        </div>
        `

        cardSet.appendChild(div)
    })

}
loadNews();
// myValue()
callMyApi();
