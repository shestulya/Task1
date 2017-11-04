$('.button').on('click', function () {
     var form = this.form;
     
     alert(form.Email.value + ': ' + form.Password.value);
 });
