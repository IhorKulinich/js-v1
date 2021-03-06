var Promise = TrelloPowerUp.Promise;

var t = TrelloPowerUp.iframe();

window.addEventListener("unhandledrejection", function (event) {
    
  console.warn(event.reason);
  
});

function changeValue(id,data,t,res){
                  
    var nv = document.getElementById(id+"f").value;
    
    if (res === undefined || res.fields[0] === null){
        
        res = {"fields":[{"id": id, "value": ""}]};
        
        return t.set('card', 'shared', 'fieldcard', res);
    
    }
    
    data.filter(function(field){
        
        return ! res.fields.some(function(el){
            
            return el.id === field.id;
            
        });
        
    }).forEach(function(field){
        
        res.fields.push({"id": field.id, "value": ""});
        
    });
                    
    var founded = res.fields;
    
    if (founded.length !=0){
        
        founded = founded.filter(function(id,field){
            
            return field.id === id;
            
        }.bind(null,id));
        
    } else {
        
        founded = [];
        
    }
    
    var bool = res.fields.filter(function(id,f){ return f.id === id; }.bind(null,id)).length != 0;
    
    if ( founded.length != 0 ? bool : false){
        
        res.fields = res.fields.map(function(nv, field, index, data){
            
            if (field.id === id){
                
                return {"id": field.id, "value": nv};
                
            }
        
        }.bind(null,nv));
    
    } else {
                            
        res.fields.push({"id": id, "value": nv});
                          
    }
                    
    console.log(res);
                    
    return t.set('card', 'shared', 'fieldcard', res)
    
    .then(function(id){

    }.bind(null, id));
               
}
              
function changeValuer(id,data,t,res){
                  
    var nv = document.getElementById(id+"f").value;
                
    if (res === undefined){
        
        res = {"fields":[]};
                        
        return t.set('card', 'shared', 'fieldcard', {"fields":[]});
                    
    }
                        
    var founded = res.fields;
    
    founded = founded.length !=0 ? founded.filter(function(id,field){
        
        return field.id === id;
        
    }.bind(null,id)) : [];
                          
    if (founded.length != 0){
                            
        res.fields = res.fields.map(function(field, index, data){
                                
            if (field.id === id){
                                    
                return {"id": field.id, "value": nv};
                                
            }
                            
        });
                          
    } else {
                            
        res.fields.push({"id": id, "value": nv});
                          
    }
                    
    return t.set('card', 'shared', 'fieldcard', res);
              
}

t.render(function(){
    
  return t.get('board', 'shared', 'fieldset')
  
  .then(function(datar){
      
    let data = datar.fields;
    
    return t.get('card', 'shared', 'fieldcard')
    
    .then(function(datacard){
        
        var res = datacard;
        
        if (datacard === undefined){
            
            return t.set('card', 'shared', 'fieldcard', {"fields":[]});
            
        }
        
        datacard = datacard.fields;
        
        for (var i=0; i<data.length; i++){
        
          if (document.getElementById(data[i].id+"f") === undefined || document.getElementById(data[i].id+"f") === null){
          
            var newdiv = document.createElement("div");
              
            newdiv.setAttribute("id", data[i].id+"d");
              
            var label = document.createElement("label");
              
            document.getElementById('fieldsection').appendChild(newdiv);
              
            label.setAttribute("for", data[i].id);
              
            label.setAttribute("id", "fieldnamelabel"+(document.getElementById('fieldsection').childNodes.length));
              
            document.getElementById(data[i].id+"d").appendChild(label);
              
            document.getElementById("fieldnamelabel"+(document.getElementById('fieldsection').childNodes.length)).innerHTML = data[i].name;
              
            var newfield = document.createElement('input');
              
            newfield.setAttribute("id", data[i].id+"f");
          
            var id = data[i].id;
          
            switch(data[i].type){
              
                case "text":
                
                    newfield.setAttribute("type", "text");
                
                    var founded = datacard;
              
                    try{
                      
                        founded = founded.filter(function(id,field){
                            
                            return field.id === id;
                            
                        }.bind(null, id));
                    
                        if (founded.length != 0){
                        
                            if (founded[0].value != null){
                        
                                newfield.setAttribute("value", founded[0].value); 
                        
                            }
                        
                        }
                  
                    } catch(er){
                  
                        console.log(er);
                  
                    }
                  
                    document.getElementById(id+"d").appendChild(newfield);
                  
                    document.getElementById(id+"f").addEventListener("change", changeValue.bind(null,id,data,t,res)); 
              
                    break;
              
                case "list":
                
                    newfield.setAttribute("list", id+"l");
                  
                    var newlist = document.createElement('datalist');
                  
                    newlist.setAttribute("id", id+"l");
                  
                    document.getElementById(id+"d").appendChild(newfield);
                  
                    document.getElementById(id+"d").appendChild(newlist);
                  
                    for (var j=0; j<data[i].values; j++){
                      
                        var newoption = document.createElement("option");
                    
                        newoption.setAttribute("id", id+"op"+j);
                    
                        newoption.setAttribute("value", data[i].values[j]);
                    
                        if(datacard.length !=0 ){    
                        
                            founded = datacard.filter(function(id,field){
                                
                                return field.id === id;
                                
                            }.bind(null,id));
                        
                            if (founded.length != 0){
                            
                                if (founded[0].value != null && data[i].values[j] === founded[0].value){
                                
                                    newoption.setAttribute("selected");
                                
                                }
                            
                            }
                        
                        }
                    
                    document.getElementById(id+"l").appendChild(newoption);
                    
                  }
                  
                  document.getElementById(id+"f").addEventListener("change", changeValuer.bind(null,id,data,t,res)); 
              
                break;
                
                }
          
            } else {

                console.log(document.getElementById('fieldsection'));

                datacard = datacard.filter(function(id,field){
                            
                    return field.id === id;
                    
                }.bind(null, id))[0];

                document.getElementById(id+"f").value = datacard;

                console.log(document.getElementById(id+"f"));

                document.getElementById('fieldsection').childNodes.forEach(function(el){

                    console.log(el);

                    if (el.childNodes.length !=0 ){

                        el.childNodes.forEach(function(node){

                            console.log(node);

                            if (node.tagName === "input"){

                                var ev = node.getEventListeners();
        
                                console.log(ev);
        
                            }

                        });

                    }

                });

            }
        
        }
        
    });
    
  })
  
  .then(function(){
      
    t.sizeTo(document.body);
    
  });
  
});