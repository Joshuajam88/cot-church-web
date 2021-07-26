function greetUser(){
    var time = new Date().getHours();
    if (time < 11){
        return 'Good morning'
    }else if(time < 16){
        return 'Good day'
    }else{
        return 'Good evening'
    }
}
document.getElementById('time').innerHTML
alert(greetUser());