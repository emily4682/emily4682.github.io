function spacer(){
    document.write('<div> <svg class="spacer"> <defs> <pattern id="dashedFill" height="8" width="3" patternUnits="userSpaceOnUse"> <line x1="0" y1="4" x2="4" y2="4" stroke-width="1.5" stroke="black"/> </pattern> </defs> <rect height=100% width=100% fill="url(#dashedFill)"/> </svg> </div>');
}

function spacerSmallerWidth(){
    document.write('<div> <svg class="spacer" style="padding-left: 5%;"> <defs> <pattern id="dashedFill" height="8" width="3" patternUnits="userSpaceOnUse"> <line x1="0" y1="4" x2="4" y2="4" stroke-width="1.5" stroke="black"/> </pattern> </defs> <rect height=100% width=90% fill="url(#dashedFill)"/> </svg> </div>');
}

function DisplaySummary(){

    var text = document.getElementById('extendedSummaryContent');
    var display = text.style.display;

    if(display == "none")
    {
        text.style.display = "block";
    }
    else
    {
        text.style.display = "none";
    }

}