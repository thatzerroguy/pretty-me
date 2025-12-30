import ProductList from "@/components/ProductList";
import { notFound } from "next/navigation";

// Define valid categories and their metadata
const CATEGORIES = {
  sales: { title: "Sales & Offers", filter: "sale" },
  dresses: { title: "Exclusive Dresses", filter: "dresses" },
  office: { title: "Office & Professional", filter: "office" },
  others: { title: "Others & Accessories", filter: "others" },
};

type CategoryKey = keyof typeof CATEGORIES;

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({
    category,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryKey = params.category as CategoryKey;
  const categoryData = CATEGORIES[categoryKey];

  if (!categoryData) {
    notFound();
  }

  return (
    <ProductList title={categoryData.title} filter={categoryData.filter} />
  );
}
