// ============================================================
// REDNECK RAMPAGE: LAST CALL
// A top-down hoard survival shooter
// Alien Swarm meets Left 4 Dead meets Shaun of the Dead
// ============================================================

const TILE = 32;
const MAP_W = 60; // tiles
const MAP_H = 60;
const WORLD_W = MAP_W * TILE;
const WORLD_H = MAP_H * TILE;

// ============================================================
// BOOT SCENE — generate all sprite textures programmatically
// ============================================================
class BootScene extends Phaser.Scene {
    constructor() { super('Boot'); }

    create() {
        this.createTextures();
        this.scene.start('Menu');
    }

    createTextures() {
        // --- Player (32x32 top-down) ---
        const pg = this.make.graphics({ add: false });
        // boots
        pg.fillStyle(0x4a3728); pg.fillRect(8, 26, 7, 6); pg.fillRect(17, 26, 7, 6);
        // jeans
        pg.fillStyle(0x3b5998); pg.fillRect(8, 18, 7, 8); pg.fillRect(17, 18, 7, 8);
        // belt
        pg.fillStyle(0x8B4513); pg.fillRect(8, 16, 16, 3);
        // shirt
        pg.fillStyle(0xcccccc); pg.fillRect(9, 9, 14, 8);
        // arms
        pg.fillStyle(0xcccccc); pg.fillRect(5, 10, 5, 6); pg.fillRect(22, 10, 5, 6);
        // skin (hands)
        pg.fillStyle(0xf5c6a0); pg.fillRect(5, 15, 4, 3); pg.fillRect(23, 15, 4, 3);
        // head
        pg.fillStyle(0xf5c6a0); pg.fillRect(11, 2, 10, 8);
        // eyes
        pg.fillStyle(0x222222); pg.fillRect(13, 5, 2, 2); pg.fillRect(18, 5, 2, 2);
        // mullet
        pg.fillStyle(0x8B4513); pg.fillRect(10, 1, 12, 2); pg.fillRect(10, 2, 2, 5); pg.fillRect(20, 2, 2, 5);
        // shotgun in hand
        pg.fillStyle(0x333333); pg.fillRect(26, 13, 6, 2);
        pg.generateTexture('player', 32, 32);
        pg.destroy();

        // --- Zombie (32x32 top-down, MAGA cap variant) ---
        this.createZombieTexture('zombie1', 0x5a7a3a, 0xcc2222);  // greenish, red cap
        this.createZombieTexture('zombie2', 0x6b8e4a, 0xcc2222);  // lighter green
        this.createZombieTexture('zombie3', 0x4a6a2a, 0xee3333);  // darker green

        // --- Fat zombie (40x40) ---
        const zg = this.make.graphics({ add: false });
        // feet
        zg.fillStyle(0x3a3a3a); zg.fillRect(8, 34, 10, 6); zg.fillRect(22, 34, 10, 6);
        // legs (dirty jeans)
        zg.fillStyle(0x2a3a6a); zg.fillRect(10, 24, 10, 12); zg.fillRect(22, 24, 10, 12);
        // gut (big belly, stained white shirt)
        zg.fillStyle(0xbbbbbb); zg.fillRect(4, 10, 32, 16);
        // gut stain
        zg.fillStyle(0x8B4513); zg.fillRect(12, 14, 6, 4); zg.fillRect(24, 16, 4, 3);
        // arms
        zg.fillStyle(0x5a7a3a); zg.fillRect(0, 12, 6, 8); zg.fillRect(34, 12, 6, 8);
        // head
        zg.fillStyle(0x5a7a3a); zg.fillRect(12, 2, 16, 10);
        // eyes (one squinting, one dead)
        zg.fillStyle(0xff0000); zg.fillRect(15, 5, 3, 2);
        zg.fillStyle(0x888888); zg.fillRect(22, 5, 3, 2);
        // MOUTH open
        zg.fillStyle(0x330000); zg.fillRect(15, 8, 10, 3);
        // red cap (BIG)
        zg.fillStyle(0xcc2222); zg.fillRect(10, 0, 20, 4);
        // cap brim
        zg.fillStyle(0xaa1111); zg.fillRect(10, 3, 8, 2);
        // cap text (white block for "MAGA")
        zg.fillStyle(0xffffff); zg.fillRect(16, 1, 8, 2);
        zg.generateTexture('zombie_fat', 40, 40);
        zg.destroy();

        // --- Bullet ---
        const bg = this.make.graphics({ add: false });
        bg.fillStyle(0xffdd44); bg.fillCircle(4, 4, 4);
        bg.fillStyle(0xffffff); bg.fillCircle(3, 3, 1);
        bg.generateTexture('bullet', 8, 8);
        bg.destroy();

        // --- Checkpoint flag ---
        const fg = this.make.graphics({ add: false });
        fg.fillStyle(0x666666); fg.fillRect(14, 4, 4, 28);
        fg.fillStyle(0x22cc22); fg.fillRect(18, 4, 12, 8);
        fg.generateTexture('checkpoint', 32, 32);
        fg.destroy();

        // --- Liquor store sign ---
        const lg = this.make.graphics({ add: false });
        lg.fillStyle(0x8822aa); lg.fillRect(0, 0, 64, 20);
        lg.fillStyle(0xffdd00);
        // LIQUOR sign text
        lg.fillRect(4, 4, 2, 12); lg.fillRect(4, 14, 8, 2); // L
        lg.fillRect(16, 4, 2, 12); lg.fillRect(26, 4, 2, 12); lg.fillRect(16, 4, 10, 2); lg.fillRect(16, 14, 10, 2); // Q-ish
        lg.generateTexture('liquor_sign', 64, 20);
        lg.destroy();
    }

