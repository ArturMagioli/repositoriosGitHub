const api_get_request = (URL) => {return new Promise( (resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open('GET', URL);
    ajax.send(null);

    ajax.onreadystatechange = () => {
        if(ajax.readyState === 4) {
            if (ajax.status === 200) {
                resolve(JSON.parse(ajax.responseText));
            }else{
                reject("Error on requisition: could not find this repository.");
            }
        }
    }
})};

export async function get_github_repository(URL) {
    try {
        return await api_get_request(URL);
    }catch(error) {
        return false;
    }
}