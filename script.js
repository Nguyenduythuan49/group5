// ========== JAVASCRIPT CHO TRANG CHỦ QUẢN LÝ ==========

// Danh sách các CV thành viên
const members = [
    {
        name: 'Nguyễn Duy Thuần',
        file: 'index1.html',
        description: 'Thiết kế hiện đại với theme màu đỏ'
    },
    {
        name: 'Trần Văn Quang', 
        file: 'index2.html',
        description: 'Thiết kế minimalist với theme màu xanh lá'
    },
    {
        name: 'Nguyễn Trần Duy Khả',
        file: 'index3.html', 
        description: 'Thiết kế professional với theme màu xanh dương'
    },
    {
        name: 'Trần Phan Đình Huy',
        file: 'index4.html',
        description: 'Thiết kế creative với theme màu tím'
    },
    {
        name: 'Nguyễn Thanh Vũ',
        file: 'index5.html',
        description: 'Thiết kế modern với theme màu cam'
    }
];

// ========== KHỞI TẠO TRANG WEB ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Trang quản lý nhóm 5 đã được tải thành công!');
    initializeAnimations();
    addKeyboardNavigation();
});

// ========== HIỂN THỊ CV THÀNH VIÊN ==========
function showMemberCV(index) {
    if (index >= 0 && index < members.length) {
        const member = members[index];
        
        // Ẩn trang chủ
        document.getElementById('welcome-section').classList.add('hidden');
        
        // Hiển thị container CV
        const cvContainer = document.getElementById('cv-container');
        cvContainer.classList.remove('hidden');
        cvContainer.classList.add('animate-fadeIn');
        
        // Load CV vào iframe
        const iframe = document.getElementById('cv-frame');
        iframe.src = member.file;
        
        // Hiển thị nút quay lại
        document.getElementById('back-btn-container').classList.remove('hidden');
        
        // Cập nhật title
        document.title = `${member.name} - Hồ Sơ Nhóm 5`;
        
        console.log(`📄 Đang hiển thị CV của ${member.name}`);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ========== QUAY LẠI TRANG CHỦ ==========
function showWelcome() {
    // Hiển thị trang chủ
    document.getElementById('welcome-section').classList.remove('hidden');
    document.getElementById('welcome-section').classList.add('animate-fadeIn');
    
    // Ẩn container CV
    document.getElementById('cv-container').classList.add('hidden');
    document.getElementById('back-btn-container').classList.add('hidden');
    
    // Reset iframe
    document.getElementById('cv-frame').src = '';
    
    // Reset title
    document.title = 'Hồ Sơ Nhóm 5 - Đại học Giao thông Vận tải';
    
    console.log('🏠 Quay lại trang chủ');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== KHỞI TẠO ANIMATIONS ==========
function initializeAnimations() {
    // Animate navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach((btn, index) => {
        btn.style.animationDelay = `${index * 0.1}s`;
        btn.classList.add('animate-slideIn');
    });
    
    // Animate welcome section
    setTimeout(() => {
        document.getElementById('welcome-section').classList.add('animate-fadeIn');
    }, 500);
}

// ========== ĐIỀU HƯỚNG BẰNG BÀN PHÍM ==========
function addKeyboardNavigation() {
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case '1':
                showMemberCV(0);
                break;
            case '2':
                showMemberCV(1);
                break;
            case '3':
                showMemberCV(2);
                break;
            case '4':
                showMemberCV(3);
                break;
            case '5':
                showMemberCV(4);
                break;
            case 'Escape':
                showWelcome();
                break;
            case 'Home':
                showWelcome();
                break;
        }
    });
    
    console.log('⌨️ Điều hướng bàn phím đã được kích hoạt (1-5 để chọn CV, ESC/Home để về trang chủ)');
}

// ========== LOADING STATES ==========
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = '<div class="loading"></div> Đang tải...';
    }
}

function hideLoading(elementId, originalContent) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = originalContent;
    }
}

// ========== UTILITY FUNCTIONS ==========
function getMemberInfo(index) {
    return members[index] || null;
}

function getAllMembers() {
    return members;
}

function searchMember(name) {
    return members.find(member => 
        member.name.toLowerCase().includes(name.toLowerCase())
    );
}

// ========== RESPONSIVE HANDLING ==========
function handleResize() {
    const iframe = document.getElementById('cv-frame');
    if (window.innerWidth < 768) {
        iframe.style.height = '80vh';
    } else {
        iframe.style.height = '100vh';
    }
}

window.addEventListener('resize', handleResize);

// ========== ERROR HANDLING ==========
window.addEventListener('error', function(event) {
    console.error('❌ Lỗi:', event.error);
});

// ========== IFRAME LOAD HANDLING ==========
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('cv-frame');
    
    iframe.addEventListener('load', function() {
        console.log('✅ CV đã tải thành công');
    });
    
    iframe.addEventListener('error', function() {
        console.error('❌ Lỗi tải CV');
        iframe.innerHTML = '<div class="text-center p-8 text-red-500">Không thể tải CV. Vui lòng thử lại.</div>';
    });
});

// ========== SMOOTH TRANSITIONS ==========
function addSmoothTransition(element) {
    element.style.transition = 'all 0.3s ease';
}

// ========== EXPORT FUNCTIONS FOR GLOBAL ACCESS ==========
window.showMemberCV = showMemberCV;
window.showWelcome = showWelcome;

console.log('🎯 JavaScript quản lý nhóm 5 đã sẵn sàng!');
