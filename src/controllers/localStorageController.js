import getNewGameInfo from "../model/gameInfo"

export default class LocalStorageController {
    prefix="fate-core-";
    constructor(
        prefix="fate-core-"
    ) {
        this.prefix=prefix;
    }

    save(itemName, object) {
        console.log("save");
        let key=this.prefix+itemName;
        if (typeof (Storage) !== "undefined") {
            console.log("saving...");
            // Code for localStorage/sessionStorage.
            let text = JSON.stringify(object);
            console.log(text);
            localStorage.setItem(key,text);
        } else {
            // Sorry! No Web Storage support... doing nothing.
            console.log("LocalStorage not supported. Did not save.");
        }
    }

    load(itemName,defaultItemGenerator= ()=>null) {
        console.log("load");
        let key=this.prefix+itemName;
        if (typeof (Storage) === "undefined" || localStorage.getItem(key) === null) {
            console.log("LocalStorage not supported, or no prior item found. Creating new game worksheet instead.");
            return defaultItemGenerator();
        }
        console.log("loading...");
        let text = localStorage.getItem(key);
        console.log("loaded:", text);
        if (text === "undefined" || text === "null") return defaultItemGenerator();
        return JSON.parse(text);
    }

    saveGameWorksheet(character) {
        this.save("game-creation-worksheet",character);
    }

    loadGameWorksheet() {
        return this.load("game-creation-worksheet",getNewGameInfo);
    }
}