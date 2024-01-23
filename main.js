let pathname  = "page1"

const root = document.querySelector(".root")
const div = document.querySelector("#a")

const [b1,b2] = document.querySelectorAll("button")

b1.addEventListener("click", ()=> {
    pathname="page1"
    router()
})


b2.addEventListener("click", ()=> {
    pathname="page2"
    router()

})

function page1(){
    let state = {pagename : "page 1"}
    return {
        render(){
            this.runBeforeFirstRender()
            this.renderDom()
            this.runAfterFirstRender()
        },
        renderDom(){
            this.runBeforeEveryRender()
            root.innerHTML = this.renderHtml()
            this.runAfterEveryRender()
        },
        renderHtml(){
            return(`<h1>Page 1 is Here ${state.pagename} </h1>`)
        },
        runBeforeEveryRender(){},
        runAfterEveryRender(){},
        runBeforeFirstRender(){},
        runAfterFirstRender() {
            div.addEventListener("click",this.callBAck)
        },
        cleanUp(){
            div.removeEventListener("click",this.callBAck)
        },
        setState(object){
            state = object
            this.renderDom()
        },
        callBAck(){
            console.log("div c p 1")
        }

    }
}
function page2(){
    let state = {pagename : "page 2"}


    return {
        render(){
            this.runBeforeFirstRender()
            this.renderDom()
            this.runAfterFirstRender()
        },
        renderDom(){
            this.runBeforeEveryRender()
            root.innerHTML = this.renderHtml()
            this.runAfterEveryRender()
        },
        renderHtml(){
            return(`<h1>Page 2 is Here ${state.pagename} </h1>`)
        },
        runBeforeEveryRender(){},
        runAfterEveryRender(){},
        runBeforeFirstRender() {},
        runAfterFirstRender() {
            div.addEventListener("click",this.callBAck)
        },
        cleanUp(){
            div.removeEventListener("click",this.callBAck)
        },
        setState(object){
            state = object
            this.renderDom()
        },
        callBAck(){
            console.log("div c p 2")
        }
    }
}

const page1Ui = page1() 
const page2Ui = page2()

function router(){
    page1Ui.cleanUp()
    page2Ui.cleanUp()

    if(pathname=== "page1"){
        page1Ui.render()}
    if(pathname=== "page2") {
        page2Ui.render()
    }
}
router()

