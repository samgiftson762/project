function createBall(){
    
    var Num = document.getElementById('inputNum').value;
   if(Num <=25){
      for(var i = 1; i<=Num; i++){
            debugger;
               var newBall = document.createElement('div');
               newBall.classList.add('ball');
               var innerNum = document.createTextNode(i);
               newBall.append(innerNum);
               document.getElementById('box').appendChild(newBall);
         }

   }
   else{
      alert("Not have Space Here");
   }
}