module.exports = function(bp) {
  bp.middlewares.load();

  const payload = {
  	template_type: "button",
  	text: "Test de gros pd, pd !",
  	buttons: [
  		{
  			type: "web_url",
  			url: "http://www.nantarena.net",
  			title: "Prend le risque !"
  		}
  	]
  }

  bp.hear(/hello/i, (event, next) => {
    bp.messenger.sendTemplate(event.user.id, payload, {typing:true});
  });
}
