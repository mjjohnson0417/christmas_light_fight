/*
- figure out how to list files in a directory 
-refactor the code below to add images or video in a loop
-use jquery to capture click event on all pictures
-create a play function to play the video once a click is seen
*/
/*$("img").click(function() {
    console.log("you clicked am image");
});
*/



imageList = document.querySelectorAll("img");
/*
function below attaches an event listener to the correct element, need to flesh it out to run when the page is loaded. Do I need to create an object like python?
*/
function printStuff() {
    for (let i = 0; i < imageList.length; i++) {
        //console.log(imageList[i]);
        $(imageList[i]).click(function() {
            console.log("you clicked image "+ imageList[i].src);
        });
    }
}

image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", "./images/christmas_show_movies/charlie_brown_christmas.jpeg");
image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", "./images/christmas_show_movies/christmas_story.jpeg");
image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", "./images/christmas_show_movies/christmas_vacation.jpeg");
image4 = document.querySelectorAll("img")[3];
image4.setAttribute("src", "./images/christmas_show_movies/elf.jpeg");
image5 = document.querySelectorAll("img")[4];
image5.setAttribute("src", "./images/christmas_show_movies/fred_claus.jpeg");
image6 = document.querySelectorAll("img")[5];
image6.setAttribute("src", "./images/christmas_show_movies/grinch.jpeg");
