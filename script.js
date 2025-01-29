const toggleMenu = document.getElementById("toggle-menu"); // اختيار أيقونة القائمة
const listMenu = document.getElementById("list-menu"); // اختيار القائمة // اختيار القائمة

toggleMenu.addEventListener("click", () => {
    listMenu.classList.toggle("hidden"); // تبديل الكلاس hidden
});


toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("fa-times"); // تبديل الكلاس hidden
    listIcon.classList.toggle("toggle-menu"); // تبديل الكلاس hidden
});