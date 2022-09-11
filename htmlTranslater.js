class htmlTranslater {
       constructor(html) {
        this.html = html;
           this.dom = null
           this.tags = []
    }

    set html(rawHtml) {
        this.indicateTags(rawHtml);
    }

    indicateTags(rawHtml) {
        let tempTags = [];
        this.tags = rawHtml.match(/<\/?[a-z & 1-10]*>/g)
        this.tagsToDom();
    }
    checkClosed(tag) {
       return tag.search('</') !== -1 ? true : false;
    }


    

    tagsToDom() {
        let dom = document.createElement('div');
        dom.className = 'root';

        let parent = dom;

        this.tags.forEach(tag => {
            console.log(dom)

            if (!this.checkClosed(tag)) {
                tag = tag.split('');
                tag.pop()
                tag.shift()
                tag = tag.join('')
                let element = document.createElement(tag);
                parent.appendChild(element);
                parent = element;
            } else {
                parent = parent.parentElement;
            }
        })

    }

}

export default htmlTranslater;
