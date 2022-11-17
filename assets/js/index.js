let tareasJSON = [

]

const agregar = document.getElementById("agregar");
let contador = 0;
const total  = document.getElementById("total");
const realizadas  = document.getElementById("realizadas");
const contenidoTabla  = document.getElementById("contenido-tabla");

agregar.addEventListener("click", () => {
    let nuevaTarea = document.getElementById("tarea-nueva").value;
    contador++;
    tareasJSON.push({id: contador, nombre: nuevaTarea, hecha:false})
    pintarTareas();

    document.getElementById("tarea-nueva").value = "";
  });

const templateTarea = ({id,nombre,hecha}) =>{
    let template =  `<tr>
    <td>${id}</td>
    <td>${nombre}</td>
    <td><input type="checkbox" onclick="checkTarea(${id}) "`;
    
if(hecha){
    template += `checked="true" `
}
    template +=`></td>
    <td><button class="delete" onclick="eliminarTarea(${id})">X</button></td>
  </tr>
 `;
 return template;
 }

 const eliminarTarea = (id) => {
    let index = tareasJSON.findIndex(tarea=>tarea.id===id);
    tareasJSON.splice(index,1);
    pintarTareas();
  };


  const checkTarea = (id) => {
    let index = tareasJSON.findIndex(tarea=>tarea.id===id);
    tareasJSON[index].hecha = !tareasJSON[index].hecha;

    pintarTareas();

  };



 const pintarTareas = (tareas = tareasJSON) => {
    clearTabla();
    total.innerHTML = tareas.length;
    realizadas.innerHTML = tareasJSON.filter(tarea=>tarea.hecha).length;
    tareas.forEach((tarea) => {
      const tareaTemplate = templateTarea(tarea);
      contenidoTabla.innerHTML += tareaTemplate;
    });
  };

  const clearTabla = () => (contenidoTabla.innerHTML = "");

 