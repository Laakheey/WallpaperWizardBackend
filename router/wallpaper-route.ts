import { Router } from "express";
import { getWallpaperById, getWallpapers, postWallpaper } from "../controller/wallpaper-controller.js";

const router = Router();

router.route('/get-wallpaper-by-id/:id').get(getWallpaperById);
router.route('/post-wallpaper').post(postWallpaper);
router.route('/get-wallpapers').post(getWallpapers);

export default router;