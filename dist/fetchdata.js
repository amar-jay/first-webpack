"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function fetchData() {
    const object = { data: { metadata: { title: "", description: "" } } };
    function fetching() {
        return __awaiter(this, void 0, void 0, function* () {
            fetch("https://archive.org/metadata/TheAdventuresOfTomSawyer_201303")
                .then(response => response.json())
                .then((data) => {
                object.data.metadata.title = data.metadata.title;
                object.data.metadata.description = data.metadata.description;
                return object;
            })
                .catch((error) => {
                console.error("Error", error);
            });
        });
    }
    return fetching();
}
exports.default = fetchData;
//# sourceMappingURL=fetchdata.js.map