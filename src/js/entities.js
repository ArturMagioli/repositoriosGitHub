export class Repository {
    constructor(name, description, avatar_url, link) {
        this._name = name;
        this._description = description;
        this._avatar_url = avatar_url;
        this._link = link;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get avatar_url() {
        return this._avatar_url;
    }

    get link() {
        return this._link;
    }
}