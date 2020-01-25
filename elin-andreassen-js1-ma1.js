// Question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}
cat.complain();


// Question 2
const heading = document.querySelector("h3");
    console.log(heading);


// Question 3
heading.style.fontSize = "2em";


// Question 4
heading.classList.add("subheading");
    console.log(heading.className);


// Question 5
const paragraphs = document.querySelectorAll("p");
    console.log(paragraphs);


// Question 6
const resultsContainer = document.querySelector(".results");
    resultsContainer.innerHTML = "<p>New paragraph</p>";
    console.log(resultsContainer.innerHTML);


// Question 7
function catLoop(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
  catLoop(cats);
}

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];


// Question 8
function catLoop(catArray) {
  let nameWrap = "";

  for (let i = 0; i < catArray.length; i++) {
      nameWrap += `<h5>${catArray[i].name}</h5>`;
  }
  return nameWrap;
};


// Question 9
resultsContainer.innerHTML = catLoop(cats);
  console.log(resultsContainer.innerHTML);


// Question 10
function catLoop(catArray) {
  let nameWrap = ""; 

  for (let i = 0; i < catArray.length; i++) {
    let catAge = "Age unknown";
    if (catArray[i].age) {
      catAge = catArray[i].age;
    }
    nameWrap += `<div>
                      <h5>${catArray[i].name}</h5>
                      <p>${catAge}</p>
                </div>`;
  }

  return nameWrap;
};

