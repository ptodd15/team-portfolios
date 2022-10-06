const managerCard = (data) => {
    
    return `<section>
    <div class="container row">
        <div class="manager">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <div class="card-header bg-primary text-white">
                    <h4 class="card-title"><span class="material-icons">local_cafe</span>${data.getName()}</h4>
                    <h5 class="card-subtitle mb-2">Manager</h5>
                    </div>
                    <p></p>
                    <h6 class="card-text">ID: ${data.id}</h6>
                    <h6 class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></h6>
                    <h6 class="card-text">Office Number: ${data.officeNumber}</h6>
                </div>
            </div>
        </div>
    </div>
    </section>`
    
    };
    
    const engineerCard = (data) => {
    
        return `<section>
            <div class="container row">
                <div class="engineer">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-header bg-primary text-white">
                            <h4 class="card-title"><span class="material-icons">engineering</span>${data.name}</h4>
                            <h5 class="card-subtitle mb-2">Engineer</h5>
                            </div>
                            <p></p>
                            <h6 class="card-text">ID: ${data.id}</h6>
                            <h6 class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></h6>
                            <h6 class="card-text">GitHub: <a href="https://github.com/${data.github}" target="_blank" rel="noopener noreferrer">${data.github}</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
        }
    
        const internCard = (data) => {
        
            return `
        <section>
            <div class="container row">
                <div class="intern">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-header bg-primary text-white">
                            <h4 class="card-title"><span class="material-icons">school</span>${data.name}</h4>
                            <h5 class="card-subtitle mb-2">Intern</h5>
                            </div>
                            <p></p>
                            <h6 class="card-text">ID: ${data.id}</h6>
                            <h6 class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></h6>
                            <h6 class="card-text">School: ${data.school}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
    
    
    const cards = data => {
        var cardInput = '';
        for (i=0; i < data.length; i ++) {
            console.log(data[i])
            if (data[i].getRole() === 'Manager') {
                cardInput += managerCard(data[i]);
            }
            else if (data[i].getRole() === 'Intern'){
                cardInput += internCard(data[i]);
            }
            else if (data[i].getRole() === 'Engineer') {
                cardInput += engineerCard(data[i]);
            }
        }
        console.log(cardInput);
        return cardInput;
       
    }
    
    //export function to generate entire page
    const pageTemplate = (data) => {
        console.log(data);
        
        return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Portfolio</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    <main>
        <div class="flex-wrap">
    ${cards(data)}
    </div>
    </main> 
    </body>
    </html>
        `;
    };
    
    module.exports = pageTemplate;