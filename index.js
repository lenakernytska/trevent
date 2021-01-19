const refs = {
    selectRef: document.querySelector(".header_select"),
    selectItemRef: document.querySelector(".header_select_list"),
    selectCurrent: document.querySelector(".header_select_current"),
};

refs.selectRef.addEventListener("click", selectHandler);
refs.selectItemRef.addEventListener("click", selectItemHandler);


function selectHandler() {
    refs.selectRef.classList.toggle("is-active");
};

function selectItemHandler(event){
    const currentText = event.target.innerHTML;
    refs.selectCurrent.innerHTML = currentText;
}
    

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

      mobileMenuRef.classList.toggle("is-open");
  });
})();

const navLinkRef = document.querySelector(".submenu");
const submenuNavRef = document.querySelector(".header_navigation_submenu_wrapper");
const bodyRef = document.querySelector("body");
console.log(bodyRef)
navLinkRef.addEventListener("mouseover", submenuMouseOn);
 bodyRef.addEventListener("click", submenuMouseOut)
    
function submenuMouseOn(event) {
  event.preventDefault();
  console.log(event)
  submenuNavRef.classList.add("is-open");
}
function submenuMouseOut() {
  submenuNavRef.classList.remove("is-open");
}

const productRef = document.querySelectorAll(".products_list_item");
const titleRef = document.querySelectorAll(".products_list_title_wrapper");
const hoverRef = document.querySelectorAll(".products_list_hover_wrapper");

productRef.forEach((item)=>item.addEventListener("mouseover", onHoverHandler));
productRef.forEach((item)=>item.addEventListener("mouseout", outHoverHandler));


function onHoverHandler() {
  titleRef.forEach((item) => item.classList.add("is-hidden"));
  hoverRef.forEach((item) => item.classList.add("is-focused"));
}

function outHoverHandler() {
   titleRef.forEach((item) => item.classList.remove("is-hidden"));
  hoverRef.forEach((item) => item.classList.remove("is-focused"));
}


 