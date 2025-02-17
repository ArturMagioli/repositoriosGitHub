//Responsável por transformar objetos em elementos HTML

// function createFormatedNode(element, atribute) {
//     const newElement = document.createElement(element);
//     element.setAttribute(atribute);
//     return newElement;
// }

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
}