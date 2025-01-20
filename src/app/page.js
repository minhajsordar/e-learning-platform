import { getCategories } from "@/actions/category";
import CreateCategoryButton from "@/components/CreateCategoryButton";
import Link from "next/link";
export default async function Home() {
  const categories = await getCategories();
  return (
    <div className=" container mx-auto">
      <div className="flex justify-between items-center">
        <div>Category List</div>
        <div><CreateCategoryButton/></div>
      </div>
      {
        Array.isArray(categories) && categories.map((category, index) => (
          <div key={category.slug + index}>
            <Link href={`lessons?category=${category._id}`}>{category.name}</Link>
          </div>
        ))
      }
    </div>
  );
}
