$(document).ready(function () {

  let url = "https://newsapi.org/v2/everything?q=denmark&from=2019-10-%2014&to=2019-10-21&sortBy=publishedAt&apiKey=f63ee0627f4642ad9d6fcc9358344647";

  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",

  
    success: function (jsondata) {
      let output = "";
      let latestNews = jsondata.articles;
      for (let i in latestNews) {
        output += `
            
  
        <div class="card">
              <img src="${latestNews[i].urlToImage}" class="card-img-top img-fluid" alt="${latestNews[i].title}">
            <div class="card-body">
              <h5 class="card-title"><a href="${latestNews[i].url}" title="${latestNews[i].title}">${latestNews[i].title}</a></h5>
              <p>Forfatter</b>: ${latestNews[i].author} </p>
              <p>News source</b>: ${latestNews[i].source.name} </p>
              <p>Udgivet</b>: ${latestNews[i].publishedAt} </p>
              <div class="card-text">
              <p>Beskrivelse: ${latestNews[i].description}</p>
              <a href="${latestNews[i].url}" target="_blank" class="btn btn-primary">Læs mere</a>
            </div>
            </div>
            </div> 
          
           
                         
        `;
      }

      if (output !== "") {
        $("#nyheder").html(output);
      }

    },

    error: function () {
      let errorMsg = `<div class="errorMsg center">Der er sket en fejl</div>`;
      $("#nyheder").html(errorMsg);
    }
  })

});