const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
    // Button click actions
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            const currentBtn = document.querySelector('.active-btn');

            // Remove active class from the current active button, if exists
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }

            // Add active class to the clicked button
            this.classList.add('active-btn');
        });
    }

    //Sections Active
    allSections.forEach(section => {
        section.addEventListener('click', (e) =>{
            const id = e.target.dataset.id;
            if (id) {
                //Remove selected from other buttons
                sectBtns.forEach((btn) => {
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')

                //Hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active')
                })

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })
    })
}

PageTransitions();