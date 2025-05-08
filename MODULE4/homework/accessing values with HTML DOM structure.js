function myFunction() {
    document.getElementsById("result").innerHTML =
    document.getElementsById("demo").firstChild.nodeValue;
    document.getElementsById("result1").innerHTML =
    document.getElementsById("demo").childNodes[0].nodeValue
}