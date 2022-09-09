window.addEventListener("load", () => {
    function sendData() {
      const XHR = new XMLHttpRequest();
  
      const FD = new FormData(form);

      XHR.addEventListener("load", (event) => {
        alert(event.target.responseText);
      });
  
      XHR.addEventListener("error", (event) => {
        alert();
      });
  
      XHR.open("POST", "../empty.php");
  
      XHR.send(FD);

    }
  
    const form = document.getElementById("formContact");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      sendData();
    });
  });