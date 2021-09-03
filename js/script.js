const SearchBook = () => {
    const searchField = document.getElementById('search-field');
    let searchText = searchField.value;

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    console.log('url :>> ', url);

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}
// SearchBook();

const displaySearchResult = (bookList) => {
    console.log('posts :>> ', bookList);
    const totalBooks = document.getElementById('search-result');

    let totalLength = document.getElementById('total');



    // const h5 = document.createElement('h5');
    // h5.innerText = 'hello'
    // totalLength.appendChild(h5)
    console.log('singleBook.length :>> ', bookList.length);




    bookList.forEach(singleBook => {

        const div = document.createElement('div');
        div.className = 'col-md-4'
        // div.classList.add('row');


        // if (singleBook.author_alternative_name !== undefined) {
        div.innerHTML = `
            <div className="my-5">
            <div class="card">
                <img class="card-img-top" src="https://covers.openlibrary.org/b/id/${singleBook.cover_i}-M.jpg" alt="Card image cap">
                <div class="card-body">
                <h5> ${singleBook.author_name[0]} </h5> 
                <h5> First Published ${singleBook.first_publish_year} </h5>      
                    
                    <h6> ${singleBook.subject} </h6>      
                    
                           
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
          </div>
            </div>
        `;
        // }
        //     else {
        //         div.innerHTML = `
        //         <div className="my-5">
        //         <div class="card">
        //         <img class="card-img-top" src="..." alt="Card image cap">
        //         <div class="card-body">
        //             <h5> ${singleBook.author_name[0]} </h5>
        //             <h6> ${singleBook.subject} </h6>
        //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //             <a href="#" class="btn btn-primary">Go somewhere</a>
        //         </div>
        //   </div>
        //         </div>
        //     `;
        //     }
        totalBooks.appendChild(div)
    });
}