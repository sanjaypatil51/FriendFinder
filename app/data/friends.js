

var friendsArray = [
    {
        name:"Ahmed",
        photo:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
        scores:[ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ]
    },
    {
        name:"Laura",
        photo:"https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
        scores:[ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ]
    } ,
    {
		name: "Sweet Dee",
		photo: "https://vignette2.wikia.nocookie.net/itsalwayssunny/images/f/f3/Square-Dee-Cheesy.jpg",
		scores: [2, 5, 4, 1, 2, 3, 3, 2, 3, 3]
	},
	{
		name: "Dennis",
		photo: "https://vignette3.wikia.nocookie.net/itsalwayssunny/images/1/13/Dennis_%281%29.jpg",
		scores: [1, 1, 5, 3, 3, 5, 1, 2, 3, 4]
	},
	{
		name: "Mac",
		photo: "https://vignette3.wikia.nocookie.net/itsalwayssunny/images/5/5f/Mac_-_Season_8.jpg",
		scores: [3, 1, 3, 5, 2, 3, 2, 2, 5, 5]
	},   
];
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;