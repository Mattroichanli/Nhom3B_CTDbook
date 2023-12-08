// Lắng nghe sự kiện click trên button menu
document.getElementById("menu").addEventListener("click", function() {
    // Lấy ra phần dropdown
    var dropdown = document.getElementById("myDropdown");
    // Kiểm tra xem dropdown hiện đang ẩn hay hiển thị
    if (dropdown.style.display === "none") {
        // Nếu đang ẩn, thì hiển thị dropdown bằng cách thêm class "show" vào nó
        dropdown.style.display = "block";
    } else {
        // Nếu đang hiển thị, thì ẩn dropdown bằng cách loại bỏ class "show" khỏi nó
        dropdown.style.display = "none";
    }
});