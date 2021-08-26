document.getElementById("addNameToList").onclick  = function() {

    let node = document.createElement("Li");
    let text = document.getElementById("addNameToList").value; 
    let textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("addNameToList").appendChild(node);
}

const getRandomNum = function (range) {
        const randIndex = Math.floor(Math.random() * range.length);
        const random = range.splice(randIndex, 1)[0];
        return random;
      };