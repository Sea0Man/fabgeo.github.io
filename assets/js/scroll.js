const the_animation = document.querySelectorAll('.animation')
const the_animation2 = document.querySelectorAll('.animation2')
const the_animation3 = document.querySelectorAll('.animation3')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }    
    })
},
   { threshold: 0.5
   });
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  }

const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        if (entry2.isIntersecting) {
            entry2.target.classList.add('scroll-animation2')
        }
            else {
                entry2.target.classList.remove('scroll-animation2')
            }      
    })
},
   { threshold: 0.5
   });
  for (let j = 0; j < the_animation2.length; j++) {
   const elements2 = the_animation2[j];

    observer2.observe(elements2);
  }

const observer3 = new IntersectionObserver((entries3) => {
    entries3.forEach((entry3) => {
        if (entry3.isIntersecting) {
            entry3.target.classList.add('scroll-animation3')
        }
            else {
                entry3.target.classList.remove('scroll-animation3')
            }      
    })
},
   { threshold: 0.5
   });
  for (let j = 0; j < the_animation3.length; j++) {
   const elements3 = the_animation3[j];

    observer3.observe(elements3);
  }