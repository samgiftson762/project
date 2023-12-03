//reverse
function reverse(){
    var inputs = document.getElementById('inputField').value;
    var inLen= inputs.length - 1;
    var rev ='';
    for(var i =0; i <= inLen; i++){
        var reverse = inputs[inLen-i];
        rev = rev + reverse;
    }
    document.getElementById('content').textContent = rev;
}
//split
function split(){
    document.getElementById('content').innerHTML = '';
    var inputs = document.getElementById('inputField').value;
    for(var i =0; i <= inputs.length-1; i++){
        var split = inputs[i];
        console.log(split);
        var newElem = document.createElement('div');
        var newContent = document.createTextNode(split);
        newElem.append(newContent);
        document.getElementById('content').append(newElem);
    }  
}
//replace
var replace = document.getElementById('replace');

replace.addEventListener('mouseover', function(){
            document.getElementById('twoInputsforReplace').style.display ="block";
});
replace.addEventListener('click', function(){
         var inputs = document.getElementById('inputField').value;
        var inVal = document.getElementById('in').value;
        var outVal = document.getElementById('out').value;
        var res = inputs.replaceAll(inVal, outVal);
        document.getElementById('content').textContent = res;
});

//merge
var merge = document.getElementById('merge');
merge.addEventListener('mouseover', function(){
    document.getElementById('inputforMerge').style.display = "block"
});
merge.addEventListener('click', function(){
    var inputs = document.getElementById('inputField').value;
    var inputs2 = document.getElementById('mergingIn').value;
    var merged =inputs.concat(inputs2);

    document.getElementById('content').textContent = merged;
});