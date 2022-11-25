const doc = document.querySelector('form');
const main = document.getElementById('main');


function getMovies(searchText) {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    const url = `https://api.tvmaze.com/search/shows?q=${searchText}`;
    axios.get(url)
        .then((res) => {
            for (let item of res.data) {
                if (item.show.image) {
                    const image = document.createElement('img');
                    image.src = item.show.image.medium;
                    image.style.margin = '10px';
                    main.append(image);
                }
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

doc.addEventListener('submit', (e) => {    
    e.preventDefault();
    const inp = doc.elements[0].value;
    getMovies(inp);
    doc.elements[0].value = "";
})