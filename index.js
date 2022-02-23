const { Plugin } = require('powercord/entities');

module.exports = class CallRemover extends Plugin {
    async startPlugin () {
        this.loadStylesheet('style.css');
    }
}