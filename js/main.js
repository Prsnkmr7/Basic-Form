function validateForm() {
  var fields = [
    document.querySelectorAll("input[type=text]"),
    document.getElementsByTagName("select")
  ];
  for (var a = fields.length, i = 0; i < a; i++) {
    for (var b = fields[i].length, j = 0; j < b; j++) {
      instantValidation(target);
    }
  }
}

function shouldBeValidated(field) {
  return field.getAttribute("pattern") || field.getAttribute("required");
}
function instantValidation(field) {
  if (shouldBeValidated(field)) {
    var invalid =
      (field.getAttribute("required") && !field.value) ||
      (field.getAttribute("pattern") && field.value);
    if (!invalid && field.getAttribute("aria-invalid")) {
      field.removeAttribute("aria-invalid");
    } else if (invalid && !field.getAttribute("aria-invalid")) {
      field.setAttribute("aria-invalid", "true");
    }
  }
}
