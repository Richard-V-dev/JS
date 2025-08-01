let protocol = window.location.protocol;
let hostname= window.location.hostname;
let pathname = window.location.pathname;
let href = window.location.href;

let text = `Protocolo:<b> ${protocol}</b><br>
            Hostname: <b> ${hostname} </b><br>
            Pathname: <b> ${pathname} </b><br>
            URL: <b>${href}</b>`
document.writeln(text);



