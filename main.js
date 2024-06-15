let userName = +prompt("Raqamni kiriting");

switch(userName){
    
    case 1:
    newText = document.createElement("p");
    newText.textContent = "Dushamba";
    document.body.appendChild(newText)
    break;

    case 2:
    newText = document.createElement("p");
    newText.textContent = "Seshamba";
    document.body.appendChild(newText)
    break;
    
    case 3:
        newText = document.createElement("p");
        newText.textContent = "Chorshamba";
        document.body.appendChild(newText)
        break;
    
    case 4:
    newText = document.createElement("p");
    newText.textContent = "Juma";
    document.body.appendChild(newText)
    break;

    case 5:
        newText = document.createElement("p");
        newText.textContent = "Payshamba";
        document.body.appendChild(newText)
    break;
    case 6:
        newText = document.createElement("p");
        newText.textContent = "Shamba";
        document.body.appendChild(newText)
    break;
    case 7:
        newText = document.createElement("p");
        newText.textContent = "Yakshamba";
        document.body.appendChild(newText)
    break;
    default :
    newText = document.createElement("p");
        newText.textContent = "Siz yozgan raqam mavjud emas";
        document.body.appendChild(newText)
}


