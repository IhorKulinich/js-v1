/* global TrelloPowerUp */
var Promise = TrelloPowerUp.Promise;

var t = TrelloPowerUp.iframe();

var fieldset = document.getElementById("addfieldset");

var adder = () => {

  // document.getElementById("addfield").style.display = 'none';

  // var newfielddata;
  
  // var label = document.createElement("label");

  // label.setAttribute("for", "typefield");

  // label.setAttribute("id", "typelabel");

  // fieldset.appendChild(label);

  // document.getElementById("typelabel").innerHTML = "choose type";

  // var typefield = document.createElement("input");

  // typefield.setAttribute("id", "typefield");

  // typefield.setAttribute("list", "typelist");

  // var settype = document.createElement("datalist");

  // settype.setAttribute("id", "typelist");

  // fieldset.appendChild(typefield);

  // fieldset.appendChild(settype);

  // var typeoption = document.createElement("option");

  // typeoption.setAttribute("value", "text");

  // typeoption.setAttribute("id", "optiontext");

  // document.getElementById("typelist").appendChild(typeoption);
  
  // typeoption = document.createElement("option");

  // typeoption.setAttribute("value", "list");

  // typeoption.setAttribute("id", "optionlist");

  // document.getElementById("typelist").appendChild(typeoption);

  // var settypefield = () => {

  //   switch(document.getElementById("typefield").value){
        
  //     case "text":

  //       console.log(document.getElementById("butdiv"));

  //       console.log(document.getElementById("submitter"));

  //       var date = Date.now();

  //       newfielddata = {"type": "text", "name": null, "id": date, "value": null};

  //       fieldset.childNodes.forEach((node) => node.id != "butdiv" ? node.remove() : null);

  //       document.getElementById("typelabel").remove();
        
  //       var label = document.createElement("label");

  //       label.setAttribute("for", "namefield");

  //       label.setAttribute("id", "namelabel1");
        
  //       console.log(label);

  //       console.log(document.getElementById("submiter"));

  //       document.getElementById("butdiv").insertBefore(label, document.getElementById("submiter"));
        
  //       document.getElementById("namelabel1").innerHTML = "choose name";

  //       var namefield = document.createElement("input");

  //       namefield.setAttribute("type", "text");

  //       namefield.setAttribute("id", "namefield");
        
  //       document.getElementById("butdiv").insertBefore(namefield, document.getElementById("submiter"));
        
  //       var addname = () => {

  //         newfielddata.name = document.getElementById("namefield").value;

  //         console.log(newfielddata);

  //       };

  //       document.getElementById("namefield").addEventListener("change", addname); 

  //       break;

  //   case "list":

  //     console.log(document.getElementById("butdiv"));

  //     console.log(document.getElementById("submitter"));

  //     var date = Date.now();

  //     newfielddata = {"type": "list", "name": null, "id": date, "value": null, "values": []};

  //     fieldset.childNodes.forEach((node) =>  node.id != "butdiv" ? node.remove() : null);

  //     document.getElementById("typelabel").remove();
      
  //     var label = document.createElement("label");

  //     label.setAttribute("for", "namefield2");

  //     label.setAttribute("id", "namelabel2");
      
  //     document.getElementById("butdiv").insertBefore(label, document.getElementById("submiter"));
      
  //     document.getElementById("namelabel2").innerHTML = "choose name";

  //     namefield = document.createElement("input");

  //     namefield.setAttribute("type", "text");

  //     namefield.setAttribute("id", "namefield2");
      
  //     document.getElementById("butdiv").insertBefore(namefield, document.getElementById("submiter"));
      
  //     var addname = () => {

  //       newfielddata.name = document.getElementById("namefield2").value;

  //       console.log(newfielddata);

  //     };

  //     document.getElementById("namefield2").addEventListener("change", addname);

  //     label = document.createElement("label");

  //     label.setAttribute("for", "valuefield");

  //     label.setAttribute("id", "valuelabel");
      
  //     document.getElementById("butdiv").insertBefore(label, document.getElementById("submiter"));
      
  //     document.getElementById("valuelabel").innerHTML = "choose value";

  //     var valuefield = document.createElement("input");

  //     valuefield.setAttribute("type", "text");

  //     valuefield.setAttribute("id", "valuefield");
      
  //     document.getElementById("butdiv").insertBefore(valuefield, document.getElementById("submiter"));
      
  //     var addvalue = () => {

  //       newfielddata.values.push(document.getElementById("valuefield").value);

  //       console.log(newfielddata);

  //       document.getElementById("valuefield").setAttribute("value", null);

  //     };

  //     document.getElementById("valuefield").addEventListener("change", addvalue);
      
  //     var addoption1 = document.createElement("button");

  //     addoption1.setAttribute("id", "addoption1");

  //     document.getElementById("butdiv").insertBefore(addoption1, document.getElementById("submiter"));//appendChild(addoption1); //fieldset.insertBefore(namefield, document.getElementById("submiter"));
      
  //     document.getElementById("addoption1").innerHTML = "add option";
        
  //     var nextoption = () => {

  //       if (document.getElementById("valuefield").value !== null ? document.getElementById("valuefield").value.length > 0 : false){

  //         document.getElementById("valuefield").value = "";

  //       }

  //     };

  //     document.getElementById("addoption1").addEventListener("click", nextoption);

  //     break;

  //   }

  // };

  // document.getElementById("typefield").addEventListener("change", settypefield);

  // var butdiv = document.createElement("div");

  // butdiv.setAttribute("style", "width: 100%; display: grid; grid-template-columns: calc( 50% - 2px ) calc( 50% - 2px ); grid-column-gap: 4px;");
  
  // butdiv.setAttribute("id", "butdiv");

  // fieldset.appendChild(butdiv);
  
  // var submiter = document.createElement("button");

  // submiter.setAttribute("style", "background: green;");

  // submiter.setAttribute("id", "submiter");

  // document.getElementById("butdiv").appendChild(submiter);

  // document.getElementById("submiter").innerHTML = "submit";
  
  // var submit = () => {

  //   event.preventDefault();

  //   return t.get('board', 'shared', 'fieldset')

  //   .then(function(data){

  //       console.log(data);

  //       console.log("fields in data:");

  //       console.log(data.hasOwnProperty("fields"));

  //       if (!data.hasOwnProperty("fields")){

  //           data = {"fields": []};

  //           console.log(data);

  //       }

  //       data.fields.push(newfielddata);

  //       console.log(data);

  //       return t.set('board', 'shared', 'fieldset', data)

  //       .then(function(){

  //           fieldset.childNodes.forEach((node) => node.remove());

  //           document.getElementById("submiter").remove();

  //           document.getElementById("addfield").style.display = 'block';

  //           var valuelabel = document.getElementById("valuelabel");

  //           if (valuelabel){

  //               valuelabel.remove();

  //               document.getElementById("namelabel2").remove();

  //           } else {

  //               document.getElementById("namelabel").remove();

  //           }
            
  //       })

  //   });

  // }

  // window.addfieldset.addEventListener("submit", submit);

  document.getElementById("addfield").style.display = 'none';

  document.getElementById("textsettingsb").style.display = "";

  document.getElementById("namesetb").addEventListener("change", function(t){

    document.getElementById("typelistsetb").disabled = false;

    document.getElementById("typelistsetb").addEventListener("change", function(t){

      switch(document.getElementById("typelistsetb").value){

        case "Text":

          document.getElementById("buttonsinpb").style.display = "grid";

          document.getElementById("settingsetb").disabled = false;

          break;

        case "List":

          document.getElementById("textsettingsb").style.display = "none";

          document.getElementById("optsbdiv").style.display = "";

          document.getElementById("addoptb").addEventListener("click", function(){

            

          });

          break;

      }

    }.bind(null,t));

  }.bind(null,t));

}

document.getElementById("addfield").addEventListener("click", adder);