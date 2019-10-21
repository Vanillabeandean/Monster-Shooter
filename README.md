<<<<Tech Spec: do things with small priority numbers 1st>>>>



In this game, you are a sprite that has to move through a course and as you move through, monsters randomly spawn and move towards you. Although you can move forwards and backwards with WASD, the entire screen still shifts and you can’t actually cause the screen to move faster than it is set to move. You can either shoot or dodge them as you move through the obstacle course. When you kill
monsters, there is a random chance they drop power ups for your gunner. The game goes on forever (like flappy bird, jetpack joyride etc) and progressively gets harder as you get further through the game. For example, a person playing for the first time should be able to make it through about a minute of the game, and then someone who practices for a while should be able to make it through about 5 minutes (This means that it should very slowly get harder).
  <<<<Tech Spec: I see this as basically being coded by taking our base flappy bird code, but then unpairing the "pipes" so they spawn one at a time on a semi-random basis. The "pipes", which will hereafter be called the monsters, will have a health (it'll be between 1 and 6 depending on the type of zombie), an xpos, a ypos, an xspeed (which probably starts at 1 and increases over time, aka 1*timeMult), and a yspeed(which should probably be 1*timeMult*(-1) if the player is above the monster, or 1*timeMult*(+1) if the player is below the monster. There should be an array of all monsters on screen, whose positions are all handled one by one in a for loop in a handleMonsterMovement() method, which on every frame changes the xPos and yPos of every monster by their xSpeed and ySpeed, respectively. Performance impact:low. Est time to code: 2hr. Priority: 3>>>>



-	Difficulty is based off of two factors, the increasing number of monsters spawned and the speed that the screen moves.
There are single coins randomly placed throughout the map (like one per average 15 seconds) that you can collect and you can buy new skins for your gunner (no in game improvements). There are 4 extra skins worth 100, 250, 500, 1,000, and 10,000 coins.
<<<<Tech Spec: handleMonsterMovement() would need to have some sort of countdown that decrements on each frame, such that a new monster is added to the MonsterArray whenever it hits 0, and then it's reset to some higher number (ideally semi-randomized). There could be a similar coundown for how long until a coin appears on the stage, after which some coin object would be created. Coins should have an xPos, a yPos, an xSpeed, and NO ySpeed as they should just move left across the screen without moving towards the players. This will then also have to check every frame if the coin is overlapping with the player, and if so, remove the coin from the game and increment player's coinCount. Performance impact:low. Est time to code: 2. Priority:4.>>>>


Shooter
-	Single player - Should be able to use wasd and move the mouse around to aim at angles across the screen
<<<<Tech spec: copy the control scheme from the spaceship program we have, except make the arrow keys map to moving left and right rather than rotating. These will change the player's position variable. Also, the player will need an angle variable that shows which direction they're facing. This angle should always equal the angle made by a vertical line through the player and a line from the player to the mouse (which has a known position at all times). This value can be found with some simple trigonometry. Performance impact: minimal. Time to code: 2hrs. Priority: 1>>>>
-	Multiplayer – use WASD and arrow keys but you can’t shoot at an angle, removing the mouse element from the game
<<<<Same as above, except the player angle is just set at 90degrees. Have the same setup reading a second player with arrowkeys. Performance impact: minimal. Time to code: .5hrs. Priority: low>>>>


Gun on shooter
-	Shoots 4 bullets per second
-	Hold q to shoot and use wasd for player one
-	Hold shift to shoot and use arrow keys for player two (Both 1 and 2 player options)
<<<<Tech Spec: there should be an array, bulletArray, which holds all the bullet objects (which have an xPos, a yPos, an xSpeed, and a ySpeed. xSpeed and ySpeed should be related by the angle at which the bullet was originally created). a method called every frame, handleBulletMovement, will have to go through this whole array and move each bullet in the direction of its x and y speeds. You will also need a coundown from 15 called bulletDelay. When this hits zero, a bullet can be created with speeds determined by the angle the player is facing only if bulletDelay is also at 0. In this case, bulletDelay should be reset to 15. When the bullet is created, it is added to handleBulletMovement. Anyway, once all the bullets are moved, the method should also check if the bullets are overlapping with any monsters, and damage them by 1 if so. Performance impact: potentially decent if there are enough monsters and bullets at a time. Time to code: 4hrs. Priority:2>>>>


Power ups:
-	Power up: Doubles speed of bullets (15 seconds or until getting another power up)
-	Power up: Shoots 2 bullets at once (15 seconds or until getting another power up)
-	Power up: invincible for 5 seconds
-	Power up: Random (50% chance your bullet speed quadruples, 50% chance your bullet speed halves)
<<<<Tech Spec: these would have to each be another object type, like coins, which gets picked up by the player and spanws at random intervals. Actually, basically these are just 4 other types of coins, so do the same thing you did for that. Priority: 5. Time to code: 1 hr>>>>

Monsters: <<<<I would focus on making just one type of monster first, and only if you can get this to work, then try making other types of monsters. In other words, Priority: low. Time to code: 6? hours? You'll need another array of bullets that will move every frame, except these ones are checking if they overlap with the player, and removing themselves and doing the appropriate damage if so. With the other monsters shooting bullets, performance impact could potentially also be decent (lots of objects flying all at once)>>>>
-	Ones that try to fly straight into you (if they make contact you die)
o	Health – 4 bullets
-	Ones that shoot slow rockets (fires 1 every 3 seconds) at you (if rocket hits you, you die) (rockets cannot be shot but can be dodged
o	Walks on the ground
o	Health – 6 bullets
-	Ones that shoot faster bullets (bullets can be shot and broken) and fires 2 every second
o	Health – 1 bullet
