var fetchButton = document.getElementById('fetch-button');

function getApi() {
    // fetch request gets a list of all 
    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=301abb42e89fddd7a250ac02d53fe894';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        //Loop over the data to generate a table, each table row will have a link to the repo url
        // for (var i = 0; i < data.length; i++) {
        //   // Creating elements, tablerow, tabledata, and anchor
        //   var createTableRow = document.createElement('tr');
        //   var tableData = document.createElement('td');
        //   var link = document.createElement('a');
  
        //   // Setting the text of link and the href of the link
        //   link.textContent = data[i].html_url;
        //   link.href = data[i].html_url;
  
        //   // Appending the link to the tabledata and then appending the tabledata to the tablerow
        //   // The tablerow then gets appended to the tablebody
        //   tableData.appendChild(link);
        //   createTableRow.appendChild(tableData);
        //   tableBody.appendChild(createTableRow);
        // }
      });
  };

  fetchButton.addEventListener('click', getApi);








  // -------------------------------modal----------------------------------
  var myModal = document.getElementById('fetch-button');

  addnote.addEventListener('click', myModal);
 
 
  $('#myModal').modal(options)