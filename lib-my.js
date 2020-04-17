function showHide(event)
{
    var source = event.target || event.srcElement;
    var childArr = document.getElementsByClassName(source.id), i

    for (i = 0; i < childArr.length; ++i) {
        setDisplay(childArr[i])
    }
}

function setDisplay(elem)
{
    if (elem.style.display == "block") {
        elem.style.display = "none";
    } else if ((elem.style.display == "none") ||
        (elem.style.display == "")) {
        elem.style.display = "block";
    }
}

