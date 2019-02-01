const men = true;
const socrat = men;
if (men){
    console.log("All men are mortal");
    if(socrat){
        console.log("Socrates is a man.");
        console.log("Therefore, socrates is mortal.")
    }
};
const cake = "vanilla";
if(cake === "vanilla" || cake === "chocolate"){
    console.log("This cake is either vanilla or chocolate.");
    if(cake !== "chocolate"){
        console.log("This cake is not chocolate.");
        if (cake === "vanilla"){
            console.log("Therefore, this cake is vanilla.");
        }
    }else {
        console.log("This cake is chocolate.")
    }
}else {
    console.log("This cake is not vanilla or chocolate." )
};