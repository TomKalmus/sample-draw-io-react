export const Test = () => {
  console.log("test");
}

export const exportToJsonNodeNames = (json) => {
  // console.log(json);
  // console.log(json["graph"]);
  for (var item in json["graph"]) {
    
    if (json["graph"][item]["value"].attributes) {
        console.log(json["graph"][item]["value"].attributes.getNamedItem("label").value);
    }
  }
}