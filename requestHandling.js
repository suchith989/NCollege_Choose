const getJsonCollegeList = () => {
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      console.log("Hello");
      return JSON.parse(req.responseText);
    }
  };

  req.open(
    "GET",
    "https://api.jsonbin.io/v3/b/614b720b4a82881d6c53bbe9",
    true
  );
  req.setRequestHeader("X-Master-Key", "$2b$10$igsbDdxG21S43mhTsUH0Ju98yAGq24ObSUV0phTCDZhMjxbaBI.k6");
  req.send();
}

export { getJsonCollegeList };