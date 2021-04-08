// creating an array for storing objects 
let portFolioProject= [];





class PortFolio {
  projectId;
  projectName;
  projectImage;
  projectDetails;
  projectUsingTools;
  projectDiscription;
  codeUrl;
  projectUrl;
  constructor(projectId,projectName,projectImage,projectDetails,projectUsingTools,projectDiscription,codeUrl,projectUrl) {
   
        this.projectId=projectId;
        this.projectName= projectName;
        this.projectImage= projectImage;
        this.projectDetails=projectDetails;
        this.projectUsingTools=projectUsingTools;
        this.projectDiscription=projectDiscription;
        this.codeUrl=codeUrl;
        this.projectUrl= projectUrl;
        portFolioProject.push(this); // pushing each property into array
  }

  divideDiv1() {
    return `
        <div class="col cardZoom text-center" id="cardZoom${this.projectId}">


        <div class="card h-100 w-100 rounded-3 shadow bgColor-4 ">
        <h5 class="card-title textColor-1 fw-bold pt-1">${this.projectName}</h5>


        <div class="ownImgDiv" id="ownImgDiv${this.projectId}">  
        <img 
        id="${this.projectId}"  
         onclick="projectInfo(this.id)"
        class="portfolio d-md-block card-img-top" src="photos/img/${this.projectImage}"  alt="...">
        </div>


      
    `
  }
    //display only the inner part of "card-body"
  display() {

    return `
        <div class="card-body">
       
         <h6 class="card-title textColor-6 fw-bold">UsingTools : ${this.projectUsingTools}</h6>
        <p class="card-text textColor-6">${this.projectDiscription}</p>
      
         </div>
        `
  }
    // display only the last part of "col"
  divideDiv2() {

    return `
   
        <div class ="card-footer mb-3">
        
             <div class="btn-group">
                <a 
                type="button" 
                class="btn btn-sm bgColor-1 product-btn1"
                href="${this.codeUrl}"target="_blank">View Code</a>
                <a 
                type="button" 
                class="btn btn-sm btn-secondary product-btn2"
                href="${this.projectUrl}"target="_blank">View Details</a>
              </div>
       
      </div>

     </div>
    </div>
    
    `
  }
}


// projectId;
// projectName;
// projectImage;
// projectDetails;
// projectUsingTools;
// codeUrl;
// projectUrl;
  

new PortFolio(0,"My Portfolio","myPortfolio.png","Front-end Development","HTML,SCSS,Bootstrap and javaScript.","Yes,the very website yur are currently looking at.It is written in HTML, SCSS and Bootstrap with a touch of JS and Jquery.I itentionally didn't use frontend framework.","https://github.com/abi30/abdulla_portfolio.git","http://alrakib.codefactory.live/");

new PortFolio(1,"Angular Project","angularProject.png","Front-end Development"," HTML and CSS Bootstrap and Angular.","In this Project,I had to create a travel agency web application using Angular. In this project,There are also Travels shopping cart.customer can purchase their Travelling packages.","https://github.com/abi30/FE21-CR6-ABDULLA.git","http://alrakib.codefactory.live/angularProj/index.html");

new PortFolio(2,"My Travelling Blog","myTravel.png","Front-end Development","TypeScript,javaScript,Bootstrap and CSS","A traveling Blog Page to different places, visiting events and eating good food in restaurants. want to create a TypeScript-based and HTML must be created dynamically.","https://github.com/abi30/FE21-CR5-ABDULLA.git","https://abi30.github.io/FE21-CR5-ABDULLA/");

new PortFolio(3,"Movie Factory","movie.png","Front-end Development","javaScript,Bootstrap and SCSS","In this project, my job was to create a list of movies for a “Movie factory” website without any framework. Information about the movies should be stored in a JSON file.","https://github.com/abi30/FE21-CR4-ABDULLA.git","https://abi30.github.io/FE21-CR4-ABDULLA/");

new PortFolio(4,"photographer Portfolio","photo_port.png","Front-end Development","javaScript, html5 and CSS and Bootstrap","For this project, we were four-members In a team. We created a Photographer’s webpage. The main target for this endeavor is to show the portfolio and make an easy and effective contact page for the customer to contact the Photographer.","https://github.com/abi30/frontEndProject_with_Group.git","https://abi30.github.io/frontEndProject_with_Group/");

new PortFolio(5,"Mybook Social Network","mybook.png","Front-end & Back-end Development","Bootstrap,Css,Php and Mysql","It was my first ever big project.It was a web application.I developed it in the 2020 winter semester at my University. I played here with raw PHP MySQL and without using any Framework. exactly it was Playing with CRUD.","https://github.com/abi30/mybook.git","pages/mybook_main.pdf");
//
//new PortFolio(7,"movie cart","back6.jpg","Still never bust tapping sculptured fiend. Front though my only tinkled said. And there soon was soul, of rare angels.","javaScript, html5 and SCSS","https://github.com/abi30/abdulla-Portfolio.git");


// looping through the objects and printing them on the browser
for (let value of portFolioProject) {
//   document.getElementById("showH1Location").innerHTML = `<section id="locations"><h1 class="text-center p-3 textColor-1 mb-2"></h1></section>`;
  document.getElementById("showMsg").innerHTML += `${value.divideDiv1()} ${value.display()} ${value.divideDiv2()}`;
}


console.table(portFolioProject);
// console.log("hello");



var pre_click="";

function projectInfo(clicked) {

  console.log(clicked);
  var pre_projectDetails = document.getElementById(pre_click);
  if(pre_projectDetails !=undefined)
      pre_projectDetails.remove();

      //   console.log(clicked);
              var projectDetails=document.createElement("p")
              
              console.log(projectDetails);
              pre_click = "projectDetails"+[clicked];
              projectDetails.setAttribute("id","projectDetails"+[clicked]);

            

              var text_story=document.createTextNode(portFolioProject[clicked].projectDetails);
              // console.log(text_story);
              projectDetails.appendChild(text_story);
              projectDetails.ondblclick = clear_history;
              var  target_div=document.getElementById("ownImgDiv"+[clicked]);
              projectDetails.setAttribute("style" ,"width:100%;");
              target_div.appendChild(projectDetails);
                  
  
  
}


// ------------------------take al time one click..and other clear
function clear_history(){
  console.log("clear_history");
  var pre_projectDetails = document.getElementById(pre_click);
  if(pre_projectDetails !=undefined)
  pre_projectDetails.remove();

}
