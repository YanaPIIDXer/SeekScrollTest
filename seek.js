new Vue({
    el: "#app",
    data: function () {
        return {
            items: [],
        }
    },
    mounted: function () {
        for (let i = 1; i <= 100; i++) {
            this.items.push(`ITEM ${i}`)
        }
    }
})