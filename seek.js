new Vue({
    el: "#app",
    data: function () {
        return {
            items: [],
        }
    },
    created: function () {
        for (let i = 1; i <= 100; i++) {
            this.items.push(`ITEM${i}`)
        }
    },
    mounted: function () {
        // シーク
        const scrollable = document.getElementById('scrollable')
        const target = document.getElementById('ITEM50')
        scrollable.scrollTop = target.offsetTop
    }
})
