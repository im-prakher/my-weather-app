class locationClass {

    async getLocation() {
        const locationResponse = await fetch('https://geoip-db.com/json/');

        const locationData = await locationResponse.json();

        return {
            location: locationData
        }


    }
}