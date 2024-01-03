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
const observercinq = new IntersectionObserver(entries =>{

    entries.forEach(entry => {

        const projcinq = entry.target.querySelector('#projetmaquetteun');

        if (entry.isIntersecting){
         projcinq.classList.add('entreegauche')
         return;
        }
        
        projcinq.classList.remove('entreegauche');
     });
});
const observersix = new IntersectionObserver(entries =>{

    entries.forEach(entry => {

        const projsix = entry.target.querySelector('#projetmaquettedeux');

        if (entry.isIntersecting){
         projsix.classList.add('entreedroite')
         return;
        }
        
        projsix.classList.remove('entreedroite');
     });
});
const observersept = new IntersectionObserver(entries =>{

    entries.forEach(entry => {

        const projsept = entry.target.querySelector('#projetmaquettetrois');

        if (entry.isIntersecting){
         projsept.classList.add('entreegauche')
         return;
        }
        
        projsept.classList.remove('entreegauche');
     });
});
const observerhuit = new IntersectionObserver(entries =>{

    entries.forEach(entry => {

        const projhuit = entry.target.querySelector('#projetmaquettequatre');

        if (entry.isIntersecting){
         projhuit.classList.add('entreedroite')
         return;
        }
        
        projhuit.classList.remove('entreedroite');
     });
});
const observerneuf = new IntersectionObserver(entries =>{

    entries.forEach(entry => {

        const projneuf = entry.target.querySelector('#projetmaquettecinq');

        if (entry.isIntersecting){
         projneuf.classList.add('entreegauche')
         return;
        }
        
        projneuf.classList.remove('entreegauche');
     });
});




// observerbouton.observe(document.querySelector('#contboutons'));
observer.observe(document.querySelector('#contprojun'));
observerdeux.observe(document.querySelector('#contprojdeux'));
observertrois.observe(document.querySelector('#contprojtrois'));
observerquatre.observe(document.querySelector('#contprojquatre'));
observercinq.observe(document.querySelector('#contprojmaquetteun'));
observersix.observe(document.querySelector('#contprojmaquettedeux'));
observersept.observe(document.querySelector('#contprojmaquettetrois'));
observerhuit.observe(document.querySelector('#contprojmaquettequatre'));
observerneuf.observe(document.querySelector('#contprojmaquettecinq'));