import { Schema, model } from "mongoose";
const wallpaperSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    imageUri: {
        type: String,
        required: true,
    },
});
const Wallpaper = model("Wallpaper", wallpaperSchema);
export default Wallpaper;
//# sourceMappingURL=wallpaper-model.js.map