// https://www.google.com/search?q=this+is+a+test

$(document).ready(() => {



    const createUrl = new Promise((resolve, reject) => {
        let form = document.getElementsByClassName('form');
        let searchInput = document.getElementById('searchInput');

        $("form").submit((event) => {
            event.preventDefault();
            console.log(searchInput.value.split(' ').join('+'));
            let url = 'https://www.google.com/search?q=' + searchInput.value.split(' ').join('+');
            resolve(url);
        });
    });

    const getUrl = async () => {
        let url = await createUrl();
        
    };



    // $('#submitLink').on('click', () => {
    //     $('#submitLink').attr('href', url);
    // })




});