let navbar_nested_links = document.querySelectorAll('.navbar__link_nested');


navbar_nested_links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let submenu = e.target.nextElementSibling;

        link.classList.toggle('is-open');

        if (link.classList.contains('is-open')) {
            
            let scrollHeight = submenu.scrollHeight;
            submenu.style.height = scrollHeight+'px';
            return;
        }

        submenu.style.height = 0+'px';
            
        
    })
})