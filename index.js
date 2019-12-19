      var path = "https://swapi.co/api/people/";
      var page = 1;
      var slash = "/";
      fetching();

      function turnPage(num) {
        if (num === 0) {
          if (page === 1) {
            return false;
          }
          page = page - 1;
          fetching();
        }
        if (num === 1) {
          page = page + 1;
          fetching();
        }
        console.log(page);
      }

      function fetching() {
        fetch(path.concat(page, slash)).then(function(response) {
          response.json().then(function(data){
            document.getElementById("name").innerHTML = data.name;
          });
        });
      }