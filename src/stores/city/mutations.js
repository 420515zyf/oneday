export default {
    upCityNmId(state, obj) {
        state.nm = obj.nm;
        state.id = obj.id;
        window.localStorage.setItem('cityNM', obj.nm);
        window.localStorage.setItem('cityId', obj.id);
    },
    upCityNewPlayId(state, obj) {
        state.cityPlayId = obj.cityPlayId;
        window.localStorage.setItem('cityPlayId', obj.cityPlayId);
    }
}