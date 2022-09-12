class Component {
    constructor(parent, props, className) {

        this._parent = parent
        this.childComp;
        this.props = props;
        this.className = className;
        this.isMounted = false;
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
        this.update()
    }

    set parent(newParent) {
       
            this._parent = newParent;
           
        console.log(newParent, 'sdafsdafsdaf')
        
    }


    build() {
        console.log('build' + this.className)
        const div = document.createElement('div');

        if (this.className) {
            div.className = this.className;
        }

        this.dom = div;
        this.design();
    }

    design() {
        if (this._state) {
            console.log(this._state)
            console.log(this.dom)
            this.dom.insertAdjacentHTML('afterbegin', this._state.a)
            console.log(this)
        }
        if (!this.isMounted) {
            this.mount()

        }
    }

    update() {
        this.design();
    }

    mount() {
        if (this._parent === 'root') {
            document.body.appendChild(this.dom);
            this.isMounted = true

            this.mounted()
            

        } else {
            console.log(this._parent, this.className)
            this._parent.dom.appendChild(this.dom);
            console.log('component mount');
            this.isMounted = true
            this.mounted()

        }

        this.children.forEach(child => child.update())
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

