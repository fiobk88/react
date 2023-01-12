//se puede utilizar para mandar un mensaje luego de terminar una proceso

//Backend

const BackendFunction = newPromise((resolve) => {
    console.log("Conneting to the backend...");

    setTimeout(() => {
        resolve("ok");

    }, 8000);
});


//Frontend
console.log("App Iniciada");

BackendFunction.then((repuesta) => { console.log("resolvemos...", respuesta) },);

console.log("Llegamos al final");


