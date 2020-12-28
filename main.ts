info.onCountdownEnd(function () {
    game.over(true, effects.smiles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    mySprite.destroy(effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.createProjectileFromSide(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 5 5 5 5 5 5 5 1 1 1 1 
        1 1 1 1 5 5 5 5 5 5 5 5 5 1 1 1 
        1 1 1 5 5 5 5 5 5 5 5 5 5 5 1 1 
        1 1 1 5 5 5 5 5 5 5 5 5 5 5 1 1 
        1 1 1 5 5 5 5 5 5 5 5 5 5 5 1 1 
        1 1 1 5 5 5 5 5 5 5 5 5 5 5 1 1 
        1 1 1 5 5 5 5 5 5 5 5 5 5 5 1 1 
        1 1 1 1 5 5 5 5 5 5 5 5 5 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, 0, 0)
})
let 突撃丸: Sprite = null
let mySprite: Sprite = null
game.splash("goriradesukedo")
tiles.setTilemap(tiles.createTilemap(hex`100010000b0c0c0c0c0c0c0c0c0c0c0c0c0c0c07050e0e0e0d0e0d0e0e12120e0e0e0e06050e0e0e0e0d0e0e0e1212110d0e0e06050f0e0e0e0e0e12120d12120e0e0e06050f0e0e0e0e0e0d110d030e0e0e0e06050f0e0e0e0e0e0303120e0e0e0e0e06050f0e0e0e0e030d1211121211110e06050f0e10100d030303120d0d11110e06050f0e100e0e0303030d1211120d0e06050f0e0d0e100e0303030e0e0e0e0e06050f0e0e0e101010100e0e0e0e0e0e06050f0f0e0e0e0d10100e0e0e0e0e0e06050f0f0f0f0e0e0e0e0e0d0e0e0e0e06050f0f0e0e0e0e0e0e0e0e0e0e0e0e06050f0e0e0e0d0e0e0e0e0e0e0e0e0e06040202020e0202020e02020202020202`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.tile0,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tileDarkGrass2,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath3,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.castle.tilePath1,sprites.castle.tilePath2,myTiles.tile4,myTiles.tile5,sprites.castle.tilePath5,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles0], TileScale.Sixteen))
mySprite = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 e e e e e e 1 1 1 1 1 
    1 1 1 1 1 5 5 5 5 5 5 1 1 1 1 1 
    1 1 1 1 1 5 f 5 5 f 5 1 1 1 1 1 
    1 1 1 1 5 5 5 5 5 5 5 5 1 1 1 1 
    1 1 1 5 5 5 2 2 2 2 5 5 5 1 1 1 
    1 1 5 5 5 5 5 5 5 5 5 5 5 5 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.startCountdown(20)
game.onUpdateInterval(500, function () {
    突撃丸 = sprites.create(img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 c c c c 8 8 8 
        8 8 8 8 8 8 8 c c d d d d c 8 8 
        8 8 8 8 8 c c c c c c d d c 8 8 
        8 8 8 c c c 4 4 4 4 d c c c c c 
        8 8 c 4 4 1 4 4 4 4 4 1 c c 4 f 
        8 c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
        f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
        f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
        f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
        8 f 4 4 4 4 1 4 4 f 4 4 d f 8 8 
        8 8 f 4 4 1 4 c c 4 4 d f 8 8 8 
        8 8 8 f d 4 4 4 4 4 4 c f 8 8 8 
        8 8 8 8 f f 4 4 4 4 c d b c 8 8 
        8 8 8 8 8 8 f f f f d d d c 8 8 
        8 8 8 8 8 8 8 8 8 8 c c c 8 8 8 
        `, SpriteKind.Food)
    突撃丸.setPosition(randint(0, 160), randint(0, 120))
})
