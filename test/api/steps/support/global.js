function getGlobalClass(token){
    return class Global {
        constructor() {
          this.token = token;
        }
    }
}

module.exports = getGlobalClass;