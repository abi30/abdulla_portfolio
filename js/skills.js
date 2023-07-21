// creating an array for storing objects 
let totalSkills= [];



class Skill {
  skillsId;
  skillsName;
  skillsImage;
 
  constructor(skillsId,skillsName,skillsImage) {
   
        this.skillsId=skillsId;
        this.skillsName= skillsName;
        this.skillsImage= skillsImage;
      
        totalSkills.push(this); // pushing each property into array
  }

  divideDiv1() {
    return `
      
        <div class="col  cardTools">
        <div class="card toolCard">
        <div class="ownImgTools">  
        <img class="toolsImg" src="photos/toolsImg/${this.skillsImage}" alt="...">
        </div>
        <p class="card-text pt-2 textColor-2">${this.skillsName}</p>
        </div>
      </div>






    `
   }
}

// skillsId;
//   skillsName;
//   skillsImage;
//  
  

new Skill(1,"Html5","html-5.png");
new Skill(2,"Css3","css.png");
new Skill(3,"Scss","scss.png");
new Skill(4,"Bootstrap","boot.png");
new Skill(5,"Js","js.png");
new Skill(6,"Ts","ts.png");
new Skill(7,"Angular","angular.png");
new Skill(8,"Mysql","sql.png");
new Skill(9,"Java","java.png");
new Skill(10,"C","pro_c.png");
new Skill(11,"Php","php.png");
new Skill(12,"Symfony","symfony.png");
new Skill(13,"Git","git.png");



// looping through the objects and printing them on the browser
for (let value of totalSkills) {
//   document.getElementById("showH1Location").innerHTML = `<section id="locations"><h1 class="text-center p-3 textColor-1 mb-2"></h1></section>`;
  document.getElementById("tools").innerHTML += `${value.divideDiv1()}`;
}


// console.table(totalSkills);
// console.log("hello");

