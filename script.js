function getData(){
    $.getJSON("https://ghibliapi.herokuapp.com/films", showdata = function(data){

        data.forEach(element => {
            console.log(element.release_date);  
            $(".main-box").append("<div class='movie'><p class='title'><a href='https://en.wikipedia.org/wiki/" + element.title + "'>" + element.title + "<a/></p> <br> \
            <p class='description'>" + element.description + "</p <br> \
            <p class='releaseData'>Release data: " + element.release_date + "</p></div>");
            //$(".main-box").append("<p class='description'>" + element.description + "</p <br>");
            //$(".main-box").append("<p class='releaseData'>Release data: " + element.release_date + "</p></div>");
        });
    });
}