class DropBoxController{
    constructor(){
        this.btnSendFileEl = document.querySelector("#btn-send-file")
        this.inputFilesEl = document.querySelector("#files")
        this.snackModalEl = document.querySelector("#react-snackbar-root")
        this.initEvents()
    }

    initEvents(){
        this.btnSendFileEl.addEventListener("click", e=>{
            this.inputFilesEl.click()
        })

        this.inputFilesEl.addEventListener("change", e=>{
            this.snackModalEl.style.display = "block"
        })
    }
}