    createZombieTexture(key, skinColor, capColor) {
        const g = this.make.graphics({ add: false });
        // feet
        g.fillStyle(0x3a3a3a); g.fillRect(10, 27, 5, 5); g.fillRect(17, 27, 5, 5);
        // legs
        g.fillStyle(0x2a3a5a); g.fillRect(10, 21, 5, 7); g.fillRect(17, 21, 5, 7);
        // body (stained shirt)
        g.fillStyle(0xaa8866); g.fillRect(10, 12, 12, 10);
        // arms
        g.fillStyle(skinColor); g.fillRect(7, 13, 4, 6); g.fillRect(21, 13, 4, 6);
        // head
        g.fillStyle(skinColor); g.fillRect(12, 4, 8, 9);
        // eyes
        g.fillStyle(0xff0000); g.fillRect(14, 7, 2, 2); g.fillRect(18, 7, 2, 2);
        // mouth
        g.fillStyle(0x330000); g.fillRect(14, 10, 4, 2);
        // RED BALL CAP
        g.fillStyle(capColor); g.fillRect(10, 2, 12, 3);
        g.fillStyle(capColor); g.fillRect(10, 4, 5, 2); // brim
        // cap logo (white rectangle)
        g.fillStyle(0xffffff); g.fillRect(15, 2, 5, 2);
        g.generateTexture(key, 32, 32);
        g.destroy();
    }
}

// ============================================================
// MENU SCENE
// ============================================================
class MenuScene extends Phaser.Scene {
    constructor() { super('Menu'); }

    create() {
        const cx = this.cameras.main.centerX;
        const cy = this.cameras.main.centerY;

        // background
        this.cameras.main.setBackgroundColor('#1a0a0a');

        // title
        this.add.text(cx, cy - 120, 'REDNECK RAMPAGE', {
            fontSize: '48px', fontFamily: 'monospace', color: '#cc2222',
            stroke: '#000', strokeThickness: 4
        }).setOrigin(0.5);

        this.add.text(cx, cy - 60, 'LAST CALL', {
            fontSize: '32px', fontFamily: 'monospace', color: '#ffdd00',
            stroke: '#000', strokeThickness: 3
        }).setOrigin(0.5);

        this.add.text(cx, cy + 10, 'The trailer park is overrun.\nYou\'re the last unturned redneck.\nFight your way to the liquor store.', {
            fontSize: '14px', fontFamily: 'monospace', color: '#aaaaaa',
            align: 'center', lineSpacing: 4
        }).setOrigin(0.5);

        // blink start text
        const startText = this.add.text(cx, cy + 100, '[ CLICK OR PRESS SPACE TO START ]', {
            fontSize: '16px', fontFamily: 'monospace', color: '#22cc22'
        }).setOrigin(0.5);

        this.tweens.add({
            targets: startText, alpha: 0.2, duration: 600,
            yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
        });

        this.add.text(cx, cy + 160, 'WASD = Move  |  Mouse = Aim  |  Click = Shoot  |  R = Reload', {
            fontSize: '11px', fontFamily: 'monospace', color: '#666666'
        }).setOrigin(0.5);

        // input
        this.input.on('pointerdown', () => this.startGame());
        this.input.keyboard.on('keydown-SPACE', () => this.startGame());
    }

    startGame() {
        this.scene.start('Game');
    }
}

