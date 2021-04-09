// createTeam function -> accepts team
function createTeam(team){

    // createManager function -> accepts a Manager object -< returns the HTML template string for a manager card
    //Should I be using the this keyword???? instead of Manager.name it would be this.name
    function generateManagerHTML(Manager){
        return `
        <div class="card mb-4" style="width: 18rem;">
            <div class="card-header text-white bg-primary">
              Manager </br>
              ${Manager.getName()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${Manager.getId()}</li>
              <li class="list-group-item">Email: <a href = "mailto: ${Manager.getEmail()}">${Manager.getEmail()}<a></li>
              <li class="list-group-item">Phone number: ${Manager.getOfficeNumber()}</li>
            </ul>
        </div>
        ` 
    }
	// createEngineer function -> accepts an Engineer object -< returns the HTML template string for an engineer card
    function generateEngineerHTML(Engineer){
        return `
        <div class="card mb-4" style="width: 18rem;">
            <div class="card-header text-white bg-primary">
              Engineer </br>
              ${Engineer.getName()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${Engineer.getId()}</li>
              <li class="list-group-item">Email: <a href = "mailto: ${Engineer.getEmail()}">${Engineer.getEmail()}<a></li>
              <li class="list-group-item">Github: <a href="https://github.com/${Engineer.getGithub()}" target="_blank">${Engineer.getGithub()}</a></li>
            </ul>
        </div>
        ` 
    }
	// createIntern function -> accepts an Intern object -< returns the HTML template string for an intern card
    function generateInternHTML(Intern) {
        return `
        <div class="card mb-4" style="width: 18rem;">
            <div class="card-header text-white bg-primary">
              Intern </br>
              ${Intern.getName()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${Intern.getId()}</li>
              <li class="list-group-item">Email: <a href = "mailto: ${Intern.getEmail()}">${Intern.getEmail()}<a></li>
              <li class="list-group-item">School: ${Intern.getSchool()}</li>
            </ul>
        </div>
        ` 
    }

	// map over the team object
			// on each member, call the getRole() method to find out what type of employee it is
            
			// for 'Manager' call generateManager, for 'Engineer' call generateEngineer, for 'Intern' call generateIntern
            
	// call the .join() array method on the result to turn it into a big string
	// team.map().join("")

	// return the result of this operation
    return team
        .map( member => {
            switch( member.getRole() ) {
                case 'Engineer':
                    return generateEngineerHTML(member);
                case 'Manager':
                    return generateManagerHTML(member);
                default:
                    return generateInternHTML(member);
            }
        })
        .join("");
    
}

// function to generate the basic structure of the page -> accept team parameter
function htmlStructure(team) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Team Profile</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <style>
        .jumbotron-custom {
        background-color: #ee5c5c;
        color: white;
        }
    </style>
</head>
<body>
    <div class="jumbotron jumbotron-fluid jumbotron-custom">
        <div class="container align-center">
          <h1 class="display-4 text-center">My Team</h1>
        </div>
    </div>

    <div class="container">
        <div class="row justify-content-around mx-3">
        ${ createTeam(team) }</div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}


// export this last function
module.exports = htmlStructure;