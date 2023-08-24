import Link from "next/link";

export default function UpdatePassword() {
    return(
        <div className="flex-1">
             <div className="w-[450px] mx-auto shadow-md mt-8 bg-white rounded-lg">
                <h1 className="text-center text-3xl uppercase py-3">Change Password</h1>
                <form className="space-y-3 md:space-y-4">
                    <input
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-10/12 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Password"
                    />
                    <input
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-10/12 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Confirm Password"
                    />
                    <div className="flex justify-center pb-3">
                        <button className=" rounded-3xl bg-amber-600 text-white py-2 px-5 mx-auto">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}