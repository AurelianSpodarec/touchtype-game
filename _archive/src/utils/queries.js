import gameData from './../gameData/gameData';


function getModeByID(modeID) {
    return gameData.filter(object => object.mode === modeID);
}

function getLevelGroupByID(groupID) {
    const levelGroup = getModeByID(1);
    return levelGroup[0].groupLevels.find(object => object.id === groupID);
}

function getLevelByID(levelID) {
    return getLevelGroupByID(1).levels.find(object => object.id === levelID);
}

export {
    getModeByID,
    getLevelGroupByID,
    getLevelByID,
}