

$('#terminal').terminal(function (command) {
    if (command === 'help') {
        this.echo('Available commands:');
        this.echo('  help');
        this.echo('  clear');
        this.echo('  about');
        this.echo('  contact');
        this.echo('  exit');
    } else if (command === 'clear') {
        this.clear();
    } else if (command === 'about') {
        this.echo('This is a terminal based web application.');
    } else if (command === 'contact') {
        this.echo('Contact me at:');
        this.echo('  email: something@gmail.com ');
        this.echo('  phone: +1-123-456-7890');
    } else if (command === 'exit') {
        this.echo('Bye!');
        this.disable();
    }
}, {
    greetings: greetings.innerHTML,
    prompt: "paradis.dev > ",
    completion: true,
    checkArity: false,
});