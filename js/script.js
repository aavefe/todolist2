var tareas = [];
var contador = 0;
var tarearray;
var idactual;
var valor;
var siguientediv;
var divtodo;
var contenedor;
var contenedortarea;
var defined = 0;

function isEmpty(str) {
        str = str.trim();
        if (str.length == 0) return true;
        return false;
}

onload=function recuperarTareas(objetorecuperado){
        var recuperardatos = localStorage.getItem('tarea');
        var objetorecuperado = JSON.parse(recuperardatos);
        
        for(i = 0; i<objetorecuperado.length; i++){
                defined = 1;
                valor = objetorecuperado[i].nombre;
                creaTareas();
                var botonmarcar = document.getElementById("botonmarcar"+objetorecuperado[i].nombre);
                if(objetorecuperado[i].estado === "Hecha"){
                        document.getElementById("divtexto"+objetorecuperado[i].nombre).style.textDecoration = "line-through";
                        botonmarcar.innerHTML = "Desmarcar";
                        botonmarcar.style.backgroundColor="blue";
                        var textomarcado = document.getElementById("divtexto"+objetorecuperado[i].nombre).innerHTML;
                        var estadotarea = tareas.find(element => element.nombre === textomarcado);
                        estadotarea.estado = "Hecha";
                        botonmarcar.onmouseenter=function hoverBotonmarcar(){
                                botonmarcar.style.backgroundColor="#5872A8";
                        }
                        botonmarcar.onmouseout=function nohoverBotonmarcar(){
                                botonmarcar.style.backgroundColor="blue";
                        }
                        botonmarcar.animate([ 
                                {color: "transparent",
                                backgroundColor: "transparent"},
                                {color: "white",
                                backgroundColor: "blue"}
                                ],1000);
                }
        }                
}     
onunload=function guardarTareas(){
        localStorage.setItem('tarea', JSON.stringify(tareas));
}

function escribirTarea(){
        valor = document.getElementById('nuevatarea').value;
        document.getElementById('nuevatarea').value = '';
        

        if(isEmpty(this.valor)){
                document.getElementById("mensajerror").style.display = "block";
                
        }else{
                document.getElementById("mensajerror").style.display = "none";
                creaTareas();
        }  
}

