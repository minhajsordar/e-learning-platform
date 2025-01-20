"use server"
import connectMongoDB from '@/config/connectMongoDB.js';
import Category from '@/models/CategoryModel.js';
import { revalidatePath } from 'next/cache';
const data = [
    {
        _id: "1",
        name: "React Js",
        slug: "react-js",
        rootCategory: true,
        categories: [],
    },
    {
        _id: "2",
        name: "Next Js",
        slug: "next-js",
        rootCategory: true,
        categories: [],
    },
]
export const getCategories = async () => {
    try {
        await connectMongoDB();
        const results = await Category.find();
        if(results.length === 0){
            return data
        }
        return JSON.parse(JSON.stringify(results))
    } catch (error) {
        return {
            error,
            msg: "Error Finding Category"
        }
    }
}
export const getCategoryById = async (id) => {
    try {
        await connectMongoDB();
        const results = await Category.findById(id);
        return JSON.parse(JSON.stringify(results))
    } catch (error) {
        return {
            error,
            msg: "Error Finding Category"
        }
    }
}
export const createCategory = async ({
    name,
    slug
}) => {
    try {
        await connectMongoDB();
        const results = await Category.create({
            name,
            slug,
            rootCategory: true,
        });
        revalidatePath("/");
        return JSON.parse(JSON.stringify(results))
    } catch (error) {
        return {
            error,
            msg: "Error Creating Category"
        }
    }
}
export const deleteCategory = async (id) => {
    try {
        await connectMongoDB();
        const results = await Category.findByIdAndDelete(id);
        revalidatePath("/");
        return results
    } catch (error) {
        return {
            error,
            msg: "Error Finding Category"
        }
    }
}