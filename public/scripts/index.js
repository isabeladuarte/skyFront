$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://sky-frontend.herokuapp.com/movies",
        success: function (json) {
        
            $.each(json[2].movies, function (index, movie) {
                const div = `
                <div class="slide-show">
                    <div class="movie">
                        <img src=${movie.images[0].url}>
                    </div>
                </div>`;
               
                $('.filmes').append(div);
            });
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

