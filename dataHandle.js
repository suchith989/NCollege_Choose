//import { getJsonCollegeList } from "/requestHandling.js";
import { getDataWithBranch, getDataWithoutBranch } from "/sortCollege.js";
import { renderTable } from "/displayData.js";

let submitBtn = document.getElementsByClassName("btn1");

submitBtn[0].addEventListener("click", function () {
  let caste = getCaste();
  let gender = getGender();
  let branch = getBranch();
  let rank = getRank();

  if (caste == false || gender == false || branch == false || rank == false) {
    alert("Choose all the options correctly and Submit again!");
  } else {
    let casteGender = caste + " " + gender;
    let collegeList;

    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log("Hello");
        collegeList = JSON.parse(req.responseText);
        collegeList = collegeList.record;
        console.log(collegeList);
        let individualCollegeList;
        if (branch == "ANY") {
          individualCollegeList = getDataWithoutBranch(
            collegeList,
            rank,
            casteGender
          );
        } else {
          individualCollegeList = getDataWithBranch(
            collegeList,
            rank,
            casteGender,
            branch
          );
        }

        let sortedCollegeList = sortColleges(individualCollegeList, casteGender);
        renderTable(sortedCollegeList, casteGender);
      }
    };

    req.open(
      "GET",
      "https://api.jsonbin.io/v3/b/614b720b4a82881d6c53bbe9",
      true
    );
    req.setRequestHeader(
      "X-Master-Key",
      "$2b$10$igsbDdxG21S43mhTsUH0Ju98yAGq24ObSUV0phTCDZhMjxbaBI.k6"
    );
    req.send();
  }
});

const getCaste = () => {
  let casteChecked = document.querySelectorAll('input[name="caste"]:checked');
  let caste;

  if (casteChecked.length > 0) {
    caste = casteChecked[0].value;
    return caste;
  } else {
    return false;
  }
};

const getGender = () => {
  let genderChecked = document.querySelectorAll('input[name="gender"]:checked');
  let gender;

  if (genderChecked.length > 0) {
    gender = genderChecked[0].value;
    return gender;
  } else {
    return false;
  }
};

const getBranch = () => {
  let branchChecked = document.querySelectorAll('input[name="branch"]:checked');
  let branch;

  if (branchChecked.length > 0) {
    branch = branchChecked[0].value;
    return branch;
  } else {
    return false;
  }
};

const getRank = () => {
  let rankInput = document.querySelector('input[type="number"]');
  let rank = rankInput.value;

  if (!rank.length) {
    return false;
  } else {
    rank = parseInt(rank);
    return rank;
  }
};

//sort based on college cut-off ranks. Here cut-offs are stored in key - casteChosen
const sortColleges = (collegeList, casteChosen) => {
  let sortedCollegeList = [];
  let len = Object.keys(collegeList).length;

  for (let i = 0; i < len; i++) {
    sortedCollegeList.push(collegeList[i]);
  }

  sortedCollegeList.sort((a, b) => {
    return a[casteChosen] - b[casteChosen];
  });
  return sortedCollegeList;
};
