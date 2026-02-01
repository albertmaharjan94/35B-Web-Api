import { BlogModel, IBlog } from "../models/blog.model";
export interface IBlogRepository {
    create(blogData: any): Promise<IBlog>;
    getById(blogId: string): Promise<IBlog | null>;
    update(blogId: string, blogData: any): Promise<IBlog | null>;
    delete(blogId: string): Promise<boolean>;
    getAll(): Promise<IBlog[]>;
}
export class BlogRepository implements IBlogRepository {
    async create(blogData: any): Promise<IBlog> {
        const blog = new BlogModel(blogData);
        const newBlog = await blog.save();
        return newBlog;
    }
    async getAll(): Promise<IBlog[]> {
        const blogs = await BlogModel.find()
            .populate('authorId', 'username email')
            // .populate('comments');
        return blogs;
    }
    async getById(blogId: string): Promise<IBlog | null> {
        const found = await BlogModel.findById(blogId)
            // .populate('authorId', 'username email');
        return found;
    }
    async update(blogId: string, blogData: any): Promise<IBlog | null> {
        const updated = await BlogModel.findByIdAndUpdate(blogId, blogData, { new: true });
        return updated;
    }
    async delete(blogId: string): Promise<boolean> {
        const deleted = await BlogModel.findByIdAndDelete(blogId);
        return deleted !== null;
    }
}