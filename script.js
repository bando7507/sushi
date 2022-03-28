const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const callback = (entries, observer) => {
    entries.forEach(entry => {
        //le ratio nous permet de trouver l'intersection 
        // console.log(entry.intersectionRatio)
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('release-show')
                //'observer.unobserve(entry.target)' nous d evetir les redondance
            observer.unobserve(entry.target)
        }
    });
}

const observer = new IntersectionObserver(callback, options);

document.querySelectorAll('.release').forEach(function(r) {
    observer.observe(r)
})