function creaTareas(){

        var icono = document.createElement("i");
        var div = document.createElement("div");     
        var marcar = document.createElement("button");
        var eliminar = document.createElement("button");
        var editar = document.createElement("button");
        var input = document.createElement("input");
        var hiddenvalue = document.createElement("input");
        var hiddenvalue2 = document.createElement("input");
        
        div.appendChild(document.createTextNode(valor));
        marcar.appendChild(document.createTextNode("Marcar"));
        eliminar.appendChild(document.createTextNode("Eliminar"));
        editar.appendChild(document.createTextNode("Editar"));

        

        var select = document.getElementById("valores");


        if(defined === 0){
                if(select.value == "enanalisis"){
                        divtodo = document.getElementById("contenedor").appendChild(document.createElement("div"));
                        divtodo.setAttribute("id","divtareas"+valor);
                        divtodo.setAttribute("class", "divtareas");
                        var divicono = divtodo.appendChild(icono);
                        divicono.setAttribute("id","divicono"+valor);
                        divicono.setAttribute("class", "fas fa-angle-double-right");
                        var divtexto = divtodo.appendChild(div);
                        divtexto.setAttribute("id","divtexto"+valor);
                        divtexto.setAttribute("class", "divtexto");
                        var editarinput = divtodo.appendChild(input);
                        editarinput.setAttribute("id", "editarinput"+valor);
                        editarinput.setAttribute("class", "editarinput");
                        editarinput.style.display = "none";
                        var divbotones = divtodo.appendChild(document.createElement("div"));
                        divbotones.setAttribute("id","divbotones"+valor);
                        divbotones.setAttribute("class", "divbotones");
                        var botonmarcar = divbotones.appendChild(marcar);
                        botonmarcar.setAttribute("id","botonmarcar"+valor);
                        botonmarcar.setAttribute("class", "botonmarcar");
                        var botoneliminar = divbotones.appendChild(eliminar);
                        botoneliminar.setAttribute("id","botoneliminar"+valor);
                        botoneliminar.setAttribute("class", "botoneliminar");
                        var botoneditar = divbotones.appendChild(editar);
                        botoneditar.setAttribute("id","botoneditar"+valor);
                        botoneditar.setAttribute("class", "botoneditar");
                        var hiddenvaluediv = divtodo.appendChild(hiddenvalue);
                        hiddenvalue.setAttribute("type", "hidden");
                        hiddenvalue.setAttribute("id", "hidden"+valor);
                        hiddenvaluediv.value = contador;
                        var hiddenvaluediv2 = divtodo.appendChild(hiddenvalue2);
                        hiddenvalue2.setAttribute("type", "hidden");
                        hiddenvaluediv2.value = "1";
                        document.getElementById("numtareas").innerHTML = tareas.length+1;
                        contador++;

                } else if(select.value == "pendiente"){
                        divtodo = document.getElementById("contenedor2").appendChild(document.createElement("div"));
                        divtodo.setAttribute("id","divtareas"+valor);
                        divtodo.setAttribute("class", "divtareas");
                        var divicono = divtodo.appendChild(icono);
                        divicono.setAttribute("id","divicono"+valor);
                        divicono.setAttribute("class", "fas fa-angle-double-right");
                        var divtexto = divtodo.appendChild(div);
                        divtexto.setAttribute("id","divtexto"+valor);
                        divtexto.setAttribute("class", "divtexto");
                        var editarinput = divtodo.appendChild(input);
                        editarinput.setAttribute("id", "editarinput"+valor);
                        editarinput.setAttribute("class", "editarinput");
                        editarinput.style.display = "none";
                        var divbotones = divtodo.appendChild(document.createElement("div"));
                        divbotones.setAttribute("id","divbotones"+valor);
                        divbotones.setAttribute("class", "divbotones");
                        var botonmarcar = divbotones.appendChild(marcar);
                        botonmarcar.setAttribute("id","botonmarcar"+valor);
                        botonmarcar.setAttribute("class", "botonmarcar");
                        var botoneliminar = divbotones.appendChild(eliminar);
                        botoneliminar.setAttribute("id","botoneliminar"+valor);
                        botoneliminar.setAttribute("class", "botoneliminar");
                        var botoneditar = divbotones.appendChild(editar);
                        botoneditar.setAttribute("id","botoneditar"+valor);
                        botoneditar.setAttribute("class", "botoneditar");
                        var hiddenvaluediv = divtodo.appendChild(hiddenvalue);
                        hiddenvalue.setAttribute("type", "hidden");
                        hiddenvalue.setAttribute("id", "hidden"+valor);
                        hiddenvaluediv.value = contador;
                        var hiddenvaluediv2 = divtodo.appendChild(hiddenvalue2);
                        hiddenvalue2.setAttribute("type", "hidden");
                        hiddenvaluediv2.value = "2";
                        document.getElementById("numtareas").innerHTML = tareas.length+1;
                        contador++;

                }else if(select.value == "enprogreso"){
                        divtodo = document.getElementById("contenedor3").appendChild(document.createElement("div"));
                        divtodo.setAttribute("id","divtareas"+valor);
                        divtodo.setAttribute("class", "divtareas");
                        var divicono = divtodo.appendChild(icono);
                        divicono.setAttribute("id","divicono"+valor);
                        divicono.setAttribute("class", "fas fa-angle-double-right");
                        var divtexto = divtodo.appendChild(div);
                        divtexto.setAttribute("id","divtexto"+valor);
                        divtexto.setAttribute("class", "divtexto");
                        var editarinput = divtodo.appendChild(input);
                        editarinput.setAttribute("id", "editarinput"+valor);
                        editarinput.setAttribute("class", "editarinput");
                        editarinput.style.display = "none";
                        var divbotones = divtodo.appendChild(document.createElement("div"));
                        divbotones.setAttribute("id","divbotones"+valor);
                        divbotones.setAttribute("class", "divbotones");
                        var botonmarcar = divbotones.appendChild(marcar);
                        botonmarcar.setAttribute("id","botonmarcar"+valor);
                        botonmarcar.setAttribute("class", "botonmarcar");
                        var botoneliminar = divbotones.appendChild(eliminar);
                        botoneliminar.setAttribute("id","botoneliminar"+valor);
                        botoneliminar.setAttribute("class", "botoneliminar");
                        var botoneditar = divbotones.appendChild(editar);
                        botoneditar.setAttribute("id","botoneditar"+valor);
                        botoneditar.setAttribute("class", "botoneditar");
                        var hiddenvaluediv = divtodo.appendChild(hiddenvalue);
                        hiddenvalue.setAttribute("type", "hidden");
                        hiddenvalue.setAttribute("id", "hidden"+valor);
                        hiddenvaluediv.value = contador;
                        var hiddenvaluediv2 = divtodo.appendChild(hiddenvalue2);
                        hiddenvalue2.setAttribute("type", "hidden");
                        hiddenvaluediv2.value = "3";
                        document.getElementById("numtareas").innerHTML = tareas.length+1;     
                        contador++;

                }else if(select.value == "hecho"){
                        divtodo = document.getElementById("contenedor4").appendChild(document.createElement("div"));
                        divtodo.setAttribute("id","divtareas"+valor);
                        divtodo.setAttribute("class", "divtareas");
                        var divicono = divtodo.appendChild(icono);
                        divicono.setAttribute("id","divicono"+valor);
                        divicono.setAttribute("class", "fas fa-angle-double-right");
                        var divtexto = divtodo.appendChild(div);
                        divtexto.setAttribute("id","divtexto"+valor);
                        divtexto.setAttribute("class", "divtexto");
                        var editarinput = divtodo.appendChild(input);
                        editarinput.setAttribute("id", "editarinput"+valor);
                        editarinput.setAttribute("class", "editarinput");
                        editarinput.style.display = "none";
                        var divbotones = divtodo.appendChild(document.createElement("div"));
                        divbotones.setAttribute("id","divbotones"+valor);
                        divbotones.setAttribute("class", "divbotones");
                        var botonmarcar = divbotones.appendChild(marcar);
                        botonmarcar.setAttribute("id","botonmarcar"+valor);
                        botonmarcar.setAttribute("class", "botonmarcar");
                        var botoneliminar = divbotones.appendChild(eliminar);
                        botoneliminar.setAttribute("id","botoneliminar"+valor);
                        botoneliminar.setAttribute("class", "botoneliminar");
                        var botoneditar = divbotones.appendChild(editar);
                        botoneditar.setAttribute("id","botoneditar"+valor);
                        botoneditar.setAttribute("class", "botoneditar");
                        var hiddenvaluediv = divtodo.appendChild(hiddenvalue);
                        hiddenvalue.setAttribute("type", "hidden");
                        hiddenvalue.setAttribute("id", "hidden"+valor);
                        hiddenvaluediv.value = contador;
                        var hiddenvaluediv2 = divtodo.appendChild(hiddenvalue2);
                        hiddenvalue2.setAttribute("type", "hidden");
                        hiddenvaluediv2.value = "4";
                        document.getElementById("numtareas").innerHTML = tareas.length+1;
                        contador++;
                }
        }else{
                if(JSON.parse(localStorage.getItem('tarea'))[i].contenedor == "1"){
                        divtodo = document.getElementById("contenedor").appendChild(document.createElement("div"));
                        divtodo.setAttribute("id","divtareas"+valor);
                        divtodo.setAttribute("class", "divtareas");
                        var divicono = divtodo.appendChild(icono);
                        divicono.setAttribute("id","divicono"+valor);
                        divicono.setAttribute("class", "fas fa-angle-double-right");
                        var divtexto = divtodo.appendChild(div);
                        divtexto.setAttribute("id","divtexto"+valor);
                        divtexto.setAttribute("class", "divtexto");
                        var editarinput = divtodo.appendChild(input);
                        editarinput.setAttribute("id", "editarinput"+valor);
                        editarinput.setAttribute("class", "editarinput");
                        editarinput.style.display = "none";
                        var divbotones = divtodo.appendChild(document.createElement("div"));
                        divbotones.setAttribute("id","divbotones"+valor);
                        divbotones.setAttribute("class", "divbotones");
                        var botonmarcar = divbotones.appendChild(marcar);
                        botonmarcar.setAttribute("id","botonmarcar"+valor);
                        botonmarcar.setAttribute("class", "botonmarcar");
                        var botoneliminar = divbotones.appendChild(eliminar);
                        botoneliminar.setAttribute("id","botoneliminar"+valor);
                        botoneliminar.setAttribute("class", "botoneliminar");
                        var botoneditar = divbotones.appendChild(editar);
                        botoneditar.setAttribute("id","botoneditar"+valor);
                        botoneditar.setAttribute("class", "botoneditar");
                        var hiddenvaluediv = divtodo.appendChild(hiddenvalue);
                        hiddenvalue.setAttribute("type", "hidden");
                        hiddenvalue.setAttribute("id", "hidden"+valor);
                        hiddenvaluediv.value = contador;
                        var hiddenvaluediv2 = divtodo.appendChild(hiddenvalue2);
                        hiddenvalue2.setAttribute("type", "hidden");
                        hiddenvaluediv2.value = "1";
                        document.getElementById("numtareas").innerHTML = tareas.length+1;
                        contador++;
        
                } else if(JSON.parse(localStorage.getItem('tarea'))[i].contenedor == "2"){
                        divtodo = document.getElementById("contenedor2").appendChild(document.createElement("div"));
                        divtodo.setAttribute("id","divtareas"+valor);
                        divtodo.setAttribute("class", "divtareas");
                        var divicono = divtodo.appendChild(icono);
                        divicono.setAttribute("id","divicono"+valor);
                        divicono.setAttribute("class", "fas fa-angle-double-right");
                        var divtexto = divtodo.appendChild(div);
                        divtexto.setAttribute("id","divtexto"+valor);
                        divtexto.setAttribute("class", "divtexto");
                        var editarinput = divtodo.appendChild(input);
                        editarinput.setAttribute("id", "editarinput"+valor);
                        editarinput.setAttribute("class", "editarinput");
                        editarinput.style.display = "none";
                        var divbotones = divtodo.appendChild(document.createElement("div"));
                        divbotones.setAttribute("id","divbotones"+valor);
                        divbotones.setAttribute("class", "divbotones");
                        var botonmarcar = divbotones.appendChild(marcar);
                        botonmarcar.setAttribute("id","botonmarcar"+valor);
                        botonmarcar.setAttribute("class", "botonmarcar");
                        var botoneliminar = divbotones.appendChild(eliminar);
                        botoneliminar.setAttribute("id","botoneliminar"+valor);
                        botoneliminar.setAttribute("class", "botoneliminar");
                        var botoneditar = divbotones.appendChild(editar);
                        botoneditar.setAttribute("id","botoneditar"+valor);
                        botoneditar.setAttribute("class", "botoneditar");
                        var hiddenvaluediv = divtodo.appendChild(hiddenvalue);
                        hiddenvalue.setAttribute("type", "hidden");
                        hiddenvalue.setAttribute("id", "hidden"+valor);
                        hiddenvaluediv.value = contador;
                        var hiddenvaluediv2 = divtodo.appendChild(hiddenvalue2);
                        hiddenvalue2.setAttribute("type", "hidden");
                        hiddenvaluediv2.value = "2";
                        document.getElementById("numtareas").innerHTML = tareas.length+1;
                        contador++;
        
                } else if(JSON.parse(localStorage.getItem('tarea'))[i].contenedor == "3"){
                        divtodo = document.getElementById("contenedor3").appendChild(document.createElement("div"));
                        divtodo.setAttribute("id","divtareas"+valor);
                        divtodo.setAttribute("class", "divtareas");
                        var divicono = divtodo.appendChild(icono);
                        divicono.setAttribute("id","divicono"+valor);
                        divicono.setAttribute("class", "fas fa-angle-double-right");
                        var divtexto = divtodo.appendChild(div);
                        divtexto.setAttribute("id","divtexto"+valor);
                        divtexto.setAttribute("class", "divtexto");
                        var editarinput = divtodo.appendChild(input);
                        editarinput.setAttribute("id", "editarinput"+valor);
                        editarinput.setAttribute("class", "editarinput");
                        editarinput.style.display = "none";
                        var divbotones = divtodo.appendChild(document.createElement("div"));
                        divbotones.setAttribute("id","divbotones"+valor);
                        divbotones.setAttribute("class", "divbotones");
                        var botonmarcar = divbotones.appendChild(marcar);
                        botonmarcar.setAttribute("id","botonmarcar"+valor);
                        botonmarcar.setAttribute("class", "botonmarcar");
                        var botoneliminar = divbotones.appendChild(eliminar);
                        botoneliminar.setAttribute("id","botoneliminar"+valor);
                        botoneliminar.setAttribute("class", "botoneliminar");
                        var botoneditar = divbotones.appendChild(editar);
                        botoneditar.setAttribute("id","botoneditar"+valor);
                        botoneditar.setAttribute("class", "botoneditar");
                        var hiddenvaluediv = divtodo.appendChild(hiddenvalue);
                        hiddenvalue.setAttribute("type", "hidden");
                        hiddenvalue.setAttribute("id", "hidden"+valor);
                        hiddenvaluediv.value = contador;
                        var hiddenvaluediv2 = divtodo.appendChild(hiddenvalue2);
                        hiddenvalue2.setAttribute("type", "hidden");
                        hiddenvaluediv2.value = "3";
                        document.getElementById("numtareas").innerHTML = tareas.length+1;
                        contador++;
        
                } else if(JSON.parse(localStorage.getItem('tarea'))[i].contenedor == "4"){
                        divtodo = document.getElementById("contenedor4").appendChild(document.createElement("div"));
                        divtodo.setAttribute("id","divtareas"+valor);
                        divtodo.setAttribute("class", "divtareas");
                        var divicono = divtodo.appendChild(icono);
                        divicono.setAttribute("id","divicono"+valor);
                        divicono.setAttribute("class", "fas fa-angle-double-right");
                        var divtexto = divtodo.appendChild(div);
                        divtexto.setAttribute("id","divtexto"+valor);
                        divtexto.setAttribute("class", "divtexto");
                        var editarinput = divtodo.appendChild(input);
                        editarinput.setAttribute("id", "editarinput"+valor);
                        editarinput.setAttribute("class", "editarinput");
                        editarinput.style.display = "none";
                        var divbotones = divtodo.appendChild(document.createElement("div"));
                        divbotones.setAttribute("id","divbotones"+valor);
                        divbotones.setAttribute("class", "divbotones");
                        var botonmarcar = divbotones.appendChild(marcar);
                        botonmarcar.setAttribute("id","botonmarcar"+valor);
                        botonmarcar.setAttribute("class", "botonmarcar");
                        var botoneliminar = divbotones.appendChild(eliminar);
                        botoneliminar.setAttribute("id","botoneliminar"+valor);
                        botoneliminar.setAttribute("class", "botoneliminar");
                        var botoneditar = divbotones.appendChild(editar);
                        botoneditar.setAttribute("id","botoneditar"+valor);
                        botoneditar.setAttribute("class", "botoneditar");
                        var hiddenvaluediv = divtodo.appendChild(hiddenvalue);
                        hiddenvalue.setAttribute("type", "hidden");
                        hiddenvalue.setAttribute("id", "hidden"+valor);
                        hiddenvaluediv.value = contador;
                        var hiddenvaluediv2 = divtodo.appendChild(hiddenvalue2);
                        hiddenvalue2.setAttribute("type", "hidden");
                        hiddenvaluediv2.value = "4";
                        document.getElementById("numtareas").innerHTML = tareas.length+1;
                        contador++;
        
                }       
        }
                

        

        var content1 = document.getElementById("contenedor");
        Sortable.create(content1,{
            group: {
                name: "lista-tareas"
            },
            animation: 150,
            easing: "cubic-bezier(0.83, 0, 0.17, 1)",
            handle: ".fas"

        });

        var content2 = document.getElementById("contenedor2");
        Sortable.create(content2,{
            group: {
                name: "lista-tareas"
            },
            animation: 150,
            easing: "cubic-bezier(0.83, 0, 0.17, 1)",
            handle: ".fas"

        });

        var content3 = document.getElementById("contenedor3");
        Sortable.create(content3,{
            group: {
                name: "lista-tareas"
            },
            animation: 150,
            easing: "cubic-bezier(0.83, 0, 0.17, 1)",
            handle: ".fas"

        });

        var content4 = document.getElementById("contenedor4");
        Sortable.create(content4,{
            group: {
                name: "lista-tareas"
            },
            animation: 150,
            easing: "cubic-bezier(0.83, 0, 0.17, 1)",
            handle: ".fas"

        });

        
        botonmarcar.animate([ 
                {color: "transparent",
                backgroundColor: "transparent"},
                {color: "white",
                backgroundColor: "green"}
                ],1000);
        
                
        botonmarcar.onclick=function marcarTarea(){
                if(botonmarcar.innerHTML === "Marcar"){
                        document.getElementById("mensajerror").style.display = "none";
                        divtexto.style.textDecoration = "line-through";
                        botonmarcar.innerHTML = "Desmarcar";
                        botonmarcar.style.backgroundColor="blue";
                        botonmarcar.onmouseenter=function hoverBotonmarcar(){
                                botonmarcar.style.backgroundColor="#5872A8";
                        }
                        botonmarcar.onmouseout=function nohoverBotonmarcar(){
                                botonmarcar.style.backgroundColor="blue";
                        }
                        tarearray = tareas.find(element => element.id === hiddenvalue.value);
                        tarearray.estado = "Hecha";

                        divtexto.animate([ 
                                {textDecorationColor: 'transparent',},
                                {textDecorationColor: 'initial',}
                                ],500);

                }else{
                        document.getElementById("mensajerror").style.display = "none";
                        botonmarcar.innerHTML = "Marcar";
                        botonmarcar.style.backgroundColor="green";
                        botonmarcar.onmouseenter=function hoverBotonmarcar(){
                                botonmarcar.style.backgroundColor="#3FA70C";
                        }   
                        botonmarcar.onmouseout=function nohoverBotonmarcar(){
                                botonmarcar.style.backgroundColor="green";
                        } 
                        tarearray = tareas.find(element => element.id === hiddenvalue.value);
                        tarearray.estado = "No hecha";   
                        divtexto.animate([ 
                                {textDecorationColor: 'initial'},
                                {textDecorationColor: 'transparent'}
                                ],500);

                        function desmarcarTarea(){
                                divtexto.style.textDecoration = "none";
                        }

                        setTimeout(desmarcarTarea, 480);
                }
        }

        botoneliminar.onclick=function borrarTarea(){
                document.getElementById("mensajerror").style.display = "none";
                idactual= tareas.find(element => element.id === hiddenvalue.value);
                tareas.forEach(function(tarea, i, object) {
                        if(tarea.id === idactual.id){
                                object.splice(i, 1);
                        }
                });
                document.getElementById("numtareas").innerHTML = tareas.length;
                
                divtexto.animate([
                        {width: "100%",
                        color: "black"},
                        {color: "transparent",
                        width: "0"}
                        ],500);
                if(botonmarcar.innerHTML=="Marcar"){
                        botonmarcar.animate([ 
                                {color: "white",
                                backgroundColor: "green"},
                                {color: "transparent",
                                backgroundColor: "transparent"}
                                ],500);
                }else{
                        botonmarcar.animate([ 
                                {color: "white",
                                backgroundColor: "blue"},
                                {color: "transparent",
                                backgroundColor: "transparent"}
                                ],500);
                }
                
                botoneliminar.animate([ 
                        {color: "white",
                        backgroundColor: "red"},
                        {color: "transparent",
                        backgroundColor: "transparent"}
                        ],500);

                botoneditar.animate([ 
                        {color: "white",
                        backgroundColor: "orange"},
                        {color: "transparent",
                        backgroundColor: "transparent"}
                        ],500);      
                

                siguientediv = divtodo.nextSibling;

                while(siguientediv){
                        if(divtodo.nextSibling!=null){
                                siguientediv.animate([
                                        { transform: 'translateY(0px)' },
                                        { transform: 'translateY(-45px)' }
                                        ],400);
                                }
                        siguientediv = siguientediv.nextSibling;
                }
                
                function borrarDiv(){
                        divtodo.remove();
                }
                setTimeout(borrarDiv, 390);    
        }


        botoneditar.onclick=editarTarea;
        divtexto.onclick=editarTarea;
        
        
        function editarTarea(){
                document.getElementById("mensajerror").style.display = "none";
                editarinput.style.display = "block";
                divtexto.style.display = "none";
                botoneditar.innerHTML = "Guardar";
                editarinput.value = divtexto.innerHTML;

                editarinput.animate([ 
                        {marginLeft: "40%"},
                        {marginLeft: "0%"}
                        ],500); 
                        
                if(botonmarcar.innerHTML=="Marcar"){
                        botonmarcar.animate([ 
                                {color: "white",
                                backgroundColor: "green"},
                                {color: "transparent",
                                backgroundColor: "transparent"}
                                ],500);
                }else{
                        botonmarcar.animate([ 
                                {color: "white",
                                backgroundColor: "blue"},
                                {color: "transparent",
                                backgroundColor: "transparent"}
                                ],500);
                }
                
                function delayBoton(){
                        botonmarcar.style.display= "none";
                }
                setTimeout(delayBoton,390);

                editarinput.onfocus=function inputFocus(){
                        editarinput.animate([ 
                                {width: "20%"},
                                {width: "60%"}
                                ],500);  
                }
                
                botoneditar.onclick=function guardarTarea(){
                        if(botoneditar.innerHTML == "Guardar"){
                                divtexto.innerHTML = editarinput.value;
                                botoneditar.innerHTML = "Editar";
                                editarinput.style.display = "none";
                                divtexto.style.display = "block";
                                botonmarcar.style.display = "block";
                                var tarearray2 = tareas.find(element => element.id === hiddenvalue.value);
                                tarearray2.nombre = divtexto.innerHTML;
                        }else{
                                editarTarea();
                        }
                }
        }
           
        tareas.push({
                "id": hiddenvalue.value,
                "nombre": divtexto.innerHTML,
                "estado": "No hecha",
                "contenedor": hiddenvalue2.value,
        });    
        defined = 0;
}