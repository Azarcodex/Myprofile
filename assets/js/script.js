const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const text = document.getElementById("comment").value.trim();
  let pattern_name = /^[A-Za-z\s]+$/;
  let pattern_email = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  let valid = true;
  if (name === "") {
    window.alert("Enter the name");
    valid = false;
    return;
  } else if (!pattern_name.test(name)) {
    window.alert("Enter valid name");
    return;
  }
  if (email === "") {
    window.alert("Enter the email");
    valid = false;
    return;
  } else if (!pattern_email.test(email)) {
    window.alert("Enter valid email");
    valid = false;
    return;
  }
  if (text === "") {
    window.alert("Write anything");
    valid = false;
    return;
  } else if (words.length < 2) {
    window.alert("write atleast 2 words");
    false;
    return;
  }
  //
  if (valid) {
    alert("Data successfully uploaded");
    form.submit();
  }
  setTimeout(() => {
    form.reset()
  }, 1000);
  
});
