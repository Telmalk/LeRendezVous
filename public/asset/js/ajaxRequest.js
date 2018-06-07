const ui = {
	spanTotal: document.querySelector('.spanTotal'),
	spanAdmis: document.querySelector('.spanAdmis'),
	spanNonAdmis: document.querySelector('.spanNonAdmis'),
	spanAutres: document.querySelector('.spanAutres')
};

let ourRequest = new XMLHttpRequest();
ourRequest.open('GET', './asset/js/data.json');

ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    let ourData = JSON.parse(ourRequest.responseText);
    ui.spanTotal.textContent = ourData.total;
    ui.spanAdmis.textContent = ourData.admis;
    ui.spanNonAdmis.textContent = ourData.nonAdmis;
    ui.spanAutres.textContent = ourData.autres;
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
  
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();