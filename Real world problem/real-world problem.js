
var person = function(name, age, gender ) { 
this.name = name;     
this.age = age;     
this.gender = gender;     
this.isyoung = false;   
this.legs = 2;    


  if(( name != "") &&  ( age != "") && ( gender != "")) {this.name = name; this.age = age; this.gender = gender; }  else {return "Invalid details"}
  if(( typeof name != null) &&  ( typeof age != null) && ( typeof gender != null)) {this.name = name; this.age = age; this.gender = gender; }  else {return "Invalid details"}
  if(( typeof name != undefined) &&  ( typeof age != undefined) && ( typeof gender != undefined)) {this.name = name; this.age = age; this.gender = gender; }  else {return "Invalid details"}
 
  
  if ( this.age <= 20 ) { isyoung = true;}
  if ( this.age > 20 && age <=49 ) { isyoung = true;}
  else{ isyoung = false;} 
 
  this.getInfo = function () {
        return this.name + ' ' + this.age + this.gender + ' ' + 'You are a youngee' + ' ' + this.isyoung + ' ' +'you have'+ ' ' +this.legs+ ' legs';
    
	};
  
};

alert(person.getInfo());