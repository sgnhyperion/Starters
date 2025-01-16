import { users } from "../route";

export async function GET(request: Request, {params}: {params: {id: string}}) {
    const { id } = await params;
    const user = users.find((user) => user.id === parseInt(id));
    if(user){
        return Response.json(user);
    }
    return Response.json({error: "User not found"});
}

export async function PUT(request: Request, {params}: {params: {id: string}}) {
    const { id } = await params;
    const newUser = await request.json();
    const user = users.find((user) => user.id === parseInt(id));
    if(user){
        user.name = newUser.name;
        return Response.json(user);
    }
    return Response.json({error: "User not found"});
}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    const { id } = await params;
    const user = users.find((user) => user.id === parseInt(id));
    if(user){
        users.splice(users.indexOf(user), 1);
        return Response.json(user);
    }
    return Response.json({error: "User not found"});
}