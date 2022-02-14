window.onload = function(){
    purple = 100;
    coral = 0;
    incorrect = 0;
    complete = false;
    counter = 0;
    var all_td = document.getElementsByTagName("td");
    for (var i=0; i < 100; i++){
        all_td[i].style.backgroundColor = 'rgb(163, 140, 255)';
        all_td[i].onclick = inputClickHandler;
    }
    var hide_td = document.getElementsByClassName("noShow");
    for (var i=0; i < hide_td.length; i++){
        hide_td[i].style.backgroundColor = 'rgb(140, 255, 163)';
    }
}


function inputClickHandler(e){
    e = e || window.event;
    var tdElm = e.target || e.srcElement;
    
    if(!complete){
        if (tdElm.style.backgroundColor == 'rgb(255, 163, 140)'){
            tdElm.style.backgroundColor = 'rgb(163, 140, 255)';
            if (tdElm.classList.contains("answer")){
                incorrect--;
            }else{
                purple++;
                coral--;
            }
        }else if(tdElm.style.backgroundColor == 'rgb(163, 140, 255)'){
            tdElm.style.backgroundColor = 'rgb(255, 163, 140)';
            if (tdElm.classList.contains("answer")){
                incorrect++;
            }else{
                purple--;
                coral++;
            }
        }
    }
    if(incorrect == 0 && purple == 15 && coral == 85){
        complete = true;
        // var all_answer = document.getElementsByClassName('answer')
        // for (var i=0; i < all_answer.length; i++){
        //     all_answer[i].style.backgroundColor = 'rgb(255, 220, 140)';
        //     all_answer[i].style.color = 'black';
        // }
        if(tdElm.classList.contains("answer") && counter != 15){
            if(tdElm.style.backgroundColor == 'rgb(163, 140, 255)'){
                tdElm.style.backgroundColor = 'rgb(255, 220, 140)';
                tdElm.style.color = 'black';
                var tdElm2 = document.getElementsByClassName(tdElm.classList[1]);
                tdElm2[1].style.backgroundColor = 'rgb(255, 220, 140)';
                tdElm2[1].style.color = 'black';
                counter++;
            }
        }
            var table2 = document.getElementsByClassName("table2");
            table2[0].style.display = 'table';
            var listContainer = document.getElementsByClassName("listContainer");
            listContainer[0].style.display = 'none';
        if(counter == 15){
            var final_td = document.getElementsByTagName("td");
            for (var i=100; i < 130; i++){
                final_td[i].style.background = "linear-gradient(to bottom, #821D30, #FB6090";
                final_td[i].style.color = '#F9F1F0';
            }
            var hide_td = document.getElementsByClassName("noShow");
            for (var i=0; i < hide_td.length; i++){
                hide_td[i].style.backgroundColor = 'rgb(140, 255, 163)';
                hide_td[i].style.background = 'none';
            }
        }
    }
}