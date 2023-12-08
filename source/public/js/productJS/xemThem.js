document.querySelectorAll(".xemthem button").forEach(button => {
    button.addEventListener("click", function() {
        // Lấy đường dẫn cần chuyển đến từ thuộc tính data-target
        const target = button.getAttribute("data-target");
        
        // Thực hiện chuyển hướng đến trang tương ứng
        window.location.href = `/${target}`;
    });
});