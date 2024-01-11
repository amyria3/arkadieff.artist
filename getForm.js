function sendEmail() {
  const nachricht = document.getElementById('nachricht').value;

  // Ersetze diese Informationen durch deine eigenen (nur für Bildungszwecke)
  const email = 'deine_gmail@gmail.com';
  const passwort = 'dein_gmail_passwort';

  Email.send({
    SecureToken: 'token', // Ersetze 'token' durch einen Token deines E-Mail-Dienstleisters
    To: 'm.arkadieff.open@gmail.com',
    From: email,
    Subject: 'Neue Nachricht von der Webseite',
    Body: nachricht
  }).then(
    message => {
      console.log('E-Mail erfolgreich gesendet:', message);
      alert('E-Mail erfolgreich gesendet!');
    },
    error => {
      console.error('Fehler beim Senden der E-Mail:', error);
      alert('Fehler beim Senden der E-Mail. Bitte versuche es erneut.');
    }
  );
}
