const expandButton = document.getElementById("expandButton");
const printButton = document.getElementById("printButton");
const tabMenu = document.getElementById("tabMenu");
let numOfStudents = document.getElementById("numOfStudents");
const submitButton = document.getElementById("submit");
const calculateGradeButton = document.getElementById("calculateGrade");

function returnInt (element) {
    let value = parseInt(element.value)
    return value;
}



printButton.addEventListener("click", () => {
    window.print();
})



expandButton.addEventListener("click", () => {
    if(tabMenu.style.display === '' || tabMenu.style.display === 'none'){
      tabMenu.style.display = 'block';  
    }else{
        tabMenu.style.display = 'none';
    }
});


function calculateGrade (marks) {
   
    var grade_letter = ""
    if(marks === undefined){
        grade_letter = ""
    }else if(marks >= 90 && marks <= 100){
       grade_letter = "A+" 
    }else if(marks >= 80 && marks <= 90){
       grade_letter = "A" 
    }else if(marks >= 70 && marks <= 80){
       grade_letter = "B+" 
    }else if(marks >= 60 && marks <= 70){
       grade_letter_letter = "B" 
    }else if(marks >= 50 && marks <= 60){
       grade_letter = "C" 
    }else if(marks >= 40 && marks <= 50){
       grade_letter = "D" 
    }else if(marks >= 0 && marks <= 40){
        grade_letter = "E" 
    }

    return grade_letter
}



// Helpers
const createElement = el => document.createElement(el)
const createText = text => document.createTextNode(text)

// Create rows
const addStudentRows = students => {
  const wholePart = document.querySelector('body');
  const $body = document.querySelector('#workingSection')
  

  const $table = createElement('table')
  
  let $th1 = createElement('th')
  let $th2 = createElement('th')
  let $th3 = createElement('th')
 
  $th1.appendChild(createText("Names of students"))
  $th2.appendChild(createText("Marks of students"))
  $th3.appendChild(createText("Grade"))
    


  let $tr = createElement('tr')
  $tr.appendChild($th1)
  $tr.appendChild($th2)
  $tr.appendChild($th3)
    
    
  $table.appendChild($tr)

  for (let i = 0; i < students;i++ ) {
    let td1Input = createElement('input')
    td1Input.className = "input1"
    let td2Input = createElement('input')
    td1Input.className = "input2"
    let $td = createElement("td")
    let $td2 = createElement("td")
    let $td3 = createElement("td")
    calculateGradeButton.addEventListener("click", () => {
        $td3.appendChild(createText(calculateGrade(returnInt(td2Input))))
    })

    
    let $tr2 = createElement("tr")
    $td.appendChild(td1Input)
    $td2.appendChild(td2Input)
    $tr2.appendChild($td)
    $tr2.appendChild($td2)
    $tr2.appendChild($td3)
      

    $table.appendChild($tr2)
  }

  $body.appendChild($table)
  wholePart.appendChild($body)

}

// Event listener
  submitButton.addEventListener('click', e => addStudentRows(returnInt(numOfStudents)))