// ============================================================
// GAME SCENE — the main event
// ============================================================
class GameScene extends Phaser.Scene {
    constructor() { super('Game'); }

    create() {
        // --- state ---
        this.score = 0;
        this.wave = 1;
        this.waveTimer = 0;
        this.waveDelay = 3000; // ms between waves
        this.zombiesThisWave = 0;
        this.zombiesPerWave = 5;
        this.zombiesKilledThisWave = 0;
        this.totalZombiesSpawned = 0;
        this.gameOver = false;
        this.ammo = 8;
        this.maxAmmo = 8;
        this.reloading = false;
        this.reloadTime = 1200; // ms
        this.fireRate = 250; // ms between shots
        this.lastShot = 0;
        this.checkpointsReached = 0;
        this.screenShakeIntensity = 0;

        // --- world ---
        this.physics.world.setBounds(0, 0, WORLD_W, WORLD_H);

        // ground
        const ground = this.add.graphics();
        ground.fillStyle(0x2d4a1a); // dark grass
        ground.fillRect(0, 0, WORLD_W, WORLD_H);
        // grass variation
        ground.fillStyle(0x3a5a22, 0.3);
        for (let i = 0; i < 200; i++) {
            const gx = Phaser.Math.Between(0, WORLD_W);
            const gy = Phaser.Math.Between(0, WORLD_H);
            ground.fillRect(gx, gy, Phaser.Math.Between(20, 60), Phaser.Math.Between(20, 60));
        }

        // --- build the town ---
        this.buildings = this.physics.add.staticGroup();
        this.createTown();

        // --- checkpoints ---
        this.checkpoints = this.physics.add.staticGroup();
        this.createCheckpoints();

        // --- player ---
        this.player = this.physics.add.sprite(WORLD_W / 2, WORLD_H / 2, 'player');
        this.player.setCollideWorldBounds(true);
        this.player.setDepth(10);
        this.player.speed = 200;
        this.player.hp = 100;
        this.player.maxHp = 100;
        this.player.body.setCircle(12, 4, 8);

        // --- bullets ---
        this.bullets = this.physics.add.group({
            maxSize: 50,
            allowGravity: false
        });

        // --- zombies ---
        this.zombies = this.physics.add.group({
            maxSize: 200,
            runChildUpdate: true
        });

        // --- blood splats (cosmetic) ---
        this.bloodSplat = this.add.graphics().setDepth(1);

        // --- camera ---
        this.cameras.main.setBounds(0, 0, WORLD_W, WORLD_H);
        this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
        this.cameras.main.setZoom(1.2);

        // --- input ---
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = {
            up: this.input.keyboard.addKey('W'),
            down: this.input.keyboard.addKey('S'),
            left: this.input.keyboard.addKey('A'),
            right: this.input.keyboard.addKey('D')
        };
        this.rKey = this.input.keyboard.addKey('R');
        this.input.on('pointerdown', (pointer) => this.shoot(pointer));

        // --- collisions ---
        this.physics.add.collider(this.player, this.buildings);
        this.physics.add.collider(this.zombies, this.buildings);
        this.physics.add.overlap(this.bullets, this.zombies, this.bulletHitZombie, null, this);
        this.physics.add.overlap(this.player, this.zombies, this.zombieHitPlayer, null, this);
        this.physics.add.overlap(this.player, this.checkpoints, this.reachCheckpoint, null, this);

        // --- HUD ---
        this.createHUD();

        // --- wave announcement ---
        this.announceWave();

        // --- minimap ---
        this.createMinimap();

        // hide default cursor, use crosshair
        this.input.setDefaultCursor('crosshair');
    }

