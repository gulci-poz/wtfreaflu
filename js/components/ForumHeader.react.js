var ForumHeader = React.createClass({

    render: function () {

        // JS na końcu każdej linii daje domyślny średnik, nawias budujący wyrażenie ustrzega nas przed tym

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            React Forum
                        </a>
                    </div>
                </div>
            </nav>
        );

    }

});
