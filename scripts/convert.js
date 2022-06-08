// let testString = 'smb://production.ctv.ca/storage/CreativeAgency/QSCreative/Public/Delivery/Starz/ADR-51546 - Starz - OAP - Gaslit (Rolling Deadlines)/EPG_Amazon_gaslit_Dated.mov';

// // let testString = '\\production.ctv.ca\storage\CreativeAgency\QSCreative\Public\To Design\HBO\HouseOfTheDragon HBO logo';


// let testString = 'smb://production.ctv.ca';
// var testString = "";

function submitLocation() {
    let testString = "";
    testString = document.getElementById("macLocation").value;
    console.log(testString);
    let newString = '';

    if (testString.includes('smb:')) {

        newString = testString.substring('smb:'.length);
    } else if (testString.length === 0) {

        alert("You need to fill in a valid file location.");
        return false;
    } else {
        newString = testString;
    }

    console.log(newString);


    function stringContains(string) {

        if (string.includes('/') || string.includes('//') || string.includes('smb://')) {
            return true;
        } else {
            return false;
        }
    }


    let checkedString = stringContains(newString);

    console.log(checkedString);

    if (checkedString === true) {
        alert('Your file location has to be altered!')
        let arrayString = Array.from(newString);

        console.log(arrayString);


        for (let i = 0; i < arrayString.length; i++) {
            if (arrayString[i] == `/`)
                arrayString[i] = '\\';
        }
        console.log(arrayString);

        let formattedString = arrayString.join('');

        console.log(formattedString);

        console.log(`Use this instead: ${formattedString}`);

        document.getElementById("windowsLocation").innerHTML = `${formattedString}`;
        document.getElementById("copyButton").style.display = "inline";
    } else {
        alert('Your file location is ok to use!')
        document.getElementById("windowsLocation").innerHTML = `${testString}`;
    }

}

function clearAll() {
    document.getElementById("macLocation").value = '';
    document.getElementById("windowsLocation").innerHTML = ``;
    document.getElementById("copyButton").style.display = "none";
}


function copyText() {
    /* Get the text field */
    var copyText = document.getElementById("windowsLocation");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}