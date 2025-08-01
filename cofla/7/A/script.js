let height = window.screen.availHeight;
let width = window.screen.availWidth;

let ans = confirm(`El alto es: ${height}, el ancho es: ${width}`);
if(ans){
    alert("Compra exitosa");
}
else{
    alert("Compra rechazada");
}