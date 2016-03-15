var ForumAnswer = React.createClass({
    displayName: "ForumAnswer",


    // bez wymaganej właściwości answer nie utowrzymy komponentu

    propTypes: {
        answer: React.PropTypes.object.isRequired
    },

    render: function () {

        var answer = this.props.answer;

        return React.createElement(
            "div",
            { className: "panel panel-default" },
            React.createElement(
                "div",
                { className: "panel-body" },
                answer.body
            )
        );
    }

});