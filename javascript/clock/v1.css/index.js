const PERIOD = 113;

function makeElement( type, className, value ) {
    let ele = document.createElement(type);
    ele.className = className;
    ele.innerHTML = value;
    return ele;
}

function paddingInt(i, width) {
    let s = i.toString();
    if ( s.length < width ) {
        return '0'.repeat(width - s.length) + s;
    } else {
        return s;
    }
}

function updateTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let millseconds = date.getMilliseconds();

    let div = document.getElementById('date');
    div.innerHTML = "";
    div.appendChild( makeElement( 'div', 'time', paddingInt(hour,2) + ":" + paddingInt(minutes,2) + ':' + paddingInt(seconds,2)));
    div.appendChild( makeElement( 'div', 'millsec', paddingInt(millseconds, 3)) );

    window.setTimeout(updateTime, PERIOD);
}

window.setTimeout(updateTime, PERIOD);