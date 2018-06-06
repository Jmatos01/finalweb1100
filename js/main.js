const searchTerm = document.querySelector(".searchTerm");
const searchButton = document.querySelector(".search")
const output = document.querySelector(".output")


function wikiSearch() {
    const api_url = `https://newsapi.org/v2/everything?q=${searchTerm.value}&apiKey=a46b152230804979b4ae6df2fe88d762`
    $.ajax({
        url: api_url,
        type: "GET",
        dataType: "json",
        success: (data) => {
            console.log(data)
            output.innerHTML = ""
            for (let i = 0; i < data.articles.length; i++) {
                output.innerHTML += `
                 <li>
                 <p>${data.articles[i].title}</p>
                 <p>${data.articles[i].source.name}</p>
                 <p>${data.articles[i].description}</p>
                 <a href="${data.articles[i].url}">${data.articles[i].url}</a>
                 <img src="${data.articles[i].urlToImage}" alt="Image">
                </li> 
                 `

            }
        },
        error: (error) => {
            console.log("there was an error")

        }
    })
}

searchButton.addEventListener('click', wikiSearch)
