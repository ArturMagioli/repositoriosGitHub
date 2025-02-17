import { get_github_repository } from './requisitions';
import { Repository } from './entities';

let repository = '';
get_github_repository('https://api.github.com/repos/RPCS3/rpcs3')
    .then((object) => {
        //Construir o objeto do repositório:
        repository = new Repository(object.name, object.description, object.owner.avatar_url, object.html_url);
        console.log(repository);
    })
    .catch( (error) => {
        console.log(error);
    })//O retorno de uma função assíncrona também é uma promisse!
