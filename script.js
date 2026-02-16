// ===============================
// 🎆 DANH SÁCH LỜI CHÚC
// ===============================
const wishesDB = {
   "Bố": "Con kính chúc Bố năm mới Bính Ngọ sức khỏe dẻo dai, tâm thế bình an và luôn giữ được ngọn lửa vui vẻ trong cuộc sống. Mong mọi dự định của Bố đều thành công rực rỡ, vạn sự cát tường, như ý! ❤️",
    "Mẹ": "Con kính chúc Mẹ năm mới vạn phúc an khang, nhan sắc mãi trẻ trung và nụ cười hạnh phúc luôn nở trên môi. Cầu mong một năm mới bình an, may mắn và ngập tràn yêu thương sẽ đến với Mẹ của con! 🌹",
    "anhQuy": "Chúc anh Quý năm mới Bính Ngọ công thành danh toại, sự nghiệp thăng tiến như diều gặp gió. Chúc anh Quý luôn giữ vững bản lĩnh, đánh đâu thắng đó và gặt hái được những thành công rực rỡ nhất trong cuộc sống. Mã đáo thành công anh nheeeee! 🐎🏆",
    "Bà": "Con kính chúc Bà năm mới thêm tuổi mới nhưng sức khỏe luôn dẻo dai, tâm hồn luôn an nhiên, vui vẻ. Mong Bà sống lâu trăm tuổi để chứng kiến con cháu trưởng thành và tận hưởng những giây phút bình yên, sum vầy nhất bên gia đình nhéeee! 🧧",
    "emThanh": "Chúc Thanh năm mới 2026 thật rạng rỡ và tràn đầy năng lượng! Đây là một năm rất quan trọng với kỳ thi Tốt nghiệp THPT, chúc Thanh ôn luyện thật tốt, giữ vững tâm lý và đỗ vào ngôi trường hằng mong ước nhé. Cố lên Thanh ơiiiii! 🌸📖",
    "banQuan":"Gửi bạn Quân, người sĩ quan tương lai! Năm mới 2026 đến rồi, chúc bạn luôn giữ được trái tim nóng và cái đầu lạnh, 'chân cứng đá mềm' trên mọi nẻo đường hành quân. Mong bạn học tập thật tốt, rèn luyện thật hăng nhưng đừng quên chăm sóc bản thân mình nhé. Hy vọng năm nay sẽ mang đến cho bạn thật nhiều trải nghiệm rực rỡ và bản lĩnh vững vàng để trở thành niềm tự hào của mọi người. Bình an và quyết thắng nhé bạn tuiiii! 🎖️✨",
    "chiXu": "Chị Xù đáng yêu của em ơi! Năm mới này em chúc chị nhan sắc cứ thế mà 'thăng hạng' vùn vụt, thần thái lúc nào cũng rạng ngời như nắng ban mai. Chúc chị ví tiền luôn rủng rỉnh để tha hồ 'chill', gặp chuyện gì cũng hóa cát tường, vạn sự hanh thông. Mong chị luôn giữ được tinh thần lạc quan, yêu đời và nhận được thật nhiều điều ngọt ngào từ thế giới này, vì chị xứng đáng với tất cả những điều tốt đẹp nhấtttt! 🎀💰",
    "Hthunniudau": "Gửi Hoài Thương bé bỏng, năm 2026 này chúc Thương luôn tỏa sáng theo cách riêng của mình nhé. Mong rằng mỗi sớm mai thức dậy, Thương đều thấy tâm hồn mình nở hoa, mọi nỗ lực trong học tập và công việc đều mang về những trái ngọt ngoài mong đợi. Chúc Thương một năm mới vạn sự hanh thông, sức khỏe dồi dào và luôn giữ được nụ cười tỏa nắng khiến ai nhìn cũng thấy mê nhaaa. Mãi xinh đẹp và thành công như thế nhé Thương ơiii! ✨🌸",
    "Tongtaicuaem": "Chúc Tổng tài của em một năm mới Bính Ngọ thật bùng nổ và đầy quyền lực nhe! Chúc Thủy luôn giữ vững sự kiên định, quyết đoán và bản lĩnh thép để chinh phục mọi mục tiêu đã đề ra. Mong rằng năm nay tài lộc sẽ đổ về 'tài khoản' của Tổng tài dồi dào như nước, mọi dự định lớn nhỏ đều sớm gặt hái thành quả rực rỡ. Đừng quên dành thời gian nghỉ ngơi và ngủ thật sớm nhéee! 🧧💎",
    "BeHlun":" Gửi Lương - cô vợ bé nhỏ và đáng yêu nhất hệ mặt trời của tui! Năm mới chúc em yêu luôn tràn ngập hạnh phúc và tiếng cười. Chúc em năm nay học tập thật bứt phá, thi đâu đậu đó với điểm số cao chót vót nha. Mong em lúc nào cũng giữ được nét dịu dàng, xinh xắn và mọi ước mơ nhỏ bé của em đều sẽ được năm 2026 hiện thực hóa một cách ngọt ngào nhất. Thương em và ủng hộ em hết mình luôn nè! 🌊🎓",
    "Bemoxinhiuu": "Chúc Trang năm mới 2026 nhan sắc thăng hạng, thần thái luôn rạng rỡ và tươi tắn nhé. Mong rằng năm Bính Ngọ sẽ mang đến cho Trang thật nhiều tài lộc, tiền bạc rủng rỉnh và tình duyên thì luôn phơi phới như ý nguyện. Chúc Trang có một năm đầy ắp những trải nghiệm tuyệt vời, mỗi ngày đều tràn ngập niềm vui và tiếng cười. Hãy luôn tự tin và có một năm 2026 thật rực rỡ nhé Trang ơiiiii! 💃✨",
    "chiTuyet": "Chúc chị Tuyết năm mới an khang, công việc thuận lợi, gia đình ấm êm. Chúc chị luôn rạng rỡ và đạt được mọi tâm nguyện trong năm Bính Ngọ! ❄️🧧",
    "emTu":"Chúc Tú năm mới công việc hanh thông, tiền bạc rủng rỉnh, vạn sự như ý! 🧧✨",
    "default": "Chúc năm mới 2026 luôn đong đầy niềm vui, sức khỏe dồi dào và vạn sự cát tường. Mong rằng năm Bính Ngọ sẽ mở ra thật nhiều cơ hội mới, gặt hái được những thành công rực rỡ và hoàn thành được mọi dự định còn dang dở. Chúc mỗi ngày trôi qua đều tràn ngập tiếng cười, tâm thế luôn bình an và tận hưởng một năm mới thật hạnh phúc, trọn vẹn bên những người thân yêu! 🧧✨"
};

const defaultWish = "Chúc năm mới 2026 luôn đong đầy niềm vui, sức khỏe dồi dào và vạn sự cát tường. Mong rằng năm Bính Ngọ sẽ mở ra thật nhiều cơ hội mới, gặt hái được những thành công rực rỡ và hoàn thành được mọi dự định còn dang dở. Chúc mỗi ngày trôi qua đều tràn ngập tiếng cười, tâm thế luôn bình an và tận hưởng một năm mới thật hạnh phúc, trọn vẹn bên những người thân yêu! 🧧✨";
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
