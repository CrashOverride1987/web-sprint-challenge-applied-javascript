import axios from "axios"
const Tabs = (topics) => {
  const div1 = document.createElement('div')
  div1.classList.add('topics')

  const div2 = document.createElement('div')
  div2.textContent = topics[0]

  const div3 = document.createElement('div')
  div3.textContent = topics[1]

  const div4 = document.createElement('div')
  div4.textContent = topics[2]

div1.appendChild(div2)
div1.appendChild(div3)
div1.appendChild(div4)
console.log(div1)
return div1
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  
  axios.get(`https://lambda-times-api.herokuapp.com/topics`)
  .then((response) => {
    console.log(response)
    const tabs = Tabs(selector)
    const tabsContainer = document.querySelector('.tabs-container')
    tabsContainer.appendChild(tabs)
  })
  .catch((error) => {
    console.log(error)
  })
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
