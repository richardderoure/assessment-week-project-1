$(document).ready(() => {
    let isItLucky = false;
    const createUrl = () => {
        return new Promise((resolve, reject) => {

            let searchInput = document.getElementById('searchInput');

            $("form").submit((event) => {
                event.preventDefault();
                console.log('creating search url...')
                console.log(searchInput.value.split(' ').join('+'));
                let urlObject = $.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAeXkfbJjv7hCmF83KeFxTb9B5Q0cGL4Xs&cx=016496445636816056556:qvzl4ib4xtb&q=' + searchInput.value.split(' ').join('+'));
                console.log('search url created!')
                console.log(urlObject);
                resolve(urlObject);
            });

            $("#lucky").on('click', (event) => {
                event.preventDefault();
                isItLucky = true;
                console.log('creating search url...')
                console.log(searchInput.value.split(' ').join('+'));
                let urlObject = $.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAeXkfbJjv7hCmF83KeFxTb9B5Q0cGL4Xs&cx=016496445636816056556:qvzl4ib4xtb&q=' + searchInput.value.split(' ').join('+'));
                console.log('search url created!')
                console.log(urlObject);
                resolve(urlObject);
            });
        });
    };

    const getUrl = async () => {
        console.log('awaiting createUrl()...');
        let url = await createUrl();
        console.log('url returned!');
        if (isItLucky == true) {
            window.location.href = url.items[0].link
        };
        
        axios.get("/results").then(response => {
            console.log(response);
        });
       // createResultPage(url);
    };

    const createResultPage = (url) => {
        window.location.href = "localhost:8080/results";
        let dataArray = [];
        for (let i = 0; i < 10; i++) {
            dataArray[i] = url.items[i].title;
            dataArray[i] = url.items[i].link;
            dataArray[i] = url.items[i].snippet;
        }
        $.post("/results.html", dataArray, () => console.log('posted data'));
    }

    getUrl();

});

//AIzaSyD2QA22UZG7WyduOYDPgW8J1YkjnGTszzI google search api key