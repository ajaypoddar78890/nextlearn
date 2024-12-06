export async function createPost(formData) {
  "use server";

  const title = formData.get("title");
  const description = formData.get("description");

  // Handle the form data (e.g., save it to a database)
  console.log("Title:", title, "Description:", description);

  // Optionally, return a response or redirect
  return { success: true };
}
