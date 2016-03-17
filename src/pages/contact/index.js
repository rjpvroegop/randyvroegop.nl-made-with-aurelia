import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Contact {
  naam;
  email;
  message;

  constructor(http){
    this.http = http;
  }

  submit(){
    this.jsonobj = {
      "naam": this.naam,
      "email": this.email,
      "message": this.message
    };

    if(this.jsonobj.naam && this.jsonobj.email && this.jsonobj.message)
      this.http.post('dist/components/contactengine.php', JSON.stringify(this.jsonobj))
        .then(response => {
          if(JSON.parse(response.response).verzonden)
            alert('Bedankt voor uw bericht.');
          else
            alert('Er ging helaas iets mis met het verzenden van uw bericht.');
          console.log(response.response);
        });
    else {
      alert ( "Vul a.u.b. alle velden in." );
    }
  }
}
