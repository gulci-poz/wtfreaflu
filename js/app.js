// renderowanie Virtual DOM i śledzenie różnic (diffing)
// ReactDOM - dla nowszej wersji React, która może renderować nie tylko do przeglądarki; dla starszych wersji - React

ReactDOM.render(

    React.createElement(Forum, null),
    document.getElementById("forum")

);

var myEmitter = new EventEmitter();

myEmitter.on("STARTED_THE_APP", function () {
    console.log("started the app #1");
});

myEmitter.on("STARTED_THE_APP", function () {
    console.log("started the app #2");
});

myEmitter.emit("STARTED_THE_APP");

ForumDispatcher.register(function (action) {
    console.log("received an action");
    console.log(action);
});
