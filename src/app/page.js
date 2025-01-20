import { getCategories } from "@/actions/category";
import Link from "next/link";
export default async function Home() {
  const categories = await getCategories();
  return (
    <div className="">
      {
        Array.isArray(categories) && categories.map((category, index) => (
          <div key={category.slug}>
            <Link href={`lessons?category=${category._id}`}>{category.name}</Link>
            {category._id}
            {category.slug}
            {category.content}
          </div>
        ))
      }
    </div>
  );
}
