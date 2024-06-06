(function(){
    emailjs.init({
        publicKey: "NYHdpw8zfgKPT8rLT",
    });
})();

function odosli_spravu(){
        var templateParams = {
            name: document.getElementById('name').value,
            notes: document.getElementById('message').value,
        };
        
        emailjs.send('service_zwy4f8o', 'template_r0j6l3d', templateParams).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Your message was sent successfully");
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );
    }


    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        document.querySelector('.parallax').style.transform = `translateY(${scrolled * 0.5}px)`;
    });


    const button = document.getElementById('sendButton');

    button.addEventListener('mouseover', function() {
        button.classList.remove('textColor');
    });

    button.addEventListener('mouseleave', function() {
        button.classList.add('textColor');
    });
