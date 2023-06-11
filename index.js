const myForm = document.forms.myform;

const devsField = myForm.elements.developpers;
devsField.addEventListener("focusout", validateDevsField, false);
function validateDevsField(eo) {
  eo = eo || window.event;
  const devsValue = devsField.value;
  const devsError = document.getElementById("devsError");
  if (devsValue === "") {
    devsError.innerHTML = "Вы не ввели данные!";
  }
  else if (devsValue.length > 30) {
    devsError.innerHTML = "Не более 30 символов!";
  }
  else {
    devsError.innerHTML = "";
  }
}

const nameField = myForm.elements.sitename;
nameField.addEventListener("focusout", validateNameField, false);
function validateNameField(eo) {
  eo = eo || window.event;
  const nameValue = nameField.value;
  const nameError = document.getElementById("nameError");
  if (nameValue === "") {
    nameError.innerHTML = "Вы не ввели данные!";
  }
  else
    nameError.innerHTML = "";
}

const urlField = myForm.elements.siteurl;
urlField.addEventListener("focusout", validateUrlField, false);
function validateUrlField(eo) {
  eo = eo || window.event;
  const urlValue = urlField.value;
  const urlError = document.getElementById("urlError");
  if (urlValue === "") {
    urlError.innerHTML = "Вы не ввели данные!";
  }
  else
    urlError.innerHTML = "";
}

const creatDateField = myForm.elements.creationdate;
creatDateField.addEventListener("focusout", validateCreatDateField, false);
function validateCreatDateField(eo) {
  eo = eo || window.event;
  const creatDateValue = creatDateField.value;
  const dateError = document.getElementById("dateError");
  if (creatDateValue === "") {
    dateError.innerHTML = "Вы не ввели данные!";
  }
  else
    dateError.innerHTML = "";
}

const visAmountField = myForm.elements.visitorsamount;
visAmountField.addEventListener("focusout", validateAmountField, false);
function validateAmountField(eo) {
  eo = eo || window.event;
  const visAmountValue = visAmountField.value;
  const amountError = document.getElementById("amountError");
  if (visAmountValue === "") {
    amountError.innerHTML = "Вы не ввели данные!";
  }
  else
    amountError.innerHTML = "";
}

const emailField = myForm.elements.email;
emailField.addEventListener("focusout", validateEmailField, false);
function validateEmailField(eo) {
  eo = eo || window.event;
  const emailValue = emailField.value;
  const emailError = document.getElementById("emailError");
  if (emailValue === "") {
    emailError.innerHTML = "Вы не ввели данные!";
  }
  else
    emailError.innerHTML = "";
}

const sectionField = myForm.elements.cataloguesection;
sectionField.addEventListener("focusout", validateSectionField, false);
function validateSectionField(eo) {
  eo = eo || window.event;
  const sectionValue = sectionField.value;
  const sectionError = document.getElementById("sectionError");
  if (sectionValue === "2") {
    sectionError.innerHTML = "Не выбирайте! Это уловка!";
  }
  else
    sectionError.innerHTML = "";
}

const hostField = myForm.elements.hostpayment;
for (let i = 0; i < hostField.length; i++) {
  hostField[i].addEventListener("change", function(eo) {
    eo = eo || window.event;
    const hostError = document.getElementById("hostError");
    if (hostField[i].value === "3") {
      hostError.innerHTML = "Это все понты, выбирайте другое!";
    }
    else
      hostError.innerHTML = "";
  });
}

const commentField = myForm.elements.commentpermission;
commentField.addEventListener("change", validateCommentField, false);
function validateCommentField(eo) {
  eo = eo || window.event;
  const commentValue = commentField.checked;
  const commentError = document.getElementById("commentError");
  if (!commentValue) {
    commentError.innerHTML = "Вы не разрешили оставлять отзывы, у нас такое не любят!";
  }
  else
    commentError.innerHTML = "";
}

const descriptField = myForm.elements.sitedescription;
descriptField.addEventListener("focusout", validateDescriptField, false);
function validateDescriptField(eo) {
  eo = eo || window.event;
  const descriptValue = descriptField.value;
  const descriptionError = document.getElementById("descriptionError");
  if (descriptValue === "") {
    descriptionError.innerHTML = "Вы не ввели данные!";
  }
  else
    descriptionError.innerHTML = "";
}

myForm.addEventListener("submit", validateForm, false);

function validateForm(eo) {
  eo = eo || window.event;
  try {
    const devsValue = devsField.value;
    const nameValue = nameField.value;
    const urlValue = urlField.value;
    const creatDateValue = creatDateField.value;
    const visAmountValue = visAmountField.value;
    const emailValue = emailField.value;
    const sectionValue = sectionField.value;
    const hostValue = hostField.value;
    const commentValue = commentField.checked;
    const descriptValue = descriptField.value;

    const devsError = document.getElementById("devsError");
    const nameError = document.getElementById("nameError");
    const urlError = document.getElementById("urlError");
    const dateError = document.getElementById("dateError");
    const amountError = document.getElementById("amountError");
    const emailError = document.getElementById("emailError");
    const sectionError = document.getElementById("sectionError");
    const hostError = document.getElementById("hostError");
    const commentError = document.getElementById("commentError");
    const descriptionError = document.getElementById("descriptionError");

    if (devsValue === "") {
      devsError.innerHTML = "Вы не ввели данные!";
    }

    if (devsValue.length > 30) {
      devsError.innerHTML = "Не более 30 символов!";
    }

    if (nameValue === "") {
      nameError.innerHTML = "Вы не ввели данные!";
    }

    if (urlValue === "") {
      urlError.innerHTML = "Вы не ввели данные!";
    }

    if (creatDateValue === "") {
      dateError.innerHTML = "Вы не ввели данные!";
    }

    if (visAmountValue === "") {
      amountError.innerHTML = "Вы не ввели данные!";
    }

    if (emailValue === "") {
      emailError.innerHTML = "Вы не ввели данные!";
    }

    if (sectionValue === "2") {
      sectionError.innerHTML = "Не выбирайте! Это уловка!";
    }
    
    for (let i = 0; i < hostField.length; i++) {
      let checked = false;
      if  (hostField[i].checked) {
        checked = true;
        hostError.innerHTML = "";
        break;
      }
      if (!checked) {
        hostError.innerHTML = "Выберите тип размещения!";
      }
    }

    for (let i = 0; i < hostField.length; i++) {
    if (hostField[i].value === "3" && hostField[i].checked) {
        hostError.innerHTML = "Это все понты, выбирайте другое!";
      }
    }
    
    if (!commentValue) {
      commentError.innerHTML = "Вы не разрешили оставлять отзывы, у нас такое не любят!";
    }

    if (descriptValue === "") {
      descriptionError.innerHTML = "Вы не ввели данные!";
    }

    const errors = document.getElementsByTagName('span');
    for (let i = 0; i < errors.length; i++) {
      if (errors[i].textContent) {
        eo.preventDefault();
        errors[i].previousElementSibling.focus() || errors[i].previousElementSibling.scrollIntoView();
        break;
      }
    }
  }
  catch (ex) {
    console.log(ex);
    alert("Произошел сбой! Проверьте введенные данные!");
    eo.preventDefault();
  }
}