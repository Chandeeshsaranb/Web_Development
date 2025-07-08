// document.addEventListener('DOMContentLoaded', function() {
//   const faqItems = document.querySelectorAll('.faq-item');
  
//   faqItems.forEach(item => {
//     const question = item.querySelector('.faq-question');
    
//     question.addEventListener('click', () => {
//       // Close all other items if this is not already active
//       const isActive = item.classList.contains('active');
      
//       // Close all items first
//       faqItems.forEach(otherItem => {
//         otherItem.classList.remove('active');
//       });
      
//       // Open this one if it wasn't active
//       if (!isActive) {
//         item.classList.add('active');
//       }
//     });
//   });
  
//   // Optionally open the first item by default
//   // faqItems[0].classList.add('active');
// });




let button=document.querySelectorAll(".container")

button.forEach(ques => {
    ques.addEventListener("click",()=>{
        ques.classList.toggle("active")
    })
    
});