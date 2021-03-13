const Header = (title, date, temp) => {
  
  const header = document.createElement('div')
  header.classList.add('header')

  const span = document.createElement('span')
  span.classList.add('date')
  span.textContent = date

  const h1 = document.createElement('h1')
  h1.textContent = title

  const span2 = document.createElement('span')
  span2.classList.add('temp')
  span2.textContent = temp

  header.appendChild(span)
  header.appendChild(h1)
  header.appendChild(span2)
  return header
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const header = Header('Harry Potter', "1/1/2000", "9")
  // const element = document.querySelector(selector)
  // element.appendChild(header)

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
