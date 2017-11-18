//Variables
var num_of_students;
var name_of_students = [];
var marks = [];
var grade = [];

//Taking input (Number of Students)
num_of_students = prompt("Enter the number of students:");
for(var i = 0; i < num_of_students; i++){
    name_of_students[i] = prompt("Enter the name of Student " + (parseInt(i)+1));
    
}

//Taking input (Marks each student scored)
for(var i = 0; i < num_of_students; i++){
    marks.push(Number(prompt("Enter " + name_of_students[i] + "'s marks")));
    if(marks[i] >= 90 && marks[i] <= 100){
    grade.push("A+");
   }else if(marks[i] >= 80 && marks[i] <= 90){
    grade.push("A");
    }else if(marks[i] >= 70 && marks[i] <= 80){
    grade.push("B+");
    }else if(marks[i] >= 60 && marks[i] <= 70){
    grade.push("B");
    }else if(marks[i] >= 50 && marks[i] <= 60){
    grade.push("C");
    }else if(marks[i] >= 40 && marks[i] <= 50){
    grade.push("D");
    }else{
        grade.push("E");
    }
    
}





//Printing to the document; The results!
document.write("<table>");
document.write("<tr>")
document.write("<th> Name Of Student </th>");
document.write("<th> Marks Scored </th>");
document.write("<th> Grade </th>");
document.write("</tr>");
for(var i = 0; i < num_of_students; i++){
    document.write("<td><strong>" + parseInt(i+ 1) + ". " + name_of_students[i] + "</td>");
    document.write("<td><strong>" + marks[i] + "</td>");
    document.write("<td><strong>" + grade[i] + "</td>");
    document.write("</tr>");
    document.write("");
}
document.write("</tr>");
document.write("</table>");



