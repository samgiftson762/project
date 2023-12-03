
function result(){
    var input =  document.getElementById('inputField').value;
    if(input.length <= 10){
        document.getElementById('content').textContent = input;
        document.getElementById('hoverBox').classList.remove('isPrasent');
        document.getElementById('hoverBox').innerText = '';
    }
    else{
        var firstThree = input.slice(0, 3);
        var LastThree = input.slice(-3, input.length);
        var res = firstThree.concat("..."+LastThree);
        document.getElementById('content').innerText = res;
        document.getElementById('hoverBox').classList.add('isPrasent');
        document.getElementById('hoverBox').innerText = input;
    }
}