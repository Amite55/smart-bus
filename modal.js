function startModal(){
    const mainSection = document.getElementById('main-section');
    mainSection.classList.add('hidden')

    // show modal
    const showModal = document.getElementById('show-modal');
    showModal.classList.remove('hidden')
}
function continu(){
    const mainSection = document.getElementById('main-section');
    mainSection.classList.remove('hidden')

    const showModal = document.getElementById('show-modal');
    showModal.classList.add('hidden')
}