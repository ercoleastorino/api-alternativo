const enlace = "https://ercoleastorino.github.io/api-alternativo/js/producto.json";

function cargarlistado(url) {
    //document.getElementById("articulos").innerHTML = "";
    
    fetch(url)

        .then(respuesta => respuesta.json())
        .then(listado => {

            for (let i = 0; i < listado.length;i++) {
                let art = "";
      
                    art = `
                         <div class="contenido">
                         <p>Nombre: `+ listado[i].nombre +` </p>   
                         <p>Codigo: `+ listado[i].producto_id +  ` </p> 
                         <p>Precio: `+ listado[i].moneda + " " + listado[i].precio +`</p>
                         <p>Stock: `+ listado[i].cantidad +`</p>
                         </div>
                        
                    `

                document.getElementById("articulos").innerHTML += art;
            }
        })
        .catch(error => alert("Hubo un error: " + error));
    }

    cargarlistado(enlace);