    createTown() {
        const b = this.buildings;
        const T = TILE;

        // Helper: add a building with a label
        const addBuilding = (x, y, w, h, color, label) => {
            const gfx = this.add.graphics();
            gfx.fillStyle(color); gfx.fillRect(0, 0, w, h);
            // roof line
            gfx.fillStyle(0x333333); gfx.fillRect(0, 0, w, 3);
            // door
            gfx.fillStyle(0x5a3a1a); gfx.fillRect(w/2 - 6, h - T/2, 12, T/2);
            // windows
            gfx.fillStyle(0xaabbcc);
            if (w > T * 2) { gfx.fillRect(8, 8, 8, 8); gfx.fillRect(w - 16, 8, 8, 8); }
            else { gfx.fillRect(8, 8, 8, 8); }
            gfx.generateTexture(`bldg_${x}_${y}`, w, h);
            gfx.destroy();

            const spr = b.create(x + w/2, y + h/2, `bldg_${x}_${y}`);
            spr.setDisplaySize(w, h);
            spr.body.setSize(w, h);
            spr.body.setOffset(w * 0.1, h * 0.1); // slightly smaller collision
            spr.refreshBody();

            // label above building
            if (label) {
                this.add.text(x + w/2, y - 8, label, {
                    fontSize: '8px', fontFamily: 'monospace', color: '#888888'
                }).setOrigin(0.5).setDepth(2);
            }
        };

        // Dirt road (horizontal, through middle)
        const road = this.add.graphics();
        road.fillStyle(0x555544); road.fillRect(0, WORLD_H/2 - T*1.5, WORLD_W, T*3);
        road.fillStyle(0xaaaa44, 0.5);
        for (let i = 0; i < WORLD_W; i += 40) {
            road.fillRect(i, WORLD_H/2 - 2, 20, 4);
        }

        // Dirt road (vertical)
        road.fillStyle(0x555544); road.fillRect(WORLD_W/2 - T*1.5, 0, T*3, WORLD_H);

        // === TRAILERS (southeast quadrant) ===
        const trailerColor = 0x8899aa;
        addBuilding(T*2, T*2, T*6, T*2.5, trailerColor, 'TRAILER 1');
        addBuilding(T*10, T*2, T*6, T*2.5, trailerColor, 'TRAILER 2');
        addBuilding(T*2, T*6, T*6, T*2.5, 0x99887a, 'TRAILER 3');
        addBuilding(T*10, T*6, T*6, T*2.5, 0x7a8899, 'YOUR TRAILER');
        addBuilding(T*2, T*10, T*5, T*2.5, trailerColor, 'TRAILER 5');
        addBuilding(T*9, T*10, T*7, T*2.5, 0x888877, 'TRAILER 6');

        // === MAIN STREET BUILDINGS (north side of road) ===
        addBuilding(T*2, T*18, T*8, T*5, 0x8B7355, 'GAS STATION');
        addBuilding(T*14, T*17, T*10, T*6, 0x6a5a4a, 'GUN STORE');
        addBuilding(T*28, T*18, T*8, T*5, 0x7a6a5a, 'DAIRY QUEEN');

        // === SOUTH SIDE ===
        addBuilding(T*4, T*28, T*10, T*5, 0x5a6a5a, 'BAR');
        addBuilding(T*18, T*28, T*8, T*4, 0x6a5a6a, 'CHURCH');
        addBuilding(T*30, T*27, T*7, T*5, 0x4a5a6a, 'FEED STORE');

        // === LIQUOR STORE (goal - far corner) ===
        addBuilding(T*48, T*4, T*10, T*6, 0x8822aa, 'LIQUOR STORE');
        // sign above it
        this.add.image(T*53 * 1, T*2, 'liquor_sign').setDepth(3);

        // === NORTHWEST - junkyard ===
        addBuilding(T*38, T*20, T*6, T*4, 0x555555, 'JUNKYARD');
        // junk piles
        for (let i = 0; i < 8; i++) {
            const jx = T * Phaser.Math.Between(38, 50);
            const jy = T * Phaser.Math.Between(16, 20);
            const js = T * Phaser.Math.FloatBetween(1, 2);
            const junk = b.create(jx, jy);
            const jg = this.make.graphics({ add: false });
            jg.fillStyle(0x444444); jg.fillRect(0, 0, js, js);
            jg.generateTexture(`junk_${i}`, js, js); jg.destroy();
            junk.setTexture(`junk_${i}`);
            junk.setDisplaySize(js, js);
            junk.refreshBody();
        }

        // === Scattered obstacles (cars, fences, etc) ===
        const carColor = [0xcc3333, 0x3333cc, 0x33cc33, 0xcccc33];
        for (let i = 0; i < 12; i++) {
            let cx, cy;
            do {
                cx = T * Phaser.Math.Between(2, MAP_W - 4);
                cy = T * Phaser.Math.Between(2, MAP_H - 4);
            } while (this.isNearBuilding(cx, cy));

            const cg = this.make.graphics({ add: false });
            cg.fillStyle(carColor[i % carColor.length]); cg.fillRect(0, 0, T*2, T);
            cg.fillStyle(0x88bbdd); cg.fillRect(4, 2, T - 6, T - 4); // windshield
            cg.generateTexture(`car_${i}`, T*2, T); cg.destroy();

            const car = b.create(cx + T, cy + T/2, `car_${i}`);
            car.setDisplaySize(T*2, T);
            car.refreshBody();
        }

        // === perimeter fences ===
        for (let x = 0; x < WORLD_W; x += T * 3) {
            const fenceTop = b.create(x + T*1.5, T/2);
            const ftg = this.make.graphics({ add: false });
            ftg.fillStyle(0x666644); ftg.fillRect(0, 0, T*3, 4);
            ftg.generateTexture(`ft_${x}`, T*3, 4); ftg.destroy();
            fenceTop.setTexture(`ft_${x}`);
            fenceTop.setDisplaySize(T*3, 4);
            fenceTop.refreshBody();
        }
    }

