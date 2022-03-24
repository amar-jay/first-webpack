export interface ObjInterface {
    data: {
    metadata: {
        title: string;
        description: string;
    }
    }
}
export default function fetchData():Promise<ObjInterface["data"]|void> {

    const object:ObjInterface = {data: {metadata: {title: "", description: ""}}};
    
    async function fetching():Promise<ObjInterface["data"]|void> {
    fetch("https://archive.org/metadata/TheAdventuresOfTomSawyer_201303")
        .then(response => response.json())
        .then((data:ObjInterface["data"]) => {
            object.data.metadata.title = data.metadata.title;
            object.data.metadata.description = data.metadata.description;
            return object;
            //return "success"
        })
        .catch((error:Error) => {
            console.error("Error", error)
        })


    }
        //const object.data = fetching();
    return fetching()
}


