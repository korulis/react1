
let settingsObject = {};

function parseSettings() {
    let documentMetas = document.head.getElementsByTagName("meta");

    for (let i = 0; i < documentMetas.length; i++) {
        if (documentMetas[i].getAttribute("itemprop") === "app-property") {
            let metaContent = documentMetas[i].content;
            let ii = metaContent.split(":")[0];
            let jj = metaContent.substr(ii.length + 1);
            settingsObject[ii] = jj;
        }
    }
    console.log(settingsObject);
}
parseSettings();

const getSetting = (name: string) => {
    return settingsObject[name];
};


export default getSetting;