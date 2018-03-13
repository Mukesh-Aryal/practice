//Add Elements
const menuButton = document.getElementById("pull-down-button");
const menu = document.getElementById("tabMenu");
const workingSection = document.getElementById("workingSection");
const submitButton = document.getElementById("submit");
const numOfStudents = document.getElementById("num_of_students");
var grade = "";




//Tab's Preferences
menu.style.display = "none";
menuButton.addEventListener("click", () => {
    console.log("Menu button clicked!");
    if(menu.style.display === 'none'){
        menu.style.display = 'inherit';
    }else{
        menu.style.display = 'none';
    }
    
});


//Function To Create a Table:
function createTable (num_of_rows) {
    //Make a table.
    document.write("<table id=\"createdTable\">");
    document.write("<tr>");
    document.write("<th> Name Of Student </th>");
    document.write("<th> Marks </th>");
    document.write("<th> Grade </th>");
    document.write("<th> Rank </th>");
    document.write("</tr>");
    
    
    
    //Loop through each table-row item.
    for(let i = 0; i < num_of_rows; i++){
    document.write("<tr>");
    document.write("<td> <input id=\"names\" > </td>");
    document.write("<td> <input id=\"marks\" > </td> ");
    document.write("<td id=\"grade\" >" + grade + " </td>");
    document.write("<td> 0 </td>");
    document.write("</tr>");
    }
    //Define Marks.
    const marks = document.getElementById("marks");
    //End Table.
    document.write("</table>");
    
    
    
    //Change the numOfStudents.value back to 0.
    numOfStudents.value = 0;
    
    //Button To calculate the result.
    document.write("<button id=\"calculate\" > CALCULATE </button>");
    const button = document.getElementById("calculate");
    button.style.borderRadius = "50px";
    button.style.color =  "red";
    button.style.fontFamily = "cursive";
    
    //Listen for clicks.
    button.addEventListener("click", calculateGrade(marks.value));
    
}


submitButton.addEventListener("click", createTable(numOfStudents.value));


//Function To Calculate Grade.
function calculateGrade (marks) {
    if (marks <= 90 && marks >= 100) {
       grade += "A+"; 
    }else if (marks <= 80 && marks >= 90) {
       grade += "A"; 
    }else if (marks <= 70 && marks >= 80) {
       grade += "B+"; 
    }else if (marks <= 60 && marks >= 70) {
       grade += "B"; 
    }else if (marks <= 50 && marks >= 60) {
       grade += "C"; 
    }else if (marks <= 40 && marks >= 50) {
       grade += "D"; 
    }else{
        grade += "E"
    }
}

