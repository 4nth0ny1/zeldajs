const k = kaboom()

k.scene('main', () => {
    k.add([
        k.text("oh hi", 32),
        k.pos(100, 100),
    ])
})

k.start('main')