document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const duration = 360; // Thời gian chạy tính bằng giây (1 phút)
    let currentTime = 0;

    const updateProgressBar = () => {
        const progress = (currentTime / duration) * 100;
        progressBar.style.width = `${progress}%`;
        if (currentTime < duration) {
            currentTime++;
            setTimeout(updateProgressBar, 1000); // Cập nhật tiến độ mỗi giây
        }
    };

    updateProgressBar(); // Bắt đầu cập nhật tiến độ
});
