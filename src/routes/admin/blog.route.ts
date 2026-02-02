import { AdminBlogController } from "../../controllers/admin/blog.controller";
import { authorizedMiddleware, adminOnlyMiddleware } 
    from "../../middlewares/authorized.middleware";
import { Router } from "express";

const adminBlogController = new AdminBlogController();
const router = Router();
// use the middleware in all the routes of this router
router.use(authorizedMiddleware);
router.use(adminOnlyMiddleware);

router.get('/', 
    // authorizedMiddleware,
    adminBlogController.getAllBlogs);
router.delete('/:id', adminBlogController.deleteBlog);

export default router;