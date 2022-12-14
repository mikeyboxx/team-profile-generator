// This function expects an array of team member objects, and generates an HTML document from the data stored in the array, and is returned/resolved by the Promise.
const renderHtml = employees => {
    return new Promise((resolve,reject)=> {
        let htmlStr = '';

        htmlStr+= 
            `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
                    <script src="https://kit.fontawesome.com/35f1ed5062.js" crossorigin="anonymous"></script>
                    <title>My Team</title>
                </head>
                <body>
                    <section class="hero has-background-danger">
                        <div class="hero-body ">
                            <h1 class="title has-text-white has-text-centered is-size-2">
                                My Team
                            </h1>
                        </div>
                    </section>
                    <section class="section">
                        <div class="is-flex is-flex-wrap-wrap is-justify-content-space-around m-0 p-0">`;

        // generate cards
        for(const employee of employees){
            const role = employee.getRole();  // get the team member type (i.e. manager, intern, engineer)

            htmlStr+=
                `<div class="card has-background-white-ter">
                    <header class="card-header is-flex is-flex-direction-column has-background-info pl-3">
                        <h2 class="card-header-title has-text-white is-size-3 pb-0 ">${employee.getName()}</h2>
                        <h2 class="card-header-title has-text-white is-size-5 pt-0">`;
            
            // use different icon based on team member type            
            switch(role){
                case 'Manager': htmlStr+=`<i class="fa-solid fa-mug-hot"></i>`;
                    break;
                case 'Engineer': htmlStr+=`<i class="fa-solid fa-glasses"></i>`;
                    break;
                case 'Intern': htmlStr+=`<i class="fa-solid fa-user-graduate"></i>`;
                    break;
            }    
            
            htmlStr+=`<span class="ml-1">${role}</span>
                        </h2>
                    </header>
                    <div class="card-content is-flex p-4">
                        <div class="card content is-flex is-flex-direction-column p-4">
                            <p>ID: <span>${employee.getId()}</span></p>
                            <hr>
                            <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>`;
            
                            // render different data based on team member type
            switch(role){
                case 'Manager': 
                    htmlStr+=`<p>Office number: <span>${employee.getOfficeNumber()}</span></p>`;
                    break;
                case 'Engineer': 
                    htmlStr+=`<p>GitHub: <a href="${employee.getGitHub()}" id="gitHubUrl">${employee.getGitHubUserName()}</a></p>`;
                    break;
                case 'Intern': 
                    htmlStr+=`<p>School: <span>${employee.getSchool()}</span></p>`;
                    break;
            }

            htmlStr+= `</div>
                    </div>
                </div>`;
        }
        
        htmlStr+=`</div>
            </section>
            </body>
        </html>`;

        resolve(htmlStr);  // s string of the generated HTML document
    })
};

module.exports = renderHtml;