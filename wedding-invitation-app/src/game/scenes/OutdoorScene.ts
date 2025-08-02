import Phaser from "phaser";

export default class OutdoorScene extends Phaser.Scene {
  constructor() {
    super("OutdoorScene");
  }

  preload() {
    // this.load.image(
    //   "tiles_outdoor",
    //   "/tilesets/Modern_Exteriors_Complete_Tileset.png"
    // );
    this.load.image("tiles_city_props", "/tilesets/3_City_Props_16x16.png");
    this.load.image("tiles_villa", "/tilesets/7_Villas_16x16.png");
    this.load.tilemapTiledJSON("map", "/maps/outdoor.json");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileset_city = map.addTilesetImage("City_Props", "tiles_city_props");
    const tileset_villa = map.addTilesetImage("villa", "tiles_villa");
    map.createLayer("background", tileset_city);
    map.createLayer("object_0", tileset_villa);
  }
}
