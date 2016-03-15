var ForumAnswers = React.createClass({
        displayName: "ForumAnswers",


        render: function () {

                var allAnswers = this.props.allAnswers;
                var answers = [];

                // dzięki atrybutowi key React sprawniej zbuduje Virtual DOM, nie będzie konieczne renderowanie elementów, których klucz już się pojawił

                for (var key in allAnswers) {
                        answers.push(React.createElement(ForumAnswer, { key: key, id: key, answer: allAnswers[key] }));
                }

                // { answers } to kolejny child element, to nie binding

                return React.createElement(
                        "div",
                        null,
                        answers
                );
        }

});