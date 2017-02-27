module.exports = function(bp) {
    bp.middlewares.load();

    const naButton = {
  	 template_type: "button",
  	 text: "Tu veux participer à la prochaine na c'est ça ?",
  	 buttons: [
  		{
  			type: "web_url",
  			url: "http://www.nantarena.net",
  			title: "Go t'inscrire !"
  		}
  	 ]
    }

    bp.hear(/nantarena/i, (event, next) => {
        bp.messenger.sendTemplate(event.user.id, naButton, {typing:true});
    });

    bp.hear({'wit.entities.intent[0].value': 'prix'}, (event, next) => {
        console.log('>> Prix');
        bp.messenger.sendText(event.user.id, "Tu me parles d'argent.");
    })

    bp.hear({'wit.entities.intent[0].value': 'Hitler'}, (event, next) => {
        console.log('>> SVP pas la LICRA');
        bp.messenger.sendText(event.user.id, "Allons allons, est-on obligé de parler de ça ?");
    })

    bp.hear({'wit.entities.intent[0].value': 'salutation'}, (event, next) => {
        console.log('>> Bonjour');
        bp.messenger.sendText(event.user.id, "Yo yo yo !");
    })
}
