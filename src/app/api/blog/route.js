import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "blog.json");

export async function POST(req) {
  try {
    const newBlog = await req.json();

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2), "utf8");
    }

    // Read the existing data
    const fileData = fs.readFileSync(filePath, "utf8");
    const blogs = JSON.parse(fileData);

    // Add the new blog to the array
    blogs.push(newBlog);

    // Save the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2), "utf8");

    return new Response(
      JSON.stringify({ message: "Blog saved successfully!" }),
      {
        status: 201,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify([]), { status: 200 });
    }

    const fileData = fs.readFileSync(filePath, "utf8");
    const blogs = JSON.parse(fileData);

    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
