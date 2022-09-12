class Component {
    constructor(parent, props, className) {

        this._parent = parent
        this.childComp;
        this.props = props;
        this.className = className;
        this.children = []
        if (parent !== 'root') {
            let tempChildren = [...parent.children, this]
            parent.children = tempChildren;

        }
       
        this._state;
        this.build()
    }

    set state(newState) {
        this._state = newState;
        this.unmount();
        this.build()
    }

    set parent(newParent) {
       
            this._parent = newParent;
           
        console.log(newParent, 'sdafsdafsdaf')
        
    }


    build() {
        console.log(this)
        const div = document.createElement('div');

        if (this.className) {
            div.className = this.className;
        }

        if (this._state) {
            console.log(this._state.a)
            div.innerText = this._state.a
        }
        this.dom = div;
        this.mount();
    }

    mount() {
        if (this._parent === 'root') {
            document.body.appendChild(this.dom);
            this.mounted()

        } else {
            console.log(this._parent, this.className)
            this._parent.dom.appendChild(this.dom);
            console.log('component mount');

            this.mounted()

        }

        this.children.forEach(child => child.build())
    }

    mounted() {
        console.log('component did mounted')
    }

    unmount() {
        
        this.dom.remove()
        console.log('component unmount');
    }
}

export default Component

