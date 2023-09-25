enum Roles { Admin='Admin', READ_ONLY= 'yes', AUTHOR = 'Author'}
enum Rolez { Admins, READ_ONLYs, AUTHORs}

interface User {
    name: string
    age:number
    role:[string,number] //this is a tupple
    inputer: number
}
const  user:User ={
    name:  Roles.Admin,
    age: 20,
    role: ['admin', 1],
    inputer: Rolez.READ_ONLYs
}
document.getElementById('name')!.innerHTML = user.name;