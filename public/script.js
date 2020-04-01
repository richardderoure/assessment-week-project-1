// https://www.google.com/search?q=this+is+a+test

$(document).ready(() => {

    const createUrl = () => {
        return new Promise((resolve, reject) => {
            let searchInput = document.getElementById('searchInput');
            $("form").submit((event) => {
                event.preventDefault();
                console.log(searchInput.value.split(' ').join('+'));
                let urlObject = $.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAeXkfbJjv7hCmF83KeFxTb9B5Q0cGL4Xs&cx=016496445636816056556:qvzl4ib4xtb&q=' + searchInput.value.split(' ').join('+'));
                console.log(urlObject);
                resolve(urlObject);
            }); 
        });
    };

    const getUrl = async () => {
        let url = await createUrl();
        console.log(url.items[3].title);
        $.post("/testing", 'tester');    
    };

    getUrl();

});

//AIzaSyD2QA22UZG7WyduOYDPgW8J1YkjnGTszzI google search api key





//