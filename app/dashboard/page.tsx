
export default function Page() {
    return (
        <>
        <h1>This is form to fill up</h1>
            <form action="" method="post" className="flex flex-col p-4 align-center justify-center border border-black">
                <input type="email" name="" id="" className="border rounded-lg my-2" placeholder="Email" />
                <input type="password" name="" id="" className="border rounded-lg my-2" placeholder="Password" />
                <input type="name" name="" id="" className="border border-gray-900 rounded-lg my-2 p-2" placeholder="Name" />
                <button className="bg-blue-500 text-white p-3 rounded-lg">Send</button>
            </form>
        </>
    )
  }