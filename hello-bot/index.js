module.exports = function(bp) {
  bp.middlewares.load();

  const payload = {
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
    bp.messenger.sendTemplate(event.user.id, payload, {typing:true});
  });
}
