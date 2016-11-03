/* Available service exports */

module.exports = {
	getDevices: function() { return getDevices(); } 
};

/* Service work */

function getDevices() {
	return {"Devices": ["Sens'it", "Cube", "API Cube"]};
}

function getDevice(id) {
	return {"Device": "Sens'it"};
}