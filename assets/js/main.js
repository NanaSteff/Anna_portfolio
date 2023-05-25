function showContent(name) {
    const page = document.getElementsByClassName('content');
    for (let i=0; i<page.length;i++){
        if (page[i].id==name){
            if (page[i].classList.contains('d-none')){
                page[i].classList.remove('d-none')
            }
        }
        else{
            if (!page[i].classList.contains('d-none')){
                page[i].classList.add('d-none')
            }
        }
    } 
}