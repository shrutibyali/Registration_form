
//JavaScript Code (script.js):

$(document).ready(function() {
    $('#registration-form').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var email = $('#password').val();
        var phone = $('#phone').val();
        var address = $('#address').val();
        var country = $('#country').val();
        var gender = $('#gender').val();
        var hobbies = [];
        $.each($("input[name='hobbies[]']:checked"), function() {
            hobbies.push($(this).val());
        });

        if (name && email && password && phone && address && country && gender && hobbies.length > 0) {
            $.ajax({
                type: 'POST',
                url: 'submit.php',
                data: {
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    address: address,
                    country: country,
                    gender: gender,
                    hobbies: hobbies
                },
                success: function(data) {
                    $('#success-message').html(data);
                }
            });
        } else {
            alert('Please fill all fields');
        }
    });
});

