var jsonData=[{
        "question" : "What is the height of Mt.Everest?",
        "answer" : "8,848 meters",
        "opt" : [
            "8,842 meters","8,845 meters","8,848 meters","8,898 meters"
        ]
    },
    {
        "question" : "Who is the first prime minister of Nepal?",
        "answer" : "Jung Bahadur Rana",
        "opt" : [
            "Bhimsen Thapa","Puspakamal Dahal","KP Sharma Oli","Jung Bhadaur Rana"
        ]
    },
    {
        "question" : "Who is the first president of Nepal?",
        "answer" : "Jung Bahadur Rana",
        "opt" : [
            "Bhimsen Thapa","Vidya Devi Bhandari","Dr. Ram Baran Yadav","Ram Chandra Poudel"
        ]
    },
    {
        "question" : "Who is the first king of Nepal?",
        "answer" : "Prithivi Narayan Shah",
        "opt" : [
            "Chandra Shumser","Prithivi Narayan Shah","Mahendra Shah","Birendra Shah"
        ]
    },
    {
        "question" : "Who is the first women minister of Nepal?",
        "answer" : "Dwarika Devi Thakurani",
        "opt" : [
            "Dwarika Devi Thakurani","Vidya Devi Bhandari","Ram Kumari Jhakri","Sujata Koirala"
        ]
    }];

    var i=0;
    var correctCount=0;
    generates(0);
    function generates(index){
        document.getElementById("question").innerHTML=jsonData[index].q;
        var optionContainer=document.getElementById("options-conatiner");
        optionsContaineronsContainer.innerHTML='';
        for (var optIndex=1;optIndex<=3;optIndex++){
            var option=document.createElement('input');
            option.type='radio';
            option.name='option';
            option.id='opt'+optIndex;
            option.value=jsonData[index]['opt'+optIndex];
            option.innerHTML=jsonData[index]['opt'+optIndex];
            var label=document.createElement('label');
            label.innerHTML=jsonData[index]['opt'+optIndex];
            label.appendChild(option);
            optionContainer.appendChild(label);
        }

    }
    function checkAnswer(){
        var selectedOption;
        var options=document.getElementsByName('options');
        for(var opt of options){
            if(opt.checked){
                selectedOption=opt.value;
                break;
            }
        }
        if (selectedOption===jsonData[i].answer){
            correctCount++;
        }
        i++;
        if(i<jsonData.length){
            generates(i);
        } else {
            document.write("Your Score:"+correctCount+"");
        }
    }
