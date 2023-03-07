const openGallery=()=>{
    document.querySelector('.galleryOuterSection').classList.add('hidden')
    document.querySelector('.galleryInnerSection').classList.remove('hidden')
}
const closeGallery =()=>{
    document.querySelector('.galleryOuterSection').classList.remove('hidden')
    document.querySelector('.galleryInnerSection').classList.add('hidden')
}