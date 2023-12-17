// about me section fadein
document.addEventListener("DOMContentLoaded", function() {
    // Determine the threshold based on the viewport width
    const threshold = window.innerWidth > 400 ? 0.3 : 0.08;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When entering the viewport
                entry.target.classList.remove('invisible', 'animate__fadeOut');
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
            } else {
                // When leaving the viewport
                entry.target.classList.add('animate__fadeOut');
                entry.target.classList.remove('animate__fadeIn');
            }
        });
    }, { threshold: threshold });

    const img = document.querySelector('.fadein');
    observer.observe(img);
});




// change color when entering projects section
// document.addEventListener("DOMContentLoaded", function() {
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             const navbar = document.getElementById("navbar");
//             if (entry.isIntersecting) {
//                 // When entering the element
//                 navbar.classList.add('darkforest', 'text-amber-50');
//                 navbar.classList.remove('bg-amber-50', 'darkforesttext');
//             } else {
//                 // When leaving the element
//                 // need to edit this so that the leaving threshold is differet. rn, when it goes past 0.88
//                 // it will disappear again.
//                 navbar.classList.remove('darkforest', 'text-amber-50');
//                 navbar.classList.add('bg-amber-50', 'darkforesttext');
//             }
//         });
//     }, { threshold: 0.86 });

//     const img = document.querySelector('.projects_section');
//     observer.observe(img);
// });
// need to change so that each section produces its own color

//about section return color
// document.addEventListener("DOMContentLoaded", function() {
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             const navbar = document.getElementById("navbar");
//             if (entry.isIntersecting && entry.boundingClientRect.top <= window.innerHeight / 4) {
//                 // When the top of the section reaches the top quarter of the viewport
//                 navbar.classList.add('darkforest', 'text-amber-50');
//                 navbar.classList.remove('bg-amber-50', 'darkforesttext');
//             } else {
//                 // When the top of the section is not at the top quarter of the viewport
//                 navbar.classList.remove('darkforest', 'text-amber-50');
//                 navbar.classList.add('bg-amber-50', 'darkforesttext');
//             }
//         });
//     }, {
//         threshold: 0.01, // Set a low threshold to ensure the callback runs for small intersections
//         rootMargin: "-11.5% 0px 0px 0px" // Top quarter of the screen
//     });

//     const section = document.querySelector('.about_section');
//     observer.observe(section);
// });





// experience section fadein #1
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the element is in the viewport
                entry.target.classList.remove('invisible', 'animate__fadeOut');
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
            } else {
                // When the element leaves the middle of the viewport
                // entry.target.classList.add('animate__fadeOut');
                // entry.target.classList.remove('animate__fadeIn');
            }
        });
    }, {
        // Assuming the viewport height is consistent and the element should trigger at halfway down the viewport
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0.01 // This needs to be greater than 0 to ensure the callback runs when intersecting
    });

    const img = document.querySelector('.experience1');
    observer.observe(img);
});

// experience section fadein #2.1
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the element is in the viewport
                entry.target.classList.remove('invisible', 'animate__fadeOut');
                entry.target.classList.add('animate__animated', 'animate__fadeInDown');
            } else {
                // When the element leaves the middle of the viewport
                // entry.target.classList.add('animate__fadeOut');
                // entry.target.classList.remove('animate__fadeInDown');
            }
        });
    }, {
        // Assuming the viewport height is consistent and the element should trigger at halfway down the viewport
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0.01 // This needs to be greater than 0 to ensure the callback runs when intersecting
    });

    const img = document.querySelector('.experience2_bar');
    observer.observe(img);
});

// experience section fadein #2.2
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the element is in the viewport
                entry.target.classList.remove('invisible', 'animate__fadeOut');
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
            } else {
                // When the element leaves the middle of the viewport
                // entry.target.classList.add('animate__fadeOut');
                // entry.target.classList.remove('animate__fadeIn');
            }
        });
    }, {
        // Assuming the viewport height is consistent and the element should trigger at halfway down the viewport
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0.6 // This needs to be greater than 0 to ensure the callback runs when intersecting
    });

    const img = document.querySelector('.experience2_text');
    observer.observe(img);
});

// experience section fadein #3.1
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the element is in the viewport
                entry.target.classList.remove('invisible', 'animate__fadeOut');
                entry.target.classList.add('animate__animated', 'animate__fadeInDown');
            } else {
                // When the element leaves the middle of the viewport
                // entry.target.classList.add('animate__fadeOut');
                // entry.target.classList.remove('animate__fadeInDown');
            }
        });
    }, {
        // Assuming the viewport height is consistent and the element should trigger at halfway down the viewport
        rootMargin: '-5% 0px -5% 0px',
        threshold: 0.8 // This needs to be greater than 0 to ensure the callback runs when intersecting
    });

    const img = document.querySelector('.experience3_bar');
    observer.observe(img);
});

// experience section fadein #3.2
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the element is in the viewport
                entry.target.classList.remove('invisible', 'animate__fadeOut');
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
            } else {
                // When the element leaves the middle of the viewport
                // entry.target.classList.add('animate__fadeOut');
                // entry.target.classList.remove('animate__fadeIn');
            }
        });
    }, {
        // Assuming the viewport height is consistent and the element should trigger at halfway down the viewport
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0.8 // This needs to be greater than 0 to ensure the callback runs when intersecting
    });

    const img = document.querySelector('.experience3_text');
    observer.observe(img);
});

// change color when entering projects section
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const navbar = document.getElementById("navbar");
            if (entry.isIntersecting) {
                // When entering the element
                navbar.classList.add('darkforest', 'text-amber-50');
                navbar.classList.remove('bg-amber-50', 'darkforesttext');
                navbar.classList.remove('bg-amber-50', 'darkforesttext');
            } else {
                // When leaving the element
                // need to edit this so that the leaving threshold is differet. rn, when it goes past 0.88
                // it will disappear again.
                // navbar.classList.remove('darkforest', 'text-amber-50');
                // navbar.classList.add('bg-amber-50', 'darkforesttext');
            }
        });
    }, { threshold: 0.1 });

    const img = document.querySelector('.contacts_section');
    observer.observe(img);
});