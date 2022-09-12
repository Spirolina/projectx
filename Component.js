class Component {
    constructor(parent, props) {
        this.props = props;
        this.parent = parent;
        this.build()
    }

    set state(newState) {
        console.log(newState)
        this.unmount();
        this.build()
    }


    build() {
        console.log('compenent build');
        this.mount();
    }

    mount() {
        console.log('component mount');
        this.mounted()
    }

    mounted() {
        console.log('component did mounted')
    }

    unmount() {
        console.log('component unmount');
    }
}

const div = new Component(parent = null, props = { a: 4, b: 5 });

div.state = {
    g:4
}