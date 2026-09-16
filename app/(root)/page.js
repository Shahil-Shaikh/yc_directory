import { IBM_Plex_Mono } from "next/font/google";
import Form from "next/form";
import StartupCard from "../components/StartupCard";
// import Cancelbutton from "../components/Cancelbutton";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});


export default async function Hero({ searchParams }) {
  const query = (await searchParams).query
  // const isQuery = query ? 1 : 0;
  // console.log("QUERY: ", isQuery, query);
  // const startups = [
  //   {
  //     id: "1",
  //     date: "October 12, 2024",
  //     views: 31,
  //     authorName: "Sujata",
  //     authorImage: "https://i.pravatar.cc/150?img=47",
  //     authorHref: "/user/sujata",
  //     title: "HomeGenie",
  //     description:
  //       "A smart home management platform that integrates and automates all your smart devices—lights, thermostats, and security in one dashboard.",
  //     image:
  //       "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  //     startupHref: "/startup/homegenie",
  //     category: "Tech",
  //   },
  //   {
  //     id: "2",
  //     date: "November 3, 2024",
  //     views: 58,
  //     authorName: "Rahul Verma",
  //     authorImage: "https://i.pravatar.cc/150?img=12",
  //     authorHref: "/user/rahulverma",
  //     title: "FarmTrack",
  //     description:
  //       "Helps small farmers monitor soil health, weather patterns, and crop yield predictions using low-cost IoT sensors.",
  //     image:
  //       "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
  //     startupHref: "/startup/farmtrack",
  //     category: "Agritech",
  //   },
  //   {
  //     id: "3",
  //     date: "September 21, 2024",
  //     views: 104,
  //     authorName: "Priya Nair",
  //     authorImage: "https://i.pravatar.cc/150?img=32",
  //     authorHref: "/user/priyanair",
  //     title: "ClinicQueue",
  //     description:
  //       "A booking and queue management system for clinics that cuts patient wait times and automates appointment reminders.",
  //     image:
  //       "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  //     startupHref: "/startup/clinicqueue",
  //     category: "Healthtech",
  //   },
  //   {
  //     id: "4",
  //     date: "August 8, 2024",
  //     views: 76,
  //     authorName: "Amit Das",
  //     authorImage: "https://i.pravatar.cc/150?img=8",
  //     authorHref: "/user/amitdas",
  //     title: "LedgerLite",
  //     description:
  //       "Simple invoicing and expense tracking built for freelancers and small agencies who don't need a full accounting suite.",
  //     image:
  //       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  //     startupHref: "/startup/ledgerlite",
  //     category: "Fintech",
  //   },
  // ];
  const startupsTemp = await fetch("http://localhost:3000/api"); //it returns data of type Response, which is a readable stream, so we need to convert it to json format to use it in our code
  let startups = await startupsTemp.json(); //this line convertes the response to object of type json, which we can use in our code.So this is an object
 startups=startups.data;
  console.log("Type : ", typeof startups);
  // console.log("Value : ", typeof startups.data);
  return (
    <>
      <section className="bg-[#FFFDF6] px-6 py-10 ">
        <div className="mx-auto max-w-4xl flex flex-col items-center">

          <h1
            className={`${plexMono.className} text-4xl font-semibold leading-[1.15] tracking-tight text-[#14110F] sm:text-5xl md:text-6xl flex flex-col items-center`}
          >
            <span>Find the startup.</span>

            <span>Send the application.</span>

            <span className="text-amber-500">Get in the room.</span>
          </h1>


          <p className="mt-6  text-lg text-[#14110F]/70">
            Browse open roles at startups building right now, or list yours and start reading applications today.
          </p>

          {/* CTAs */}
          {/* <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-lg bg-[#14110F] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#14110F]/85">
            Browse startups →
          </button>
          <button className="rounded-lg border border-[#14110F]/15 bg-white px-6 py-3 text-sm font-medium text-[#14110F] transition hover:border-[#14110F]/30">
            List your startup
          </button>
        </div> */}

          <Form
            action="/"
            className="searchform relative mt-8 w-full max-w-xl rounded-2xl border border-amber-400/50 bg-white p-2 shadow-[0_0_35px_rgba(245,158,11,0.25)]"
          >

            <div className="flex h-11 w-full">
              <input
                defaultValue={query}
                // this is bcz, after clicking the button, nextJs routes us to / which causes the page to reload and the input string no longer is there inside serach box, doing this will make sure that the default value is the entered string
                name="query"
                placeholder="Search startups..."
                className="input_box min-w-0 flex-1 rounded-xl bg-transparent px-5 text-base font-medium text-[#14110F] outline-none placeholder:text-[#14110F]/40 text-lg/8"
              />

              {/* Cancel / clear button */}
              {/* <Cancelbutton query={isQuery}/> */}
              {/* <Cancelbutton/> */}

              <button
                type="submit"
                className="rounded-xl bg-[#14110F] px-8 text-base font-semibold text-white transition hover:bg-amber-500 hover:text-[#14110F]"
              >
                Search
              </button>
            </div>
          </Form>
          {/* Form is helping because we want the search input to cause navigation to /search with the typed value — without writing our own onClick or onSubmit JavaScript. ALso we are not using button and input without a form as well cuz they doesn't tell the browser what should happen when the button is clicked. For that we would have needed JavaScript. But with a form, HTML already defines this behavior. Form is just html no extra JS required over client side therefore its rendered over the server, render means converting to html.*/}
          {/* we could have also used form instead FOrms but NextJS gives many additional features so we use Form */}

        </div>
      </section>

      <section className="card_container_section mx-auto max-w-7xl px-6 py-10">

        

        {query ? (
          <p className="mb-6 text-[#14110F]/60">Showing results for "{query}"</p>
        ) : (
          <p className="mb-6 text-[#14110F]/60">All startups</p>
        )}

        <div className="card_container flex flex-wrap gap-6">
          {startups.map((startup) => (
            <StartupCard key={startup.id} {...startup} />
          ))}
        </div>
      </section>

    </>
  );
}