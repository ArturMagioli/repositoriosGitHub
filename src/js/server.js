import { get_github_repository } from './requisitions';
import { Repository } from './entities';
import { DOMManipulator } from './dom_manipulator';
import '../style/list_item.css';
let repository = [];
//Obtendo os elementos da nossa página:
const btnElement = document.getElementById('repositoryButton');
btnElement.onclick = () => {

    //Obtendo o repositório:
    const spanElement = document.getElementById('repositoryInput');
    get_github_repository('https://api.github.com/repos/' + spanElement.value)
        .then((promise) => {
            //Construindo o objeto do repositório
            if (promise) {
                const newRepository = new Repository(promise.name, promise.description, promise.owner.avatar_url, promise.html_url);
                    repository.push(newRepository);
                    console.log(repository);
                    //montar um elemento de lista com o objeto:
                    DOMManipulator.insertOnList(DOMManipulator.toListItemElement(newRepository));
                // }else{
                //     DOMManipulator.alertIssue(`This repository already exists on your list`);
                // }
            }else {
                DOMManipulator.alertIssue(`${spanElement.value} not found`);
            }
        });
}