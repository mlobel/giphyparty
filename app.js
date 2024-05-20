console.log("Let's get this party started!");
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var searchQuery = document.getElementById("searchInput").value;
  fetchGif(searchQuery);
});

document.getElementById("removeButton").addEventListener("click", function () {
  document.getElementById("gifContainer").innerHTML = "";
});

function fetchGif(query) {
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search",
    type: "GET",
    data: {
      q: query,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
      limit: 1,
    },
    success: function (response) {
      appendGif(response.data[0].images.original.url);
    },
  });
}

function appendGif(url) {
  var img = document.createElement("img");
  img.src = url;
  document.getElementById("gifContainer").appendChild(img);
}
