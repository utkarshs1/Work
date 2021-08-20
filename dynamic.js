function resumeBuild(){

    //Personal
    document.getElementById("nameT").innerHTML = document.getElementById("nameField").value;
    let file = document.getElementById("imgField").files[0];
    let reader= new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend= function() {
        document.getElementById("imgT").src=reader.result;
    }

    // Contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    // document.getElementById("linkedT").setAttribute("href",document.getElementById("linkedField").value);
    // document.getElementById("instaT").setAttribute("href",document.getElementById("instaField").value);
    // document.getElementById("githubT").setAttribute("href",document.getElementById("githubField").value);

    //Education
    document.getElementById("collegeT").innerHTML = document.getElementById("collegeField").value;
    document.getElementById("courseT").innerHTML = document.getElementById("courseField").value;
    document.getElementById("departmentT").innerHTML = document.getElementById("departmentField").value;

    //Skills
    document.getElementById("languageT").innerHTML = document.getElementById("languageField").value;
    document.getElementById("toolT").innerHTML = document.getElementById("toolField").value;
    document.getElementById("areaT").innerHTML = document.getElementById("areaField").value;

    //Project
    document.getElementById("projectNameT").innerHTML = document.getElementById("projectNameField").value;
    document.getElementById("projectAboutT").innerHTML = document.getElementById("projectAboutField").value;
    document.getElementById("projectExposureT").innerHTML = document.getElementById("projectExposureField").value;


    document.getElementById('cv-form').style.display = 'none';
    document.getElementsByClassName('main-container')[0].style.display = 'block';


}

function resumePrint() {
    window.print();
}
function goBack() {

    document.getElementById('cv-form').style.display = 'block';
    document.getElementsByClassName('main-container')[0].style.display = 'none';

}
