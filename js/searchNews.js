

$(document).ready(function(){
    
    $("#searchbtn").on("click",function(e){
      e.preventDefault();
      
      let query = $("#søg").val();
      let url = "https://newsapi.org/v2/top-headlines?q="+query+"&country=us&category=business&apiKey=f63ee0627f4642ad9d6fcc9358344647";
      
      if(query !== ""){
        
        $.ajax({
          
          url: url,
          method: "GET",
          dataType: "json",
          
          success: function(jsondata){
            let output = "";
            let latestNews = jsondata.articles;
            
            for(let i in latestNews){
              output +=`
                <div class="col l6 m6 s12">
                <h4>${latestNews[i].title}</h4>
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
                <p>${latestNews[i].description}</p>
                <p>${latestNews[i].content}</p>
                <p>Udgivet den: ${latestNews[i].publishedAt}</p>
                <a href="${latestNews[i].url}" class="btn">Læs mere</a>
                </div>
              `;
            }
            
            if(output !== ""){
              $("#nyheder").html(output);
              
              
            }else{
              let ingenNyheder = `<div style='text-align:center; font-size:36px; margin-top:40px;'>Denne nyhed er ikke tilgængelig. Det beklager vi.<br>Prøv at søg efter noget andet fx. cars</div>`;
               $("#nyheder").html(ingenNyheder);
            
            }
            
          },
          
          error: function(){
             let internetFejl = `
             <div style="font-size:34px; text-align:center; margin-top:40px;">Tjek din internet forbindelse og prøv igen.
             </div>`;
             
            $("#nyheder").html(internetFejl);
            
          }
          
          
        });
        
      }else{
        let manglerVal = `<div style="font-size:34px; text-align:center; margin-top:40px;">Du skal indtaste noget i søgefeltet</div>`;
        $("#nyheder").html(manglerVal);
         
      }
      
    });
    
});