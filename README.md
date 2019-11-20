<<<<Tech Spec: do things with small priority numbers 1st>>>>



In this game, you are a sprite that has to move through a course and as you move through, monsters randomly spawn and move towards you. Although you can move forwards and backwards with WASD (this means that you can move from one side to the other side of the screen but not out of the constantly moving frame), the entire screen still shifts (this is done by having some constantly moving image at the bottom to indicate the actual screen shift) and you can’t actually cause the screen to move faster than it is set to move. You can either shoot or dodge them as you move through the obstacle course. When you kill monsters, there is a random chance they drop power ups for your gunner. The game goes on forever (like flappy bird, jetpack joyride etc) and progressively gets harder as you get further through the game. For example, a person playing for the first time should be able to make it through about a minute of the game, and then someone who practices for a while should be able to make it through about 5 minutes (This means that it should very slowly get harder).

  <<<<Tech Spec: I see this as basically being coded by taking our base flappy bird code, but then unpairing the "pipes" so they spawn one at a time on a semi-random basis. The "pipes", which will hereafter be called the monsters, will have a health (it'll be between 1 and 6 depending on the type of zombie), an xpos, a ypos, an xspeed (which probably starts at 1 and increases over time, aka 1*timeMult), and a yspeed(which should probably be 1*timeMult*(-1) if the player is above the monster, or 1*timeMult*(+1) if the player is below the monster. There should be an array of all monsters on screen, whose positions are all handled one by one in a for loop in a handleMonsterMovement() method, which on every frame changes the xPos and yPos of every monster by their xSpeed and ySpeed, respectively. Performance impact:low. Est time to code: 2hr. Priority: 3>>>>


-	Difficulty is based off of two factors, the increasing number of monsters spawned and the speed that the screen moves.
There are single coins randomly placed throughout the map (like one per average 15 seconds) that you can collect and you can buy new skins for your gunner (no in game improvements). There are 4 extra skins worth 100, 250, 500, 1,000, and 10,000 coins. In the top right corner have the amount of coins marked and counted. Add a "shop button" for when you die that is a blank screen that has the skin images to purchase.
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
<<<<Tech Spec: there should be an array, bulletArray, which holds all the bullet objects (which have an xPos, a yPos, an xSpeed, and a ySpeed. xSpeed and ySpeed should be related by the angle at which the bullet was originally created). a method called every frame, handleBulletMovement, will have to go through this whole array and move each bullet in the direction of its x and y speeds. You will also need a countdown from 15 called bulletDelay. When this hits zero, a bullet can be created with speeds determined by the angle the player is facing only if bulletDelay is also at 0. In this case, bulletDelay should be reset to 15. When the bullet is created, it is added to handleBulletMovement. Anyway, once all the bullets are moved, the method should also check if the bullets are overlapping with any monsters, and damage them by 1 if so. Performance impact: potentially decent if there are enough monsters and bullets at a time. Time to code: 4hrs. Priority:2>>>>


Power ups:
-	Power up: Doubles speed of bullets (15 seconds or until getting another power up)
-	Power up: Shoots 2 bullets at once (15 seconds or until getting another power up)
-	Power up: invincible for 5 seconds
-	Power up: Random (50% chance your bullet speed quadruples, 50% chance your bullet speed halves)
Either a Power up or coin (50% chance of either spawning) should spawn between every 15-45 seconds
<<<<Tech Spec: these would have to each be another object type, like coins, which gets picked up by the player and spanws at random intervals. Actually, basically these are just 4 other types of coins, so do the same thing you did for that. Priority: 5. Time to code: 1 hr>>>>

Monsters: <<<<I would focus on making just one type of monster first, and only if you can get this to work, then try making other types of monsters. In other words, Priority: low. Time to code: 6? hours? You'll need another array of bullets that will move every frame, except these ones are checking if they overlap with the player, and removing themselves and doing the appropriate damage if so. With the other monsters shooting bullets, performance impact could potentially also be decent (lots of objects flying all at once)>>>>
Monsters randomly spawn as you go through the game
-	Ones that try to fly straight into you (if they make contact you die)
o	Health – 4 bullets
-	Ones that shoot slow rockets (fires 1 every 3 seconds) at you (if rocket hits you, you die) (rockets cannot be shot but can be dodged
o	Walks on the ground
o	Health – 6 bullets
-	Ones that shoot faster bullets (bullets can be shot and broken) and fires 2 every second
o	Health – 1 bullet
Character can take 5 bullets/get hit by 5 monsters before the game ends (health bar in bottom right corner)
  The character's health should be displayed on the screen in the bottom right corner

The big experimental part of this program is that randomly between every 1 to 2 minutes the screen rotates 90 degrees clockwise. All of the game mechanics stay the same (for example if going downward you now use S to move down and A and D to move left and right if the game rotates 90 degrees downward). If the game rotates another 90 degrees, then the game is just reversed, meaning that the screen is now moving to the left)
<<<<I would focus on making the game go one direction and then add this experimental system after. I'd recommend having monsters spawn only on the second half of the screen (meaning that the way the player character is moving). To do the first rotation, you'll need to change the monster spawning from the righthand side of the xpos to the bottom side of the ypos, and then if it switches again just make the monsters spawn on the left hand side of the xpos. If the game rotates one more time (going upwards), just max the monsters spawn on the top half of the ypos.>>>>


Game design timeline

Day 1: Player character (green sprite) on screen that can move around (lines 16-18)
Day 2-3: Get the character to be able to shoot bullets/finish up with movement (lines 16-18, 22-25)
Day 4-5: Some constantly moving thing on the bottom and start on monster spawns (lines 5 and 37)
Day 6-7: Get the monsters to spawn in randomly and to move towards the player (line 37 and throughout)
Day 8: Monster should be able to damage character and bullets damage monsters - When monster's at 0 health they are removed, when character is 0 you lose (36-44, 46-47).
Day 9-10: Create coins and power-ups - They're functionally the same to code but just have a different function for the player when the character interacts with it. It may take a while to code what happens after something interacts with the coins/power-ups (line 6, 11, 29-34)
Day 11-12: Work on the experimental part of the game (lines 45).
Days 13-15 (optional): Add different types of monsters, add skins, add a pause button
