bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
