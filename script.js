//code to text
var typed= new Typed(".text",{
    strings:["Welcome to my Portfolio "],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true
})


var typed= new Typed(".txt",{
    strings:["Lets Work Together!"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true
})

var tabLinks = document.getElementsByClassName("tab_links");
var tabContents = document.getElementsByClassName("tab_contents");
function opentab(tabname){
   for (tabLink of tabLinks ){
        tabLink.ClassList.remove("active-link");
    }
    for (tabContent of tabContents ){
        tabContent.ClassList.remove("active-tabs");
    }

}
//download resume

// Get the download button elements
var downloadButtons = document.getElementsByClassName("btn");

// Add click event listeners to the buttons
for (var i = 0; i < downloadButtons.length; i++) {
  downloadButtons[i].addEventListener("click", downloadPDF);
}

function downloadPDF() {
  // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
  var pdfUrl = "Resume.pdf";

  // Create a temporary anchor element
  var downloadLink = document.createElement("a");
  downloadLink.href = pdfUrl;
  downloadLink.setAttribute("download", "Resume.pdf");

  // Append the anchor element to the document body
  document.body.appendChild(downloadLink);

  // Trigger the download by clicking the anchor element
  downloadLink.click();

  // Remove the temporary anchor element from the document body
  document.body.removeChild(downloadLink);
}


//code to display the content of subheading
function opentab(tabName) {
  var i, tabcontent, tablinks;

  // Get all elements with class="tab_contents" and hide them
  tabcontent = document.getElementsByClassName("tab_contents");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tab_links" and remove the class "active-link"
  tablinks = document.getElementsByClassName("tab_links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  // Show the current tab, and add an "active-link" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active-link");
}


//project section 
//view project buttons that redirect the current page to githum 
// Get all project buttons
const projectButtons = document.querySelectorAll('.project-btn');

// Add event listener to each button
projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the GitHub URL from the data-github-url attribute
    const githubUrl = button.dataset.githubUrl;
    
    // Redirect to the GitHub page
    window.location.href = githubUrl;
  });
});

//view all project buttons that redirect the current page to githum 
// Get all project buttons
const projectButton = document.querySelectorAll('.view-projects-btn');
// Add event listener to each button
projectButton.forEach(button => {
  button.addEventListener('click', () => {
    // Get the GitHub URL from the data-github-url attribute
    const githubUrl = button.dataset.githubUrl;
    
    // Redirect to the GitHub page
    window.location.href = githubUrl;
  });
});

