// renderowanie Virtual DOM i śledzenie różnic (diffing)
// ReactDOM - dla nowszej wersji React, która może renderować nie tylko do przeglądarki; dla starszych wersji - React

ReactDOM.render(

    React.createElement(Forum, null),
    document.getElementById("forum")

);
