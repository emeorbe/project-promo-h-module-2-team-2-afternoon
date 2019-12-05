"use strict";const designArrowButton=document.querySelector(".design-arrow-button"),div=document.querySelector("#js-toggle"),elementHidden=document.querySelector("#toggle");function hideNotDesignElements(){form.classList.add("hidden"),arrowActiveForm.classList.remove("fa-chevron-up"),arrowActiveForm.classList.add("fa-chevron-down"),createCardSection.classList.add("hidden"),arrowActiveShare.classList.remove("fa-chevron-up"),arrowActiveShare.classList.add("fa-chevron-down"),shareCardButton.classList.add("hidden")}function toggle(){hideNotDesignElements(),elementHidden.classList.contains("hidden")?(elementHidden.classList.remove("hidden"),designArrowButton.classList.remove("fa-chevron-down"),designArrowButton.classList.add("fa-chevron-up")):(elementHidden.classList.add("hidden"),designArrowButton.classList.remove("fa-chevron-up"),designArrowButton.classList.add("fa-chevron-down"))}div.addEventListener("click",toggle);const arrowActiveForm=document.querySelector(".arrow-button-form"),form=document.querySelector(".fill__form"),headerForm=document.querySelector(".fill__header-container"),createFill=document.querySelector(".create__fill");function hideNotFormElements(){elementHidden.classList.add("hidden"),designArrowButton.classList.remove("fa-chevron-up"),designArrowButton.classList.add("fa-chevron-down"),createCardSection.classList.add("hidden"),arrowActiveShare.classList.remove("fa-chevron-up"),arrowActiveShare.classList.add("fa-chevron-down"),shareCardButton.classList.add("hidden")}function showOrHideForm(){hideNotFormElements(),form.classList.contains("hidden")?(form.classList.remove("hidden"),arrowActiveForm.classList.remove("fa-chevron-down"),arrowActiveForm.classList.add("fa-chevron-up"),createFill.style.padding="0 0 30px 0"):(form.classList.add("hidden"),arrowActiveForm.classList.remove("fa-chevron-up"),arrowActiveForm.classList.add("fa-chevron-down"))}headerForm.addEventListener("click",showOrHideForm);const createButton=document.querySelector(".create-button"),shareSection=document.querySelector(".create__share"),createIntroElement=document.querySelector(".create-intro"),arrowActiveShare=document.querySelector(".arrow-button-share"),createCardButton=document.querySelector("#create-button"),createCardSection=document.querySelector("#create-button-section"),shareCardButton=document.querySelector("#share-card"),validateInputsSection=document.querySelector(".validateInputsSection");function hiddeNotShareElements(){form.classList.add("hidden"),designArrowButton.classList.remove("fa-chevron-up"),designArrowButton.classList.add("fa-chevron-down"),elementHidden.classList.add("hidden"),arrowActiveForm.classList.remove("fa-chevron-up"),arrowActiveForm.classList.add("fa-chevron-down")}function showOrHideShare(){hiddeNotShareElements(),createCardSection.classList.contains("hidden")?(createCardSection.classList.remove("hidden"),arrowActiveShare.classList.remove("fa-chevron-down"),arrowActiveShare.classList.add("fa-chevron-up")):(createCardSection.classList.add("hidden"),arrowActiveShare.classList.remove("fa-chevron-up"),arrowActiveShare.classList.add("fa-chevron-down"),shareCardButton.classList.add("hidden")),validateInputs()}function removeClass(){shareCardButton.classList.remove("hidden")}createIntroElement.addEventListener("click",showOrHideShare),createCardButton.addEventListener("click",removeClass);const name=document.querySelector(".preview__content__title"),contentBorder=document.querySelector(".preview__content"),previewElement=document.querySelector(".preview"),firstColors=document.getElementById("color-one-selected"),thirdColors=document.getElementById("color-three-selected"),secondColors=document.getElementById("color-two-selected"),colorOne=document.querySelector(".color__one"),colorTwo=document.querySelector(".color__two"),colorThree=document.querySelector(".color__three"),colorsForm=document.querySelector(".create__design--form");let radioColor=1;function selectColorEvent(e){selectColor(e.target.value),saveLocalStorage()}function selectColor(e){colorOne.checked&&(previewElement.classList.add("blue"),previewElement.classList.remove("yellow"),previewElement.classList.remove("red")),colorTwo.checked&&(previewElement.classList.add("red"),previewElement.classList.remove("blue"),previewElement.classList.remove("yellow")),colorThree.checked&&(previewElement.classList.add("yellow"),previewElement.classList.remove("red"),previewElement.classList.remove("blue")),radioColor=e}colorsForm.addEventListener("change",selectColorEvent);const elementTitle=document.querySelector("#js-title"),elementJob=document.querySelector("#js-job"),elementEmail=document.querySelector("#js-email"),elementMobile=document.querySelector("#js-mobile"),elementLinkedin=document.querySelector("#js-linkedin"),elementGithub=document.querySelector("#git"),inputTitle=document.querySelector("#txtFullName"),inputJob=document.querySelector("#txtJob"),inputEmail=document.querySelector("#txtEmail"),inputMobile=document.querySelector("#txtPhoneNumber"),inputLinkedin=document.querySelector("#txtLinkedinUser"),inputGithub=document.querySelector("#txtGithubUser"),changeName=()=>elementTitle.innerHTML=inputTitle.value,changeJob=()=>elementJob.innerHTML=inputJob.value,addLinkedin=()=>{elementLinkedin.classList.toggle("hidden-icons"),elementLinkedin.href=`https://linkedin.com/in/${inputLinkedin.value}`},addGithub=()=>{elementGithub.classList.toggle("hidden-icons"),elementGithub.href=`https://github.com/${inputGithub.value}`},addEmail=()=>{elementEmail.href=`mailto: ${inputEmail.value}`,elementEmail.classList.toggle("hidden-icons"),ValidateEmail()},addPhone=()=>{elementMobile.href=`tel: ${parseInt(inputMobile.value)}`,elementMobile.classList.toggle("hidden-icons"),ValidatePhone()};function ValidateEmail(){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)||(addAlertValidator(),!1)}function ValidatePhone(){return!!/^[\s\S]{0,9}$/.test(inputMobile.value)||(addPhoneValidator(),!1)}const addAlertValidator=()=>{const e=document.createElement("span");e.innerHTML="*El e-mail que has introducido es incorrecto",document.querySelector(".fill__form--container").appendChild(e),e.classList.add("errorEmail")},addPhoneValidator=()=>{const e=document.createElement("span");e.innerHTML="*El teléfono que has introducido es incorrecto",document.querySelector(".fill__form--wrapper").appendChild(e),e.classList.add("errorEmail")};function changeColorThree(){previewElement.classList.contains("blue")?(previewElement.classList.remove("blue"),previewElement.classList.add("yellow")):previewElement.classList.contains("red")&&(previewElement.classList.remove("red"),previewElement.classList.add("yellow"))}thirdColors.addEventListener("click",changeColorThree);const fr=new FileReader,btnAddImage=document.getElementById("btnAddImage"),btnFileAddImage=document.getElementById("btnFileAddImage"),profileImage=document.querySelector(".preview__image"),profilePreview=document.querySelector(".fill__image-preview");function writeImage(){profileImage.src=fr.result,profilePreview.style.backgroundImage=`url(${fr.result})`,saveLocalStorage()}function getImage(e){let t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function manageAddImageButton(){btnFileAddImage.click()}btnAddImage.addEventListener("click",manageAddImageButton),btnFileAddImage.addEventListener("change",getImage),inputTitle.addEventListener("keyup",changeName),inputJob.addEventListener("keyup",changeJob),inputEmail.addEventListener("change",addEmail),inputLinkedin.addEventListener("change",addLinkedin),inputGithub.addEventListener("change",addGithub),inputMobile.addEventListener("change",addPhone);const inputElements=document.querySelectorAll("input"),createButtonElement=document.getElementById("create-button"),error=document.querySelector(".error"),linkShare=document.querySelector(".link-share");function validateInputs(){for(let e=0;e<inputElements.length;e++)""===inputElements[e].value?(createButtonElement.disabled=!0,error.innerHTML="*Rellena todos los campos para continuar.",error.classList.remove("errorHidden"),error.classList.remove("hidden")):(createButtonElement.disabled=!1,error.classList.add("hidden"))}const resetButton=document.getElementById("reset");function resetForm(){profileImage.src="./assets/images/girl.png",elementTitle.innerHTML="Nombre Apellidos",elementJob.innerHTML="Front end developer",elementLinkedin.href="",elementMobile.href="",elementGithub.href="",elementEmail.href="",profilePreview.style.backgroundImage="url(./assets/images/girl.png)",document.querySelector(".fill__form--wrapper").lastChild.remove(),document.querySelector(".fill__form--container").lastChild.remove(),shareCardButton.classList.add("hidden"),createButtonElement.disabled=!0,createCardSection.classList.add("hidden"),arrowActiveShare.classList.remove("fa-chevron-up"),arrowActiveShare.classList.add("fa-chevron-down"),elementLinkedin.classList.add("hidden-icons"),elementGithub.classList.add("hidden-icons"),elementEmail.classList.add("hidden-icons"),elementMobile.classList.add("hidden-icons"),document.querySelector(".fill__form").reset(),document.querySelector(".create__design--form").reset(),previewElement.classList.contains("blue")||(previewElement.classList.contains("red")?(previewElement.classList.remove("red"),previewElement.classList.add("blue")):previewElement.classList.contains("yellow")&&(previewElement.classList.remove("yellow"),previewElement.classList.add("blue")))}resetButton.addEventListener("click",resetForm);const linkToTwitter=document.querySelector(".shareInTwitter");let photoSend="";function getImageSrc(e){e.preventDefault(),fr.result||localStorage.getItem("image")?!fr.result&&localStorage.getItem("image")?photoSend=localStorage.getItem("image"):(photoSend=fr.result,localStorage.setItem("image",photoSend)):photoSend=profileImage,createShareCard()}function createShareCard(){const e={palette:radioColor,name:inputTitle.value,job:inputJob.value,phone:inputMobile.value,email:inputEmail.value,linkedin:inputLinkedin.value,github:inputGithub.value,photo:photoSend};fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then(e=>e.json()).then(e=>showURL(e)).catch(function(e){console.log(e)})}function showURL(e){e.success?(linkShare.innerHTML=e.cardURL,linkShare.setAttribute("href",e.cardURL)):linkShare.innerHTML="ERROR:"+result.error,shareTwitter(e.cardURL)}function shareTwitter(e){const t=`https://twitter.com/intent/tweet?text=${encodeURIComponent("¡Acabo de crear esta tarjeta profesional con Awesome Profile Cards!")}&url=${e}&hashtags=${encodeURIComponent("adalab,adalaber,frontend,development,profile")}`;linkToTwitter.href=t}createButtonElement.addEventListener("click",getImageSrc);let selectedCheckbox=colorsForm.querySelector("input[checked]");const saveLocalStorage=()=>{colorOne.checked&&(radioColor=1),colorTwo.checked&&(radioColor=2),colorThree.checked&&(radioColor=3);const e={palette:radioColor,name:inputTitle.value,job:inputJob.value,email:inputEmail.value,mobile:inputMobile.value,linkedin:inputLinkedin.value,github:inputGithub.value,photo:profileImage.src};localStorage.setItem("userDataFrom",JSON.stringify(e))},getLocalStorage=()=>{const e=JSON.parse(localStorage.getItem("userDataFrom"));if(e){const t=e.palette;colorOne.checked=1===t,colorTwo.checked=2===t,colorThree.checked=3===t,selectColor(t),inputTitle.value=e.name,inputJob.value=e.job,inputEmail.value=e.email,inputMobile.value=e.mobile,inputLinkedin.value=e.linkedin,inputGithub.value=e.github,elementTitle.innerHTML=e.name,elementJob.innerHTML=e.job,elementEmail.href=`mailto:${e.email}`,elementMobile.href=`tel:${e.mobile}`,elementLinkedin.href=`https://linkedin.com/in/${e.linkedin}`,elementGithub.href=`https://github.com/${e.github}`,profileImage.src=e.photo,""!==inputMobile.value&&addPhoneValidator(),""!==inputEmail.value&&addAlertValidator(),""!==inputLinkedin.value?elementLinkedin.classList.remove("hidden-icons"):elementLinkedin.classList.add("hidden-icons"),""!==inputGithub.value&&elementGithub.classList.remove("hidden-icons"),""!==inputMobile.value&&elementMobile.classList.remove("hidden-icons"),""!==inputEmail.value&&elementEmail.classList.remove("hidden-icons")}};window.addEventListener("keyup",saveLocalStorage),window.addEventListener("load",getLocalStorage);