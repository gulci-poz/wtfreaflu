var ForumHeader = React.createClass({
    displayName: "ForumHeader",


    render: function () {

        // JS na końcu każdej linii daje domyślny średnik, nawias budujący wyrażenie ustrzega nas przed tym

        return React.createElement(
            "nav",
            { className: "navbar navbar-default" },
            React.createElement(
                "div",
                { className: "container-fluid" },
                React.createElement(
                    "div",
                    { className: "navbar-header" },
                    React.createElement(
                        "a",
                        { className: "navbar-brand", href: "#" },
                        "React Forum"
                    )
                )
            )
        );
    }

});