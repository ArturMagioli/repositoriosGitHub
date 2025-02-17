import { get_github_repository } from './requisitions';
import { Repository } from './entities';
import { DOMManipulator } from './dom_manipulator';
let repository = '';

//Obtendo os elementos da nossa página:
const btnElement = document.getElementById('repositorieButton');
btnElement.onclick = () => {

    //Obtendo o repositório:
    const spanElement = document.getElementById('repositorieInput');
    get_github_repository('https://api.github.com/repos/' + spanElement.value)
        .then((promise) => {
            //Construir o objeto do repositório:
            repository = new Repository(promise.name, promise.description, promise.owner.avatar_url, promise.html_url);

            //montar um elemento de lista com o objeto:
            DOMManipulator.insertOnList(DOMManipulator.toListItemElement(repository));



        })
        .catch((error) => {
            console.log(error);
        });//O retorno de uma função assíncrona também é uma promise!
}