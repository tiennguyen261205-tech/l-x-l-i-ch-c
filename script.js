// ===============================
// 🎆 DANH SÁCH LỜI CHÚC
// ===============================
const wishesDB = {
   "Bố": "Con kính chúc Bố năm mới Bính Ngọ sức khỏe dẻo dai, tâm thế bình an và luôn giữ được ngọn lửa vui vẻ trong cuộc sống. Mong mọi dự định của Bố đều thành công rực rỡ, vạn sự cát tường, như ý! ❤️",
    "Mẹ": "Con kính chúc Mẹ năm mới vạn phúc an khang, nhan sắc mãi trẻ trung và nụ cười hạnh phúc luôn nở trên môi. Cầu mong một năm mới bình an, may mắn và ngập tràn yêu thương sẽ đến với Mẹ của con! 🌹",
    "Quý": "Chúc anh Quý năm mới Bính Ngọ công thành danh toại, sự nghiệp thăng tiến như diều gặp gió. Chúc anh Quý luôn giữ vững bản lĩnh, đánh đâu thắng đó và gặt hái được những thành công rực rỡ nhất trong cuộc sống. Mã đáo thành công anh nheeeee! 🐎🏆",
    "Bà nội": "Con kính chúc Bà Nội năm mới thêm tuổi mới nhưng sức khỏe luôn dẻo dai, tâm hồn luôn an nhiên, vui vẻ. Mong Bà sống lâu trăm tuổi để chứng kiến con cháu trưởng thành và tận hưởng những giây phút bình yên, sum vầy nhất bên gia đình nhéeee! 🧧",
    "Thanh": "Chúc Thanh năm mới 2026 thật rạng rỡ và tràn đầy năng lượng! Đây là một năm rất quan trọng với kỳ thi Tốt nghiệp THPT, chúc Thanh ôn luyện thật tốt, giữ vững tâm lý và đỗ vào ngôi trường hằng mong ước nhé. Cố lên Thanh ơiiiii! 🌸📖",
    "Quân": "Gửi bạn Quân - người bạn bè, người chiến sĩ dũng cảm! Chúc Quân năm mới 'chân cứng đá mềm', vượt nắng thắng mưa, hoàn thành xuất sắc mọi nội dung huấn luyện. Mong năm nay Quân sẽ bản lĩnh hơn nữa, xứng danh bộ đội cụ Hồ và sớm trở thành một sĩ quan ưu tú trong tương lai nhé. Vạn sự như ý, quyết thắng Quân ơiiiii! 🎖️⭐",
    "Xù": "Chúc chị Xù năm mới nhan sắc thăng hạng, thần thái rạng rỡ, túi tiền rủng rỉnh. Chúc chị luôn giữ được tinh thần lạc quan, vui vẻ, gặp dữ hóa lành và gặt hái được thật nhiều điều may mắn, niềm vui trong cuộc sống này nhó! 🎀💰",
    "Thương": "Chúc Hoài Thương năm mới luôn tỏa sáng với vẻ đẹp và tài năng của mình. Mong năm 2026 mở ra thật nhiều cơ hội mới, giúp Thương gặt hái thành công ngoài mong đợi. Chúc bé thưnnnnn xinh lun mạnh khỏe và vạn sự đều hanh thông nghen! ✨🌸",
    "Thủy": "Chúc tổng tài của em năm mới Bính Ngọ vạn sự như ý!Chúc tổng tài luôn giữ được sự kiên định, bản lĩnh trong học tập cũng như cuộc sống. Mong năm nay tài lộc đến với tổng tài cụa emmmm dồi dào, dự định lớn nhỏ đều sớm đạt được thành quả như ý nhé! 🧧💎",
    "Lương": "Chúc Lương - cô vợ bé nhỏ cụa tuiiii - một năm mới thật hạnh phúc! Chúc eiu năm nay cố gắng, gặt hái kết quả học tập thật cao. Chúc eiu luôn xinh đẹp, dịu dàng và mọi dự định đều thành công nhennn! 🌊🎓",
    "default": "Chúc bạn và gia đình một năm mới Bính Ngọ 2026: An khang thịnh vượng - Vạn sự như ý - Tỷ sự như mơ. Mong mọi điều tốt đẹp nhất sẽ đến với bạn trong hành trình rực rỡ sắp tới! 🎉🧧"
};

const defaultWish = "Chúc bạn một năm mới Bính Ngọ 2026: Vạn sự như ý - Tỷ sự như mơ - Triệu điều bất ngờ! 🎉✨";

const bgMusic = document.getElementById("bgMusic");
if (bgMusic) bgMusic.volume = 0;

// ===============================
// 🎵 HÀM NHẠC FADE MƯỢT
// ===============================
function fadeInMusic() {
    if (!bgMusic) return;
    bgMusic.play().catch(() => {});
    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 1) {
            vol += 0.05;
            bgMusic.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 150);
}

function toggleMusic() {
    const btn = document.getElementById("music-btn");
    if (!bgMusic) return;

    if (bgMusic.paused) {
        fadeInMusic();
        if (btn) btn.innerText = "🔊";
    } else {
        bgMusic.pause();
        if (btn) btn.innerText = "🎵";
    }
}

// ===============================
// 🎯 XỬ LÝ MỞ LỜI CHÚC
// ===============================
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // bỏ dấu tiếng Việt
}

function openLuck() {
    const nameInput = document.getElementById("userName").value.trim();
    if (!nameInput) {
        alert("Vui lòng nhập tên để thần tài gõ cửa! 🚪");
        return;
    }

    const normalizedName = normalizeText(nameInput);
    let foundWish = defaultWish;

    // So khớp không phân biệt dấu
    for (let key in wishesDB) {
        if (normalizeText(key) === normalizedName) {
            foundWish = wishesDB[key];
            break;
        }
    }

    document.getElementById("resName").innerText = `Gửi ${nameInput} 💌`;
    document.getElementById("resWish").innerText = foundWish;

    // Random số may mắn
    document.getElementById("num1").innerText =
        Math.floor(Math.random() * 100).toString().padStart(2, "0");
    document.getElementById("num2").innerText =
        Math.floor(Math.random() * 100).toString().padStart(2, "0");

    document.getElementById("input-section").classList.add("hidden");
    document.getElementById("result-section").classList.remove("hidden");

    if (bgMusic && bgMusic.paused) fadeInMusic();

    startConfetti();
}

// ===============================
// 🎆 CONFETTI TỐI ƯU MƯỢT
// ===============================
const canvas = document.getElementById("confetti-canvas");
let ctx, particles = [];

if (canvas) {
    ctx = canvas.getContext("2d");
}

function initCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function startConfetti() {
    if (!canvas) return;
    particles = [];

    const colors = ['#FFD700', '#FF0000', '#FFFFFF', '#FF69B4'];

    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            speed: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            swing: Math.random() * 2
        });
    }
}


function animateConfetti() {
    if (!canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);

        p.y += p.speed;
        p.x += Math.sin(p.y * 0.01) * p.swing;

        if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(animateConfetti);
}

window.addEventListener("resize", initCanvas);
initCanvas();
animateConfetti();
