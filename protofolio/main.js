//add class active to header on scroll
let header= document.querySelector(".header");
window.onscroll=function(){
    if(this.scrollY >=50){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}

function open_close_menu(){
    document.getElementById("links").classList.toggle("active");
}
document.querySelector(".close_menu").addEventListener("click", open_close_menu);



const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // يمنع الصفحة من إعادة التحميل

    // جلب القيم
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // التحقق من الحقول
    if (!name || !email || !mobile || !subject || !message) {
        alert("All fields are required!");
        return;
    }

    // تخزين البيانات مؤقتًا (اختياري)
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactEmail', email);
    localStorage.setItem('contactMobile', mobile);
    localStorage.setItem('contactSubject', subject);
    localStorage.setItem('contactMessage', message);

    // تحويل لصفحة الشكر
    window.location.href = "thankyou.html";
});

