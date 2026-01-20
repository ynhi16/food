import clientPromise from "@/lib/mongodb";

export async function getMenus() {
  try {
    const client = await clientPromise;
    const db = client.db("restaurant");
    const menus = await db.collection("restaurant").find({}).toArray();
    return menus;
  } catch (error) {
    console.error("Error fetching menus:", error);
    return []; // Return empty array as fallback
  }
}

export async function getMenusPagination(page = 1, limit = 8) {
  try {
    const client = await clientPromise;
    const db = client.db("restaurant");

    const skip = (page - 1) * limit;

    // Lấy dữ liệu phân trang
    const menus = await db
      .collection("restaurant")
      .find({})
      .skip(skip)
      .limit(limit)
      .toArray();

    // Tính tổng số item và trang
    const totalItems = await db.collection("restaurant").countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    return {
      data: menus,
      totalItems,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error("Error fetching menus pagination:", error);
    return {
      data: [],
      totalItems: 0,
      totalPages: 0,
      currentPage: page,
    };
  }
}
