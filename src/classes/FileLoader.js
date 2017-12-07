import axios from 'axios';

export default class FileLoader {

    constructor(path, updateTimer, store) {
        alert("0000");
        this.data           = false;
        this.errors         = [];
        this.isLoading      = false;
        this.path           = path;
        this.updateRoutine  = false;
        

        if (updateTimer && updateTimer > 0) {

            this.updateRoutine  = true;
            this.updateTimer    = updateTimer;
        }
    }

    get loading() {

        return this.isLoading;
    }

    load() {
        const that      = this;
        this.isLoading  = true;

        axios.get(this.path).then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data
            that.isLoading = false;
                console.log(response);
                that.sendData()
            that.checkUpdate();
        })
        .catch(e => {
            alert("bbb");
            that.isLoading = false;
            this.errors.push(e)
            that.checkUpdate();

        })
    }

    sendData() {


    }

    get Data() {

        return this.data;
    }

    checkUpdate() {

        if (this.updateRoutine) {

            setTimeout( () => this.load(), this.updateTimer );
        }
    }

    update() {

        if ( this.path ) load();
    }
}