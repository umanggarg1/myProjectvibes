import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { connection } from "next/server";

export async function getFeaturedProducts() {
  "use cache";
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));

  return productsData;
}

export async function getAllApprovedProducts() {
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));

  return productsData;
}

export async function getAllProducts() {
  "use cache";
  const productsData = await db
    .select()
    .from(products)
    .orderBy(desc(products.voteCount));

  return productsData;
}

export async function getRecentlyLaunchedProducts() {

  await connection();
  // await connection(); is used to wait until the connection is fully established before moving on.
  // we cannot use "use cache" when we need real time data or with dynamic component, so we have to remove "use cache" from components\landing-page\recently-launched-products.tsx file

  const productsData = await getAllApprovedProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productsData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo
  );
}

export async function getProductBySlug(slug: string) {
  const product = await db
    .select()
    .from(products)
    .where(eq(products.slug, slug))
    .limit(1);

  return product?.[0] ?? null;
}