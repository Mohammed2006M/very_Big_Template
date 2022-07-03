let navItems = document.querySelector('.nav__items');
let openNavBtn = document.querySelector('#open__nav-btn');
let closeNavBtn = document.querySelector('#close__nav-btn');

// opens nav dropdown
let openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none'
    closeNavBtn.style.display = 'inline-block'
}
openNavBtn.addEventListener('click', openNav);

// close nav dropdown
let closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block'
    closeNavBtn.style.display = 'none'
}
closeNavBtn.addEventListener('click', closeNav);





let sidebar = document.querySelector("aside");
let showSidebarBtn = document.querySelector("#show__sidebar-btn");
let hideSidebarBtn = document.querySelector("#hide__sidebar-btn");




let showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}


let hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display = 'inline-block';
    hideSidebarBtn.style.display = 'none';
}

showSidebarBtn.addEventListener("click", showSidebar);
hideSidebarBtn.addEventListener("click", hideSidebar);