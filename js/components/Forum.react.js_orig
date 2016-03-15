// komponent nadrzędny (parent) Forum
// funkcja createClass() zwraca komponent

var Forum = React.createClass({

    // dane w parent component mogą być dostępne dla child components, możemy je przekazać za pomocą atrybutu (mamy this.state) w createElement do ForumHeader
    // mamy dostęp do tych danych w ForumHeader za pomocą this.props
    // dane aktualizujemy na jednym poziomie, React odtwarza cały Virtual DOM po każdej zmianie - wszystko dzieje się w pamięci, bardzo szybko

    getInitialState: function () {

        return {

            allAnswers: {

                "1": {
                    body: "Isn't that about time travel?",
                    correct: false
                },
                "2": {
                    body: "React and Flux are a tool and methodologies for building the front end of web applications.",
                    correct: false
                },
                "3": {
                    body: "React is a synonym for 'respond'",
                    correct: false
                }

            }

        };

    },

    render: function () {

        // zwracamy element React, który jest wrapperem dla HTML
        // element będzie dodany do Virtual DOM
        // React decyduje, co dalej będzie się działo z elementem
        // drugi argument to obiekt zawierający atrybuty elementu w postaci name/value
        // kolejne argumenty to child elements naszego elementu

        return React.createElement(
            "div",
            null,
            React.createElement(ForumHeader, { allAnswers: this.state.allAnswers })
        );

    }

});
