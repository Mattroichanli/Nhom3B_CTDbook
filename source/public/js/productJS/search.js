const searchButton = document.getElementById("search");
        
if (searchButton) {
    searchButton.addEventListener("click", function() {
        const searchText = document.getElementById("searchInput").value;
        if (searchText !== '') {
            window.location.href = `/search/${encodeURIComponent(searchText)}`;
        }
    });
}