import client from "@/app/lib/mongoSetup";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ REQUEST RESPONSE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export async function GET() {
  try { 
    /*
    NOTE: The MongoDB Node.js driver has legacy "auto-connect" behavior: if you call an operation like findOne() on a client that hasn't been explicitly connected, the driver will lazily connect for you behind the scenes on that first call. That's why it "just works" even without connect().The MongoDB Node.js driver has legacy "auto-connect" behavior: if you call an operation like findOne() on a client that hasn't been explicitly connected, the driver will lazily connect for you behind the scenes on that first call. That's why it "just works" even without connect().
    This is not recommended though — it's kept mainly for backward compatibility and can be removed/deprecated in future driver majors. Two reasons to always call connect() explicitly:
    You want connection errors to surface where you expect them, not buried inside your first query.
    It's clearer and more predictable code — no implicit magic.
    */
    const database = client.db("sample_mflix"); //Select the database
    const movies = database.collection("movies"); //Select the collection

    { title: "Back to the Future" }

    const movie = await movies.findOne({ title: "Back to the Future" });

    return Response.json(movie);
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to fetch movie" },
      { status: 500 }
    );
  }
}