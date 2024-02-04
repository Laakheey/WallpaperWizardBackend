import Wallpaper from "../models/wallpaper-model.js";
const postWallpaper = async (req, res) => {
    try {
        const { title, imageUri } = req.body;
        if (!title || !imageUri) {
            return res
                .status(400)
                .send({ msg: "Title or wallpaper url not provided" });
        }
        let newWallpaper = await Wallpaper.create({ title, imageUri });
        return res.status(200).send(newWallpaper);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
};
const getWallpaperById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send({ msg: "Id is not provided" });
        }
        let wallpaper = await Wallpaper.findById(id);
        if (!wallpaper) {
            return res.status(400).send({ msg: "Wallpaper not exist" });
        }
        return res.status(200).send(wallpaper);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
};
const getWallpapers = async (req, res) => {
    try {
        let { pageNumber, pageSize, searchString } = req.body;
        pageNumber = pageNumber || 0;
        pageSize = pageSize || 20;
        searchString = searchString || "";
        const searchRegex = new RegExp(searchString, 'i');
        const allWallpapers = await Wallpaper
            .find({ title: { $regex: searchRegex } })
            .skip(pageNumber * pageSize)
            .limit(pageSize);
        return res.status(200).send(allWallpapers);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
};
export { getWallpaperById, postWallpaper, getWallpapers };
//# sourceMappingURL=wallpaper-controller.js.map