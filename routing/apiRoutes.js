var friendsData = require("../app/data/friends");


module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });
  
 
  
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
  
    app.post("/api/friends", function(req, res) {
      // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
      // It will do this by sending out the value "true" have a table
      // req.body is available since we're using the body parsing middleware
       var totalScores=[]
       console.log(req.body)
      for (i in friendsData){
        var scores=friendsData[i].scores
        var totalScore=0
        for (j=0;j<scores.length;j++){
           
             totalScore=totalScore+ Math.abs(scores[j]-req.body.scores[j])

        }

        totalScores.push(totalScore)

        
      }

      var body=friendsData[totalScores.indexOf(Math.min.apply(null,totalScores))]
      console.log(req.body)
      console.log("---response from api route")
      console.log(res)
      console.log("---score array")
      console.log(totalScores)
      friendsData.push(req.body)
      res.send(body)
      
    });
  
    
  };
  