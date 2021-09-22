const getDataWithoutBranch = (collegeList, rankChosen, casteChosen) => {
    let individualCollegeList = {};
    let ptr = 0;

    for(let i = 0; i < collegeList.length ; i++){
        if(collegeList[i][casteChosen] >= (rankChosen-1000) && collegeList[i][casteChosen] <= rankChosen+10000){
            individualCollegeList[ptr++] = collegeList[i];
        }
    }
    return individualCollegeList;
}

const getDataWithBranch = (collegeList, rankChosen, casteChosen, branchChosen) => {
    let individualCollegeList = {};
    let ptr = 0;

    for(let i = 0; i < collegeList.length ; i++){
        if(collegeList[i].BRANCH == branchChosen && collegeList[i][casteChosen] >= (rankChosen-1000) && collegeList[i][casteChosen] <= rankChosen+10000){
            individualCollegeList[ptr++] = collegeList[i];
        }
    }
    return individualCollegeList;
}

export {getDataWithBranch, getDataWithoutBranch};