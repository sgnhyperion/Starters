import { revalidatePath } from "next/cache";

type MockUser = {
    id: number;
    name: string;
};
// https://678ac71bdd587da7ac2b613a.mockapi.io/users

export default async function UsersServer(){
    const response = await fetch("https://678ac71bdd587da7ac2b613a.mockapi.io/users");
    const mockUsers = await response.json();

    async function addUser(formData: FormData){
        "use server";
        const name = formData.get("bro");
        const res = await fetch(
            "https://678ac71bdd587da7ac2b613a.mockapi.io/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify({name})

            }
        );
        const newUser = await res.json();
        revalidatePath("/mock-users");
        console.log(newUser);
    }

    return (
        <div className="py-10">
            <form action={addUser} className="mb-4">
                <input type="text" name="bro" required className="border p-2 mr-2 rounded text-black" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add user</button>
            </form>
            <div className="grid grid-cols-4 gap-4 py-10">
                {mockUsers.map((mockUser: MockUser) => (
                    <div
                        key = {mockUser.id}
                        className="p-4 bg-white shadow-mg rounded-lg text-gray-700"
                        >{mockUser.name}
                    </div>
                ))}
            </div>  
        </div>
    )
}