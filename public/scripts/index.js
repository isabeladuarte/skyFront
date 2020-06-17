$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://sky-frontend.herokuapp.com/movies",
        success: function (json) {
            console.log(json)
               $.each(json[2].movies, function (index, movie) {
                   const div = `
                        <div class="movies">
                            <img src=${movie.images[0].url}>
                        </div>
                   </div>`;
                //console.log(movie)
                   $('#filmes').append(div);
            });
            
            /*let filme1 = json[2].movies[0]
            let filme2 = json[2].movies[1]
            let filme3 = json[2].movies[2]

            let filmes = `<div class="slide-show">
               <div class="movie">
                    <img src=${filme1.images[0].url}>
               </div>
               <div class="movie">
                    <img src=${filme2.images[0].url}>
               </div>
               <div class="movie">
                    <img src=${filme3.images[0].url}>
               </div>
            </div>`
            
            $('.movies').append(filmes)*/
        },
           error: function (json) {
            showmessage("error", "Erro", "Estamos trabalhando nesse problema")
           }
        });
});

function showmessage(icon, title, text){
    Swal.fire({
        icon: icon,
        title: title,
        text: text
      })
}

$('.main-gallery').flickity({
    // options
    cellAlign: 'left',
    contain: true
});

