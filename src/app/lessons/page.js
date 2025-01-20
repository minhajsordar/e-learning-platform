import { getLessonsByCategory } from "@/actions/category";
export default async function Page({ searchParams }) {
    const categoryid = (await searchParams)?.category
    const lessons = await getLessonsByCategory(categoryid);

    return (
        <div className="">
            {categoryid}
            {JSON.stringify(lessons)}
        </div>
    );
}
