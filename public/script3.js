import { Scuti } from "../src/Scuti";
import {Room} from "../src/objects/rooms/Room";
import {FloorMaterial} from "../src/objects/rooms/materials/FloorMaterial";
import {WallMaterial} from "../src/objects/rooms/materials/WallMaterial";
import {FloorFurniture} from "../src/objects/furnitures/FloorFurniture";
import {WallFurniture} from "../src/objects/furnitures/WallFurniture";
import {Avatar} from "../src/objects/avatars/Avatar";
import {AvatarAction} from "../src/objects/avatars/actions/AvatarAction";

(async ()=>{
    const renderer = new Scuti({
        canvas: document.getElementById("app"),
        width: window.innerWidth,
        height: window.innerHeight,
        resources: './resources'
    });
    await renderer.loadResources();

    const tileMap = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n" +
        "xeeeeeeeeeeeeeeeedcba9888888888888\n" +
        "xeeeeeeeeeeeeeeeexxxxxx88888888888\n" +
        "xeeeeeeeeeeeeeeeexxxxxx88888888888\n" +
        "xeeeeeeeeeeeeeeeexxxxxx88888888888\n" +
        "xeeeeeeeeeeeeeeeexxxxxx88888888888\n" +
        "xdxxxxxxxxxxxxxxxxxxxxx88888888888\n" +
        "xcxxxxxxxxxxxxxxxxxxxxx88888888888\n" +
        "xbxxxxxxxxxxxxxxxxxxxxx88888888888\n" +
        "xaxxxxxxxxxxxxxxxxxxxxx88888888888\n" +
        "aaaaaaaaaaaaaaaaaxxxxxxxxxxxxxxxxx\n" +
        "xaaaaaaaaaaaaaaaaxxxxxxxxxxxxxxxxx\n" +
        "xaaaaaaaaaaaaaaaaxxxxxxxxxxxxxxxxx\n" +
        "xaaaaaaaaaaaaaaaaxxxx6666666666666\n" +
        "xaaaaaaaaaaaaaaaaxxxx6666666666666\n" +
        "xaaaaaaaaaaaaaaaaxxxx6666666666666\n" +
        "xaaaaaaaaaaaaaaaaxxxx6666666666666\n" +
        "xaaaaaaaaaaaaaaaaxxxx6666666666666\n" +
        "xaaaaaaaaaaaaaaaa98766666666666666\n" +
        "xaaaaaaaaaaaaaaaaxxxxxxxxxxxx5xxxx\n" +
        "xaaaaaaaaaaaaaaaaxxxxxxxxxxxx4xxxx\n" +
        "xaaaaaaaaaaaaaaaaxxxxxxxxxxxx3xxxx\n" +
        "xaaaaaaaaaaaaaaaaxxx3333333333xxxx\n" +
        "xaaaaaaaaaaaaaaaaxxx3333333333xxxx\n" +
        "xaaaaaaaaaaaaaaaaxxx3333333333xxxx\n" +
        "xaaaaaaaaaaaaaaaaxxx3333333333xxxx\n" +
        "xaaaaaaaaaaaaaaaaxxx3333333333xxxx\n" +
        "xaaaaaaaaaaaaaaaaxxx3333333333xxxx\n" +
        "xaaaaaaaaaaaaaaaaxxx3333333333xxxx\n" +
        "xaaaaaaaaaaaaaaaaxxx3333333333xxxx\n" +
        "xaaaaaaaaaaaaaaaaxxx3333333333xxxx\n" +
        "xaaaaaaaaaaaaaaaaxxx3333333333xxxx\n" +
        "xxxxxxxxxxxxxxxx9xxx3333333333xxxx\n" +
        "xxxxxxxxxxxxxxxx8xxx3333333333xxxx\n" +
        "xxxxxxxxxxxxxxxx7xxx3333333333xxxx\n" +
        "xxx777777777xxxx6xxx3333333333xxxx\n" +
        "xxx777777777xxxx5xxxxxxxxxxxxxxxxx\n" +
        "xxx777777777xxxx4xxxxxxxxxxxxxxxxx\n" +
        "xxx777777777xxxx3xxxxxxxxxxxxxxxxx\n" +
        "xxx777777777xxxx2xxxxxxxxxxxxxxxxx\n" +
        "xfffffffffxxxxxx1xxxxxxxxxxxxxxxxx\n" +
        "xfffffffffxxxxxx111111111111111111\n" +
        "xfffffffffxxxxxx111111111111111111\n" +
        "xfffffffffxxxxxx111111111111111111\n" +
        "xfffffffffxxxxxx111111111111111111\n" +
        "xfffffffffxxxxxx111111111111111111\n" +
        "xfffffffffxxxxxx111111111111111111\n" +
        "xxxxxxxxxxxxxxxx111111111111111111\n" +
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

    const room = new Room(renderer, {
        tileMap: tileMap,
        /*floorMaterial: new FloorMaterial(renderer, 110),
        wallMaterial: new WallMaterial(renderer, 1501)*/
        //floorMaterial: new FloorMaterial(renderer, 307),
        floorMaterial: new FloorMaterial(renderer, 110),
        wallMaterial: new WallMaterial(renderer, 1601)
    });
    const avatar = new Avatar({
        figure: "hr-100-61.hd-180-7.ch-210-66.lg-270-82.sh-290-80",
        position: {
            x: 4,
            y: 4,
            z: 0
        },
        bodyDirection: 2,
        headDirection: 2,
        actions: [
            //AvatarAction.Idle,
            //AvatarAction.Walk,
            AvatarAction.Talk,
            AvatarAction.Wave,
            AvatarAction.Walk,
            AvatarAction.CarryItem,
        ],
        handItem: 55
    });
    room.objects.add(avatar);
    room.tiles.onPointerDown = (position) => {
        console.log("click", position);
        avatar.pos = position.position;

    }
    room.tiles.onDoubleClick = (position) => {
        console.log("dblclick", position);
    }
    room.tiles.onPointerOver = (event) => {
    }
    dice(room, 5, 5, 2);
    dice(room, 5, 6, 1);
    dice(room, 6, 5, 2);
    dice(room, 7, 5, 2);
    dice(room, 7, 6, 1);
    const wallFurniture = new WallFurniture({
        id: 4054,
        position: {
            x: 0,
            y: 0,
            offsetX: 0,
            offsetY: 0
        },
        direction: 4,
        state: 0
    })
    const wallFurniture2 = new WallFurniture({
        position: {
            x: 1,
            y: 0,
            offsetX: 8,
            offsetY: 36,
        },
        state: 0,
        id: 4625,
        direction: 2,
    });
    const furniture = new FloorFurniture({
        id: 1619,
        position: {
            x: 8,
            y: 5,
            z: 0
        },
        direction: 2,
        state: 1
    });
    const furniture2 = new FloorFurniture({
        id: 8916,
        position: {
            x: 8,
            y: 10,
            z: 0
        },
        direction: 2,
        state: 1
    });
    const furniture3 = new FloorFurniture({
        id: 8916,
        position: {
            x: 10,
            y: 10,
            z: 0
        },
        direction: 2,
        state: 0
    });
    furniture.onPointerDown = () => {
        if(furniture.selected) {
            furniture.selected = false;
        } else {
            furniture.selected = true;
        }
    }
    const guildGate = new FloorFurniture({
        id: 4389,
        position: {
            x: 11,
            y: 5,
            z: 0
        },
        direction: 2,
        state: 1
    });
    setTimeout(() => {
        console.log(furniture.position);
        /*furniture.move({
            x: 10,
            y: 6,
            z: 0
        }, 0);*/
        //
        furniture.rotate(4)
        //furniture.direction = 4;
       furniture.state = 0;
        guildGate.state = 101;
        guildGate.visualization.secondaryColor = 0xFFFF00;
        guildGate.visualization.primaryColor = 0x00FFFF;
    }, 5000);
    const wallFurniture3 = new WallFurniture({
        position: {
            x: 4,
            y: 0,
            offsetX: 14,
            offsetY: 41,
        },
        id: 4066,
        direction: 4,
        state: 3,
    });
    room.objects.add(wallFurniture);
    room.objects.add(wallFurniture3);
    room.objects.add(furniture);
    room.objects.add(furniture2);
    room.objects.add(furniture3);
    room.objects.add(guildGate);

    /*const furniture = new FloorFurniture({
        id: 1619,
        position: {
            x: 7,
            y: 5,
            z: 0
        },
        direction: 4,
        state: 1
    });*/
})();

function dice(room, x, y, z) {
    let furni5 = new FloorFurniture({
        position: {
            x: x,
            y: y,
            z: z,
        },
        //direction: randomRotation[Math.floor(Math.random() * randomRotation.length)],
        direction: 0,
        //id: furniId[Math.floor(Math.random() * furniId.length)],
        id: 284,
        state: 1,
    });
    room.objects.add(furni5);
    let timeout = undefined;
    furni5.onDoubleClick = (event) => {
        console.log(event);
        //if(furni5.infos.logic === "furniture_dice") {
            console.log("clicked furni5", event);
            if(event.tag === "activate") {
                clearTimeout(timeout);
                furni5.state = -1;
                timeout = setTimeout(() => {
                    furni5.state = Math.floor(Math.random() * 6) + 1;
                }, 1000);
                /*setTimeout(() => {
                    furni5.state = 0
                }, 2000);*/
            } else {
                clearTimeout(timeout);
                furni5.state = 0;
            }
        //x@}
    }
}
