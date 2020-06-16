function handleNavClick(obj) {
    let elements = document.getElementsByClassName("active");
    obj.classList.add("active");
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element.id != obj.id) {
            element.classList.remove("active");
            document.getElementById(element.id.slice(4)).classList.add("hidden");
        }
    }
    document.getElementById(obj.id.slice(4)).classList.remove("hidden");
}

function loadMessageList() {
    var workshops_content = document.getElementById("home");
    var workshop_card = document.createElement("div");
    workshop_card.setAttribute("id", "chatbox");

    var title_elem = document.createElement("h4");
    title_elem.classList.add("column-title");
    var title = document.createTextNode("Chat History");
    title_elem.appendChild(title);
    workshop_card.appendChild(title_elem);
    workshops_content.appendChild(workshop_card);

    for(var i = 0; i <workshops.length; i++) {
        loadAMessage(i);
    }
}

function clearMessageList() {
    workshops = [];
    var workshop_card = document.getElementById("chatbox");
    if(workshop_card != null)
        workshop_card.parentNode.removeChild(workshop_card);

    loadMessageList();
}

function loadAMessage(i) {


    let workshops_content = document.getElementById("home");
    var workshop_card = document.getElementById("chatbox");

    var date_div = document.createElement("span");
    date_div.classList.add("column-deets");
    var date = document.createTextNode("Date: " + workshops[i].date);
    date_div.appendChild(date);
    workshop_card.appendChild(date_div);

    var speaker_div = document.createElement("span");
    speaker_div.classList.add("column-deets");
    var speaker = document.createTextNode("Speaker: " + workshops[i].speaker);
    speaker_div.appendChild(speaker);
    workshop_card.appendChild(speaker_div);

    var description_div = document.createElement("div");
    description_div.classList.add("column-description");
    var description = document.createTextNode(workshops[i].description);
    description_div.appendChild(description);
    workshop_card.appendChild(description_div);

    workshops_content.appendChild(workshop_card);

}


function addMessage() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    workshops.push({
        "date": today,
        "speaker":"you",
        "description": document.getElementById("fname").value
    })

    loadAMessage(workshops.length-1);

}
