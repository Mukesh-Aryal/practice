const userFirstName = document.getElementById("firstName");
const userSecondName = document.getElementById("secondName");
const userDateOfBirth = document.getElementById("dateOfBirth");
const userAim = document.getElementById("aim");
const submitButton = document.getElementById("submit");
const aboutUser = document.getElementById("aboutUser");
var theUserDetails = [userFirstName, userSecondName, userDateOfBirth, userAim, aboutUser];
var success = false;


function checkUserDetails (aboutuser){
   for(let i = 0; i < aboutuser.length; i++){
       if(aboutuser[i].value === ""){
            console.log("Failed at step " + (i+1));
           alert("Please fill all the boxes!");
           break;
           
       }else{
           console.log("Passed step" + (i+1));
           success = true;
       }
   }
}

function createTheStory (first, second, dob, aim, about) {
    document.write("<h1 id=\"header\"> Welcome " + userFirstName.value + "! We had been waiting for you! So Take A look, Here is your Story! </h1>");
    header.style.color = "white";
    header.style.fontFamily = "cursive";
    header.style.backgroundColor = "aqua";
    document.write("<img src=\"human.jpg\" height=\"400px\" width=\"1200px\" > ");
    document.write("<p id=\"intro\"> The world is full of humans. We made this world a better place and now it's so overcrowded that only the best can survive here. On of those competing with the world is you: " + userFirstName.value + ", Know yourself well. You are the one who has passed your **** months surviving here and will do the same. We heard that you had a great aim. You wrote \'" + userAim.value + "\' , Well, That's fantastic!!!! We wish you Best Of Luck to you! May you be one of the greatest and kindest person on this globe.... But Mostly, we liked your intro......... That's simply divine....... Let's recall it: </p>");
    intro.style.color = "blue";
    intro.style.backgroundColor = "yellow";
    intro.style.fontFamily = "cursive";
    document.write("<p id=\"about\" >  " + aboutUser.value + "...................................... </p>  <br />");
    about.style.color = "red";
    about.style.backgroundColor = "beige";
    about.style.fontStyle = "italic";
    about.style.fontFamily = "cursive";
    about.style.borderRadius = "50 px";
    
    document.write("<p id=\"bye\" > Well, We can't believe that's you!!!!! That's what we had........ Thanks for using the application............. <br /> Well, Click on the \"PRINT\" button to print your story! </p>");
    bye.style.color = "white";
    bye.style.backgroundColor = "aqua";
    document.write("<button id=\"print\" > PRINT </button>");
    const print = document.getElementById("print");
    print.style.borderRadius = "50px";
    print.style.backgroundColor = "aqua";
    print.style.color = "white";
    print.addEventListener("click",() => {
        window.print();
    });
    
    
}

submitButton.addEventListener("click", () => {
    console.log("Clicked!");
    checkUserDetails(theUserDetails);
    if(success === true){
      createTheStory(userFirstName, userSecondName, userDateOfBirth, userAim, aboutUser); 
    }
});


