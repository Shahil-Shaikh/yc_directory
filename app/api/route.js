import client from "@/app/lib/mongoSetup";

export async function GET() {
    const myDB = client.db("yc_dir_db"); //this will create a new database if it doesn't exist
    const myColln = myDB.collection("job_posts"); //this will create a new collection if it doesn't exist

/*~~~~~FOR DATA INSERTION~~~~~*/

//   const startups = [
//     {
//       id: "1",
//       date: "October 12, 2024",
//       views: 31,
//       authorName: "Sujata",
//       authorImage: "https://i.pravatar.cc/150?img=47",
//       authorHref: "/user/sujata",
//       title: "HomeGenie",
//       description:
//         "A smart home management platform that integrates and automates all your smart devices—lights, thermostats, and security in one dashboard.",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
//       startupHref: "/startup/homegenie",
//       category: "Tech",
//     },
//     {
//       id: "2",
//       date: "November 3, 2024",
//       views: 58,
//       authorName: "Rahul Verma",
//       authorImage: "https://i.pravatar.cc/150?img=12",
//       authorHref: "/user/rahulverma",
//       title: "FarmTrack",
//       description:
//         "Helps small farmers monitor soil health, weather patterns, and crop yield predictions using low-cost IoT sensors.",
//       image:
//         "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
//       startupHref: "/startup/farmtrack",
//       category: "Agritech",
//     },
//     {
//       id: "3",
//       date: "September 21, 2024",
//       views: 104,
//       authorName: "Priya Nair",
//       authorImage: "https://i.pravatar.cc/150?img=32",
//       authorHref: "/user/priyanair",
//       title: "ClinicQueue",
//       description:
//         "A booking and queue management system for clinics that cuts patient wait times and automates appointment reminders.",
//       image:
//         "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
//       startupHref: "/startup/clinicqueue",
//       category: "Healthtech",
//     },
//     {
//       id: "4",
//       date: "August 8, 2024",
//       views: 76,
//       authorName: "Amit Das",
//       authorImage: "https://i.pravatar.cc/150?img=8",
//       authorHref: "/user/amitdas",
//       title: "LedgerLite",
//       description:
//         "Simple invoicing and expense tracking built for freelancers and small agencies who don't need a full accounting suite.",
//       image:
//         "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
//       startupHref: "/startup/ledgerlite",
//       category: "Fintech",
//     },
//   ];

//     const insertManyresult = await myColln.insertMany(startups);  //it will return an object with insertedCount and insertedIds properties
//     let ids = insertManyresult.insertedIds;

//     console.log(`${insertManyresult.insertedCount} documents were inserted.`);

//     for (let id of Object.values(ids)) {
//     console.log(`Inserted a document with id ${id}`);
//     }

//     return Response.json(
//       { Success: 1, message: "Data inserted successfully" },
//       { status: 200 }
//     );


const fetchedAllPostsData = await myColln.find({}).toArray(); //this will return an array of all documents in the collection
//toArray converts the cursor returned by find() into an array of documents.The cursor returned by find() is not an object that can be directly converted to JSON. Rather its a cursor, so we need to convert it to an array first.
return Response.json(
    { Success: 1, message: "Data fetched successfully", data: fetchedAllPostsData },
    { status: 200 }
  );
//here ({},{}) in the Response.json means the first {} is the data we want to send in the response and the second {} is the options we want to set for the response like status code etc.
}