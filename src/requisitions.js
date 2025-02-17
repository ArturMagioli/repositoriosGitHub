const api_request = (URL) => {return new Promise( (resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open('GET', URL);
    ajax.send(null);

    ajax.onreadystatechange = () => {
        if(ajax.readyState === 4) {
            if (ajax.status === 200) {
                resolve(JSON.parse(ajax.responseText));
            }else{
                reject("Error on requisition: could not find this repository. Uou");
            }
        }
    }
})};

export async function get_github_repository(URL) {
    api_request(URL)
        .then( (response) => {
            //Dados necessários:
            // console.log(response.name);
            // console.log(response.description);
            // console.log(response.owner.avatar_url);
            // console.log(response.html_url);
        })
        .catch( (error) => {
            console.log(error);
        })
}