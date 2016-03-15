var ForumAnswer = React.createClass({

    // bez wymaganej właściwości answer nie utowrzymy komponentu

    propTypes: {
        answer: React.PropTypes.object.isRequired
    },

    render: function () {

        var answer = this.props.answer;

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    { answer.body }
                </div>
            </div>
        );

    }

});
