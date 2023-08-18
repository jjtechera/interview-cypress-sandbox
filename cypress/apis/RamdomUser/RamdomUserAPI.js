export class RamdomUserAPI {

getAPIResponse(){
    cy.request('GET',"https://randomuser.me/api/").then((response) => {
                    expect(response.status).equal(200);
                    return response;
	            })
	      };
        

}