function submitFormAjax() {
  let xmlhttp= window.XMLHttpRequest ?
      new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200)
          alert(this.responseText); // Here is the respondse
  }

  let name = document.getElementById('name').value;
  let surname = document.getElementById('surname').value;
  let email = document.getElementById('email').value;
  let content = document.getElementById('textarea').value;

  xmlhttp.open("GET","empty.php?name=" + name + "&surname=" + surname + "&email=" + email + "&content=" + content, true);
  xmlhttp.send();
}