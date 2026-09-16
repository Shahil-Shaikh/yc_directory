import Link from 'next/link'
import { auth, signIn, signOut } from '@/auth';
import { getProviders } from 'next-auth/react';

async function Navbar() {
    const session = await auth();
    // A session is a temporary secure state that tracks and proves a user is logged in across multiple page requests. 
    return (
        <header>
            <nav className="w-full border-b bg-amber-400">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900 font-mono">
                            <Link href="/">YC_DIRECTORY</Link>
                        </span>
                    </div>

                    {/* Auth Buttons */}
                    <div>
                        {/* here we want to show things to the user only if user is logged in by checking the session */}
                        {/* checks if session and user exists, cuz a session might exists without user */}
                        {session && session?.user ?
                            <div className="flex items-center gap-3">
                                {/* Create posting - only visible to signed-in users, this is just navigation (like the Logo Link above) so it doesn't need to be a Server Action/form */}
                                <Link
                                    href="/startup/create"
                                    className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
                                    Create posting
                                </Link>

                                {/*
                                    CONCEPT: onClick needs a live JS listener in the browser to detect
                                    the click and call the function. Navbar is a Server Component (no
                                    "use client"), so no such listener ever gets attached - the button
                                    renders as plain HTML with nothing wired to it. That's why clicking
                                    used to do nothing and threw no error.
                                    A <form action={...}> doesn't need a JS listener at all - the
                                    browser natively knows how to submit a form on button click, and
                                    Next.js hooks that native submission straight into the Server Action.
                                    So we wrap the button in a form instead of using onClick.
                                */}
                                {/* form is the new react feature in which we pass server action to a form and submit the form to the server */}
                                {/* also nextJS extends the html form with action as well */}
                                <form action={
                                    async () => {
                                        "use server";
                                        await signOut()
                                    }
                                }>
                                    <button
                                        type="submit"
                                        className="rounded-lg px-4 py-2 text-sm font-medium text-gray-950 transition hover:bg-gray-100">
                                        Sign Out
                                    </button>

                                    <Link href={`/user/${session.user.id}`} className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
                                        <span>{session.user.name}</span>
                                    </Link>
                                </form>
                                {/* 
                                    note: This component is a server component, still it works with button, this is because
                                    <button>Click me</button> is not inherently "interactive" — it's just a tag.
                                    server can render button. That's valid, static HTML.No JavaScript required to display a button.
                                    The error only shows up when we try to give that button some JS-powered behavior tied to the browser runtime, e.g.
                                    // This is what causes the error in a Server Component
                                    <button onClick={() => setCount(count + 1)}>Click me</button>
                                    Therefore when button is clicked the onClick handler is triggered in 
                                    the browser and the browser then executes the function. Now declaring "use server"
                                    the function is no longer executed over browser rather it is executed 
                                    over the server otherwise if function were to be executed over client we would have error.
                                    The onClick runs over the browser it cant run over server, therefore instead we use form with action,
                                
                                */}

                            </div>
                            :
                            <div className="flex items-center gap-3">
                                {/* same concept as Sign Out above: form instead of onClick, since onClick has no listener to run in a Server Component */}
                                <form action={

                                    async () => {
                                        "use server";
                                        // the above directive is uses due to which this below function will be called on server
                                        // sign-in logic must execute on the server to guarantee security, session control, and access to private backend resources
                                        await signIn('github')
                                    }
                                }>
                                    <button
                                        type="submit"
                                        className="rounded-lg px-4 py-2 text-sm font-medium text-gray-950 transition hover:bg-gray-100">
                                        Sign In
                                    </button>
                                </form>

                                <button className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
                                    Sign Up
                                </button>
                            </div>
                        }
                    </div>
                </div>


                {/* 

                 <button
                    onClick={()=>{}}
                    className="rounded-lg px-4 py-2 text-sm font-medium text-gray-950 transition hover:bg-gray-100">
                    hi
                </button> 
                NOTE: The above throws error as it's being tried to executed over server whereas it is supposed 
                to be executed over client browser while being in a client component.


                <button
                    onClick={()=>{
                        "use client"
                        console.log("sdf")}}
                    className="rounded-lg px-4 py-2 text-sm font-medium text-gray-950 transition hover:bg-gray-100">
                    hi
                </button> 
                NOTE:
                Won't work cuz "use client" doesn't work like "use server".
                 "use server" can be used inside a function to mark that function as a Server Action.
                    But "use client" cannot be used inside a function. It marks the entire 
                    module/component as a Client Component.
                 
                 */}

            </nav>
        </header >
    )
}

export default Navbar