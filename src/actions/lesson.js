"use server"
import connectMongoDB from '@/config/connectMongoDB.js';
import Lesson from '@/models/LessonModel.js';
import { revalidatePath } from 'next/cache';
const data = [
    {
        _id: "1",
        name: "React Js Lesson",
        slug: "react-js",
        content: "React js question title",
        category: 1,
    },
    {
        _id: "2",
        name: "Next Js",
        slug: "next-js",
        content: "Next js question title",
        category: 2,
    },
]
export const getLessons = async () => {
    try {
        await connectMongoDB();
        const results = await Lesson.find();        
        if(results.length === 0){
            return data
        }
        revalidatePath("/lessons")
        return JSON.parse(JSON.stringify(results))
    } catch (error) {
        return {
            error: true, 
            msg: error.message,
        }
    }
}

export const getLessonById = async (id) => {
    try {
        await connectMongoDB();
        const results = await Lesson.findById(id);
        return JSON.parse(JSON.stringify(results))
    } catch (error) {
        return {
            error,
            msg: "Error Finding Lesson"
        }
    }
}

export const getLessonsByCategory = async (id) => {
    if (!id) {
        return null;
    }
    try {
        await connectMongoDB();
        const results = await Lesson.find({ category: id });
        return JSON.parse(JSON.stringify(results))
    } catch (error) {
        return {
            error,
            msg: "Error Finding Category"
        }
    }
}
export const createLesson = async ({
    name,
    slug,
    content,
    category
}) => {
    try {
        await connectMongoDB();
        const results = await Lesson.create({
            name,
            slug,
            content,
            category
        });
        revalidatePath(`/lessons?category=${category}`);
        return JSON.parse(JSON.stringify(results))
    } catch (error) {
        return {
            error: true,
            msg: error.message, 
        }
    }
}

export const editLesson = async (id, { name, slug, content, category }) => {
    try {
        await connectMongoDB();

        // Update the lesson by id
        const updatedLesson = await Lesson.findByIdAndUpdate(
            id,
            { name, slug, content, category }, // Fields to update
            { new: true } // Return the updated document
        );

        // If the lesson was not found
        if (!updatedLesson) {
            return {
                error: true,
                msg: "Lesson not found",
            };
        }

        // Revalidate the relevant path
        revalidatePath(`/lessons?category=${category}`);

        // Return the updated lesson
        return JSON.parse(JSON.stringify(updatedLesson));
    } catch (error) {
        return {
            error: true,
            msg: error.message,
        };
    }
};


export const deleteLesson = async (id) => {
    try {
        await connectMongoDB();
        const results = await Lesson.findByIdAndDelete(id);
        revalidatePath("/lessons")
        return JSON.parse(JSON.stringify(results))
    } catch (error) {
        return {
            error,
            msg: "Error Finding Lesson"
        }
    }
}