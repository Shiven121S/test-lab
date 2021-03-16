controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Module == 1) {
        if (mySprite.vy == 0) {
            mySprite.vy = -175
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Module == 1) {
        if (Portals == 0) {
            PortalA = sprites.createProjectileFromSprite(img`
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
                `, mySprite, 75, 0)
            Portals = 1
        } else if (Portals == 1) {
            PortalB = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 8 8 8 8 8 . . . . . . 
                . . . . . 8 f f f 8 . . . . . . 
                . . . . . 8 f f f 8 . . . . . . 
                . . . . . 8 f f f 8 . . . . . . 
                . . . . . 8 8 8 8 8 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 75, 0)
            Portals = 0
        }
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (Module == 1) {
        if (sprite == PortalA) {
            tiles.setTileAt(location, assets.tile`transparency16`)
        } else if (sprite == PortalB) {
        	
        }
    }
})
let PortalB: Sprite = null
let PortalA: Sprite = null
let Portals = 0
let mySprite: Sprite = null
let Module = 0
Module = game.askForNumber("Which Module?")
if (Module == 1) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 5 5 5 5 5 5 5 5 1 . . . 
        . . . 1 5 . . . . . . 5 1 . . . 
        . . . 1 5 . . . . . . 5 1 . . . 
        . . . 1 5 . . 5 5 5 5 5 1 1 . . 
        . . . 1 5 5 5 5 9 9 9 9 9 1 . . 
        . . . 1 5 5 9 9 9 6 6 6 6 1 . . 
        . . . 1 5 5 6 6 6 6 5 5 1 1 . . 
        . . . 1 5 5 5 5 5 5 . 5 1 . . . 
        . . . 1 5 . . 5 5 5 . 5 1 . . . 
        . . . 1 5 . 5 1 1 5 . 5 1 . . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 75, 0)
    mySprite.ay = 250
    scene.cameraFollowSprite(mySprite)
    tiles.setTilemap(tilemap`level1`)
    Portals = 0
}
