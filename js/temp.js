x = 0
function changeOwner() {
    if (!x) {
        x=1
        document.querySelector('body').classList.remove('partner-report')
        document.querySelector('body').classList.add('own-report')
    } else {
        x=0
        document.querySelector('body').classList.remove('own-report')
        document.querySelector('body').classList.add('partner-report')

    }

}