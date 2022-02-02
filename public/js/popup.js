var Promise = TrelloPowerUp.Promise;

var t = TrelloPowerUp.iframe();

window.addEventListener("unhandledrejection", function (event) {
    
  console.warn(event.reason);
  
});

function addoptbut(){
    
    var addoptb = document.createElement("button");
    
    addoptb.setAttribute("id", "addoptbut");
    
    document.getElementById("fieldsetting").appendChild(addoptb);
    
    document.getElementById("addoptbut").innerHTML = "add option";
    
    document.getElementById("addoptbut").addEventListener("click", function(){
        
        document.getElementById("addoptbut").style.display = "none";
        
        addopttodiv();
        
    });
    
}

function addopttodiv(){
    
    var newlab = document.createElement("label");
                
    var num = document.getElementById("fieldsetting").childNodes.filter(function(node){
                   
        return node.tag === "option";
                    
    }).length + 1;
                
    newlab.setAttribute("id", "optlabel" + num);
                
    newlab.setAttribute("for", "optval" + num);
    
    if (document.getElementById("addoptbut") === undefined || document.getElementById("addoptbut") === null){
                
        document.getElementById("fieldsetting").appendChild(newlab);
    
    } else {
        
        document.getElementById("fieldsetting").insertBefore(newlab, document.getElementById("addoptbut"));
        
    }
                
    document.getElementById("optlabel" + num).innerHTML = "add option value";
                
    var newopt = document.createElement("input");
                
    newopt.setAttribute("type", "text");
                
    newopt.setAttribute("id", "optval" + num);
    
    if (document.getElementById("addoptbut") === undefined || document.getElementById("addoptbut") === null){
                
        document.getElementById("fieldsetting").appendChild(newopt);
    
    } else {
        
        document.getElementById("fieldsetting").insertBefore(newopt, document.getElementById("addoptbut"));
        
    }
                
    document.getElementById("optval" + num).addEventListener("change", function(){
        
        if (document.getElementById("addoptbut") === undefined || document.getElementById("addoptbut") === null){
                    
            addoptbut();
        
        } else {
            
            document.getElementById("addoptbut").style.display = "block";
            
        } 
                    
        if (num === 1){
                    
            window.settingtset.style.background = "green";
                    
            window.settingset.addEventListener("submit", newparams.bind(null,data,i,id));
                    
        }
                    
    });
    
}

function setfieldpar(data,i,id,t){
    
    function fsback(){
        
        document.getElementById("fieldsetting").style.display = "none";
    
        document.getElementById("fieldsgroup").style.display = "block";
        
        document.getElementById("fsback").removeEventListener("click", fsback);
        
        document.getElementById("fback").addEventListener("click",fback);
        
    }
    
    document.getElementById("fsback").addEventListener("click",fsback);
    
    document.getElementById("fieldsgroup").style.display = "none";
    
    document.getElementById("fieldsetting").style.display = "block";
    
    switch(data[i].type){
                
        case "text":
                    
            document.getElementById("textsettings").style.display="block";
                    
            document.getElementById("nameset").value = data.name;
    
            document.getElementById("typeset").value = "text";
            
            document.getElementById("nameset").addEventListener('input', function(){
                
                window.settingtset.style.background = "green";
                
                window.settingset.addEventListener("submit", newparams.bind(null,data,i,id,t));
                
            });
            
            document.getElementById("typeset").addEventListener('change', function(){
                
                addopttodiv();
                
            });
                
            break;
                
        case "list":
                    
            document.getElementById("listsettings").style.display="block";
                
        break;
                
    }
    
}

function newparams(data,i,id,t){
    
    var ind;
    
    var changing = data.filter(function(id,ind,field,index){
        
        if (field.id === id) { ind = index; } 
        
    }.bind(null,id,ind))[0];
    
    if (changing.name != document.getElementById("nameset").value){
        
        data[ind].name = document.getElementById("nameset").value;
        
    }
    
    if (changing.type != document.getElementById("typeset").value){
        
        data[ind].type = document.getElementById("typeset").value;
        
        switch(data[ind].type){
            
            case "text":
                
                delete data[ind].values;
                
                break;
                
            case "list":
                
                data[ind].values = [];
                
                var num = document.getElementById("fieldsetting").childNodes.filter(function(node){
                   
                    return node.tag === "option";
                    
                });
                
                for (var j=0; j<num-1; j++){
                
                    data[ind].values.push(document.getElementById("optval" + j).value); 
                
                }
                
                break;
            
        }
        
    }
    
    var datar = {"fields": data};
    
    return t.set('board', 'shared', 'fieldset', datar)
    
    .then(function(){
            
        document.getElementById("fieldsetting").style.display = "none";
        
        document.getElementById("fieldsgroup").style.display = "block";
            
    });
    
}

//settingsgroup //fieldsgroup //fieldsetting //textsettings, settingtset
    
t.render(function(t){
        
    document.getElementById("fieldssettings").addEventListener("click", function(){
    
        document.getElementById("fieldsgroup").style.display = "block";
        
        console.log("fields menu: "+document.getElementById("fieldsgroup").style.display);
        
        document.getElementById("settingsgroup").style.display = "none";
        
        function fback(){
            
            document.getElementById("settingsgroup").style.display = "block";
        
            document.getElementById("fieldsgroup").style.display = "none";
            
            document.getElementById("fback").removeEventListener("click", fback);
            
        }
        
        document.getElementById("fback").addEventListener("click",fback);
            
        return t.get('board', 'shared', 'fieldset')
        
        .then(function(datar){
            
            console.log(datar);
            
            var data = datar.fields;

            console.log(data);
            
            for (var i=0; i<data.length; i++){
                
                var field = document.createElement("button");
                
                field.setAttribute("id", "fieldset"+data.id);
                
                document.getElementById("fieldsgroup").appendChild(field);
                
                document.getElementById("fieldset"+data.id).innerHTML = "<p style='display: inline;'>" + data[i].name + "</p><p style='text-align: right; display: inline;'>></p>";
                
                document.getElementById("fieldset"+data.id).addEventListener("click", setfieldpar.bind(null,data,i,data[i].id,t));
                    
            }
            
        })
        
        .then(function(){
            
            t.sizeTo(document.body);
            
        });
      
    });

}.bind(null,t));