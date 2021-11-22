// What is your global context?
console.log(this)
/*yes we have this keyword here which gives us access to the global context and global context differ
   to the situation in the case of node it gives us empty scope{} in the browser it gives access to the window object
    and here it shows undefined*/
// this keyword contain window object/global object or the Object that i define
// remember : for all regular fn calls , this is points to the window object/ global obj/in case of node empty window object

var user = {
  firstName: "tarun",
  role: "Admin",
  isLoggedIn: true,
  courseCount: 4,

  getCourseCount: function () {
    console.log("LINE 16", this) //call threw object and this is not a regular call//when control is here this print entire obj since this points to reference to same object user
    function sayHello() {
      console.log("Hello")
      console.log("LINE 19", this)
    }
    sayHello() // this is regular call and here this is not pointing to the user obj it points to the global obj so it returns only global object for here that is undefined
  },
}
user.getCourseCount()