    isNearBuilding(x, y) {
        const margin = TILE * 4;
        // check if too close to center (player spawn)
        if (Math.abs(x - WORLD_W/2) < margin * 2 && Math.abs(y - WORLD_H/2) < margin * 2) return true;
        // check main buildings roughly
        if (x < TILE * 16 && y < TILE * 14) return true; // trailer area
        if (y > TILE * 16 && y < TILE * 34 && x < TILE * 40) return true; // main street
        if (x > TILE * 46 && y < TILE * 12) return true; // liquor store
        return false;
    }

    createCheckpoints() {
        const cpPositions = [
            { x: TILE * 5, y: TILE * 14, name: 'Edge of the park' },
            { x: TILE * 18, y: TILE * 25, name: 'Main Street' },
            { x: TILE * 35, y: TILE * 22, name: 'Junkyard entrance' },
            { x: TILE * 45, y: TILE * 10, name: 'Almost there...' },
        ];

        cpPositions.forEach((cp, i) => {
            const flag = this.checkpoints.create(cp.x, cp.y, 'checkpoint');
            flag.cpIndex = i;
            flag.cpName = cp.name;
            flag.reached = false;
            flag.setDepth(5);
        });
    }

    createHUD() {
        // HUD container (fixed to camera)
        this.hudGroup = this.add.group();

        // health bar background
        this.hpBarBg = this.add.rectangle(16, 16, 104, 14, 0x333333).setOrigin(0).setScrollFactor(0).setDepth(100);
        this.hpBar = this.add.rectangle(18, 18, 100, 10, 0xcc2222).setOrigin(0).setScrollFactor(0).setDepth(101);

        // ammo display
        this.ammoText = this.add.text(16, 36, '', {
            fontSize: '12px', fontFamily: 'monospace', color: '#ffdd00'
        }).setScrollFactor(0).setDepth(100);

        // score
        this.scoreText = this.add.text(this.cameras.main.width - 16, 16, '', {
            fontSize: '14px', fontFamily: 'monospace', color: '#ffffff', align: 'right'
        }).setOrigin(1, 0).setScrollFactor(0).setDepth(100);

        // wave
        this.waveText = this.add.text(this.cameras.main.width / 2, 16, '', {
            fontSize: '12px', fontFamily: 'monospace', color: '#aaaaaa'
        }).setOrigin(0.5, 0).setScrollFactor(0).setDepth(100);

        // checkpoint progress
        this.cpText = this.add.text(this.cameras.main.width / 2, 34, '', {
            fontSize: '10px', fontFamily: 'monospace', color: '#22cc22'
        }).setOrigin(0.5, 0).setScrollFactor(0).setDepth(100);

        // message (for announcements)
        this.msgText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height - 80, '', {
            fontSize: '20px', fontFamily: 'monospace', color: '#ff4444',
            stroke: '#000', strokeThickness: 3, align: 'center'
        }).setOrigin(0.5).setScrollFactor(0).setDepth(100).setAlpha(0);
    }

    createMinimap() {
        const mmSize = 120;
        const mmX = this.cameras.main.width - mmSize - 10;
        const mmY = this.cameras.main.height - mmSize - 10;

        this.minimapBg = this.add.rectangle(mmX, mmY, mmSize, mmSize, 0x000000, 0.7)
            .setOrigin(0).setScrollFactor(0).setDepth(100);

        this.minimap = this.add.graphics().setScrollFactor(0).setDepth(101);
        this.minimap.setPosition(mmX, mmY);

        // draw buildings on minimap
        this.minimap.fillStyle(0x666666);
        this.buildings.getChildren().forEach(b => {
            const mx = (b.x / WORLD_W) * mmSize;
            const my = (b.y / WORLD_H) * mmSize;
            this.minimap.fillRect(mx - 1, my - 1, 3, 3);
        });

        // liquor store marker
        this.minimap.fillStyle(0x8822aa);
        this.minimap.fillRect((TILE * 53 / WORLD_W) * mmSize - 2, (TILE * 7 / WORLD_H) * mmSize - 2, 5, 5);
    }

    announceWave() {
        this.msgText.setText(`WAVE ${this.wave}\n${this.zombiesPerWave} zombies incoming!`);
        this.msgText.setAlpha(1);
        this.tweens.add({
            targets: this.msgText, alpha: 0, duration: 2000, delay: 1500
        });
    }

    showMessage(text, duration = 2000) {
        this.msgText.setText(text).setAlpha(1);
        this.tweens.add({
            targets: this.msgText, alpha: 0, duration, delay: duration * 0.6
        });
    }

    // --- SPAWNING ---
    spawnWave() {
        const spawnCount = this.zombiesPerWave - this.zombiesThisWave;
        for (let i = 0; i < spawnCount; i++) {
            this.time.delayedCall(i * 300, () => this.spawnZombie());
        }
        this.zombiesThisWave += spawnCount;
    }

    spawnZombie() {
        if (this.zombies.isFull()) return;

        // spawn from map edges, away from player
        let x, y;
        const side = Phaser.Math.Between(0, 3);
        const margin = TILE * 2;
        switch (side) {
            case 0: x = Phaser.Math.Between(margin, WORLD_W - margin); y = margin; break;
            case 1: x = Phaser.Math.Between(margin, WORLD_W - margin); y = WORLD_H - margin; break;
            case 2: x = margin; y = Phaser.Math.Between(margin, WORLD_H - margin); break;
            case 3: x = WORLD_W - margin; y = Phaser.Math.Between(margin, WORLD_H - margin); break;
        }

        // pick zombie type
        let key;
        const roll = Math.random();
        if (roll < 0.15) key = 'zombie_fat';
        else if (roll < 0.45) key = 'zombie2';
        else if (roll < 0.75) key = 'zombie3';
        else key = 'zombie1';

        const zombie = this.zombies.create(x, y, key);

        // zombie properties
        const isFat = key === 'zombie_fat';
        zombie.zombieSpeed = Phaser.Math.Between(40, 80) + this.wave * 5;
        zombie.zombieHp = isFat ? 4 + this.wave : 2 + Math.floor(this.wave / 2);
        zombie.zombieDamage = isFat ? 20 : 10;
        zombie.zombieScore = isFat ? 50 : 25;
        zombie.isFat = isFat;
        zombie.setDepth(9);
        zombie.setCollideWorldBounds(true);

        if (isFat) {
            zombie.body.setCircle(16, 4, 4);
        } else {
            zombie.body.setCircle(12, 4, 4);
        }

        // wobble animation
        zombie.wobbleTimer = this.time.addEvent({
            delay: Phaser.Math.Between(200, 500),
            callback: () => {
                if (zombie.active) {
                    zombie.setAngle(Phaser.Math.Between(-5, 5));
                }
            },
            loop: true
        });

        this.totalZombiesSpawned++;
    }

    // --- SHOOTING ---
    shoot(pointer) {
        if (this.gameOver) return;
        if (this.reloading) return;

        const now = this.time.now;
        if (now - this.lastShot < this.fireRate) return;

        if (this.ammo <= 0) {
            this.reload();
            return;
        }

        this.ammo--;
        this.lastShot = now;

        const bullet = this.bullets.get(this.player.x, this.player.y, 'bullet');
        if (!bullet) return;

        bullet.setActive(true);
        bullet.setVisible(true);
        bullet.setDepth(8);

        // aim at mouse (world coords)
        const worldPoint = this.cameras.main.getWorldPoint(pointer.x, pointer.y);
        const angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, worldPoint.x, worldPoint.y);

        const speed = 600;
        bullet.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
        bullet.body.setAllowGravity(false);

        // auto-kill bullet after distance
        this.time.delayedCall(1500, () => {
            if (bullet.active) bullet.setActive(false).setVisible(false);
        });

        // screen shake
        this.cameras.main.shake(50, 0.003);

        // muzzle flash
        const flash = this.add.circle(
            this.player.x + Math.cos(angle) * 20,
            this.player.y + Math.sin(angle) * 20,
            4, 0xffaa00, 1
        ).setDepth(11);
        this.tweens.add({ targets: flash, alpha: 0, duration: 80, onComplete: () => flash.destroy() });
    }

    reload() {
        if (this.reloading || this.ammo === this.maxAmmo) return;
        this.reloading = true;
        this.showMessage('Reloading...', 1000);

        this.time.delayedCall(this.reloadTime, () => {
            this.ammo = this.maxAmmo;
            this.reloading = false;
        });
    }

    // --- COLLISION HANDLERS ---
    bulletHitZombie(bullet, zombie) {
        bullet.setActive(false).setVisible(false);

        zombie.zombieHp--;

        if (zombie.zombieHp <= 0) {
            this.killZombie(zombie);
        } else {
            // hit flash
            zombie.setTintFill(0xffffff);
            this.time.delayedCall(80, () => { if (zombie.active) zombie.clearTint(); });
        }
    }

    killZombie(zombie) {
        // blood splat
        this.bloodSplat.fillStyle(0x880000, 0.6);
        this.bloodSplat.fillCircle(zombie.x, zombie.y, zombie.isFat ? 16 : 10);

        // score
        this.score += zombie.zombieScore;
        this.zombiesKilledThisWave++;

        // death wobble
        this.tweens.add({
            targets: zombie,
            alpha: 0, scaleX: 1.3, scaleY: 0.3,
            duration: 200,
            onComplete: () => {
                zombie.wobbleTimer.destroy();
                zombie.destroy();
            }
        });

        // small screen shake
        this.cameras.main.shake(30, 0.002);
    }

    zombieHitPlayer(player, zombie) {
        if (this.gameOver) return;

        // knockback
        const angle = Phaser.Math.Angle.Between(zombie.x, zombie.y, player.x, player.y);
        player.body.setVelocity(Math.cos(angle) * 300, Math.sin(angle) * 300);
        this.time.delayedCall(200, () => { if (player.active) player.body.setVelocity(0, 0); });

        // damage
        player.hp -= zombie.zombieDamage;

        // red flash
        this.cameras.main.flash(100, 200, 0, 0);
        this.cameras.main.shake(100, 0.005);

        // push zombie back a bit
        const pushAngle = Phaser.Math.Angle.Between(player.x, player.y, zombie.x, zombie.y);
        zombie.body.setVelocity(Math.cos(pushAngle) * 150, Math.sin(pushAngle) * 150);
        this.time.delayedCall(300, () => { if (zombie.active) zombie.body.setVelocity(0, 0); });

        if (player.hp <= 0) {
            this.gameOver = true;
            this.showGameOver();
        }
    }

    reachCheckpoint(_player, checkpoint) {
        if (checkpoint.reached) return;
        checkpoint.reached = true;

        // visual feedback
        checkpoint.setTint(0x00ff00);
        this.checkpointsReached++;

        this.showMessage(`${checkpoint.cpName}\nCheckpoint ${this.checkpointsReached}/4 reached!`);

        // heal a bit
        this.player.hp = Math.min(this.player.hp + 25, this.player.maxHp);

        // check if all checkpoints reached (liquor store is the real goal)
        if (this.checkpointsReached >= 4) {
            this.showMessage('THE LIQUOR STORE IS OPEN!\nYou win... for now.', 5000);
            this.time.delayedCall(5000, () => this.showGameOver(true));
        }
    }

    showGameOver(won = false) {
        this.physics.pause();

        const cx = this.cameras.main.width / 2;
        const cy = this.cameras.main.height / 2;

        this.add.rectangle(cx, cy, this.cameras.main.width, this.cameras.main.height, 0x000000, 0.7)
            .setScrollFactor(0).setDepth(200);

        const title = won ? 'YEEHAW!' : 'YOU DIED';
        const titleColor = won ? '#22cc22' : '#cc2222';

        this.add.text(cx, cy - 60, title, {
            fontSize: '40px', fontFamily: 'monospace', color: titleColor,
            stroke: '#000', strokeThickness: 4
        }).setOrigin(0.5).setScrollFactor(0).setDepth(201);

        this.add.text(cx, cy, `Score: ${this.score}\nWave: ${this.wave}\nZombies Killed: ${this.totalZombiesSpawned}`, {
            fontSize: '16px', fontFamily: 'monospace', color: '#ffffff',
            align: 'center', lineSpacing: 6
        }).setOrigin(0.5).setScrollFactor(0).setDepth(201);

        const restartText = this.add.text(cx, cy + 80, '[ CLICK TO PLAY AGAIN ]', {
            fontSize: '14px', fontFamily: 'monospace', color: '#22cc22'
        }).setOrigin(0.5).setScrollFactor(0).setDepth(201);

        this.tweens.add({
            targets: restartText, alpha: 0.2, duration: 500,
            yoyo: true, repeat: -1
        });

        this.input.on('pointerdown', () => {
            this.scene.restart();
        }, { once: true });
    }

    // --- MAIN UPDATE LOOP ---
    update(time) {
        if (this.gameOver) return;

        // --- Player movement ---
        const speed = this.player.speed;
        let vx = 0, vy = 0;

        if (this.wasd.up.isDown || this.cursors.up.isDown) vy = -speed;
        if (this.wasd.down.isDown || this.cursors.down.isDown) vy = speed;
        if (this.wasd.left.isDown || this.cursors.left.isDown) vx = -speed;
        if (this.wasd.right.isDown || this.cursors.right.isDown) vx = speed;

        // diagonal normalization
        if (vx !== 0 && vy !== 0) {
            vx *= 0.707;
            vy *= 0.707;
        }

        this.player.setVelocity(vx, vy);

        // flip sprite based on movement direction
        if (vx < 0) this.player.setFlipX(true);
        if (vx > 0) this.player.setFlipX(false);

        // --- Reload key ---
        if (Phaser.Input.Keyboard.JustDown(this.rKey)) {
            this.reload();
        }

        // --- Move zombies toward player ---
        this.zombies.getChildren().forEach(zombie => {
            if (!zombie.active) return;
            const angle = Phaser.Math.Angle.Between(zombie.x, zombie.y, this.player.x, this.player.y);
            const speed = zombie.zombieSpeed;
            zombie.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
        });

        // --- Wave management ---
        const activeZombies = this.zombies.countActive();
        if (activeZombies === 0 && this.zombiesThisWave >= this.zombiesPerWave) {
            // wave complete, start next
            this.wave++;
            this.zombiesPerWave = 5 + this.wave * 3;
            this.zombiesThisWave = 0;
            this.zombiesKilledThisWave = 0;
            this.announceWave();
            this.time.delayedCall(2000, () => this.spawnWave());
        } else if (this.zombiesThisWave === 0 && this.waveTimer === 0) {
            // first wave
            this.waveTimer = time;
            this.time.delayedCall(1000, () => this.spawnWave());
        }

        // --- Update HUD ---
        this.updateHUD();
    }

    updateHUD() {
        // health bar
        const hpPercent = Math.max(0, this.player.hp / this.player.maxHp);
        this.hpBar.width = 100 * hpPercent;

        // health bar color
        if (hpPercent > 0.5) this.hpBar.setFillStyle(0x22cc22);
        else if (hpPercent > 0.25) this.hpBar.setFillStyle(0xccaa22);
        else this.hpBar.setFillStyle(0xcc2222);

        // ammo
        const ammoStr = this.reloading ? 'RELOADING...' : `${'I'.repeat(this.ammo)}${'_'.repeat(this.maxAmmo - this.ammo)}`;
        this.ammoText.setText(ammoStr);

        // score
        this.scoreText.setText(`Score: ${this.score}\nWave: ${this.wave}`);

        // wave
        const active = this.zombies.countActive();
        this.waveText.setText(`Zombies: ${active}`);

        // checkpoint
        this.cpText.setText(`Checkpoints: ${this.checkpointsReached}/4`);

        // minimap player dot
        this.minimap.clear();
        this.minimap.fillStyle(0x666666);
        this.buildings.getChildren().forEach(b => {
            const mx = (b.x / WORLD_W) * 120;
            const my = (b.y / WORLD_H) * 120;
            this.minimap.fillRect(mx - 1, my - 1, 3, 3);
        });
        // liquor store
        this.minimap.fillStyle(0x8822aa);
        this.minimap.fillRect((TILE * 53 / WORLD_W) * 120 - 2, (TILE * 7 / WORLD_H) * 120 - 2, 5, 5);
        // player
        this.minimap.fillStyle(0x22cc22);
        const px = (this.player.x / WORLD_W) * 120;
        const py = (this.player.y / WORLD_H) * 120;
        this.minimap.fillRect(px - 2, py - 2, 4, 4);
        // zombies
        this.minimap.fillStyle(0xcc2222);
        this.zombies.getChildren().forEach(z => {
            if (!z.active) return;
            const zx = (z.x / WORLD_W) * 120;
            const zy = (z.y / WORLD_H) * 120;
            this.minimap.fillRect(zx, zy, 2, 2);
        });
    }
}

// ============================================================
// GAME CONFIG
// ============================================================
const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 640,
    parent: 'game-container',
    pixelArt: true,            // crisp rendering
    roundPixels: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // top-down, no gravity
            debug: false
        }
    },
    scene: [BootScene, MenuScene, GameScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);
