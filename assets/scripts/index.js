function redirectTo(index) {
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set('id', index)
    window.location.search = searchParams.toString()
}