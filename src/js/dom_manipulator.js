export class DOMManipulator {
    static toListItemElement(repository_object) {
        //Criando o nó da lista
        const listItemElement = document.createElement('li');
        listItemElement.setAttribute('class', 'list-group-item list-group-action');

        //Devo criar nodes: nome, descrição, img e link
        const imgElement = document.createElement('img');
        imgElement.setAttribute('class', 'img');
        imgElement.setAttribute('src', repository_object.avatar_url);

        const p1Element = document.createElement('strong');
        const name = document.createTextNode(repository_object.name);
        p1Element.appendChild(name);

        const p2Element = document.createElement('p');
        const description = document.createTextNode(repository_object.description);
        p2Element.appendChild(description);

        const linkElement = document.createElement('a');
        linkElement.setAttribute('target', '_blank');
        linkElement.setAttribute('href', repository_object.link);
        const textLink = document.createTextNode('Acessar');
        linkElement.appendChild(textLink);

        listItemElement.appendChild(imgElement);
        listItemElement.appendChild(p1Element);
        listItemElement.appendChild(p2Element);
        listItemElement.appendChild(linkElement);

        return listItemElement;
    }

    static insertOnList(listItemElement) {
        const listElement = document.getElementById('repositoriesList');
        listElement.appendChild(listItemElement);
    }

    static alertIssue(problem) {
        const alertElement = document.getElementById('alert');
        this.cleanAlert(alertElement);
        alertElement.appendChild(document.createTextNode(`Error on requisition: ${problem}`));
        alertElement.setAttribute('class', 'alert alert-danger');
    }

    static loadingAlert() {
        const alertElement = document.getElementById('alert');
        this.cleanAlert(alertElement);
        alertElement.appendChild(document.createTextNode('Loading...'));
        alertElement.setAttribute('class', 'alert alert-warning');
    }

    static cleanAlert(alert){
        if (alert.innerHTML){
            alert.innerHTML = '';
            alert.setAttribute('class', 'd-none');
        }
    }
}