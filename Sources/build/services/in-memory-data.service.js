"use strict";
exports.DEVICES_URL = 'app/devices';
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var devices = [
            { id: 1, name: 'Sens\'it' },
            { id: 2, name: 'Axibox' },
            { id: 3, name: 'Novapass' },
            { id: 4, name: 'Extelsmart' },
            { id: 5, name: 'Delta Wifi' },
            { id: 6, name: 'Sacha' },
            { id: 7, name: 'Smart Luggage Tracker' }
        ];
        return { devices: devices };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map