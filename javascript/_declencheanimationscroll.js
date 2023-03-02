// source : https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/ 
// const observerbouton = new IntersectionObserver(entries =>{
    
//     entries.forEach(entry => {

//         const troisboutons = entry.target.querySelector('.boutons');

//         if (entry.isIntersecting){
//             troisboutons.classList.add('entreegauche')
//             return;
//         }

//         troisboutons.classList.remove('entreegauche');
//     });
// });
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        const projun = entry.target.querySelector('#projetun');

        if (entry.isIntersecting){
         projun.classList.add('entreegauche')
         return;
        }
        
        projun.classList.remove('entreegauche');
     });
});
const observerdeux = new IntersectionObserver(entries =>{

    entries.forEach(entry => {

        const projdeux = entry.target.querySelector('#projetdeux');

        if (entry.isIntersecting){
         projdeux.classList.add('entreedroite')
         return;
        } 

        projdeux.classList.remove('entreedroite');
     });
});
const observertrois = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        const projtrois = entry.target.querySelector('#projettrois');

        if (entry.isIntersecting){
         projtrois.classList.add('entreegauche')
         return;
        }
        
        projtrois.classList.remove('entreegauche');
     });
});
const observerquatre = new IntersectionObserver(entries =>{

    entries.forEach(entry => {

        const projquatre = entry.target.querySelector('#projetquatre');

        if (entry.isIntersecting){
         projquatre.classList.add('entreedroite')
         return;
        }
        
        projquatre.classList.remove('entreedroite');
     });
});




// observerbouton.observe(document.querySelector('#contboutons'));
observer.observe(document.querySelector('#contprojun'));
observerdeux.observe(document.querySelector('#contprojdeux'));
observertrois.observe(document.querySelector('#contprojtrois'));
observerquatre.observe(document.querySelector('#contprojquatre'));
