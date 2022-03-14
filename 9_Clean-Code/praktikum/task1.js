// Base Code
class user{
    var id;
    var username;
    var password;
}
 class userservice{
    user[] users = [];

    user[] getallusers(){
        return this.users;
    }

    user getuserbyid(userid){
        return this.users.filter(userid);
    }

 }


// Kekurangan dari penulisan kode diatas
/*
1) Penamaan Class
Penamaan class disarankan menggunakan PascalCase, dimana huruf depan disetiap kata menggunakan huruf Kapital.
Dalam konteks kode diatas maka :
- user -> User
- userservice -> UserService

2) Penamaan Variabel dan Method
Penamaan variabel dan method disarankan menggunakan camelCase, dimana semua suku kata menyatu tetapi di katapertama menggunakan huruf kecil semua lalu diikuti kata kedua dengan menggunakan kapital dihuruf kedua.
 dalam konteks kode diatas maka:
- getallusers() -> getAllUsers()
- getuserbyid() -> getUserById()

*/