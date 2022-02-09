var Promise = TrelloPowerUp.Promise;

var t = TrelloPowerUp.iframe();

window.addEventListener("unhandledrejection", function (event) {
    
  console.warn(event.reason);
  
});

t.render(function(t){

    return t.get('board', 'shared', 'fieldset')
  
    .then(function(datar){
        
      let data = datar.fields;

      data.forEach(function(field, ind, dat){

        console.log(document.getElementById("fielddiv"));
          
        var listed = document.getElementById("fielddiv").cloneNode(true);

        listed.setAttribute("href", "addfield.popup.html?id="+field.id);

        listed.setAttribute("id", "popfield"+id);

        listed.setAttribute("style", "display: block;");

        var dived = listed.childNodes[1];

        console.log(dived);

        var text = dived.childNodes[3];

        console.log(text);

        text.setAttribute("id", "popfieldtext"+id);

        var type = dived.childNodes[5];

        console.log(type);

        if (field.type === "list"){

            type.setAttribute("style", "background: url('../img/list.png') no-repeat; background-size: contain;");

        }

        document.getElementById("fieldsgroup").appendChild(listed);

        document.getElementById("popfieldtext"+id).innerHTML = field.name;

        console.log(document.getElementById("popfield"+id));

      });

    });

}.bind(null, t));